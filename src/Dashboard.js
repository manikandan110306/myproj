import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import './App.css';

function Dashboard() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalStockValue, setTotalStockValue] = useState(0);
  const [lowStockWarnings, setLowStockWarnings] = useState(0);
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    // Fetch dashboard data from a mock API (replace with your actual API)
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        // Assume we get the following from the API
        setTotalProducts(50); // total number of products
        setTotalStockValue(150000); // total stock value in $
        setLowStockWarnings(5); // number of products low on stock
        setRecentTransactions([
          { id: 1, name: 'Product A', action: 'sold', quantity: 10 },
          { id: 2, name: 'Product B', action: 'added', quantity: 15 }
        ]);
        setTopProducts([
          { id: 1, name: 'Product X', sold: 120 },
          { id: 2, name: 'Product Y', sold: 85 }
        ]);
      });
  }, []);

  return (
    <Container className="dashboard-container">
      <Box>
        <Typography variant="h4" gutterBottom>
          Stock Management Dashboard
        </Typography>

        {/* Stock Overview Section */}
        <div className="dashboard-section">
          <Typography variant="h6">Stock Overview</Typography>
          <div className="stock-overview">
            <div>
              <h3>Total Products</h3>
              <p>{totalProducts}</p>
            </div>
            <div>
              <h3>Total Stock Value ($)</h3>
              <p>{totalStockValue}</p>
            </div>
            <div>
              <h3>Low Stock Warnings</h3>
              <p>{lowStockWarnings}</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions Section */}
        <div className="dashboard-section">
          <Typography variant="h6">Recent Transactions</Typography>
          <ul className="recent-transactions">
            {recentTransactions.map((transaction) => (
              <li key={transaction.id}>
                {transaction.name} - {transaction.action} {transaction.quantity}
              </li>
            ))}
          </ul>
        </div>

        {/* Top Products Section */}
        <div className="dashboard-section">
          <Typography variant="h6">Top Products</Typography>
          <ul className="top-products">
            {topProducts.map((product) => (
              <li key={product.id}>
                {product.name} - Sold: {product.sold}
              </li>
            ))}
          </ul>
        </div>
      </Box>
    </Container>
  );
}

export default Dashboard;
