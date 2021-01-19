import React, { useEffect, useState } from 'react';
//name export should in curly bracket and the default can dont use curly bracket
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

const SigninScreen = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;
    /* when signin  userinfo has the value so trigger the useEffect func*/
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, userInfo, redirect]);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        // click sign in and the page not gonna refresh 
        e.preventDefault();
        dispatch(signin(email, password));

    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">
                        Sign In
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer? <Link to="/register">Create your account</Link>
                        New customer?{' '}
                        <Link to={`/register?redirect=${redirect}`}>
                            Create your account
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SigninScreen;