const stripe = require('stripe')('sk_test_51L8UYtGUl5wOGSTuehg8AcfyUYKRVmOpFJioKUwiEk4uKA2H3pGMPU3xBuYVr0ExNgCPDCfvGT6ByO6xyMNA9qzM0065M47FwP');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shoppingRouter = require('./routes/shopping');
var loginRouter = require('./routes/auth')
var checklogRouter = require('./routes/auth')

var app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
 }); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/shopping', shoppingRouter);
app.use('/auth',loginRouter)
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', checklogRouter);
app.use('/account',accountRouter)
app.use(express.static(path.join(__dirname, '../client/build')));
// Stripe -----------------------------
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1L8UyHGUl5wOGSTugOPT1Kca',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/cart?success=true`,
    cancel_url: `${YOUR_DOMAIN}/cart?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
// stripe -------------- ^


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
