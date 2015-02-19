import Ember from 'ember';
import TooltipSupportMixin from 'ember-bootstrap/mixins/tooltip-support';

module('TooltipSupportMixin');

// Replace this with your real tests.
test('it works', function() {
  var TooltipSupportObject = Ember.Object.extend(TooltipSupportMixin);
  var subject = TooltipSupportObject.create();
  ok(subject);
});
