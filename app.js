// when requiring from files you specify ./  to say we look in current folder or ../ to specify
// we go one level up and then look 
const path = require('path');

const express = require('express');
const csrf = require('csurf');
// this ensures all non get requests should have a valid csurf token
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const protectRoutesMiddleware = require('./middlewares/protect-routes');
const cartMiddleware = require('./middlewares/cart');
const updateCartPricesMiddleware = require('./middlewares/update-cart-prices');
const notFoundMiddleware = require('./middlewares/not-found');
const authRoutes = require('./routes/auth.routes');
const productsRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes = require('./routes/admin.routes');
const cartRoutes = require('./routes/cart.routes');
const ordersRoutes = require('./routes/orders.routes');

const app = express();

app.set('view engine', 'ejs');
// we tell express that we want  to use ejs package fo rendering views
app.set('views', path.join(__dirname, 'views'));
// dirname is used to denote path for project folder
// we make express aware of where views folder is and use ejs to handle views there 
// where to find the views 
app.use(express.static('public'));
// register a builtin middleware for files present in public folder  , this middle 
// ware looks for a path inside public folder
// register a middleware to handle attched data in incmoing requests specifically data from forms 
app.use('/products/assets', express.static('product-data'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// used to handle ajax request and extract data in json format from such requests
const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());

app.use(cartMiddleware);
app.use(updateCartPricesMiddleware);

app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRoutes);
// this allows us to register routehandlers defined in authRoutes.routes as middleware functions 
app.use(productsRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', protectRoutesMiddleware, ordersRoutes);
// you can't access these pages by just entering correct url
app.use('/admin', protectRoutesMiddleware, adminRoutes);
// first parameter acts a filter so only paths starting from that path will be used

app.use(notFoundMiddleware);

app.use(errorHandlerMiddleware);


db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!');
    console.log(error);
  });
  //   then is used if promise successfully resolves and cathc is used if error occurs 
