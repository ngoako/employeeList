import { Link } from 'react-router-dom';
import React from 'react';
import download from '../images/download (6).jpg';
import background from '../images/background.jpg';
import backgroundd from '../images/backgroundd.png';
import backgrounds from '../images/download (1).jpg';
import downloo from '../images/download (16).jpg';
import downlood from '../images/download (3).jpg';
import downloading from '../images/download (5).jpg';
import downloadingg from '../images/download.jfif';
import dow from '../images/download.jpg';
import tree from '../images/tree.jpeg';
import profile from '../images/profile.jpeg';
import front from '../images/front.jfif';


function Team() {
    return (
        <html>
            <head>
                <title>Dev-Academy</title>
                <meta charset="UTF-8" />
                <meta name="Description" content="Full stack development" />
                <meta name="author" content="Ngoako Masekela" />
                <meta name="keywords" content="FIGMA, youtube, css, divs, html, REACTjs,Mongodb,bootstrap,nodeJS" />
                <meta name="viewport" content="width=device-width, initial-scale = 1.0" />
                <link rel="stylesheet" href="team.css" />
                <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
            </head>
            <body>

                <nav class="navbar sticky-top navbar-dark  navbar-expand-md">
                <Link to="/" className="navbar-brand">Dev-Academy</Link>
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarMenu">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item"><Link to="/about" class="nav-link">About</Link></li>
                            <li class="nav-item"><Link to="/tools" class="nav-link">Tools</Link></li>
                            <li className="nav-item dropdown"><Link to="/" className="nav-link dropdown-toggle" data-toggle="dropdown" data-target="dropdown01">Coaching</Link>
                                <div className="dropdown-menu" id="dropdown01">
                                    <Link to="/front" className="dropdown-item">Front-End Coaching</Link>
                                    <Link to="/back" className="dropdown-item">Back-End Coaching</Link>
                                    <Link to="/full" className="dropdown-item">Full-Stack Coaching</Link>
                                </div>
                            </li>
                            <li className="nav-item"><Link to="/courses" className="nav-link">Courses</Link></li>
                            <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
                            <li className="nav-item"><Link to="/registration" className="nav-link" >Register</Link></li>
                            <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                        </ul>
                    </div>
                </nav>

                <h3 class="display-4 title">Our Team</h3>
                <div class="flex-container">
                    <div class="flex-item">
                        <div class="img">
                            <img src={download} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Front End Developer</p>
                        </div>
                    </div>

                    <div class="flex-item">
                        <div class="img">

                            <img src={background} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Senior Developer</p>
                        </div>
                    </div>



                    <div class="flex-item">
                        <div class="img">

                            <img src={backgroundd} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Project Manager</p>
                        </div>
                    </div>


                    <div class="flex-item">
                        <div class="img">
                            <img src={backgrounds} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>

                    <div class="flex-item">
                        <div class="img">

                            <img src={downloo} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>

                    </div>

                    <div class="flex-item">
                        <div class="img">
                            <img src={downlood} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>



                    <div class="flex-item">
                        <div class="img">

                            <img src={downloading} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>




                    <div class="flex-item">
                        <div class="img">

                            <img src={downloadingg} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>

                    <div class="flex-item">
                        <div class="img">

                            <img src={dow} alt="unsupported format" />
                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>

                    </div>

                    <div class="flex-item">
                        <div class="img">
                            <img src={front} alt="unsupported format" />

                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>



                    <div class="flex-item">
                        <div class="img">
                            <img src={profile} alt="unsupported format" />

                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>
                    </div>




                    <div class="flex-item">
                        <div class="img">
                            <img src={tree} alt="unsupported format" />

                        </div>
                        <div class="caption">
                            <h3>Ngoako Masekela</h3>
                            <p>Full Stack Developer</p>
                        </div>
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
                <div class="attribution" /* style="color: #ffffff;" */>Designed and Developed by: <a href="/">Ngoako Masekela</a><p class="text-muted">&copy; 2022</p></div>


                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
            </body>
        </html>
    );
}
export default Team;