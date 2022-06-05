// import User model
const { User } = require('../models');
// import sign token
const { signToken } = require('../utils/auth');

module.exports = {
    // create user 
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: 'something went wrong' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    // user login
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if(!user) {
            return res.status(400).json({ message: 'No user found'});
        }
        const pw = await user.passwordIsCorrect(body.password);

        if(!pw) {
            return res.status(400).json({ message: 'Incorrect password' });
        }
        const token = signToken(user);
        res.json({ token, user });
    }
};