// import user model
const { User } = require('../models');

const { signToken } = require('../utils/auth');

module.exports = {
    // create a user 
    async createUser({ body }, res) {
        const user = await User.create(body);

        if(!user) {
            return res.status(400).json({ message: 'Something went wrong!' });
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    // Login User
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{username: body.username}, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: 'No user found'});
        }

        const passwordSuccess = await user.isSuccessPassword(body.password);

        if(!passwordSuccess) {
            return res.status(400).json({ message: 'Incorrect password'});
        }
        const token = signToken(user);
        res.json({token, user});
    }
}