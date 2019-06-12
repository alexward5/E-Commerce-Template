const mongoose = require('mongoose');
const Product = require('./models/product');

const prices = ['10.00', '20.00', '30.00', '40.00', '50.00'];

var mensData = [
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product1-cropped-compressed.jpg',
    alternate_image_1: 'product1-cropped-compressed.jpg',
    alternate_image_2: 'product1-cropped-compressed.jpg',
    alternate_image_3: 'product1-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product2-cropped-compressed.jpg',
    alternate_image_1: 'product2-cropped-compressed.jpg',
    alternate_image_2: 'product2-cropped-compressed.jpg',
    alternate_image_3: 'product2-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product3-cropped-compressed.jpg',
    alternate_image_1: 'product3-cropped-compressed.jpg',
    alternate_image_2: 'product3-cropped-compressed.jpg',
    alternate_image_3: 'product3-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product4-cropped-compressed.jpg',
    alternate_image_1: 'product4-cropped-compressed.jpg',
    alternate_image_2: 'product4-cropped-compressed.jpg',
    alternate_image_3: 'product4-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product5-cropped-compressed.jpg',
    alternate_image_1: 'product5-cropped-compressed.jpg',
    alternate_image_2: 'product5-cropped-compressed.jpg',
    alternate_image_3: 'product5-cropped-compressed.jpg'
  }
]

var womensData = [
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'womens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product1-cropped-compressed.jpg',
    alternate_image_1: 'product1-cropped-compressed.jpg',
    alternate_image_2: 'product1-cropped-compressed.jpg',
    alternate_image_3: 'product1-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'womens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product2-cropped-compressed.jpg',
    alternate_image_1: 'product2-cropped-compressed.jpg',
    alternate_image_2: 'product2-cropped-compressed.jpg',
    alternate_image_3: 'product2-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'womens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product3-cropped-compressed.jpg',
    alternate_image_1: 'product3-cropped-compressed.jpg',
    alternate_image_2: 'product3-cropped-compressed.jpg',
    alternate_image_3: 'product3-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'womens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product4-cropped-compressed.jpg',
    alternate_image_1: 'product4-cropped-compressed.jpg',
    alternate_image_2: 'product4-cropped-compressed.jpg',
    alternate_image_3: 'product4-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'womens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'product5-cropped-compressed.jpg',
    alternate_image_1: 'product5-cropped-compressed.jpg',
    alternate_image_2: 'product5-cropped-compressed.jpg',
    alternate_image_3: 'product5-cropped-compressed.jpg'
  }
]

var accessoriesData = [
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'accessories',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'accessories1-cropped-compressed.jpg',
    alternate_image_1: 'accessories1-cropped-compressed.jpg',
    alternate_image_2: 'accessories1-cropped-compressed.jpg',
    alternate_image_3: 'accessories1-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'accessories',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'accessories2-cropped-compressed.jpg',
    alternate_image_1: 'accessories2-cropped-compressed.jpg',
    alternate_image_2: 'accessories2-cropped-compressed.jpg',
    alternate_image_3: 'accessories2-cropped-compressed.jpg'
  }
]

var skateData = [
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'skate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'skate1-cropped-compressed.jpg',
    alternate_image_1: 'skate1-cropped-compressed.jpg',
    alternate_image_2: 'skate1-cropped-compressed.jpg',
    alternate_image_3: 'skate1-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'skate',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: false,
    main_image: 'skate2-cropped-compressed.jpg',
    alternate_image_1: 'skate2-cropped-compressed.jpg',
    alternate_image_2: 'skate2-cropped-compressed.jpg',
    alternate_image_3: 'skate2-cropped-compressed.jpg'
  }
]

var featuredData = [
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: true,
    main_image: 'product1-cropped-compressed.jpg',
    alternate_image_1: 'product1-cropped-compressed.jpg',
    alternate_image_2: 'product1-cropped-compressed.jpg',
    alternate_image_3: 'product1-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'womens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: true,
    main_image: 'product2-cropped-compressed.jpg',
    alternate_image_1: 'product2-cropped-compressed.jpg',
    alternate_image_2: 'product2-cropped-compressed.jpg',
    alternate_image_3: 'product2-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'mens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: true,
    main_image: 'product3-cropped-compressed.jpg',
    alternate_image_1: 'product3-cropped-compressed.jpg',
    alternate_image_2: 'product3-cropped-compressed.jpg',
    alternate_image_3: 'product3-cropped-compressed.jpg'
  },
  {
    name: 'Item Name',
    price: prices[Math.floor(Math.random() * prices.length)],
    category: 'womens',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    featured: true,
    main_image: 'product5-cropped-compressed.jpg',
    alternate_image_1: 'product5-cropped-compressed.jpg',
    alternate_image_2: 'product5-cropped-compressed.jpg',
    alternate_image_3: 'product5-cropped-compressed.jpg'
  }
]

function seedDB() {
  // remove all products from db
  Product.remove({}, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('removed products from database');
    }
  });

  // add new items to db 2x
  for (let i=0; i<2;i++) {
    mensData.forEach(data => {
      Product.create(data, (err, product) => {
        if (err) {
          console.log(err);
        } else {
          console.log('product added');
        }
      });
    });
    womensData.forEach(data => {
      Product.create(data, (err, product) => {
        if (err) {
          console.log(err);
        } else {
          console.log('product added');
        }
      });
    });
  }

  // add new items to db 6x
  for (let i=0; i<6;i++) {
    accessoriesData.forEach(data => {
      Product.create(data, (err, product) => {
        if (err) {
          console.log(err);
        } else {
          console.log('product added');
        }
      });
    });
    skateData.forEach(data => {
      Product.create(data, (err, product) => {
        if (err) {
          console.log(err);
        } else {
          console.log('product added');
        }
      });
    });
  }

  // add featued data 1x
  featuredData.forEach(data => {
    Product.create(data, (err, product) => {
      if (err) {
        console.log(err);
      } else {
        console.log('product added');
      }
    });
  });
}

module.exports = seedDB;
