import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Laptop from "./pages/Laptop";
import Cctv from "./pages/cctv";
import Printer from "./pages/printer";
import StorageDevices from "./pages/StorageDevices";
import ProductDetails from "./pages/productDetails";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminDashboard from "./pages/AdminDashBoard";
import Cookies from "js-cookie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },

      {
        path: "all-products",
        element: <Product />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/products/");
          if (!response.ok) {
            throw json(
              { message: "could not fetch products" },
              { status: 500 }
            );
          } else {
            const resData = await response.json();
            return {
              products: resData,
            };
          }
        },
      },

      {
        path: "laptop",
        element: <Laptop />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/products/laptop");
          if (!response.ok) {
            throw json({ message: "Could not fetch laptops" }, { status: 500 });
          } else {
            const laptopdata = await response.json();
            return {
              laptops: laptopdata,
            };
          }
        },
      },

      {
        path: "cctv",
        element: <Cctv />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/products/camera");
          if (!response.ok) {
            throw json({ message: "Could not fetch cameras" }, { status: 500 });
          } else {
            const camera = await response.json();
            return {
              cameras: camera,
            };
          }
        },
      },

      {
        path: "printer",
        element: <Printer />,
        loader: async () => {
          const response = await fetch(
            "http://localhost:8000/products/printer"
          );
          if (!response.ok) {
            throw json({ message: "Could not fetch printers" }, { status: 500 });
          } else {
            const printer = await response.json();
            return {
              printers: printer,
            };
          }
        },
      },

      {
        path: "storage",
        element: <StorageDevices />,
        loader: async () => {
          const response = await fetch(
            "http://localhost:8000/products/storage"
          );
          if (!response.ok) {
            throw json({ message: "Could not fetch storage devices" }, { status: 500 });
          } else {
            const storage = await response.json();
            return {
              storage: storage,
            };
          }
        },
      },

      {
        path: "product/:productId",
        element: <ProductDetails />,
        loader: async () => {
          const response = await fetch("http://localhost:8000/products/");
          if (!response.ok) {
            throw json(
              { message: "could not fetch products" },
              { status: 500 }
            );
          } else {
            const resData = await response.json();
            return {
              products: resData,
            };
          }
        },
      },

      {
        path: "signin",
        element: <Signin />,
      },

      {
        path: "signup",
        element: <Signup />,
      },

      { path: "cart", element: <Cart /> },

      { path: "checkout", element: <Checkout /> },

      {
        path: "admin",
        element: <AdminDashboard />,
        loader: async () => {
          const token = Cookies.get("refreshtoken");
          if (!token) {
            throw json({ message: "Unauthorized access" }, { status: 401 });
          }
          // Simulate admin check (replace with actual backend validation)
          const userResponse = await fetch("http://localhost:8000/user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (!userResponse.ok) {
            throw json({ message: "Could not verify user" }, { status: 403 });
          }
          const userData = await userResponse.json();
          if (!userData.isAdmin) {
            throw json({ message: "Admin access required" }, { status: 403 });
          }

          const response = await fetch("http://localhost:8000/orders/");
          if (!response.ok) {
            throw json({ message: "Could not fetch orders" }, { status: 500 });
          }
          const orderData = await response.json();
          return {
            orders: orderData,
          };
        },
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;