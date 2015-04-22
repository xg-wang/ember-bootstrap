import Ember from 'ember';
import TooltipMixin from 'ember-bootstrap/mixins/tooltip-support';
import I18nSupport from 'ember-bootstrap/mixins/i18n-support';

export default Ember.Component.extend(TooltipMixin, I18nSupport, {
    tagName: 'span'
});