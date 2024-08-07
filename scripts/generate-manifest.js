const fs = require('fs');

const manifest = {
  name: process.env.VITE_APP_NAME || "Default App Name",
  short_name: process.env.VITE_APP_SHORT_NAME || "Default Short Name",
  start_url: process.env.VITE_APP_START_URL || ".",
  display: process.env.VITE_APP_DISPLAY || "standalone",
  background_color: process.env.VITE_APP_BACKGROUND_COLOR || "#FFFFFF",
  description: process.env.VITE_APP_DESCRIPTION || "Default App Description",
  icons: [
    {
      src: process.env.VITE_ICON_192 || "/icons-192.png",
      type: "image/png",
      sizes: "192x192"
    },
    {
      src: process.env.VITE_ICON_256 || "/icons-256.png",
      type: "image/png",
      sizes: "256x256"
    },
    {
      src: process.env.VITE_ICON_512 || "/icons-512.png",
      type: "image/png",
      sizes: "512x512"
    }
  ]
};

fs.writeFileSync('public/manifest.json', JSON.stringify(manifest, null, 2));
