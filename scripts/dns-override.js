const dns = require('node:dns');

// Pre-load DNS override ONLY for local development to fix Windows/ISP SRV lookup refusal
if (process.env.NODE_ENV !== 'production') {
  try {
    dns.setDefaultResultOrder('ipv4first');
    dns.setServers(['8.8.8.8', '1.1.1.1']);
  } catch (e) {
    // Ignore
  }
}
