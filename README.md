# 🛍️ E-commerce Product Showcase (Frontend)

A modern, responsive e-commerce frontend application built with **React**, **Tailwind CSS**, and **Context API**. This app fetches product data from [FakeStoreAPI](https://fakestoreapi.com/products) and allows users to browse, view product details, add to cart, and place orders.

---

## 🚀 Live Demo

👉 [Netlify](https://e-commerce-product-showcase.netlify.app/)

---

## 🧰 Technologies Used

- ⚛️ React.js (v19+)
- 💨 Tailwind CSS
- 🎨 DaisyUI
- 📦 Axios
- 📂 Context API (Cart State)
- 📡 FakeStore API
- 🧪 React Hook Form (Validation)

---

## 📁 Folder Structure

```bash
project-root/
├── dist/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ ├── context/
│ │ ├── CartContext.jsx
│ │ └── CartProvider.jsx
│ ├── hook/
│ │ └── useCart.js
│ ├── layouts/
│ │ └── MainLayout.jsx
│ ├── pages/
│ │ ├── HomePage/
│ │ │ ├── CheckOut.jsx
│ │ │ ├── Home.jsx
│ │ │ ├── Orders.jsx
│ │ │ └── ProductDetails.jsx
│ │ └── Shared/
│ │ ├── Footer.jsx
│ │ └── Navbar.jsx
│ ├── routes/
│ │ └── BasicRoute.jsx
│ ├── App.jsx
│ ├── App.css
│ ├── index.css
│ └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 📦 Features

- ✅ Display all products in a responsive grid
- ✅ View product details by navigating to `/product/:id`
- ✅ Add products to cart using global `Context API`
- ✅ Checkout form with validation (React Hook Form)
- ✅ Thank you confirmation screen after placing order
- ✅ Order summary listing

---

## 🖼️ Screens Supported

Responsive for:

- Extra Small (mobile)
- Small (base)
- Medium
- Large
- Extra Large
- 2XL/Monitor

---

## 🛠️ Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/Nadim-Nion/ecommerce-product-showcase-client.git
cd ecommerce-product-showcase-client
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run the App**

```bash
npm run dev
```

---

## 🌐 API Used

- Fake Store API
  Base URL: https://fakestoreapi.com/products <br>
  No auth required.

---

## 📌 Routes

| Route          | Description                    |
| -------------- | ------------------------------ |
| `/`            | Home - Product Grid            |
| `/product/:id` | Product Details Page           |
| `/checkout`    | Checkout Form                  |
| `/orders`      | View Placed Orders (in memory) |

---

## 🧠 State Management

This project uses React Context API for managing:

- Cart Items

- Orders

📂 CartProvider wraps the entire app and shares cart/order states using CartContext.

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Hi, I am **Nadim Mahmud Nion**. I have recently concluded my graduation from the Department of Computer Science and Engineering (CSE) at **Daffodil International University (DIU)**. I have been learning **MERN Stack Web Development** since 2022.

I am skilled in the following technologies:

- React
- Express.js
- TypeScript
- Mongoose
- Postman
- MongoDB Compass
- NoSQLBooster
- Node.js
- MongoDB Atlas
- JWT
- Stripe
- Vite
- React Router
- Firebase (Authentication & Hosting)
- Vercel
- JavaScript
- Advanced JavaScript
- Daisy UI
- Bootstrap
- Tailwind
- HTML5
- CSS3
- Media Query

I have built multiple projects using these skills. You are invited to visit my [GitHub profile](https://github.com/Nadim-Nion) to explore my work — and don't forget to ⭐ star the projects you like!

---

> **Developed by Nadim Mahmud Nion 💻**
