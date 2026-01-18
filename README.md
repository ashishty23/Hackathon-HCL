# Food Ordering API

> A comprehensive RESTful API for a food ordering system built with Express.js, MongoDB, and Node.js
>Live backend link :- https://hackathon-hcl-1.onrender.com/
**Developer:** Darsh Kumar

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Endpoints](#api-endpoints)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Postman Collection](#postman-collection)

---

## 🎯 Overview

This is a full-featured food ordering backend API that handles user authentication, product management, cart operations, order processing, and feedback collection. The system supports role-based access control with separate user and admin functionalities.

---

## ✨ Features

- **OTP-based Authentication** - Secure registration with email OTP verification
- **JWT Authentication** - Token-based user sessions
- **Role-Based Access** - User and Admin roles with different permissions
- **Product Management** - CRUD operations for menu items (Admin only)
- **Shopping Cart** - Add, remove, update quantities, and clear cart
- **Order Management** - Place orders, track order history, admin order management
- **Feedback System** - Users can submit and view feedback
- **Image Upload** - Cloudinary integration for product images
- **CORS Enabled** - Cross-origin resource sharing configured

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
