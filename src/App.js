import React , {Component} from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import Footer from './components/Footer';
import Home from "./components/Home";
import Movie from './components/Movie';
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
  render () {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <section>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:movie_id" component={Movie} />
          </Switch>
          <Footer />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
