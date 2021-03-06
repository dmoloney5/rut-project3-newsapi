import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';


const LoginForm = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(USER_LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({ ...formState, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
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
                    <input type="password" 
                           placeholder='******'
                           name="password"
                           id="password"
                           value={formState.password}
                           onChange={handleChange} 
                           />
                </div>
                <button type="submit">Submit</button>
            </form>
            {error && <div>Login failed</div>}
        </div>
    )
}

export default LoginForm;