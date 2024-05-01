import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { config as dotenvConfig } from 'dotenv';
import productsRouter from './routes/productos.js';
import authRouter from './routes/auth.js'
import bodyParser from 'body-parser';

const app = express();
dotenvConfig();

app.use(morgan('dev'));
app.use(cors({
  origin: '*',
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mount productsRouter for other product-related routes
app.use('/catalog/products', productsRouter);
app.use('/auth', authRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
