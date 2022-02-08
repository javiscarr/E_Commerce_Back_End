const { Product } = require("../models");

const productData = [
  {
    product_name: "Top 50 Artists Essentials vinyl edition",
    price: 26.99,
    stock: 32,
    category_id: 2,
  },
  {
    product_name: "Samsung Curve 4KUHD Tv",
    price: 2544.99,
    stock: 13,
    category_id: 3,
  },
  {
    product_name: "Creed Adventus",
    price: 263.89,
    stock: 7,
    category_id: 1,
  },
  {
    product_name: "3.3mm Mariner Chain Necklace in 10K Gold",
    price: 396.75,
    stock: 17,
    category_id: 5,
  },
  {
    product_name: "Destry High top sneaker",
    price: 118.99,
    stock: 6,
    category_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
