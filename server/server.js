import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import connectDB from './configs/mongodb.js';

const PORT = process.env.PORT || 4000;
const app = express();

// Connect to MongoDB
await connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

// API Routes
app.get('/', (req, res) => {
  res.send('API is working');
});
app.use('/api/user', userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
