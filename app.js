const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const expressSanitizer = require('express-sanitizer');

// set up body parser / view engine
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// configure mongoose
mongoose.connect('mongodb://localhost:27017/ecommerce_template', {useNewUrlParser: true});
mongoose.set('useFindAndModify', false);

// tell express to send static files
app.use(express.static('public'));

// tell app to use method-override for PUT and DELETE requests
app.use(methodOverride('_method'));

// tell app to use express santiizer
app.use(expressSanitizer());

// config schema and model
const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  category: String,
  description: String,
  featured: {type: Boolean, default: false},
  main_image: String,
  alternate_image_1: String,
  alternate_image_2: String,
  alternate_image_3: String,
  created: {type: Date, default: Date.now}   // date will be automatic
});

const Product = mongoose.model('Product', productSchema);

// Product.create({
//   name: 'Item Name',
//   price: '123.45',
//   category: 'skate',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//   featured: false,
//   main_image: 'featured1-cropped-compressed.jpg',
//   alternate_image_1: 'featured1-cropped-compressed.jpg',
//   alternate_image_2: 'featured1-cropped-compressed.jpg',
//   alternate_image_3: 'featured1-cropped-compressed.jpg'
// });

// INDEX ROUTE
app.get('/', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', {products: products});
    }
  });
});

// ROUTES FOR EACH CATEGORY
app.get('/clothing', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.render('clothing', {products: products});
    }
  });
});

app.get('/skate', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.render('show', {products: products, type: 'skate'});
    }
  });
});

app.get('/skate/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    if (err) {
      console.log(err);
    } else {
      res.render('item', {product: foundProduct});
    }
  });
});

app.get('/mens', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.render('show', {products: products, type: 'mens'});
    }
  });
});

app.get('/mens/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    if (err) {
      console.log(err);
    } else {
      res.render('item', {product: foundProduct});
    }
  });
});

app.get('/womens', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.render('show', {products: products, type: 'womens'});
    }
  });
});

app.get('/womens/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    if (err) {
      console.log(err);
    } else {
      res.render('item', {product: foundProduct});
    }
  });
});

app.get('/accessories', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.render('show', {products: products, type: 'accessories'});
    }
  });
});

app.get('/accessories/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    if (err) {
      console.log(err);
    } else {
      res.render('item', {product: foundProduct});
    }
  });
});

app.get('/admin', (req, res) => {
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.render('admin', {products: products});
    }
  });
});

// EDIT FEATURED ROUTE
app.get('/featured/:id', (req, res) => {
  Product.findById(req.params.id, (err, selectedItem) => {
    if (err) {
      console.log(err);
    } else {
      Product.find({}, (err, products) => {
        if (err) {
          console.log(err);
        } else {
          res.render('featured', {selected: selectedItem, products: products});
        }
      });
    }
  });
});

// UPDATE FEATURED ROUTE
app.put('/featured/:current/:replace', (req, res) => {
  Product.findOneAndUpdate({_id: req.params.current},
    {
      featured: false
    }, (err, oldFeatured) => {
    if (err) {
      console.log(err);
    } else {
      Product.findOneAndUpdate({_id: req.params.replace}, {
        featured: true
      }, (err, newFeatured) => {
          if (err) {
            console.log(err);
          } else {
            res.redirect('/admin');
          }
      });
    }
  });
});

// CREATE ROUTE
app.post('/products', (req, res) => {
  const name = req.body.product.name;
  const price = req.body.product.price;
  const description = req.body.product.description;
  const mainImage = req.body.product.main_image;
  const alternateOne = req.body.product.alternate_image_1;
  const alternateTwo = req.body.product.alternate_image_2;
  const alternateThree = req.body.product.alternate_image_3;
  const category = req.body.product.category;

  const newProduct = {
    name: name,
    price: price,
    description: description,
    main_image: mainImage,
    alternate_image_1: alternateOne,
    alternate_image_2: alternateTwo,
    alternate_image_3: alternateThree,
    category: category
  };

  Product.create(newProduct, (err, product) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/admin');
    }
  });
});

// NEW ROUTE (renders form)
app.get('/new', (req, res) => {
  res.render('new');
});

// EDIT ROUTE
app.get('/edit/:id', (req, res) => {
  Product.findById(req.params.id, (err, foundProduct) => {
    if (err) {
      console.log(err);
    } else {
      res.render('edit', {product: foundProduct});
    }
  });
});

// UPDATE ROUTE
app.put('/products/:id', (req, res) => {

  Product.findOneAndUpdate({_id: req.params.id},
    {
      name: req.body.product.name,
      price: req.body.product.price,
      description: req.body.product.description,
      main_image: req.body.product.main_image,
      alternate_image_1: req.body.product.alternate_image_1,
      alternate_image_2: req.body.product.alternate_image_2,
      alternate_image_3: req.body.product.alternate_image_3,
      category: req.body.product.category
    }, (err, updatedBlog) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/admin');
    }
  });
});

// DELETE ROUTE
app.delete('/products/:id', (req, res) => {
  Product.findOneAndDelete({_id: req.params.id}, (err, deletedProduct) => {
    if (err) {
      console.log(err);
    } else {
      console.log(req.params.id);
      res.redirect('/admin');
    }
  });
});

// 404 ERROR ROUTE
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(5000, () => {
  console.log('listening on port 5000');
});
