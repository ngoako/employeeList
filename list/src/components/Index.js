import { Link } from 'react-router-dom';
import React from 'react';
import images from '../images/front.jfif';

function Index() {
  return (
    <div className="App">
      <html>
      <head>
        <title>Dev-Academy</title>
        <meta charset="UTF-8"/>
        <meta name="Description"  content="Full stack development"/>
        <meta name="author" content="Ngoako Masekela"/> 
        <meta name="keywords" content="FIGMA, youtube, css, divs, html, REACTjs,Mongodb,bootstrap,nodeJS"/>
        <meta name="viewport" content="width=device-width, initial-scale = 1.0"/>
        <link rel="stylesheet" href="index.css"/>
        <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script> 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"/>
   </head>
        <body>
        

          <nav className="navbar sticky-top navbar-dark navbar-expand-md">
            <Link to="/" className="navbar-brand">Dev-Academy</Link>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarMenu">
              <ul className="navbar-nav ml-auto">
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
                <li className="nav-item"><Link to="/registration" className="nav-link" >Register</Link></li>
                <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
              </ul>
            </div>
          </nav>

            <header>
            <div className="container">
              <div>
                <h1 className="display-2">Dev-Academy</h1>
                <p>
                  We are glad you’ve visited our site, and we want to assure you that by becoming
                  part of our team, you will be one of the best developers in the industry!
                </p>
                <p>
                  We have multiple development courses and the best tutors and coaching that can make
                  you an awesome developer. We use the tools and technologies that are currently in the market, that every developer must have
                  <br /><br /><h6>Ngoako Masekela - Founder of Dev-Academy</h6>
                </p>
              </div>
              <img src={images} alt="unsupported format" />
            </div>
          </header>

          <section className="boxes">
            <div className="container">
              <div className="box">
                <h2>Front-End</h2>
                <p>
                  Learn front end development tools such as Atom, Git, HTML, Bootstrap, jQuery <br /> <button className="btn btn-primary">Learn More</button>
                </p>
              </div>

              <div className="box">
                <h2>Back-End</h2>
                <p>
                  Learn front end development tools such as PHP, JavaScript, MongoDB, Nodejs <br /> <button className="btn btn-primary">Learn More</button>
                </p>
              </div>

              <div className="box">
                <h2>Full-Stack</h2>
                <p>
                  Learn front end and Back end tools such as HTML, CSS JavaScript, MongoDB, Nodejs <br /> <button className="btn btn-primary">Learn More</button>
                </p>
              </div>
            </div>
          </section>

          <footer>
            <div className="row">
              <div className="col-md-3">
                <h2 /* style={`"color: #ffffff;"`} */>Dev-Academy</h2>
              </div>
              <div className="col-md-3 ">
                <ul>
                  <li><a href="index.html">Teach at our academy</a></li>
                  <li><a href="index.html">Get the app</a></li>
                  <li><a href="index.html">About us</a></li>
                  <li><a href="index.html">Contact us</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li><a href="index.html">Careers</a></li>
                  <li><a href="index.html">Blog</a></li>
                  <li><a href="index.html">Help and Support</a></li>
                  <li><a href="index.html">Investors</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul>
                  <li><a href="index.html">Terms</a></li>
                  <li><a href="index.html">Privacy</a></li>
                  <li><a href="index.html">Cookie settings</a></li>
                  <li><a href="index.html">Sitemap</a></li>
                </ul>
              </div>
            </div>
          </footer>
          <div className="attribution"/*  style={`"color: #ffffff;"`} */ >Designed and Developed by: <a href="index.html">Ngoako Masekela</a><p class="text-muted">&copy; 2022</p></div>
          <div className="row">
            <div className="col-12-md social padding" /* style={`"margin-top:30px; margin-left:300px;"`} */ >
              <a href="https://myaccount.google.com/"><i className="fab fa-google-plus-g"></i></a>
              <a href="https://api.whatsapp.com/send?phone=27722168387"><i className="fab fa-whatsapp"></i></a>
              <a href="https://twitter.com/Ngoako17"><i className="fab fa-twitter"></i></a>
              <a href="https://web.facebook.com/ngoako.masta/"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/ngoakomasta/"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        </body>
      </html>
    </div>
  );
}

export default Index;
