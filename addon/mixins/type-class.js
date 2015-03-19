import Ember from 'ember';

/**
 * Mixin to set the appropriate class for components with differently styled types ("success", "danger" etc.)
 *
 * @class TypeClass
 * @namespace Mixins
 */
export default Ember.Mixin.create({
    /**
     * Prefix for the type class, e.g. "btn" for button type classes ("btn-primary2 etc.)
     *
     * @property classTypePrefix
     * @type string
     * @required
     * @protected
     */
    classTypePrefix: Ember.required(String),
    classNameBindings: ['typeClass'],
    typeClass: (function() {
        var prefix = this.get('classTypePrefix'),
            type = this.get('type');
        if (Ember.isPresent(type)) {
            return prefix + '-' + type;
        }
    }).property('type'),


    /**
     * Property for type styling
     *
     * For the available types see the [Bootstrap docs](http://getbootstrap.com/css/#buttons-options) (use without prefix, e.g. only "warning")
     *
     * @property type
     * @type String
     * @public
     */
    type: null
});
