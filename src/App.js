import React , {Component} from 'react';
import {BrowserRouter, Switch,Route } from 'react-router-dom';
import Navbar from './components/NavBar'
import MovieList from './components/MovieList';
import Movie from './components/Movie';
import 'font-awesome/css/font-awesome.min.css';


class App extends Component {
  render () {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <section>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MovieList} />
            <Route path="/:movie_id" component={Movie} />
          </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
