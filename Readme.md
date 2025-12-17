
# Task Manager (MERN Stack)

A simple **Task Manager web application** built using the **MERN stack** (MongoDB, Express, React, Node.js). The app allows users to add, view, and delete tasks with a clean and responsive UI.

This project was built as part of a technical assignment and focuses on **clean architecture, RESTful APIs, and a smooth frontend–backend integration**.

---

## 🚀 Live Links

- **Frontend:** 
- **Backend API:** 

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## ✨ Features

- Add a new task
- View all tasks (latest first)
- Delete a task
- Responsive UI (mobile & desktop)
- Long task text handling with expand/collapse
- Input validation
- Clean REST API structure

---

## 📁 Project Structure

### Backend
```
backend/
├── controllers/
│   └── taskController.js
├── models/
│   └── Task.js
├── routes/
│   └── taskRoutes.js
├── config/
│   └── db.js
├── .env
├── server.js
└── package.json
```

### Frontend
```
frontend/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

---

## 🔗 API Endpoints

### Create a Task
```
POST /tasks/
```
**Body:**
```json
{
  "title": "Buy groceries"
}
```

### Get All Tasks
```
GET /tasks/
```

### Delete a Task
```
DELETE /tasks/:id
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Atlas account

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend:
```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

---

## 🌐 Environment Variables

- Backend uses `.env` for sensitive data
- MongoDB connection string is stored securely
- API URLs are configurable for deployment

---

## 📌 Deployment Notes

- Backend deployed on **Render**
- MongoDB hosted on **MongoDB Atlas**
- Frontend deployed on **Vercel**
- CORS enabled for frontend–backend communication

---

## 🎯 Bonus Improvements Implemented

- Input validation
- Error handling
- Responsive UI
- Clean code structure
- Expandable task text for long content

---

## 👤 Author

**Prasoon Rawat**  

---

## 📄 License

This project is for educational and evaluation purposes.