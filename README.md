# Backend Dashboard – Visualization API

This repository contains the **backend service** for the Visualization Dashboard project.  
It provides REST APIs to fetch and manage data used by the frontend dashboard.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- CORS
- body-parser
- nodemon

---

## 📂 Project Structure

backend/
│
├── controllers/ # Business logic
├── models/ # MongoDB schemas
├── routes/ # API routes
├── config/ # Database configuration
├── .env # Environment variables
├── .gitignore
├── index.js # Server entry point
├── package.json
└── README.md


---

## ⚙️ Environment Variables

Create a `.env` file in the root directory and add:

1. .env
2. MONGO_URI = your_mongodb_atlas_uri
3. PORT = 4000
4. VITE_API_URL=http://localhost:4000

## For run the backend server command is : npm run server

## Deployment
## Frontend (Vercel):
## https://fronted-dashboard.vercel.app/
The frontend is successfully deployed on Vercel and is fully functional. It is properly connected to
the backend APIs and demonstrates all required features of the assignment.

## Frontend (Render):
## https://fronted-dashboard.onrender.com
An additional deployment of the frontend is available on Render, ensuring availability across
multiple hosting platforms.

###  Commit & push:
git add README.md
git commit -m "Added backend README"
git push origin main

