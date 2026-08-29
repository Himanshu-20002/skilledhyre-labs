export default function manifest() {
  return {
    name: "SkilledHyre Labs | Enterprise AI & Software Engineering",
    short_name: "SkilledHyre Labs",
    description:
      "Full-lifecycle AI and software engineering laboratory delivering scalable cloud platforms, intelligent automated systems, and enterprise tech solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#07040d",
    theme_color: "#07040d",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo_clean.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
