# Food Ordering Application

> A comprehensive full-stack food ordering system built with React, Express.js, MongoDB, and Node.js

**Developer:** Darsh Kumar


 
 Frontend link :-http://hackathon-hcl-tau.vercel.app/

 postman live link:-https://grouppayy.postman.co/workspace/group_payy-Workspace~3b75ae3a-bf15-4e50-8dd4-f516b590d76a/collection/32672602-0213caee-7245-4a70-a5c5-1d3feecccc6b?action=share&creator=32672602&active-environment=32672602-02c212df-23cc-4787-8af7-8614646d3e0b&live=myggq0ztty

  Backend link:-https://hackathon-hcl-1.onrender.com/
---

## 📋 Table of Contents

- [Overview](#overview)
- [Application Flow](#application-flow)
- [Architecture](#architecture)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Postman Collection](#postman-collection)

---

## 🎯 Overview

This is a full-featured food ordering application with both frontend and backend components. It handles user authentication, product management, shopping cart operations, order processing, and feedback collection. The system supports role-based access control with separate user and admin functionalities.

---

## 🔄 Application Flow

### **User Journey Flow**

```
┌─────────────────────────────────────────────────────────────────┐
│                    USER APPLICATION FLOW                         │
└─────────────────────────────────────────────────────────────────┘

1. AUTHENTICATION FLOW
   ┌──────────────┐
   │  User Visits │
   │  Homepage    │
   └──────┬───────┘
          │
          ├─→ [Already Logged In] ─→ Redirect to Dashboard
          │
          └─→ [New User / Logout] ─→ Sign Up / Login Page
                                      │
                                      ├─→ SIGN UP PATH
                                      │  ├─ Enter Email/Password
                                      │  ├─ Submit Form
                                      │  ├─ Backend: Create User
                                      │  ├─ Send OTP to Email
                                      │  └─ Redirect to OTP Verification
                                      │
                                      └─→ LOGIN PATH
                                         ├─ Enter Email/Password
                                         ├─ Backend: Verify Credentials
                                         ├─ JWT Token Generated
                                         ├─ Token Stored in localStorage
                                         └─ Redirect to Menu/Dashboard

2. MAIN APPLICATION FLOW
   ┌──────────────┐
   │  Dashboard/  │
   │  Home Page   │
   └──────┬───────┘
          │
          ├─→ [Menu] → Browse Products → Add to Cart
          │
          ├─→ [Cart] → View Items → Place Order
          │                      └─→ Order Confirmation Email
          │
          ├─→ [Your Orders] → View Order History → Track Status
          │
          ├─→ [Admin] (Admin Users Only)
          │    ├─ Dashboard Stats
          │    ├─ Add/Edit/Delete Products
          │    ├─ View All Orders
          │    └─ Manage Order Status
          │
          ├─→ [My Profile] → View/Edit User Info
          │
          └─→ [Logout] → Clear Token → Redirect to Login

3. PRODUCT MANAGEMENT (ADMIN ONLY)
   ┌───────────────┐
   │ Admin Panel   │
   └───────┬───────┘
           │
           ├─→ Add Product
           │   ├─ Fill Product Details
           │   ├─ Upload Image to Cloudinary
           │   ├─ Save to MongoDB
           │   └─ Display on Menu
           │
           ├─→ Edit Product
           │   └─ Update Product Info
           │
           └─→ Delete Product
               └─ Remove from Database

4. ORDER FLOW
   ┌──────────────┐
   │ Browse Menu  │
   └──────┬───────┘
          │
          ├─→ Add Item to Cart
          │   └─ Cart Updated in UI
          │
          ├─→ Modify Quantities
          │   └─ Cart Updated
          │
          ├─→ Remove Items
          │   └─ Cart Updated
          │
          └─→ Proceed to Checkout
             ├─ Backend: Create Order
             ├─ Save Order to MongoDB
             ├─ Send Confirmation Email
             └─ Redirect to Order Confirmation

```

### **Backend Architecture Flow**

```
┌─────────────────────────────────────────────────────────────────┐
│                   BACKEND REQUEST FLOW                           │
└─────────────────────────────────────────────────────────────────┘

CLIENT REQUEST
    │
    ├─→ Add Headers
    │   ├─ x-api-key (from .env)
    │   └─ Authorization: Bearer {JWT Token}
    │
    ▼
┌─────────────────────────┐
│ Express Server (Port 5000)
└────────┬────────────────┘
         │
         ├─→ CORS Middleware (Allow cross-origin)
         │
         ├─→ API Key Check Middleware
         │   └─ Validate x-api-key Header
         │
         ├─→ Route Handlers
         │
         ▼
    ┌─────────────────────────────────────┐
    │  AUTHENTICATION ROUTES              │
    ├─────────────────────────────────────┤
    │ POST /api/v1/otp/send              │
    │ POST /api/v1/otp/verify            │
    │ POST /api/v1/auth/signup           │
    │ POST /api/v1/auth/login            │
    │ POST /api/v1/auth/logout           │
    └─────────────────────────────────────┘
              │
              ├─→ Validate Input
              ├─→ Check Existing User
              ├─→ Hash Password (bcrypt)
              ├─→ Generate JWT Token
              └─→ Send Response
    
    ┌─────────────────────────────────────┐
    │  PRODUCT ROUTES                     │
    ├─────────────────────────────────────┤
    │ GET  /api/v1/products              │
    │ POST /api/v1/products              │
    │ PUT  /api/v1/products/:id          │
    │ DELETE /api/v1/products/:id        │
    └─────────────────────────────────────┘
              │
              ├─→ Middleware: Auth Check
              ├─→ Middleware: Admin Check
              ├─→ Upload Image to Cloudinary
              ├─→ CRUD Operations on MongoDB
              └─→ Return Response

    ┌─────────────────────────────────────┐
    │  CART ROUTES                        │
    ├─────────────────────────────────────┤
    │ POST /api/v1/cart/add               │
    │ GET  /api/v1/cart                   │
    │ DELETE /api/v1/cart/remove          │
    │ PUT  /api/v1/cart/update            │
    │ DELETE /api/v1/cart/clear           │
    └─────────────────────────────────────┘
              │
              ├─→ Middleware: Auth Check
              ├─→ Update Cart in MongoDB
              └─→ Return Updated Cart

    ┌─────────────────────────────────────┐
    │  ORDER ROUTES                       │
    ├─────────────────────────────────────┤
    │ POST /api/v1/orders                 │
    │ GET  /api/v1/orders                 │
    │ GET  /api/v1/orders/:id             │
    │ PUT  /api/v1/orders/:id             │
    │ GET  /api/v1/orders/admin/all       │
    └─────────────────────────────────────┘
              │
              ├─→ Middleware: Auth Check
              ├─→ Create Order Record
              ├─→ Clear User Cart
              ├─→ Send Confirmation Email
              ├─→ Generate Email Templates
              └─→ Return Order Details

    ┌─────────────────────────────────────┐
    │  FEEDBACK ROUTES                    │
    ├─────────────────────────────────────┤
    │ POST /api/v1/feedback               │
    │ GET  /api/v1/feedback               │
    │ GET  /api/v1/feedback/:id           │
    └─────────────────────────────────────┘
              │
              ├─→ Middleware: Auth Check
              ├─→ Save Feedback to MongoDB
              └─→ Return Response
              
              │
              ▼
         ┌─────────────────────────┐
         │  MongoDB Database        │
         ├─────────────────────────┤
         │ Collections:             │
         │ • users                  │
         │ • products               │
         │ • carts                  │
         │ • orders                 │
         │ • feedback               │
         │ • otps                   │
         └─────────────────────────┘
              │
              │ (For Images)
              ▼
         ┌─────────────────────────┐
         │  Cloudinary             │
         │  (Cloud Storage)         │
         └─────────────────────────┘
              │
              │ (Email Notifications)
              ▼
         ┌─────────────────────────┐
         │  Mail Service           │
         │  (Nodemailer)           │
         └─────────────────────────┘

```

### **Frontend Component Flow**

```
┌──────────────────────────────────────┐
│  REACT APPLICATION STRUCTURE          │
└──────────────────────────────────────┘

index.html
    │
    ▼
main.jsx (React Entry Point)
    │
    ▼
App.jsx (Main Component with Routes)
    │
    ├─→ PUBLIC ROUTES (Not Logged In)
    │   ├─ Login.jsx
    │   ├─ Signup.jsx
    │   ├─ VerifyOtp.jsx
    │   └─ Home.jsx
    │
    ├─→ PRIVATE ROUTES (Logged In)
    │   ├─ Menu.jsx (Browse Products)
    │   ├─ Cart.jsx (View Cart)
    │   ├─ YourOrders.jsx (Order History)
    │   ├─ MyProfile.jsx (User Profile)
    │   ├─ AdminDashboard.jsx (Admin Panel)
    │   └─ AdminAllOrders.jsx (Admin Orders)
    │
    └─→ SHARED COMPONENTS
        ├─ Navbar.jsx
        ├─ Footer.jsx
        └─ LogoutConfirmationModal.jsx

AUTHENTICATION FLOW (Frontend)
    │
    ├─→ SignUp
    │   ├─ Collect: Email, Password
    │   ├─ API Call: POST /auth/signup
    │   ├─ Store Token: localStorage
    │   └─ Redirect: Verify OTP Page
    │
    ├─→ Verify OTP
    │   ├─ Collect: OTP
    │   ├─ API Call: POST /otp/verify
    │   └─ Redirect: Menu
    │
    └─→ Login
        ├─ Collect: Email, Password
        ├─ API Call: POST /auth/login
        ├─ Store Token: localStorage
        └─ Redirect: Dashboard

API INTERCEPTOR
    │
    ├─→ Every Request Includes:
    │   ├─ x-api-key (Header)
    │   ├─ Authorization: Bearer {token} (Header)
    │   └─ Request Body
    │
    └─→ Response Handling:
        ├─ Success: Update State
        ├─ Error: Show Toast Notification
        └─ 401: Redirect to Login

```

---

## 🏗 Architecture

### **Frontend Architecture**
- **Framework:** React 19.2.0
- **Routing:** React Router v7
- **HTTP Client:** Axios with interceptors
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Notifications:** React Toastify

### **Backend Architecture**
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JWT + Cookies
- **File Upload:** Cloudinary
- **Email:** Nodemailer
- **Middleware:** CORS, Cookie Parser, File Upload

### **Database Schema**

```javascript
User {
  email: String (unique),
  password: String (hashed),
  role: String (user/admin),
  createdAt: Date
}

Product {
  name: String,
  description: String,
  price: Number,
  image: String (Cloudinary URL),
  category: String,
  createdAt: Date
}

Cart {
  userId: ObjectId,
  items: [{
    productId: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalPrice: Number
}

Order {
  userId: ObjectId,
  items: Array,
  totalPrice: Number,
  status: String,
  createdAt: Date,
  updatedAt: Date
}

Feedback {
  userId: ObjectId,
  message: String,
  rating: Number,
  createdAt: Date
}

OTP {
  email: String,
  otp: String,
  expiresAt: Date
}
```

---

## ✨ Features

### **User Features**
- ✅ OTP-based Email Verification - Secure registration with email OTP verification
- ✅ JWT Authentication - Token-based user sessions with localStorage persistence
- ✅ Browse Menu - View all available food items with details and prices
- ✅ Shopping Cart - Add, remove, update quantities, and clear cart items
- ✅ Place Orders - Checkout and place food orders with email confirmation
- ✅ Order History - Track previous orders and their current status
- ✅ Feedback System - Submit reviews and ratings for orders
- ✅ User Profile - View and manage personal information
- ✅ Protected Routes - Secure access to authenticated pages

### **Admin Features**
- ✅ Product Management - Create, read, update, delete menu items
- ✅ Image Upload - Upload product images directly to Cloudinary
- ✅ Admin Dashboard - View key statistics and analytics
- ✅ Order Management - View all orders and update their status
- ✅ Role-Based Access - Admin-only pages protected by role checking

---

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **File Upload:** Express-fileupload
- **Cloud Storage:** Cloudinary
- **Authentication:** JWT & Cookie-based sessions

---

## 🔌 API Endpoints

### Authentication (`/api/v1/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | Register new user (after OTP verification) | No |
| POST | `/login` | Login user and get JWT token | No |

### OTP (`/api/v1/otp`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/send` | Send OTP to user's email | No |

### User Profile (`/api/v1/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/profile` | Get current user profile | Yes |
| PUT | `/profile` | Update user profile | Yes |
| DELETE | `/profile` | Delete user account | Yes |

### Products (`/api/v1/products`)

| Method | Endpoint | Description | Auth Required | Role |
|--------|----------|-------------|---------------|------|
| GET | `/menu` | Get all available menu items | No | - |
| GET | `/all` | Get all products (including unavailable) | Yes | Admin |
| POST | `/add` | Add new product to menu | Yes | Admin |
| PATCH | `/:id` | Update product details | No | - |

### Cart (`/api/v1/cart`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/add` | Add item to cart | Yes |
| GET | `/` | Get user's cart | Yes |
| DELETE | `/remove/:productId` | Remove item from cart | Yes |
| DELETE | `/clear` | Clear entire cart | Yes |
| POST | `/reduce` | Reduce item quantity | Yes |

### Orders (`/api/v1/orders`)

| Method | Endpoint | Description | Auth Required | Role |
|--------|----------|-------------|---------------|------|
| POST | `/` | Place new order | Yes | User |
| GET | `/my-orders` | Get user's order history | Yes | User |
| GET | `/all` | Get all orders (admin view) | Yes | Admin |
| PUT | `/:orderId/received` | Mark order as received | Yes | Admin |
| PUT | `/:orderId/cancel` | Cancel an order | Yes | User |

### Feedback (`/api/v1/feedback`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/` | Submit feedback | No |
| GET | `/` | Get all feedbacks | No |
| DELETE | `/:id` | Delete feedback | No |

---

## 🚀 Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd <project-folder>
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory (see [Environment Variables](#environment-variables))

4. **Run the server**
```bash
npm start
```

The server will run on `http://localhost:5000` (or your specified PORT)

---

## 🔐 Environment Variables

Create a `.env` file with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

# Cloudinary Configuration
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
API_KEY_CHECK=hcl-hackathon-2025

# Email Configuration (for OTP)
BREVO_API_KEY=your key
SENDER_EMAIL=your_email
```

---

## 📬 Postman Collection

**[Add your Postman collection link here]**

Import the Postman collection to test all API endpoints with pre-configured requests and examples.

---

## 👨‍💻 Developer

**Darsh Kumar**

---

## 📝 Notes

- All protected routes require a valid JWT token in the Authorization header or cookies
- Admin routes require both authentication and admin role privileges
- File uploads are handled via Cloudinary for product images
- OTP must be verified before user registration
- The API uses cookie-parser for session management

---

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy Coding! 🚀**
