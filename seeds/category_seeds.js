const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Cologne",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Electronic",
  },
  {
    category_name: "Shoes",
  },
  {
    category_name: "Jewelry",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
