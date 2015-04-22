import Ember from 'ember';
import PopoverMixin from 'ember-bootstrap/mixins/popover-support';
import I18nSupport from 'ember-bootstrap/mixins/i18n-support';

export default Ember.Component.extend(PopoverMixin, I18nSupport, {
    tagName: 'span'
});
