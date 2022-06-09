import { Link } from 'react-router-dom';
import React from 'react';
import images from '../images/backgroundd.png';

function Registration() {
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

                <nav class="navbar sticky-top  navbar-dark navbar-expand-md">
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
                            <li className="nav-item"><Link to="/courses" className="nav-link">Courses</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                        </ul>
                    </div>
                </nav>

                <div class="registration__container">
                    <div class="container__child registration__thumbnail">
                        <div class="thumbnail__content text-center">
                            <h1 class="heading--primary"><span class="display-2">Welcome</span><br /> to Dev-Academy!</h1>
                            <h2 class="heading--secondary">Are you ready to join the Developers?</h2>
                        </div>

                    </div>

                    <div class="container__child registration__form">
                        <img src={images} alt="unsupported format" class="rounded-circle"  /* style="margin-left: 70px; height: 200px; width: 200px; margin-top: -90px;" */ />
                        <form action="#">

                            <div class="form-group">
                                <input class="form-control" type="text" name="name" id="name" placeholder="Name" required />
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" name="surname" id="surname" placeholder="Surname" required />
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="text" name="email" id="email" placeholder="Email Address" required />
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="password" name="password" id="password" placeholder="Enter Password" required />
                            </div>
                            <div class="form-group">
                                <input class="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="Confirm Password" required />
                            </div>
                            <div class="m-t-lg">
                                <ul class="list-inline">
                                    <li>
                                        <input /* style="color: #ffffff;" */ class="btn btn--form" type="submit" value="Register" />
                                    </li>
                                    <li>
                                        <a class="login__link" href="login.html">I am already a member</a>
                                    </li>
                                </ul>
                            </div>
                        </form>
                    </div>
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
                <div class="attribution" /* style="color: #ffffff; " */>Designed and Developed by: <a href="/">Ngoako Masekela</a><p class="text-muted">&copy; 2022</p></div>
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
export default Registration;