<<<<<<< HEAD
<<<<<<< HEAD
const router = require('express').Router();
// const userRoutes = require('./user-routes');

// router.use('/users', userRoutes);

module.exports = router;
=======
>>>>>>> develop
=======
const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

module.exports = router;
>>>>>>> develop
