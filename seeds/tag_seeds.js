const { Tag } = require("../models");

const tagData = [
  {
    tag_name: "R&B",
  },
  {
    tag_name: "Rap/Hip-Hop",
  },
  {
    tag_name: "Gospel",
  },
  {
    tag_name: "gold",
  },
  {
    tag_name: "silver",
  },
  {
    tag_name: "65 inch ",
  },
  {
    tag_name: "80 inch ",
  },
  {
    tag_name: "black",
  },
  {
    tag_name: "green",
  },
  {
    tag_name: "blue",
  },
  {
    tag_name: "travel spray",
  },
  {
    tag_name: "10 year anniversary edition",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
