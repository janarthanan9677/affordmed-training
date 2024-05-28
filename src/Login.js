import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);

        // Add validation or authentication logic here

        navigate('/Home');
    };

    return (
        <div>
            <section className="bg-primary py-3 py-md-5 py-xl-8">
                <div className="container">
                    <div className="row gy-4 align-items-center">
                        <div className="col-12 col-md-6 col-xl-7">
                            <div className="d-flex justify-content-center text-bg-primary">
                                <div className="col-12 col-xl-9">
                                    <img className="img-fluid rounded mb-4" loading="lazy" src="./assets/img/bsb-logo-light.svg" width="245" height="80" alt="BootstrapBrain Logo" />
                                    <hr className="border-primary-subtle mb-4" />
                                    <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                                    <p className="lead mb-5">We write words, take photos, make videos, and interact with artificial intelligence.</p>
                                    <div className="text-endx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-grip-horizontal" viewBox="0 0 16 16">
                                            <path d="M2 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm3 3a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-5">
                            <div className="card border-0 rounded-4">
                                <div className="card-body p-3 p-md-4 p-xl-5">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="mb-4">
                                                <h3>Sign in</h3>
                                                <p>Don't have an account? <Link to="/Signup">Signup</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row gy-3 overflow-hidden">
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input 
                                                        type="email" 
                                                        className="form-control" 
                                                        name="email" 
                                                        id="email" 
                                                        placeholder="name@example.com" 
                                                        value={email} 
                                                        onChange={(e) => setEmail(e.target.value)} 
                                                        required 
                                                    />
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating mb-3">
                                                    <input 
                                                        type="password" 
                                                        className="form-control" 
                                                        name="password" 
                                                        id="password" 
                                                        placeholder="Password" 
                                                        value={password} 
                                                        onChange={(e) => setPassword(e.target.value)} 
                                                        required 
                                                    />
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" name="remember_me" id="remember_me" />
                                                    <label className="form-check-label text-secondary" htmlFor="remember_me">
                                                        Keep me logged in
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-grid">
                                                    <button className="btn btn-primary btn-lg" type="submit"><Link to = "/Login">Log in now</Link></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end mt-4">
                                                <Link to="/forgot-password">Forgot password</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="mt-4 mb-4">Or continue with</p>
                                            <div className="d-flex gap-2 gap-sm-3 justify-content-centerX">
                                                <a href="#!" className="btn btn-outline-danger bsb-btn-circle bsb-btn-circle-2xl">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                                    </svg>
                                                </a>
                                                <a href="#!" className="btn btn-outline-primary bsb-btn-circle bsb-btn-circle-2xl">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258V8.05h2.218l-.354 2.325H9.251v5.625c3.824-.604 6.75-3.934 6.75-7.951z" />
                                                    </svg>
                                                </a>
                                                <a href="#!" className="btn btn-outline-dark bsb-btn-circle bsb-btn-circle-2xl">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.539 2.292 6.532 5.471 7.594.4.074.547-.174.547-.388 0-.19-.007-.693-.01-1.36-2.226.484-2.695-1.073-2.695-1.073-.364-.923-.888-1.17-.888-1.17-.726-.497.055-.487.055-.487.803.057 1.226.824 1.226.824.714 1.223 1.873.87 2.33.665.073-.517.28-.87.508-1.07-1.776-.202-3.644-.888-3.644-3.955 0-.873.312-1.588.823-2.15-.083-.202-.357-1.017.078-2.121 0 0 .67-.215 2.2.82A7.671 7.671 0 0 1 8 4.691c.68.003 1.365.092 2.004.27 1.53-1.035 2.2-.82 2.2-.82.436 1.104.162 1.919.08 2.12.513.562.822 1.277.822 2.15 0 3.074-1.87 3.75-3.652 3.947.288.248.544.737.544 1.486 0 1.073-.01 1.936-.01 2.2 0 .216.144.466.552.386C13.709 14.53 16 11.536 16 8c0-4.42-3.58-8-8-8z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <p className="text-secondary mt-4 mb-0">
                                                By continuing, you acknowledge that you have read, understood, and agree to our <Link to="/privacy-policy" className="text-secondary"><u>Privacy Policy</u></Link>, and <Link to="/terms-of-service" className="text-secondary"><u>Terms & Conditions</u></Link>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center my-3x">
                                <Link to="/Landing" className="btn btn-outline-light btn-lg">Back to Homepage</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
