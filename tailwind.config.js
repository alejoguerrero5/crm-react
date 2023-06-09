/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        cyan:{
          850: '#015366'
        },
        lime:{
          450: '#afcb1f'
        }
      }
    },
  },
  plugins: [],
}

