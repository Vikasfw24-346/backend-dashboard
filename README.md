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
6. MONGO_URI=mongodb+srv://vikastiwari26071997:2310662@cluster0.t1tryug.mongodb.net/Visualization_Dashboard

2. gitignore file ke liye
# logs/ .gitinore
logs 
*.log
npm-debug.log* 
yarn-debug.log* 
yarn-error.log* 
pnpm-debug.log* 
learn-debug.log* 

node_modules 
dist 
dist-ssr 
#.local 

#Editor directories and files 
.vscode/ 
.idea/ 
*.suo 
*.ntvs* 
*.njsproj 
*.sln 
*.sw? 
.env


---

###  Commit & push:

```bash
git add README.md
git commit -m "Added backend README"
git push origin main

