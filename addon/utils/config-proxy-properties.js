import Ember from 'ember';

export function getProperty(target, property, configProperty, defaults) {
    var config = target.get(configProperty),
        value = target.get(property);

    // if there is an own property, that takes precedence
    if (!Ember.isNone(value)) {
        return value;
    }

    // if there is a config object...
    if (config) {
        // return its property if available
        value = Ember.get(config, property);
        if (!Ember.isNone(value)) {
            return value;
        }
    }
    // otherwise return the default value
    return Ember.get(defaults, property);
}

export function getPropertyFn(target, property, configProperty, defaults) {
    return function() {
        return getProperty(target, property, configProperty, defaults);
    };
}
