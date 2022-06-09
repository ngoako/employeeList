import { Link } from 'react-router-dom';
import React from 'react';

function Login() {
    return (
        <html>
            <head>
                <title>Dev-Academy</title>
                <meta charset="UTF-8" />
                <meta name="Description" content="Full stack development" />
                <meta name="author" content="Ngoako Masekela" />
                <meta name="keywords" content="FIGMA, youtube, css, divs, html, REACTjs,Mongodb,bootstrap,nodeJS" />
                <meta name="viewport" content="width=device-width, initial-scale = 1.0" />
                <link rel="stylesheet" href="style.css" />
                <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
            </head>
            <body>

                <nav class="navbar sticky-top navbar-dark  navbar-expand-md">
                <Link to="/" className="navbar-brand">Dev-Academy</Link>
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarMenu">
                        <ul class="navbar-nav ml-auto">
                            <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                            <li className="nav-item"><Link to="/team" className="nav-link" >Team</Link></li>
                            <li className="nav-item"><Link to="/tools" className="nav-link" >Tools</Link></li>
                            <li className="nav-item dropdown"><Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="dropdown01">Coaching</Link>
                                <div className="dropdown-menu" id="dropdown01">
                                    <Link to="/front" className="dropdown-item">Front-End Coaching</Link>
                                    <Link to="/back" className="dropdown-item">Back-End Coaching</Link>
                                    <Link to="/full" className="dropdown-item">Full-Stack Coaching</Link>
                                </div>
                            </li>
                            <li className="nav-item"><Link to="/courses" className="nav-link" href="team.html">Courses</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to="/registration" className="nav-link" >Register</Link></li>
                        </ul>
                    </div>
                </nav>

                <div id="login-box">
                    <div class="left">
                        <h1>Log in</h1>
                        <input type="text" name="email" placeholder="E-mail" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="password" name="password2" placeholder="Confirm password" />

                        <input type="submit" name="login_submit" value="login" />
                        <button class="btn btn-danger">Register</button>

                    </div>

                    <div class="right">
                        <span class="loginwith">Log in with<br />social network</span>

                        <button class="social-login facebook">Log in with facebook</button>
                        <button class="social-login twitter">Log in with Twitter</button>
                        <button class="social-login google">Log in with Google+</button>
                    </div>
                    <div class="or">OR</div>
                </div>


                <footer>
                    <div class="row">
                        <div class="col-md-3">
                            <h2 /* style="color: #ffffff;" */>Dev-Academy</h2>
                        </div>
                        <div class="col-md-3 ">
                            <ul>
                                <li><a href="/">Teach at our academy</a></li>
                                <li><a href="/">Get the app</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Contact us</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <ul>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Help and Support</a></li>
                                <li><a href="/">Investors</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <ul>
                                <li><a href="/">Terms</a></li>
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Cookie settings</a></li>
                                <li><a href="/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div class="attribution" /* style="color: #ffffff;" */>Designed and Developed by: <a href="/">Ngoako Masekela</a><p class="text-muted">&copy; 2022</p></div>
                <div class="row">
                    <div class="col-12-md social padding" /* style="margin-top:30px; margin-left:300px" */>
                        <a href="https://myaccount.google.com/"><i class="fab fa-google-plus-g"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=27722168387"><i class="fab fa-whatsapp"></i></a>
                        <a href="https://twitter.com/Ngoako17"><i class="fab fa-twitter"></i></a>
                        <a href="https://web.facebook.com/ngoako.masta/"><i class="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com/ngoakomasta/"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
            </body>
        </html>
    );
}
export default Login;