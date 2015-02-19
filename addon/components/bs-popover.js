import Ember from 'ember';
import PopoverMixin from 'ember-bootstrap/mixins/popover-support';

export default Ember.Component.extend(PopoverMixin, {
    tagName: 'span'
});
