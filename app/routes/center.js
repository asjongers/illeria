import Ember from 'ember';

export default Ember.Route.extend({
  navigation: Ember.inject.service('navigation'),
  pageName: 'center',

  beforeModel: function() {
    this.set('navigation.currentPage', this.get('pageName'));
  }
});
