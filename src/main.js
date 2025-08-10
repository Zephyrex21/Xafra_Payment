import './main.css'; // this tells Vite to process & bundle Tailwind CSS
console.log('App started!');

export default defineConfig({
  base: './',
  plugins: [react()],
})