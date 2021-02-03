const db = require('../models');

const getAllProduct = async (req, res) => {
    try {
        const allProducts = await db.Product.findAll({})
        res.status(200).send(allProducts);
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

module.exports = {
    getAllProduct
};