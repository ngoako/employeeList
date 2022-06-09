import { Link } from 'react-router-dom';
import React, { useEffect,useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';
import { BsTrashFill } from 'react-icons/bs';
import Axios from 'axios';



function Updated() {
    let [newName, setNewName] = useState("");
    let [newSurname, setNewSurname] = useState("");
    let [newEmail, setNewEmail] = useState("");
    let [newPosition, setNewPosition] = useState("");

    const [employeeList, setEmployeeList] = useState([]);
    const id = localStorage.getItem("EmployeeId")

    useEffect(() => {
        Axios.get(`http://localhost:3001/view/${id}`).then((response) =>{
            setEmployeeList(response.data);
        });
    }, []);
  
    const updateEmployee = async () => {
        if(newName === ''){
            newName = employeeList.name
        }
        if(newSurname === ''){
            newSurname = employeeList.surname
        }
        if(newEmail === ''){
            newEmail = employeeList.email
        }
        if(newPosition === ''){
            newPosition = employeeList.position
        }

        const employeeUpdated = await Axios.put("http://localhost:3001/update/"+id, {
            newName:newName,
            newSurname:newSurname,
            newEmail:newEmail,
            newPosition:newPosition
        });
        if(employeeUpdated === undefined || employeeUpdated === null){
            return alert("Error updating the employee data!")
        }
        alert(employeeUpdated.data.message)
    }


    return (
        <html>
            <head>
                <title>Dev-Academy</title>
                <meta charset="UTF-8" />
                <meta name="Description" content="Full stack development" />
                <meta name="author" content="Ngoako Masekela" />
                <meta name="keywords" content="FIGMA, youtube, css, divs, html, REACTjs,Mongodb,bootstrap,nodeJS" />
                <meta name="viewport" content="width=device-width, initial-scale = 1.0" />
                <link rel="stylesheet" href="addOrEdit.css" />
                <script src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
            </head>
            <body>

                <nav className="navbar sticky-top navbar-dark  navbar-expand-md">
                    <Link to="/" className="navbar-brand">Dev-Academy</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu"><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navbarMenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to="/" className="nav-link" >Home</Link></li>
                        </ul>
                    </div>
                </nav>

         
                    <h3 className="display-4 titles">Update Employee</h3>

                    <form className="addForm" autoComplete="off">
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control"  name="name" placeholder={employeeList.name} onChange={(event) => {
                                setNewName(event.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label>Surname</label>
                            <input type="text" className="form-control"  name="surname" placeholder={employeeList.surname} onChange={(event) => {
                                setNewSurname(event.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control"  name="email" placeholder={employeeList.email} onChange={(event) => {
                                setNewEmail(event.target.value);
                            }} />

                        </div>
                        <div className="form-group">
                            <label>Position</label>
                            <input type="text" className="form-control"  name="email" placeholder={employeeList.position} onChange={(event) => {
                                setNewPosition(event.target.value);
                            }} />
                        </div>
                        <div className="form-group">

                            <button type="submit" onClick={()=> updateEmployee(employeeList._id)} className="btn btn-info"><BsPlusCircle color={'green'} size={25} className="add_icon" /> Save</button>
                            <Link to="/dashboard" className="btn btn-secondary"><BsTrashFill color={'brown'} size={25} className="add_icon" />View All</Link>
                        </div>
                    </form>


                <footer>
                    <div className="row">
                        <div className="col-md-3">
                            <h2 /* style="color: #ffffff;" */>Dev-Academy</h2>
                        </div>
                        <div className="col-md-3 ">
                            <ul>
                                <li><a href="/">Teach at our academy</a></li>
                                <li><a href="/">Get the app</a></li>
                                <li><a href="/">About us</a></li>
                                <li><a href="/">Contact us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li><a href="/">Careers</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Help and Support</a></li>
                                <li><a href="/">Investors</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li><a href="/">Terms</a></li>
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Cookie settings</a></li>
                                <li><a href="/">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
                <div className="attribution" /* style="color: #ffffff;" */>Designed and Developed by: <a href="/">Ngoako Masekela</a><p className="text-muted">&copy; 2022</p></div>
                <div className="row">
                    <div className="col-12-md social padding" /* style="margin-top:30px; margin-left:300px" */>
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
    );
}
export default Updated;