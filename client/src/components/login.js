import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


const LoginForm = (props) => {
<<<<<<< HEAD
    const [formState, setFormState] = useState({ email: '', password: '' });
=======
    const [formState, setFormState] = useState({ email: '', password: ''});
>>>>>>> 16c480b22ebf1db14c878bc34d45ff004b366537
    const [login, { error }] = useMutation(USER_LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
<<<<<<< HEAD
        setFormState({ ...formState, [name]: value });
=======
        setFormState({...formState, [name]: value });
>>>>>>> 16c480b22ebf1db14c878bc34d45ff004b366537
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.log(e);
        }

        setFormState({
            email: '',
            password: ''
        });
    };

    return (
        <div className='Login'>
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Email</label>
<<<<<<< HEAD
                    <input type="email"
                        placeholder='Enter email'
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text"
                        placeholder='******'
                        name="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}
                    />
=======
                    <input type="email" 
                           placeholder='Enter email'
                           name="email" 
                           id="email"
                           value={formState.email}
                           onChange={handleChange} 
                           />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" 
                           placeholder='******'
                           name="password"
                           id="password"
                           value={formState.password}
                           onChange={handleChange} 
                           />
>>>>>>> 16c480b22ebf1db14c878bc34d45ff004b366537
                </div>
                <button type="submit">Submit</button>
            </form>
            {error && <div>Login failed</div>}
        </div>
    )
}

export default LoginForm;