import { Link, useNavigate} from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {FiEdit2} from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs'
/* import AddOrEdit from './addOrEdit'; */

function Dashboard() {

    const [employeeList, setEmployeeList] = useState([]);
    const employeeNavigate = useNavigate();
    
    
    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) =>{
            setEmployeeList(response.data);
        });
    }, []);
  
    const updateEmployee = (id) => {
       
        localStorage.setItem("EmployeeId", id.toString());
        employeeNavigate("/updated");
        
    }

    const deleteEmployee = (id) => {

        Axios.delete(`http://localhost:3001/delete/${id}`);
    };
    /* pass an object for each input on the above*/

    return (
        <html>
            <head>
                <title>Dev-Academy</title>
                <meta charset="UTF-8" />
                <meta name="Description" content="Full stack development" />
                <meta name="author" content="Ngoako Masekela" />
                <meta name="keywords" content="FIGMA, youtube, css, divs, html, REACTjs,Mongodb,bootstrap,nodeJS" />
                <meta name="viewport" content="width=device-width, initial-scale = 1.0" />
                <link rel="stylesheet" href="dashboard.css" />
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


                        <h4 class="createNewButton"><Link to="/addOrEdit" class="btn btn-secondary"><BsPlusCircle color={'green'} size={25} className="add_icon" />Create New</Link> <span class="display-3">Team List</span></h4>

                        <div class="container tab">
                            <div class="table-responsive{-sm}">
                            <table  class="table table-hover table-borderless table-striped table-dark">
                                <thead /* class="thead-light" */>
                                    <tr>
                                        <th>Name</th>
                                        <th>Surname</th>
                                        <th>Email</th>
                                        <th>Position</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody >
                                {employeeList.map((val, key) => {
                                    return(
                                    <tr key={key}>
                                 
                                    
                                        <td>{val.name}</td>
                                     
                                       <td>{val.surname}</td>
                             
                                        <td>{val.email}</td>

                                        <td>{val.position}</td>
                                        
                                         <td onClick={() => updateEmployee(val._id)} ><FiEdit2 color={'green'} className="action" /></td> 
                                        
                                        
                                        <td onClick={() => deleteEmployee(val._id)} ><BsTrash color={'red'} className="action" /></td> 
                                     
                                   </tr>
                                    )
                                })}
                                
                                </tbody>
                            </table>
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
                <div class="attribution" /* style="color: #ffffff;" */>Designed and Developed by: <a href="/">Ngoako Masekela</a> <p class="text-muted">&copy; 2022</p></div>
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
export default Dashboard;