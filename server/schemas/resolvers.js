const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Mutation: {
        addUser: {
            addUser: async (parent, args) => {
                const user = await User.create(args);
                const token = signToken(user);

                return { token, user };
            },
            login: async (parent, {email, password}) => {
                const user = await User.findOne({ email });

                if (!user) {
                    throw new AuthenticationError('You entered incorrect information');
                }
                const validPassword = await user.isValidPassword(password);

                if (!validPassword) {
                    throw new AuthenticationError('You entered incorrect information')
                }

                const token = signToken(user);
                return { token, user };

            }
        }
    }
};

module.exports = resolvers;