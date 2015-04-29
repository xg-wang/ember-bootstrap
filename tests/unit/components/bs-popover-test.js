import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';


moduleForComponent('bs-popover', 'BsPopoverComponent', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
    assert.expect(2);

    // creates the component instance
    var component = this.subject();
    assert.equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    assert.equal(component._state, 'inDOM');
});

test('popover supports ember-i18n if present', function(assert) {
    Ember.I18n.translations = {
        i18nKey: 'translated'
    };
    var component = this.subject({
        popoverTitleTranslation: 'i18nKey'
    });

    assert.equal(component.get('popoverTitle'),'translated');
});