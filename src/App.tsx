import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import AddSchool from "./components/add-school.component";
import AddTeacher from "./components/add-teacher.component";
import AddStudent from "./components/add-student.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/tutorials"} className="navbar-brand">
          School App
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
             
            </li>
            <li className="nav-item">
             
            </li>
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
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/tutorials/:id" component={Tutorial} />
            <Route path="/addSchool" component={AddSchool} />
            <Route path="/addTeacher" component={AddTeacher} />
            <Route path="/addStudent" component={AddStudent} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
