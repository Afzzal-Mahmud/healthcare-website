import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogInForm from './Components/LogInForm/LogInForm';
import DoctorsMain from './Pages/Doctors/DoctorsMain';


function App() {
  return (
    <>
    <Router>
    <Header></Header>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/login' component={LogInForm}></Route>
      <Route path='/doctors' component={DoctorsMain}></Route>
    </Switch>
    </Router>
    </>
  );
}

export default App;
