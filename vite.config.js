// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5176, // Change the port here
//   },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/react/", // 👈 Laravel serves from public/react/
  server: {
    port: 5176, // Change this if needed
  },
  build: {
    outDir: "public/react", // 👈 Output build files to Laravel's public/react/z
    emptyOutDir: true, // Clean old files before building
  },
});
