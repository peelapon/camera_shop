const express = require('express');
const cors = require('cors');
const app = express();
const db = require("./models")
const productsRoutes = require("./routes/products")

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/products", productsRoutes);


app.listen(8000, () => {
    console.log(`Server is running`)
})

db.sequelize.sync().then(() => {
    console.log("Completed Connect and Sync")
})
