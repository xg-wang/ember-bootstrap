import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('modal', function() {
        this.route('from-action');
        this.route('from-route');
    });

    this.route('forms');
    this.route('dropdown');
    this.route('tooltip');
});

export default Router;
