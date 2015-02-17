import Ember from 'ember';
import PopoverSupportMixin from 'ember-bootstrap/mixins/popover-support';

module('PopoverSupportMixin');

// Replace this with your real tests.
test('it works', function() {
  var PopoverSupportObject = Ember.Object.extend(PopoverSupportMixin);
  var subject = PopoverSupportObject.create();
  ok(subject);
});
