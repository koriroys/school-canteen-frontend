import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth', function() {
    this.route('login');
    this.route('register');
    this.route('admin', function() {
      this.route('login');
    });
  });
  this.route('app', function() {});
  this.route('admin', function() {
    this.route('dashboard');
  });
});

export default Router;
