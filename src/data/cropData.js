// src/data/cropData.js
import cotton from "../assets/crops/cotton.jpg";
import rice from "../assets/crops/wheat.jpg";
import wheat from "../assets/crops/cotton.jpg";
import maize from "../assets/crops/wheat.jpg";
import potato from "../assets/crops/cotton.jpg";

export const crops = [
  {
    id: 1,
    name: "Cotton",
    image: cotton,
    description: "Cotton is widely used in textiles."
  },
  {
    id: 2,
    name: "Rice",
    image: rice,
    description: "Rice feeds more than half the world."
  },
  {
    id: 3,
    name: "Wheat",
    image: wheat,
    description: "Wheat is used for bread, pasta, etc."
  },
  {
    id: 4,
    name: "Maize",
    image: maize,
    description: "Maize is a global food & feed crop."
  },
  {
    id: 5,
    name: "Potato",
    image: potato,
    description: "Potatoes are rich, filling, and versatile."
  },
];
