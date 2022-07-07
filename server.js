const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const orderRoutes = require("./routes/order");
const cartRoutes = require("./routes/cart");

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs');

app.use(helmet());

app.use(express.json());

app.use(cors());

app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/orders", orderRoutes);
app.use("/carts", cartRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((error, req, res, next) => {
  res.status(error.status).json({ message: error.message });
});

(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  app.listen(process.env.PORT || 5000);
})();
