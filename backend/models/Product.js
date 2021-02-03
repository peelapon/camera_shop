module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,            
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,            
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,            
        },

    });
    return Product
}

