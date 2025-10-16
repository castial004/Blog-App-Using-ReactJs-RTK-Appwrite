# 📝 Blog App

A **full-stack blogging platform** built using **React.js**, **Appwrite**, **TailwindCSS**, and **Redux Toolkit**.  
This application allows users to **create**, **edit**, **view**, and **delete** blog posts with support for **image uploads** and a **rich text editor**.

---

## 🚀 Features

- ✍️ **Create and manage posts** with images and rich text content  
- 🧑‍💻 **User authentication** with Appwrite (Sign Up / Login / Logout)  
- 🖼️ **Image upload support** via Appwrite Storage  
- 🪄 Integrated **TinyMCE** for rich text editing  
- 🌐 Fully responsive design using **TailwindCSS**  
- 🗂️ **Redux Toolkit** for global state management  
- ⚡ Fast development setup with **Vite**

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, TailwindCSS, Redux Toolkit, TinyMCE  
- **Backend:** Appwrite (Authentication, Database, Storage)  
- **Tools:** VS Code, Git/GitHub

---

## 📦 Project Structure

    Blog_App/
    │
    ├── public/ # Static files
    ├── src/
    │ ├── App.jsx
    │ ├── main.jsx
    │ ├── pages/ # Pages like Home, Post, Login, Signup
    │ ├── components/ # Reusable UI components
    │ ├── Appwrite/ # Appwrite configuration and services
    │ ├── store/ # Redux store setup
    │ └── styles/ # TailwindCSS configuration
    │
    ├── .env # Environment variables (Appwrite credentials)
    ├── package.json
    ├── vite.config.js
    └── README.md