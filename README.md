# 🎨 FOSSEE Workshop Portal: UI/UX Modernization

## 📌 Overview
Welcome to the modernized React frontend for the FOSSEE Workshop Portal. This repository entirely replaces the legacy Bootstrap 4 Django templates with a blazing fast, strictly accessible, and mobile-first single-page application built on React, Tailwind CSS v4, and Vite.

---

## Key Features

### 🏠 Modern UI/UX
* **Hero Section**: High-impact landing with clear CTAs to guide users.
* **Authentication**: Split-screen login/signup with a clean, centered layout.
* **Modern Styling**: Uses Tailwind CSS v4 for a premium Look & Feel.
* **Mobile First**: Built using CSS Grid and Flexbox to ensure it works perfectly on smartphones.

### 📊 Dashboard & Stats
* **Data Visualization**: Replaced old tables with a clean, card-based stats dashboard.
* **Readability**: Improved typography and spacing for better scannability.

### 🔍 Search & SEO
* **Dynamic Meta Tags**: Uses `react-helmet-async` for page-specific titles and descriptions.
* **Social Sharing**: Standardized Open Graph and Twitter Card tags for better link previews.
* **Clean Code**: Semantic HTML5 structure for better accessibility and ranking.

---

## Technical Stack
* **Frontend**: React 18, Vite, Tailwind CSS v4.
* **Backend**: Django 3.
* **Animations**: Framer Motion for smooth transitions.

---

## 📸 Visuals

### Desktop Views
![Home](./screenshot/home.jpeg)
![Stats](./screenshot/stats.jpeg)
![Login](./screenshot/login.jpeg)

### Mobile Views
![Mobile 1](./screenshot/mobile1.jpeg)
![Mobile 2](./screenshot/mobile2.jpeg)

---

## 🛠 Setup Instructions

This project is divided into two distinct applications: a Django Backend API and a React Frontend.

### 1️⃣ Backend Setup (Django)
Navigate to the root directory of the project.

```bash
# Create and activate a virtual environment 
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Apply database migrations
python manage.py migrate

# Start the development server
python manage.py runserver
```

### 2️⃣ Frontend Setup (React + Vite)
Open a new terminal and navigate to the `frontend` folder.

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## 👤 Student Details

- **Name**: [Arshiya Attar]
- **Task**: Python / UI/UX Screening Task
- **Organization**: MIT Academy of Engineering,Pune
