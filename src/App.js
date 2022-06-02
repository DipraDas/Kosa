import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Services from './components/Pages/Services/Services';
import NotFound from './components/Pages/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import HomeComponents from './components/Pages/Home/HomeComponents/HomeComponents';
import Footer from './components/Shared/Footer/Footer';
import CommingSoon from './components/CommingSoon/CommingSoon';
import AboutComponents from './components/Pages/About/AboutComponents/AboutComponents';
import ContactComponents from './components/Pages/Contact/ContactComponents/ContactComponents';

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
          <AboutComponents></AboutComponents>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path='/contact'>
          <ContactComponents></ContactComponents>
        </Route>
        <Route path='/commingSoon'>
          <CommingSoon></CommingSoon>
        </Route>
        <Route path='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
