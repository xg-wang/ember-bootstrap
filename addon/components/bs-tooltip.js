import Ember from 'ember';
import TooltipMixin from 'ember-bootstrap/mixins/tooltip-support';

export default Ember.Component.extend(TooltipMixin, {
    tagName: 'span'
});