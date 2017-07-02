import Ember from 'ember';

export default Ember.Controller.extend({
  navigation: Ember.inject.service('navigation'),

  menu: [
    {
      id: "index",
      name: "Accueil",
      tooltip: "Page d'accueil",
    },
    {
      id: "residents",
      name: "Les résidents",
      tooltip: "Informations sur les résidents"
    },
    {
      id: "center",
      name: "Le centre",
      tooltip: "Présentation des infrastructures du centre"
    },
    {
      id: "activities",
      name: "Les activités",
      tooltip: "Informations sur les différentes activités proposées au centre"
    }    ,
    {
      id: "sponsors",
      name: "Volontariat et sponsorship",
      tooltip: "Informations relatives au volontariat ainsi qu'aux différents sponsors"
    },
    {
      id: "contact",
      name: "Contact",
      tooltip: "Informations pour contacter le centre"
    }
  ],

  actions: {
    scrollTop() {
      Ember.run.debounce(function() {
        Ember.$('.middle').stop().animate({scrollTop: 0}, 500);
      }, 0);
    }
  }
});
