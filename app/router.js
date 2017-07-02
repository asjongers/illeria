import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('residents');
  this.route('center');
  this.route('activities');
  this.route('contact');
  this.route('sponsors');
});

export default Router;
