# 📝 Blog Website

A clean and responsive blog website built using **React** and **Vite**. Browse blog posts with a smooth UI and dynamic routing.

🌐 **Live Demo**: [https://sameerrind765.github.io/Blog/](https://sameerrind765.github.io/Blog/)

---

## 📸 Preview

![sameerrind765 github io_Blog_ (1)](https://github.com/user-attachments/assets/802efb39-9d87-4269-ae13-16078f85d53c)

---

## 🚀 Features

- Post list with titles, dates, and excerpts  
- Single post view with full content  
- React Router for client-side navigation  
- Vite for fast dev experience and optimized builds  
- Fully responsive layout  
- Clean UI with reusable components  

---

## ⚙️ Tech Stack

- **React** – Frontend library  
- **Vite** – Development bundler  
- **React Router** – Page navigation  
- **CSS** – Styling  

---

## 📁 Folder Structure

```
Blog/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Homepage and Post Detail pages
│   ├── App.jsx          # Main app component with routing
│   └── main.jsx         # React entry point
├── index.html           # Main HTML template
├── vite.config.js       # Vite configuration
├── package-lock.json
└── package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

```bash
git clone https://github.com/sameerrind765/Blog.git
cd Blog
npm install
```

### Start Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📦 Deployment

This project is deployed via **GitHub Pages**.

To deploy manually:

```bash
npm run build
```

Then copy the contents of the `dist/` folder to the `gh-pages` branch, and set GitHub Pages in the repo settings to use that branch as the source.

To automate deployment using the `gh-pages` package:

1. Install the package:

```bash
npm install gh-pages --save-dev
```

2. Add the following scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:

```bash
npm run deploy
```

---

## 👤 Author

**Sameer Rind**  
📧 [sameerrind765@gmail.com](mailto:sameerrind765@gmail.com)  
🔗 [GitHub](https://github.com/sameerrind765)

---

## 📄 License

This project is licensed under the **MIT License**.
