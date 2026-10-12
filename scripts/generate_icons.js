const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function createIco(pngBuffers) {
  // pngBuffers: array of { width, height, buffer }
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // ICO type = 1
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size of image data
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([
    header,
    ...dirEntries,
    ...pngBuffers.map(item => item.buffer)
  ]);
}

async function buildIcons() {
  const emblemSource = 'public/clean_emblem.png';
  const meta = await sharp(emblemSource).metadata();

  // Create a square canvas where the emblem is centered with ~6% padding
  const maxDim = Math.max(meta.width, meta.height);
  const canvasSize = Math.round(maxDim * 1.12); // subtle margin so spikes don't clip
  const leftPad = Math.round((canvasSize - meta.width) / 2);
  const topPad = Math.round((canvasSize - meta.height) / 2);

  const squareBuffer = await sharp({
    create: {
      width: canvasSize,
      height: canvasSize,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{
    input: emblemSource,
    left: leftPad,
    top: topPad
  }])
  .png()
  .toBuffer();

  // Save square master 512x512
  const icon512 = await sharp(squareBuffer).resize(512, 512).png().toBuffer();
  const icon192 = await sharp(squareBuffer).resize(192, 192).png().toBuffer();
  const icon180 = await sharp(squareBuffer).resize(180, 180).png().toBuffer();
  const icon48 = await sharp(squareBuffer).resize(48, 48).png().toBuffer();
  const icon32 = await sharp(squareBuffer).resize(32, 32).png().toBuffer();
  const icon16 = await sharp(squareBuffer).resize(16, 16).png().toBuffer();

  // Build ICO containing 16, 32, 48
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: icon16 },
    { width: 32, height: 32, buffer: icon32 },
    { width: 48, height: 48, buffer: icon48 }
  ]);

  // Write files to both src/app and public
  fs.writeFileSync('src/app/icon.png', icon512);
  fs.writeFileSync('src/app/apple-icon.png', icon180);
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);

  fs.writeFileSync('public/icon.png', icon512);
  fs.writeFileSync('public/icon-192.png', icon192);
  fs.writeFileSync('public/icon-512.png', icon512);
  fs.writeFileSync('public/apple-icon.png', icon180);
  fs.writeFileSync('public/apple-touch-icon.png', icon180);
  fs.writeFileSync('public/favicon.ico', icoBuffer);
  fs.writeFileSync('public/logo_emblem.png', icon512);

  console.log('Successfully generated all icon assets!');
}

buildIcons().catch(err => {
  console.error(err);
  process.exit(1);
});
