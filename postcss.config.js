export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  "scripts": {
  "dev": "vite",
  "build": "vite build",
  "tailwind:build": "tailwindcss -i ./src/index.css -o ./dist/output.css --watch"
}

}
