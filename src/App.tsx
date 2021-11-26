import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddSchool from "./components/add-school.component";
import AddTeacher from "./components/add-teacher.component";
import AddStudent from "./components/add-student.component";
import SchoolList from "./components/school-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/schools"} className="navbar-brand">
            School App
          </Link>
          <div className="navbar-nav mr-auto">
            
           
            <li className="nav-item">
              <Link to={"/addSchool"} className="nav-link">
                 School
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addTeacher"} className="nav-link">
                 Teacher
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addStudent"} className="nav-link">
                 Student
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/addSchool"]} component={AddSchool} />
            <Route path="/addSchool" component={AddSchool} />
            <Route path="/addTeacher" component={AddTeacher} />
            <Route path="/addStudent" component={AddStudent} />
            <Route path= "/schools" component={SchoolList}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
