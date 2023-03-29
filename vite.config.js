/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';
import linaria from '@linaria/vite';
import mix from 'vite-plugin-mix';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint(),
    stylelint({
      include: ['**/*.{js,jsx,css}'],
    }),
    linaria({
      include: ['**/*.{js,jsx}'],
      babelOptions: {
        presets: ['@babel/preset-react'],
      },
    }),
    mix.default({
      handler: './api-server.js',
    }),
  ],
});
