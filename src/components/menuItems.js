// Importing images for each menu item
import SpaghettiCarbonara from "./img/SpaghettiCarbonara.jpg";
import MargheritaPizza from "./img/MargheritaPizza.jpg";
import CaesarSalad from "./img/CaesarSalad.jpg";
import Lasagna from "./img/Lasagna.jpg";
import Tiramisu from "./img/Tiramisu.jpg";
import GarlicBread from "./img/GarlicBread.jpg";
import BolognesePasta from "./img/BolognesePasta.jpg";
import CapreseSalad from "./img/CapreseSalad.jpg";
import MushroomRisotto from "./img/MushroomRisotto.jpg"

// Array of menu items, each with properties: name, description, imageUrl, and price
const menuItems = [
  {
    name: "Spaghetti Carbonara",
    description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
    imageUrl: SpaghettiCarbonara, // URL to the image for this menu item
    price: "$12.99", // Price of the menu item
  },
  {
    name: "Margherita Pizza",
    description: "Pizza with tomato, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.",
    imageUrl: MargheritaPizza, // URL to the image for this menu item
    price: "$10.99", // Price of the menu item
  },
  {
    name: "Caesar Salad",
    description: "Romaine lettuce with Caesar dressing, croutons, and parmesan cheese.",
    imageUrl: CaesarSalad, // URL to the image for this menu item
    price: "$8.99", // Price of the menu item
  },
  {
    name: "Lasagna",
    description: "Layers of pasta with a rich meat sauce, béchamel, and cheese.",
    imageUrl: Lasagna, // URL to the image for this menu item
    price: "$14.99", // Price of the menu item
  },
  {
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
    imageUrl: Tiramisu, // URL to the image for this menu item
    price: "$6.99", // Price of the menu item
  },
  {
    name: "Garlic Bread",
    description: "Toasted bread with garlic, butter, and herbs.",
    imageUrl: GarlicBread, // URL to the image for this menu item
    price: "$4.99", // Price of the menu item
  },
  {
    name: "Bolognese Pasta",
    description: "Pasta served with a hearty Bolognese sauce made from ground beef and tomatoes.",
    imageUrl: BolognesePasta, // URL to the image for this menu item
    price: "$13.99", // Price of the menu item
  },
  {
    name: "Caprese Salad",
    description: "Fresh tomatoes, mozzarella cheese, basil, and a drizzle of balsamic glaze.",
    imageUrl: CapreseSalad, // URL to the image for this menu item
    price: "$9.99", // Price of the menu item
  },
  {
    name: "Mushroom Risotto",
    description: "Creamy risotto cooked with earthy mushrooms, white wine, and parmesan cheese.",
    imageUrl: MushroomRisotto, // URL to the image for this menu item
    price: "$15.99", // Price of the menu item (adjust as needed)
  },
  // Add more menu items here as needed
];

export default menuItems; // Export the array for use in other components
