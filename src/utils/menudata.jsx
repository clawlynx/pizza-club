import { LuPizza } from "react-icons/lu";
import { LiaHamburgerSolid } from "react-icons/lia";
import { RiDrinksLine } from "react-icons/ri";
import { MdOutlineKebabDining } from "react-icons/md";
import { PiPopcorn } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { MdOutlineChildCare } from "react-icons/md";

export const menuHeadings = [
  {
    id: 1,
    icon: <LuPizza />,
    name: "Pizza",
    color: "text-orangeColor",
    hover: "hover:border-orangeColor",
    border: "border-orangeColor",
    shadow: "shadow-orangeColor",
    bg: "bg-orangeColor",
  },
  {
    id: 2,
    icon: <LiaHamburgerSolid />,
    name: "Burger",
    color: "text-saffronColor",
    hover: "hover:border-saffronColor",
    border: "border-saffronColor",
    shadow: "shadow-saffronColor",
    bg: "bg-saffronColor",
  },
  {
    id: 3,
    icon: <MdOutlineKebabDining />,
    name: "Kebab",
    color: "text-mangoColor",
    hover: "hover:border-mangoColor",
    border: "border-mangoColor",
    shadow: "shadow-mangoColor",
    bg: "bg-mangoColor",
  },
  {
    id: 4,
    icon: <RiDrinksLine />,
    name: "Drinks",
    color: "text-yellowColor",
    hover: "hover:border-yellowColor",
    border: "border-yellowColor",
    shadow: "shadow-yellowColor",
    bg: "bg-yellowColor",
  },
];

export const pizzaMenu = [
  {
    id: 1,
    item: "MAGHERITA 14''",
    price: "£9.40",
    desc: "100% mozzarella cheese & tomato sauce",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£5.00",
    variant2price: "£7.00",
  },
  {
    id: 2,
    item: "ITALIAN GARLIC BREAD 14''",
    price: "£9.40",
    desc: "100% mozarella cheese & freshly cut garlic",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£5.00",
    variant2price: "£7.00",
  },
  {
    id: 3,
    item: "HAWAIIAN 14''",
    price: "£13.50",
    desc: "Ham, Pineapple & mushrooms",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£7.05",
    variant2price: "£9.85",
  },
  {
    id: 4,
    item: "AMERICAN 14''",
    price: "£13.50",
    desc: "Pepperoni & Salami Topped with Onions",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£7.05",
    variant2price: "£9.85",
  },
  {
    id: 5,
    item: "HAM SPECIAL 14''",
    price: "£13.50",
    desc: "Mushroom, Ham & Onion",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£7.05",
    variant2price: "£9.85",
  },
  {
    id: 6,
    item: "MEXICAN HOT 14''",
    price: "£14.95",
    desc: "Pepperoni & Spicy Beef with Onions and Chilli Peppers",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£7.80",
    variant2price: "£10.65",
  },
  {
    id: 7,
    item: "CHEESE LOVERS 14''",
    price: "£14.95",
    desc: "Mature Cheddar, Brie, Mozzarella, Fresh Parmesan",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£7.80",
    variant2price: "£10.65",
  },
  {
    id: 8,
    item: "VEGETERAIN 14''",
    price: "£14.95",
    desc: "Mushrooms, Peppers, Sweetcorn & Onions",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£7.80",
    variant2price: "£10.65",
  },
  {
    id: 9,
    item: "KENTUCKY 14''",
    price: "£15.60",
    desc: "Chicken, Ham, Broccoli & Sweetcorn",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£8.50",
    variant2price: "£11.25",
  },
  {
    id: 10,
    item: "SEAFOOD SPECIAL 14''",
    price: "£15.60",
    desc: "Prawn, Tuna, Sweetcorn & Sliced Tomatoes with a squeeze of Lemon",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£8.50",
    variant2price: "£11.25",
  },
  {
    id: 11,
    item: "CLUB CHICKEN 14''",
    price: "£15.60",
    desc: "BBQ Base, Chicken, Ham, Garnished with iceberg Lettuce & Garlic Mayo",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£8.50",
    variant2price: "£11.25",
  },
  {
    id: 12,
    item: "CHEFS SURPRISE",
    price: "£15.60",
    desc: "Different & Delicious Every Time!",
    variant1: "9 inch",
    variant2: "12 inch",
    variant1price: "£8.50",
    variant2price: "£11.25",
  },
];

export const burgerData = [
  {
    id: 1,
    item: "CHICKEN FILLET",
    price: "£4.30",
    desc: "Succulent Breast Fillet Served in a Toasted Bap with Salad and Mayo",
  },
  {
    id: 2,
    item: "SPICY CHICKEN FILLET",
    price: "£4.50",
    desc: "Served in a Toasted Bap with Salad and Mayo. Southern Fried for Extra Flavor",
    variant1: "Grated cheese, Pineapple or Ham",
    variant1price: "£1.00 each",
  },
  //   {
  //     id: 3,
  //     item: "GRATED CHEESE",
  //     price: "each £1.0 extra",
  //     desc: "Grated Cheese, Pineapple or Ham",
  //   },
  {
    id: 4,
    item: "CHICKEN GOUJONS",
    price: "£4.75",
    desc: "Chicken Goujons plus DIP",
  },
  {
    id: 5,
    item: "QUARTER POUND STEAK BURGER",
    price: "£3.50",
    desc: "Garnished with Salad and Relish",
    variant1: "Grated cheese, Pineapple or Ham",
    variant1price: "£1.00 each",
  },
  //   {
  //     id: 6,
  //     item: "",
  //     price: "£",
  //     desc: "",
  //   },
];

