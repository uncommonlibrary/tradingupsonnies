const sonnyAngels = [
  {
    name: "Peanut",
    type: "secret",
    points: 200,
    image:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/2022/05/img_creatures_figure13_n4.png",
  },
  {
    name: "Turtle",
    type: "secret",
    points: 150,
    image:
      "https://media.karousell.com/media/photos/products/2024/5/10/brand_new_sonny_angel_marine_s_1715315528_55d8c14b_progressive.jpg",
  },
  {
    name: "Sprout",
    type: "secret",
    points: 200,
    image: "https://i.ebayimg.com/images/g/RwwAAOSwUZ9lBGLg/s-l1200.jpg",
  },
  {
    name: "GOL Chocolate",
    type: "limited",
    points: 22,
    image:
      "https://media.karousell.com/media/photos/products/2024/1/29/wts_sonny_angel_valentines_gif_1706517226_37a381d3_progressive.jpg",
  },
  {
    name: "Cat Life Siamese",
    type: "limited",
    points: 32,
    image:
      "https://i.pinimg.com/474x/ea/f3/26/eaf3269b79389798e5ad4c9e5eba4ede.jpg",
  },
  {
    name: "Jeju Rabbit",
    type: "limited",
    points: 37,
    image: "https://i.ebayimg.com/images/g/QDIAAOSwPAZkt5fp/s-l1200.webp",
  },
  {
    name: "Lime Dog",
    type: "limited",
    points: 40,
    image:
      "https://media.karousell.com/media/photos/products/2024/4/5/sonny_angel_candy_store_lime_d_1712305993_839390f8_progressive.jpg",
  },
  {
    name: "Seoul Strawberry",
    type: "limited",
    points: 45,
    image: "https://i.ebayimg.com/images/g/BiwAAOSwZPZjKcOt/s-l1600.jpg",
  },
  {
    name: "Easy Moment",
    type: "limited",
    points: 70,
    image:
      "https://toysez.com/cdn/shop/files/65_43c14cde-0d96-4301-bff7-8aff0d6efedb.jpg?v=1698916756",
  },
  {
    name: "Carrot",
    type: "regular",
    points: 10,
    image: "https://toysez.com/cdn/shop/files/Carrot_1.jpg?v=1698478550",
  },
  {
    name: "Carnation",
    type: "regular",
    points: 10,
    image:
      "https://media.karousell.com/media/photos/products/2023/9/7/sonny_angel_flower_carnation_1694092655_771ba9df.jpg",
  },
  {
    name: "Tiger",
    type: "regular",
    points: 10,
    image:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/cache/2018/10/new_tiger_01-1/319147086.jpg",
  },
  {
    name: "Dragonfruit",
    type: "regular",
    points: 12,
    image: "https://i.ebayimg.com/images/g/Ah0AAOSwUZZj-kLe/s-l1600.jpg",
  },
  {
    name: "Giraffe",
    type: "regular",
    points: 13,
    image:
      "https://media.karousell.com/media/photos/products/2024/4/4/sonny_angel_animals_series_3_g_1712239546_3882af8f.jpg",
  },
  {
    name: "Sheep",
    type: "regular",
    points: 14,
    image:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/cache/2018/10/new_sheep_01-1/4000609628.jpg",
  },
  {
    name: "Fawn",
    type: "regular",
    points: 14,
    image:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/cache/2018/10/new_fawn_01-1/3687274367.jpg",
  },
  {
    name: "Tomato",
    type: "regular",
    points: 16,
    image: "https://i.ebayimg.com/images/g/VnkAAOSw64Nktgfc/s-l1200.webp",
  },
  {
    name: "Poodle",
    type: "regular",
    points: 16,
    image: "https://i.ebayimg.com/images/g/b6wAAOSwg0hk6TP~/s-l1600.jpg",
  },
  {
    name: "Poppy",
    type: "regular",
    points: 17,
    image: "https://i.ebayimg.com/images/g/upMAAOSwKwVjT2r8/s-l1600.jpg",
  },
  {
    name: "Dalmatian",
    type: "regular",
    points: 18,
    image:
      "https://media.karousell.com/media/photos/products/2023/12/17/wttwts_sonny_angel_dalmatian_1702799642_a00994b5_progressive.jpg",
  },
  {
    name: "Monkey",
    type: "regular",
    points: 18,
    image:
      "https://media.karousell.com/media/photos/products/2024/1/13/sonny_angel_monkey_1705168561_ac54d245_progressive.jpg",
  },
  {
    name: "Calico",
    type: "regular",
    points: 18,
    image: "https://toysez.com/cdn/shop/files/IMG_9548.jpg?v=1702241967",
  },
  {
    name: "Frog",
    type: "regular",
    points: 20,
    image:
      "https://www.sonnyangel.com/renewal/wp-content/uploads/cache/2018/10/new_frog_01-1/679203890.jpg",
  },
  {
    name: "Pudding",
    type: "regular",
    points: 20,
    image:
      "https://media.karousell.com/media/photos/products/2023/12/31/sonny_angel__pudding_1704016708_ba44939b.jpg",
  },
  {
    name: "Strawberry Shortcake",
    type: "regular",
    points: 23,
    image:
      "https://media.karousell.com/media/photos/products/2024/1/30/wts_sonny_angel_sweets_series__1706601441_abb42121_progressive.jpg",
  },
  {
    name: "Cow",
    type: "regular",
    points: 24,
    image:
      "https://media.karousell.com/media/photos/products/2023/9/12/wtt_sonny_angel_cow_to_duck_or_1694532332_b1883340.jpg",
  },
  {
    name: "Lilly Bell",
    type: "regular",
    points: 25,
    image: "https://i.ebayimg.com/images/g/8XoAAOSwSB9lk6eG/s-l1200.jpg",
  },
  {
    name: "Rabbit",
    type: "regular",
    points: 30,
    image:
      "https://media.karousell.com/media/photos/products/2023/12/5/wtt_sonny_angel_animal_ver_1___1701803299_7dd328bd.jpg",
  },
  {
    name: "Strawberry",
    type: "regular",
    points: 35,
    image:
      "https://media.karousell.com/media/photos/products/2024/4/25/bnif_sonny_angel_fruit_series__1714023067_23825c28_progressive.jpg",
  },
  {
    name: "Lop Ear",
    type: "regular",
    points: 38,
    image:
      "https://media.karousell.com/media/photos/products/2024/3/9/standing_lop_ear_sonny_angel_1709976348_9997e9d3_progressive.jpg",
  },
];
