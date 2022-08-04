import { v4 as uuidv4 } from "uuid";

type SliderData = {
  id: number;
  img: string;
  desc: string;
  link: string;
  btn: string;
};

export const sliderData: SliderData[] = [
  {
    id: 1,
    img: "/images/hair1.jpg",
    desc: "ELEGANT HAIR, FEEL CONFIDENT",
    link: "/hair",
    btn: "SHOP OYEKES HAIR",
  },
  {
    id: 2,
    img: "/images/fabrics1.jpeg",
    desc: "QUALITY FABRICS, COZY TEXTURES",
    link: "/fabrics",
    btn: "SHOP OYEKES FABRICS",
  },
  {
    id: 3,
    img: "/images/hairb4.jpg",
    desc: "ELEGANT HAIR, FEEL CONFIDENT",
    link: "/hair",
    btn: "SHOP OYEKES HAIR",
  },
  {
    id: 4,
    img: "/images/fabricsb.jpg",
    desc: "QUALITY FABRICS, COZY TEXTURES",
    link: "/fabrics",
    btn: "SHOP OYEKES FABRICS",
  },
];

type Category = {
  id: number;
  name: string;
  image: string;
};

export const hairCategory: Category[] = [
  {
    id: 1,
    name: "Straight Hair",
    image: "/images/hair-main.jpg",
  },
  {
    id: 2,
    name: "Braided Hair",
    image: "/images/braid3.png",
  },
  {
    id: 3,
    name: "Curly Hair",
    image: "/images/curly.jpg",
  },
  {
    id: 4,
    name: "Wavey Hair",
    image: "/images/wavey.jpg",
  },
  {
    id: 5,
    name: "Factory & Hand-Made Wigs",
    image: "/images/hair-main1.jpg",
  },
];

export const fabricsCategory: Category[] = [
  {
    id: 1,
    name: "Ankara Fabrics",
    image: "/images/fabric1.jpg",
  },
  {
    id: 2,
    name: "African Wax",
    image: "/images/fabric2.jpg",
  },
  {
    id: 3,
    name: "Holandis Fabric",
    image: "/images/fabric3.jpg",
  },
  {
    id: 4,
    name: "Lace Fabrics",
    image: "/images/Fabric1.jpg",
  },
  {
    id: 5,
    name: "cotton Material",
    image: "/images/Fabric2.jpg",
  },
];

type Product = {
  id: string;
  name: string;
  image: string;
  desc: string;
  price: string;
  class: string;
  category: string;
};

export const superMegaArray: Product[] = [
  {
    id: uuidv4(),
    name: "Straight Hair",
    image: "/images/h1.jpg",
    desc: "full hair with super thick texture and comfy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦11,500",
    class: "hair",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Straight Hair",
    image: "/images/h2.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦21,100",
    class: "hair",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Curly Hair",
    image: "/images/h3.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦11,400",
    class: "hair",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Wavey Hair",
    image: "/images/h4.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦21,100",
    class: "hair",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h5.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦1,100",
    class: "hair",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h6.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦71,100",
    class: "hair",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h7.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦10,100",
    class: "hair",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h8.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦1,100",
    class: "hair",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h5.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦13,100",
    class: "hair",
    category: "Curly Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    price: "₦1,100",
    class: "hair",
    category: "Curly Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦2,100",
    class: "hair",
    category: "Curly Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h5.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦13,100",
    class: "hair",
    category: "Curly Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    price: "₦1,100",
    class: "hair",
    category: "Wavey Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦2,100",
    class: "hair",
    category: "Wavey Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h5.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦13,100",
    class: "hair",
    category: "Curly Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    price: "₦1,100",
    class: "hair",
    category: "Wavey Hair",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦2,100",
    class: "hair",
    category: "Wavey Hair",
  },
  {
    id: uuidv4(),
    name: "Bone fabric",
    image: "/images/h1.jpg",
    desc: "full Fabric with super thick texture and comfy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦11,500",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Shoulder Fabric",
    image: "/images/h2.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦21,100",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Curly Fabric",
    image: "/images/h3.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦11,400",
    class: "fabrics",
    category: "Straight Hair",
  },
  {
    id: uuidv4(),
    name: "Wavey Fabric",
    image: "/images/h4.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦21,100",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Short Fabric",
    image: "/images/h5.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦1,100",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h6.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦71,100",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h7.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦10,100",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h8.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦1,100",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h5.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦13,100",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure",
    price: "₦1,100",
    class: "fabrics",
    category: "ankara",
  },
  {
    id: uuidv4(),
    name: "Short Hair",
    image: "/images/h1.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    price: "₦2,100",
    class: "fabrics",
    category: "ankara",
  },
];