export const kebabData = [
  {
    id: 1,
    item: "DONER KEBAB",
    price: "£6.50",
    desc: "Served with Fresh Naan Bread, Salad & a choice of Sauce",
  },
  {
    id: 2,
    item: "CHICKEN TIKKA KEBAB",
    price: "£7.00",
    desc: "Served with Fresh Naan Bread, Salad & a choice of Sauce",
  },
  {
    id: 3,
    item: "STEAK KEBAB",
    price: "£7.00",
    desc: "Served with Fresh Naan Bread, Salad & a choice of Sauce",
  },
  {
    id: 4,
    item: "CHICKEN PAKORA KEBAB",
    price: "£7.00",
    desc: "Served with Fresh Naan Bread, Salad & a choice of Sauce",
  },
  {
    id: 5,
    item: "MIXED KEBAB",
    price: "£7.50",
    desc: "Served with Fresh Naan Bread, Salad & a choice of Sauce",
  },
  {
    id: 6,
    item: "CHICKEN FILLET KEBAB",
    price: "£7.00",
    desc: "Served with Fresh Naan Bread, Salad & a choice of Sauce",
  },
  {
    id: 7,
    item: "SPICY CHICKEN KEBAB",
    price: "£7.00",
    desc: "Served with Fresh Naan Bread, Salad & a choice of Sauce",
  },
  {
    id: 8,
    item: "VEGETABLE KEBAB",
    price: "£6.00",
    desc: "Served with Fresh Naan Bread, Salad & a choice of Sauce",
  },
];

export const drinksData = [
  {
    id: 1,
    item: "CANS",
    price: "£1.00",
    desc: "",
  },
  {
    id: 2,
    item: "BOTTLE 500ML",
    price: "£1.75",
    desc: "",
  },
  {
    id: 3,
    item: "BOTTLE 1.25ML",
    price: "£2.50",
    desc: "",
  },
  {
    id: 4,
    item: "WATER",
    price: "95p",
    desc: "",
  },
];

export const startersData = [
  {
    id: 1,
    item: "CHICKEN PAKORA",
    price: "£4.50",
    desc: "",
  },
  {
    id: 2,
    item: "VEGETABLE PAKORA",
    price: "£4.00",
    desc: "",
  },
  {
    id: 3,
    item: "CHICKEN TIKKA",
    price: "£4.50",
    desc: "",
  },
  {
    id: 4,
    item: "DONER MEAT",
    price: "£4.00",
    desc: "",
  },
  {
    id: 5,
    item: "SPICY CHICKEN",
    price: "£4.50",
    desc: "",
  },
  {
    id: 6,
    item: "MIXED STARTER",
    price: "£4.95",
    desc: "",
  },
  {
    id: 7,
    item: "POTATO WEDGES",
    price: "£4.45",
    desc: "",
  },
  {
    id: 8,
    item: "FRENCH GARLIC BREAD",
    price: "£2.50",
    desc: "",
  },
  {
    id: 9,
    item: "FRENCH GARLIC WITH CHEESE",
    price: "£3.75",
    desc: "",
  },
];

export const chipsData = [
  {
    id: 1,
    item: "REGULAR CHIP",
    price: "£3.50",
    desc: "",
  },
  {
    id: 2,
    item: "LARGE CHIP",
    price: "£4.00",
    desc: "",
  },
  {
    id: 3,
    item: "DONER CHIP",
    price: "£6.50",
    desc: "",
  },
  {
    id: 4,
    item: "GARLIC CHIP",
    price: "£4.00",
    desc: "",
  },
  {
    id: 5,
    item: "CHIPS 'N' BEANS",
    price: "£4.00",
    desc: "",
  },
  {
    id: 6,
    item: "SAUSAGE 'N' CHIP",
    price: "£4.75",
    desc: "",
  },
  {
    id: 7,
    item: "NUGGET 'N' CHIP",
    price: "£4.90",
    desc: "",
  },
  {
    id: 8,
    item: "CHIP 'N' CHEESE",
    price: "£4.00",
    desc: "",
  },
];

export const kiddiesMenu = [
  {
    id: 1,
    item: "MINI PIZZA PLAIN",
    price: "£3.10",
    desc: "",
  },
  {
    id: 2,
    item: "MINI PIZZA 1 TOPPING",
    price: "£4.00",
    desc: "",
  },
  {
    id: 3,
    item: "MINI PIZZA 1 TOPPING",
    price: "£4.75",
    desc: "with chips",
  },
  {
    id: 4,
    item: "NUGGET MEAL 1",
    price: "£4.50",
    desc: "Nugget, Chips & Beans",
  },
  {
    id: 5,
    item: "NUGGET MEAL 2",
    price: "£3.75",
    desc: "Steak Burger Meal",
  },
  {
    id: 6,
    item: "NUGGET MEAL 3",
    price: "£3.75",
    desc: "20z Burger & Chips",
  },
  {
    id: 7,
    item: "SAUSAGE MEAL",
    price: "£4.00",
    desc: "Sausage, Chips & Beans",
  },
];

export const extrasData = [
  {
    id: 1,
    item: "MIXED SALAD(WITH DRESSING)",
    price: "£3.50",
    desc: "",
  },
  {
    id: 2,
    item: "CURRY SAUCE/GRAVY",
    price: "£2.50",
    desc: "",
  },
  {
    id: 3,
    item: "GARLIC, CHILLI, MINT YOGHURT",
    price: "£1.30",
    desc: "",
  },
  {
    id: 4,
    item: "MAYONNAISE, BBQ, 1000 ISLAND",
    price: "£1.30",
    desc: "",
  },
];
