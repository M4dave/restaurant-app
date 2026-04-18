import SpaghettiCarbonara from "./img/SpaghettiCarbonara.jpg";
import MargheritaPizza from "./img/MargheritaPizza.jpg";
import CaesarSalad from "./img/CaesarSalad.jpg";
import Lasagna from "./img/Lasagna.jpg";
import Tiramisu from "./img/Tiramisu.jpg";
import GarlicBread from "./img/GarlicBread.jpg";
import BolognesePasta from "./img/BolognesePasta.jpg";
import CapreseSalad from "./img/CapreseSalad.jpg";
import MushroomRisotto from "./img/MushroomRisotto.jpg";

const menuItems = [
  { name: "Spaghetti Carbonara", description: "Classic Italian pasta with eggs, aged Pecorino Romano, guanciale, and black pepper.", imageUrl: SpaghettiCarbonara, price: "$12.99", category: "Pasta" },
  { name: "Margherita Pizza", description: "San Marzano tomatoes, buffalo mozzarella, fresh basil, and cold-pressed olive oil.", imageUrl: MargheritaPizza, price: "$10.99", category: "Pizza" },
  { name: "Caesar Salad", description: "Crisp romaine, house-made Caesar dressing, sourdough croutons, and shaved Parmigiano.", imageUrl: CaesarSalad, price: "$8.99", category: "Starters" },
  { name: "Lasagna al Forno", description: "Slow-cooked ragù, silky béchamel, and layers of fresh pasta baked to perfection.", imageUrl: Lasagna, price: "$14.99", category: "Pasta" },
  { name: "Tiramisu", description: "Espresso-soaked savoiardi, mascarpone cream, and a dusting of dark Valrhona cocoa.", imageUrl: Tiramisu, price: "$6.99", category: "Desserts" },
  { name: "Garlic Focaccia", description: "House-baked focaccia brushed with roasted garlic butter and fresh rosemary.", imageUrl: GarlicBread, price: "$4.99", category: "Starters" },
  { name: "Bolognese Pasta", description: "Twelve-hour ragù of beef, pork, and aromatics over hand-rolled pappardelle.", imageUrl: BolognesePasta, price: "$13.99", category: "Pasta" },
  { name: "Caprese Salad", description: "Heirloom tomatoes, burrata, fresh basil, aged balsamic, and Sicilian sea salt.", imageUrl: CapreseSalad, price: "$9.99", category: "Starters" },
  { name: "Mushroom Risotto", description: "Arborio rice with wild porcini, truffle oil, white wine, and aged Parmigiano.", imageUrl: MushroomRisotto, price: "$15.99", category: "Mains" },
];

export default menuItems;
