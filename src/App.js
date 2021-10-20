import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogInForm from './Components/LogInForm/LogInForm';
import DoctorsMain from './Pages/Doctors/DoctorsMain';
import AuthProvider from './Context/AuthProvider';
import ServicesMain from './Pages/Services/ServicesMain/ServicesMain';
import ServicesDetail from './Pages/Services/ServicesDetail/ServicesDetail';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import WhyChooseUs from './Pages/WhyChooseUs/WhyChooseUs';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <AuthProvider>
    <Router>
    <Header></Header>
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route path='/home' component={Home}></Route>
      <Route path='/login' component={LogInForm}></Route>
      <Route exact path='/services' component={ServicesMain}></Route>
      {/* add why choose us components onPrivate Route */}
      <PrivateRoute exact path='/whychooseus'>
        <WhyChooseUs></WhyChooseUs>
      </PrivateRoute>
      {/* detail page is private to see */}
      <PrivateRoute exact path='/servicesdetail/:id'>
        <ServicesDetail></ServicesDetail>
      </PrivateRoute>
      <PrivateRoute exact path='/doctors'>
        <DoctorsMain></DoctorsMain>
      </PrivateRoute>

      <Route path='*' component={PageNotFound}></Route>
    </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
  );
}

export default App;
