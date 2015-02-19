import Ember from 'ember';
import {getProperty, getPropertyFn} from 'ember-bootstrap/utils/config-proxy-properties';


var defaults = {
    popoverDelay: 0,
    popoverPlacement: 'top',
    popoverTrigger: 'click',
    popoverViewport: { selector: 'body', padding: 0 },
    popoverAnimation: true,
    popoverHtml: false
};

function createPlugin() {
    if (Ember.isBlank(getProperty(this, 'popoverTitle', 'popover', defaults))) {
        return;
    }

    this.$().popover({
        container: 'body',
        title: getPropertyFn(this, 'popoverTitle', 'popover', defaults),
        content: getPropertyFn(this, 'popoverContent', 'popover', defaults),
        delay: getProperty(this, 'popoverDelay', 'popover', defaults),
        placement: getPropertyFn(this, 'popoverPlacement', 'popover', defaults),
        trigger: getProperty(this, 'popoverTrigger', 'popover', defaults),
        viewport: getProperty(this, 'popoverViewport', 'popover', defaults),
        animation: getProperty(this, 'popoverAnimation', 'popover', defaults),
        html: getProperty(this, 'popoverHtml', 'popover', defaults)
    });
}


export default Ember.Mixin.create({
    attributeBindings: ['tabindex'],
    tabindex: null,

    _createPopoverOnInsert: Ember.on('didInsertElement', createPlugin),
    _createPopoverOnTitleChange: Ember.observer('tooltipTitle', createPlugin)
});
