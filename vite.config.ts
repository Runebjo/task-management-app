import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
    build: {
        target: 'esnext'
    },
    plugins: [
        checker({ typescript: true }),
    ],
});