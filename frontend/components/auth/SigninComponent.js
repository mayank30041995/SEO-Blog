import React, { useState } from "react"
import { signin } from '../../actions/auth';
import Router from 'next/router';

const SigninComponent = () => {
    const [values, setValues]=useState({
        email:'mayankece155@gmail.com',
        password: '123456789',
        error: '',
        loading: false,
        message: '',
        showForm: true
    });

    const { email, password, error, loading, message, showForm} =  values;

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false});
        const user = { email, password };

        signin(user).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                // save user token to cookie
                // save user info to localstorage
                // authenticate user
                Router.push(`/`);
            }
        });
}
   
    const handleChange = name => e => {
        // console.log(e.target.value)
        setValues({...values, error: false, [name]: e.target.value})
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');

    const signinForm = () => {
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        value={email}
                        onChange={handleChange('email')}
                        type="email"
                        className="form-control"
                        placeholder="Type your email"
                    />
                </div>

                <div className="form-group">
                    <input
                        value={password}
                        onChange={handleChange('password')}
                        type="password"
                        className="form-control"
                        placeholder="Type your password"
                    />
                </div>

                <div>
                    <button className="btn btn-primary">Signin</button>
                </div>
            </form>
        );
    };


    return (
        <React.Fragment>
        {showError()}
        {showLoading()}
        {showMessage()}
        {showForm && signinForm()}
        </React.Fragment>
    )
}

export default SigninComponent;