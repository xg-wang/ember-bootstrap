import Ember from 'ember';
import {getProperty, getPropertyFn} from 'ember-bootstrap/utils/config-proxy-properties';


var defaults = {
    tooltipDelay: 0,
    tooltipPlacement: 'top',
    tooltipTrigger: 'hover focus',
    tooltipViewport: { selector: 'body', padding: 0 }
};

function createPlugin() {
    if (this._state !== 'inDOM' || Ember.isBlank(getProperty(this, 'tooltipTitle', 'tooltip', defaults))) {
        return;
    }

    var containerElement = typeof this.container !== 'undefined' ? this.container.lookup('application:main').get('rootElement') : 'body';

    this.$().tooltip({
        container: containerElement,
        title: getPropertyFn(this, 'tooltipTitle', 'tooltip', defaults),
        delay: getProperty(this, 'tooltipDelay', 'tooltip', defaults),
        placement: getPropertyFn(this, 'tooltipPlacement', 'tooltip', defaults),
        trigger: getProperty(this, 'tooltipTrigger', 'tooltip', defaults),
        viewport: getProperty(this, 'tooltipViewport', 'tooltip', defaults)
    });
}


export default Ember.Mixin.create({
    attributeBindings: ['tabindex'],
    tabindex: null,

    _createTooltipOnInsert: Ember.on('didInsertElement', createPlugin),
    _createTooltipOnTitleChange: Ember.observer('tooltipTitle', createPlugin)
});
