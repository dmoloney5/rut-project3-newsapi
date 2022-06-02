const express = require('express');
const path = require('path');
const db = require('./config/connection');
 const stripe = require("stripe")('sk_test_51L5eeWEeZMz10B1GjVl4Wh0UzFbshuIYEfqnOTauyyGK0eXRLigx05CNATKWmGMRjfIyA7rvssttVevEdKhUepkP00Vvl0Jpze');
const routes = require('./routes');
//const uuid = require('uuid/v4')
// const cors = require('cors')



const app = express();
const PORT = process.env.PORT || 3001;
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use (cors())

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
