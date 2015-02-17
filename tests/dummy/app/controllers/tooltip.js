import Ember from 'ember';

export default Ember.Controller.extend({
    tooltipConfig: Ember.Object.create({
        tooltipTitle: 'bla bla'
    }),
    tooltipTitle: 'Enter something',
    popoverConfig: Ember.Object.create({
        popoverTitle: 'Title',
        popoverContent: 'bla bla'
    }),
    popoverTitle: 'Enter something',
    popoverContent: 'Enter something'
});