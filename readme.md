# Emmanuel's Portfolio

A modern, responsive portfolio built with **React**, **TypeScript**, and **Tailwind CSS**.  
It highlights my projects, skills, and contact details.

---

## Features

- Mobile-first responsive layout  
- Dark/light mode toggle  
- Interactive contact form  
- Dynamic project and skills section  
- Smooth scrolling navigation  

---

## Tech Stack

<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Formspree-EF3F56?style=for-the-badge&logo=formspree&logoColor=white" />
</p>

---

## Project Structure

```
kemmysportfolio/
├── public/              
│   ├── Hoodie.jpg         # Profile image  
│   └── vite.svg           # Favicon  
├── src/  
│   ├── App.tsx            # Main app component  
│   ├── main.tsx           # Entry file  
│   ├── index.css          # Global styles  
│   └── vite-env.d.ts      # TypeScript declarations  
├── package.json           # Dependencies  
├── vite.config.ts         # Vite config  
└── tailwind.config.js     # Tailwind config  
```

---

## Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/kemmydigital/portfolio.git
   cd portfolio
   ```

2. Install dependencies  
   ```bash
   npm install
   ```

3. Start development server  
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser

---

## Deployment (Netlify)

1. Build for production  
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to Netlify or any static hosting platform

---

## Customization

- Update profile info in `src/App.tsx`  
- Replace images in the `public/` folder  
- Edit theme colors in `tailwind.config.js`  
- Modify project data in the Projects section  

---

## Contact Form Setup

1. Create a free Formspree account  
2. Replace `YOUR_FORM_ID` in `src/App.tsx`  
3. Test your form submission  

---

## License

MIT License
```

### Step 4: Save and Commit  
- Press `Ctrl + S` to save  
- Open the terminal and run:
  ```bash
  git add README.md
  git commit -m "Add complete README"
  git push
  ```