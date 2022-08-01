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
    img: "images/hair1.jpg",
    desc: "ELEGANT HAIR, FEEL CONFIDENT",
    link: "/hair",
    btn: "SHOP OYEKES HAIR",
  },
  {
    id: 2,
    img: "images/fabrics1.jpeg",
    desc: "QUALITY FABRICS, COZY TEXTURES",
    link: "/fabrics",
    btn: "SHOP OYEKES FABRICS",
  },
  {
    id: 3,
    img: "images/hairb4.jpg",
    desc: "ELEGANT HAIR, FEEL CONFIDENT",
    link: "/hair",
    btn: "SHOP OYEKES HAIR",
  },
  {
    id: 4,
    img: "images/fabricsb.jpg",
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
    image: "images/hair-main.jpg",
  },
  {
    id: 2,
    name: "Straight Hair",
    image: "images/braid3.png",
  },
  {
    id: 3,
    name: "Curly Hair",
    image: "images/curly.jpg",
  },
  {
    id: 4,
    name: "Wavey Hair",
    image: "images/wavey.jpg",
  },
  {
    id: 5,
    name: "Factory & Hand-Made Wigs",
    image: "images/hair-main1.jpg",
  },
];

export const fabricsCategory: Category[] = [
  {
    id: 1,
    name: "Ankara Fabrics",
    image: "images/fabric1.jpg",
  },
  {
    id: 2,
    name: "African Wax",
    image: "images/fabric2.jpg",
  },
  {
    id: 3,
    name: "Holandis Fabric",
    image: "images/fabric3.jpg",
  },
  {
    id: 4,
    name: "Lace Fabrics",
    image: "images/Fabric1.jpg",
  },
  {
    id: 5,
    name: "cotton Material",
    image: "images/Fabric2.jpg",
  },
];
