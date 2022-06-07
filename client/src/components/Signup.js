import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [createUser, { error }] = useMutation(CREATE_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await createUser({
                variables: { ...formState }
            });
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                    className='form-input'
                    placeholder='Enter Username'
                    name='username'
                    type='username'
                    id='username'
                    value={formState.username}
                    onChange={handleChange}
                />
                <input
                    className='form-input'
                    placeholder='Enter Email'
                    name='email'
                    type='email'
                    id='email'
                    value={formState.email}
                    onChange={handleChange}
                />
                <input
                    className='form-input'
                    placeholder='******'
                    name='password'
                    type='password'
                    id='password'
                    value={formState.password}
                    onChange={handleChange}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
            {error && <div>Sign up failed</div>}
        </div>
    );
};

export default Signup;