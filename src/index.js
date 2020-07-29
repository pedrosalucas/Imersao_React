import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import VideoRegister from './pages/Register/Video/index.js'
import CategoryRegister from './pages/Register/Category'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={VideoRegister} />
      <Route path="/register/category" component={CategoryRegister} />
      <Route component={() => (<div>Pagina 404</div>)}  />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
