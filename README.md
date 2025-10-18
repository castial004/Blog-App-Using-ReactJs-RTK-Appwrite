# 📝 Blog App

A **full-stack blogging platform** built using **React.js**, **Appwrite**, **TailwindCSS**, and **Redux Toolkit**.  
This application allows users to **create**, **edit**, **view**, and **delete** blog posts with support for **image uploads** and a **rich text editor**.

---
# UI

Login
<img width="1887" height="1010" alt="image" src="https://github.com/user-attachments/assets/7f1d0269-8b54-423f-b60b-704dea13b2be" />



Sign Up
<img width="1879" height="918" alt="image" src="https://github.com/user-attachments/assets/1f840831-f684-4318-8498-1d4556a91331" />



Home Page
<img width="1901" height="1007" alt="image" src="https://github.com/user-attachments/assets/f0b1aae4-aeff-4577-8fc3-736b958f42e3" />



Your Post
<img width="1881" height="1014" alt="image" src="https://github.com/user-attachments/assets/fe645d01-dd99-4709-834b-e84ce0a210a1" />



Edit/Create New Posts
<img width="1912" height="1013" alt="image" src="https://github.com/user-attachments/assets/766566b5-b007-4d34-be9e-08e7c505373a" />



Read Other's Post

<img width="1901" height="620" alt="image" src="https://github.com/user-attachments/assets/ed3c5e6a-d934-49e4-80a4-d8c245908d76" />



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
