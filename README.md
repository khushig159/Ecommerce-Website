#  Vardhaman Computers - MERN Stack E-Commerce App

A full-stack e-commerce application built using the **MERN** stack with seamless **Stripe integration**, **JWT-based authentication**, a clean UI, and essential cart & product management features.

---

##  Tech Stack

###  Frontend
- React.js
- React Router
- Context API
- Stripe for payments

###  Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- dotenv

---

##  Features

-  JWT-based User Authentication (Sign up & Log in)
-  Add/Remove items in Cart
-  Stripe Integration for Checkout
-  Product Listing by Categories (e.g. Laptops, CCTV, Printers, Storage Devices)
-  Context API for Global Cart State
-  Persistent Session
-  Fully Responsive Layout

---

## Create .env in Ecommbackend/:
- PORT=5000
- MONGO_URI=your_mongodb_connection_string
- JWT_SECRET=your_jwt_secret_key
- STRIPE_SECRET_KEY=your_stripe_secret_key

 **Note**
This is an initial step towards a fully functional and robust e-commerce website. You can add your own touch and contribute your ideas and efforts.

## HAPPY LEARNING 


##  Folder Structure

```bash
 Vardhaman-Computers
├──  Ecommbackend
│ ├──  node_modules
│ ├──  src
│ │ ├──  controllers
│ │ │ ├── orders.controller.js
│ │ │ ├── products.controller.js
│ │ │ └── user.controller.js
│ │ ├──  db
│ │ │ └── dbconnect.js
│ │ ├──  middlewares
│ │ │ └── auth.middleware.js
│ │ ├──  models
│ │ │ ├── orderaddmodel.js
│ │ │ ├── ordermodel.js
│ │ │ ├── productmodel.js
│ │ │ └── usermodel.js
│ │ ├──  routes
│ │ │ ├── order.routes.js
│ │ │ ├── products.routes.js
│ │ │ └── user.routes.js
│ │ ├──  utils
│ │ │ ├── app.js
│ │ │ ├── constants.js
│ │ │ └── index.js
│ ├── .env
│ ├── .gitignore
│ ├── package-lock.json
│ ├── package.json
│ └── Readme.md (you’re here!)
│
├──  vardhaman-computers
│ ├──  dist
│ ├──  node_modules
│ ├──  public
│ ├──  src
│ │ ├──  assets
│ │ ├──  components
│ │ │ ├── CartItem.jsx
│ │ │ ├── categoryCart.jsx
│ │ │ ├── checkout-items.jsx
│ │ │ ├── FeatureCard.jsx
│ │ │ ├── ImageSlideShow.jsx
│ │ │ ├── Input.jsx
│ │ │ ├── logout.jsx
│ │ │ ├── MainNavigation.jsx
│ │ │ ├── pageContent.jsx
│ │ │ ├── ProductItem.jsx
│ │ │ └── top-seller.jsx
│ │ ├──  pages
│ │ │ ├── AdminDashBoard.jsx (not used)
│ │ │ ├── Cart.jsx
│ │ │ ├── cctv.jsx
│ │ │ ├── Checkout.jsx
│ │ │ ├── HomePage.jsx
│ │ │ ├── Laptop.jsx
│ │ │ ├── printer.jsx
│ │ │ ├── Product.jsx
│ │ │ ├── productDetails.jsx
│ │ │ ├── RootLayout.jsx
│ │ │ ├── signin.jsx
│ │ │ ├── signup.jsx
│ │ │ └── StorageDevices.jsx
│ │ ├──  store
│ │ │ └── CartContext.jsx
│ │ ├──  UI 
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ ├── index.css
│ │ └── index.js
│ ├── .gitignore
│ ├── package.json
│ └── index.html






