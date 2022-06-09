
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Index from './components/Index';
import Registration from './components/registration';
import Login from './components/login';
import Team from './components/team';
import Contact from './components/contact';
import About from './components/about';
import Courses from './components/courses';
import Tools from './components/tools';
import Coaching from './components/coaching';
import Front from './components/front';
import Back from './components/back';
import Fulls from './components/full';
import Dashboard from './components/dashboard';
import AddOrEdit from './components/addOrEdit';
import Updated from './updated';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Index />}/>
            <Route exact path="/registration" element={<Registration />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/team" element={<Team />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/courses" element={<Courses />}/>
            <Route exact path="/tools" element={<Tools />}/>
            <Route exact path="/coaching" element={<Coaching />}/>
            <Route exact path="/front" element={<Front />}/>
            <Route exact path="/back" element={<Back />}/>
            <Route exact path="/full" element={<Fulls />}/>
            <Route exact path="/dashboard" element={<Dashboard />}/>
            <Route exact path="/addOrEdit" element={<AddOrEdit />}/>
            <Route exact path="/updated" element={<Updated />}/>
          </Routes>
        </div>
     </div>
    </Router>
  );
}

export default App;
