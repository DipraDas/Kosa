import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import About from './components/Pages/About/About';
import Services from './components/Pages/Services/Services';
import Contact from './components/Pages/Contact/Contact';
import NotFound from './components/Pages/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import HomeComponents from './components/Pages/Home/HomeComponents/HomeComponents';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <HomeComponents></HomeComponents>
        </Route>
        <Route path='/home'>
          <HomeComponents></HomeComponents>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
