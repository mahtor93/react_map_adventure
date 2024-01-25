import React, { useState, useEffect } from 'react';
import { Form } from 'react-router-dom';
const Login = () =>{

    return(
        <div className="container d-block justify-content-center pt-5">
            <h2>Iniciar Sesión</h2>
            <Form method='post' action=''>
                <div className="form-group pb-3">
                    <label for="username">User or Email:</label>
                    <input type="text" name="username" className="form-control"/>
                </div>
                <div className="form-group pb-3">
                <label for="passwd">Password:</label>
                    <input type="password" name="passwd" className="form-control"/>
                </div>
                <button className="btn btn-primary">Login</button>
            </Form>
        </div>
    )
}

export default Login;