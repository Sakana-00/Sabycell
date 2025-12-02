import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
    plugins: [react()],
    // Set base path conditionally.
    // On 'build', set it to the repository name for GitHub Pages.
    // On 'serve' (npm run dev), keep it as root '/'.
    base: command === 'build' ? '/sabycell/' : '/',
}));