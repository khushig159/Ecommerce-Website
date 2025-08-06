import React, { useState } from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashBoard() {
  const { orders } = useLoaderData();
  const [timeRange, setTimeRange] = useState("monthly");

  // Process orders for chart
  const processOrderData = (orders, range) => {
    const labels = [];
    const data = [];
    
    if (range === "daily") {
      // Last 7 days
      for (let i = 6; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const dateString = date.toISOString().split("T")[0];
        labels.push(dateString);
        const dailyOrders = orders.filter(
          (order) => new Date(order.createdAt).toISOString().split("T")[0] === dateString
        );
        const total = dailyOrders.reduce((sum, order) => sum + order.total, 0);
        data.push(total);
      }
    } else {
      // Last 6 months
      for (let i = 5; i >= 0; i--) {
        const date = new Date();
        date.setMonth(date.getMonth() - i);
        const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
        labels.push(monthYear);
        const monthlyOrders = orders.filter(
          (order) =>
            `${new Date(order.createdAt).getFullYear()}-${new Date(order.createdAt).getMonth() + 1}` ===
            monthYear
        );
        const total = monthlyOrders.reduce((sum, order) => sum + order.total, 0);
        data.push(total);
      }
    }

    return {
      labels,
      datasets: [
        {
          label: "Order Totals",
          data,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          tension: 0.1,
        },
      ],
    };
  };

  const chartData = processOrderData(orders, timeRange);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Order Trends",
      },
    },
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/admin"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/products"
                className="nav-link"
              >
                Manage Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/users"
                className="nav-link"
              >
                Manage Users
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Order Overview</h1>

        {/* Time Range Selector */}
        <div className="time-range-selector">
          <label>View:</label>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="daily">Daily (Last 7 Days)</option>
            <option value="monthly">Monthly (Last 6 Months)</option>
          </select>
        </div>

        {/* Chart */}
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Recent Orders Table */}
        <div className="table-container">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}