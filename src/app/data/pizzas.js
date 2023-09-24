const isDev = process.env.NODE_ENV === 'development';
const baseImgPath = isDev ? '' : '/pizzashop';
const toppings = [
  {
    id: 1,
    image: baseImgPath + '/cherry.png',
    name: 'cherry tomatoes',
    price: 2
  },
  {
    id: 2,
    image: baseImgPath + '/corn.png',
    name: 'corn',
    price: 2
  },
  {
    id: 3,
    image: baseImgPath + '/fresh-tomatoes.png',
    name: 'fresh tomatoes',
    price: 2
  },
  {
    id: 4,
    image: baseImgPath + '/jalapeno.png',
    name: 'jalapeno',
    price: 2
  },
  {
    id: 5,
    image: baseImgPath + '/parmesan.png',
    name: 'parmesan',
    price: 2
  }
];

export const pizzas = [
  {
    id: 1,
    name: 'capricciosa',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/capricciosa.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings
  },
  {
    id: 2,
    name: 'cheesy',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/cheesy.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings
  },
  {
    id: 3,
    name: 'hawaii',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/hawaii.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings
  },
  {
    id: 4,
    name: 'italian',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/italian.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings
  },
  {
    id: 5,
    name: 'margherita',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/margherita.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings
  },
  {
    id: 6,
    name: 'pepperoni',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/pepperoni.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings
  },
  {
    id: 7,
    name: 'quattro formaggi',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/quattro-formaggi.webp',
    priceSm: 12.99,
    priceMd: 13.99,
    priceLg: 14.99,
    toppings
  },
  {
    id: 8,
    name: 'quattro stagioni',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/quattro-stagioni.webp',
    priceSm: 11.99,
    priceMd: 12.99,
    priceLg: 13.99,
    toppings
  },
  {
    id: 9,
    name: 'tonno',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/tonno.webp',
    priceSm: 10.99,
    priceMd: 11.99,
    priceLg: 12.99,
    toppings
  },
  {
    id: 10,
    name: 'vegetarian',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia recusandae dolorum enim eveniet. Mollitia laudantium, sunt blanditiis ratione quam delectus.',
    image: baseImgPath + '/vegetarian.webp',
    priceSm: 9.99,
    priceMd: 10.99,
    priceLg: 11.99,
    toppings
  }
];

export const bannerImage = baseImgPath + '/pizza-banner.png';
export const chili1 = baseImgPath + '/chilli-1.png';
export const chili2 = baseImgPath + '/chilli-2.png';
export const garlic1 = baseImgPath + '/garlic-1.png';
export const garlic2 = baseImgPath + '/garlic-2.png';
export const garlic3 = baseImgPath + '/garlic-3.png';
export const leaves = baseImgPath + '/leaves.png';
export const logo = baseImgPath + '/logo.svg';
export const phone = baseImgPath + '/phone.svg';
export const bag = baseImgPath + '/bag.svg';
export const successGif = baseImgPath + '/success-1.gif';
