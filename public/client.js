import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router';

import App from './src/App';

import LoginFragment from './src/components/login';

import HomeFragment from './src/components/home';

import ExampleFragment from './src/components/example'

import Auth from './src/services/auth';

let auth = new Auth();

const app = document.getElementById('app');
const routes = {
  Login : {
    path: '/login',
    component: LoginFragment
  },
  App : {
    path: '/',
    component: App,
    indexRoute: { component: HomeFragment },
    onEnter: auth.ensureAuth,
  }
}

ReactDOM.render(
  <Router history={hashHistory} routes={[routes.Login, routes.App]} />
  ,app);
