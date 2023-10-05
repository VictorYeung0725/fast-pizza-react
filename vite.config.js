import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import eslint from 'vite-plugin-eslint';
// import VitePluginGhPages from 'vite-plugin-gh-pages';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     eslint(),
//     VitePluginGhPages({
//       build: {
//         outDir: 'dist',
//       },
//     }),
//   ],
//   base: '/fast-pizza-react/', // Replace with your GitHub repository name
// });
