import {
  moduleForComponent,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForComponent('bs-tooltip', 'BsTooltipComponent', {
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


test('tooltip supports ember-i18n if present', function(assert) {
    Ember.I18n.translations = {
        i18nKey: 'translated'
    };
    var component = this.subject({
        tooltipTitleTranslation: 'i18nKey'
    });

    assert.equal(component.get('tooltipTitle'),'translated');
});