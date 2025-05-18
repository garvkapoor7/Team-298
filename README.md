# Team-298
ODOO X Paradox Hackathon 2025


---------------------------------------------------------------------------------------------------
--->This is the workflow of the project:- https://drive.google.com/file/d/1HQ6ccT8HZHg1ksMB4zXaM4GXSM77HNEx/view?usp=sharing

----------------------------------------------------------------------------------------------------


♻️ EcoFinds is a website dedicated to selling recycled goods.
FastAPI, SQLite, JWT Auth and Pure HTML/CSS/JS were used to build it.

🔧 Details About the Project
EcoFinds offers the basic functions needed for a sustainable second-hand marketplace, including user registering, logging in, posting items and browsing offered goods. The target is to help people buy and sell sustainably, using an accessible and secure system.

Here you will find a freshly created API and user interface that were developed using FastAPI, SQLAlchemy, JWT and just normal JavaScript.

💡 Features
✅ Backend (FastAPI + SQLite)
  ->User Authentication (JWT-based login)

  ->Password Hashing using bcrypt

  ->CRUD APIs for user accounts

  ->Modular, secure, and extendable backend

  ->/signin issues JWT token with expiration

  ->/me route returns current user details

  ->Built from scratch with SQLAlchemy ORM and local DB (user_authentication.db)

  

✅ Frontend (HTML + JS + CSS)
  ->Login / Signup UI

  ->Auth token stored in localStorage

  ->Dashboard that verifies JWT and fetches user info

  ->Clean UI with dynamic switching between login and signup

  
---------------------------------
# Placeholder pages for:
----------------------------------

  ->Product listing

  ->Cart

  ->Previous purchases

  ->Product detail view

  ->Search + filter UI

  
------------------------------
📁 Project Structure
------------------------------
.
├── userAuthentication.py        # FastAPI backend with all APIs
├── user_authentication.db       # SQLite local DB
├── login.html                   # Login / Signup form (UI)
├── dashboard.html               # Protected dashboard page
├── auth.js                      # JS to handle token login/signup
├── product.html                 # Product listing layout
├── purchase.html                # Purchase history UI
├── README.md                    # You are here
├── requirements.txt             # Backend dependencies


--------------
🚀 How to Run
--------------
  1. Install backend dependencies
        pip install -r requirements.txt
     
  2. Run the FastAPI server
        uvicorn userAuthentication:app --reload

  
