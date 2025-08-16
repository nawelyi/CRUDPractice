import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productsRoute from './routes/products.route.js';
dotenv.config();

const app = express();


app.use(express.json()); // Middleware to parse JSON bodies


app.use('/api/products', productsRoute); // Use the products route




app.listen(3000, () => {
  console.log('Server is running on port 3000');
  connectDB();
});