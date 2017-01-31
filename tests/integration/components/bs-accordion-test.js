import {
  moduleForComponent
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { testBS3, testBS4 } from '../../helpers/bootstrap-test';

moduleForComponent('bs-accordion', 'Integration | Component | bs-accordion', {
  integration: true
});

testBS3('accordion has correct default markup in BS3', function(assert) {
  this.render(hbs`{{#bs-accordion as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  assert.ok(this.$(':first-child').hasClass('panel-group'), 'accordion has panel-group class');
  assert.equal(this.$('.panel').length, 2, 'accordion yields item');
});

testBS4('accordion has correct default markup in BS4', function(assert) {
  this.render(hbs`{{#bs-accordion as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  // TODO: Should it have .card-group?
  // assert.equal(this.$(':first-child').hasClass('card-group'), true, 'accordion has card-group class');
  assert.equal(this.$('.card').length, 2, 'accordion yields item');
});

testBS3('accordion with preselected item has this item expanded', function(assert) {
  this.set('selected', 1);
  this.render(hbs`{{#bs-accordion selected=selected as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  let item = this.$('.panel:eq(0)');

  assert.notOk(item.find('.panel-heading').hasClass('collapsed'), 'panel-heading has not collapsed class');
  assert.ok(item.find('.panel-collapse').hasClass('collapse'), 'panel-collapse has collapse class');
  assert.ok(item.find('.panel-collapse').hasClass('in'), 'panel-collapse has in class');
});

testBS4('accordion with preselected item has this item expanded', function(assert) {
  this.set('selected', 1);
  this.render(hbs`{{#bs-accordion selected=selected as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  let item = this.$('.card:eq(0)');

  assert.notOk(item.find('.card-heading').hasClass('collapsed'), 'card-heading has not collapsed class');
  assert.ok(item.find('.card-collapse').hasClass('collapse'), 'card-collapse has collapse class');
  assert.ok(item.find('.card-collapse').hasClass('show'), 'card-collapse has show class');
});

testBS3('changing selected item expands this item in BS3', function(assert) {
  this.set('selected', 1);
  this.render(hbs`{{#bs-accordion selected=selected as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  this.set('selected', 2);

  let item = this.$('.panel:eq(1)');
  let done = assert.async();

  // wait for transitions to complete
  setTimeout(() => {
    assert.notOk(item.find('.panel-heading').hasClass('collapsed'), 'panel-heading has not collapsed class');
    assert.ok(item.find('.panel-collapse').hasClass('collapse'), 'panel-collapse has collapse class');
    assert.ok(item.find('.panel-collapse').hasClass('in'), 'panel-collapse has in class');

    done();
  }, 500);
});

testBS4('changing selected item expands this item in BS4', function(assert) {
  this.set('selected', 1);
  this.render(hbs`{{#bs-accordion selected=selected as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  this.set('selected', 2);

  let item = this.$('.card:eq(1)');
  let done = assert.async();

  // wait for transitions to complete
  setTimeout(() => {
    assert.notOk(item.find('.card-heading').hasClass('collapsed'), 'card-heading has not collapsed class');
    assert.ok(item.find('.card-collapse').hasClass('collapse'), 'card-collapse has collapse class');
    assert.ok(item.find('.card-collapse').hasClass('show'), 'card-collapse has show class');

    done();
  }, 500);
});

testBS3('clicking collapsed item expands it in BS3', function(assert) {
  this.render(hbs`{{#bs-accordion as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  let item = this.$('.panel:eq(0)');
  let done = assert.async();

  item.find('.panel-heading').click();

  // wait for transitions to complete
  setTimeout(() => {
    assert.notOk(item.find('.panel-heading').hasClass('collapsed'), 'panel-heading has not collapsed class');
    assert.ok(item.find('.panel-collapse').hasClass('collapse'), 'panel-collapse has collapse class');
    assert.ok(item.find('.panel-collapse').hasClass('in'), 'panel-collapse has in class');

    done();
  }, 500);
});

testBS4('clicking collapsed item expands it in BS4', function(assert) {
  this.render(hbs`{{#bs-accordion as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  let item = this.$('.card:eq(0)');
  let done = assert.async();

  item.find('.card-heading').click();

  // wait for transitions to complete
  setTimeout(() => {
    assert.notOk(item.find('.card-heading').hasClass('collapsed'), 'card-heading has not collapsed class');
    assert.ok(item.find('.card-collapse').hasClass('collapse'), 'card-collapse has collapse class');
    assert.ok(item.find('.card-collapse').hasClass('show'), 'card-collapse has show class');

    done();
  }, 500);
});

testBS3('clicking expanded item collapses it in BS3', function(assert) {
  this.render(hbs`{{#bs-accordion selected=1 as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  let item = this.$('.panel:eq(0)');
  let done = assert.async();

  assert.notOk(item.find('.panel-heading').hasClass('collapsed'), 'panel-heading has not collapsed class');
  assert.ok(item.find('.panel-collapse').hasClass('collapse'), 'panel-collapse has collapse class');
  assert.ok(item.find('.panel-collapse').hasClass('in'), 'panel-collapse has in class');

  item.find('.panel-heading').click();

  // wait for transitions to complete
  setTimeout(() => {
    assert.ok(item.find('.panel-heading').hasClass('collapsed'), 'panel-heading has collapsed class');
    assert.ok(item.find('.panel-collapse').hasClass('collapse'), 'panel-collapse has collapse class');
    assert.notOk(item.find('.panel-collapse').hasClass('in'), 'panel-collapse has not in class');

    done();
  }, 500);
});

testBS4('clicking expanded item collapses it in BS4', function(assert) {
  this.render(hbs`{{#bs-accordion selected=1 as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);
  let item = this.$('.card:eq(0)');
  let done = assert.async();

  assert.notOk(item.find('.card-heading').hasClass('collapsed'), 'card-heading has not collapsed class');
  assert.ok(item.find('.card-collapse').hasClass('collapse'), 'card-collapse has collapse class');
  assert.ok(item.find('.card-collapse').hasClass('show'), 'card-collapse has show class');

  item.find('.card-heading').click();

  // wait for transitions to complete
  setTimeout(() => {
    assert.ok(item.find('.card-heading').hasClass('collapsed'), 'card-heading has collapsed class');
    assert.ok(item.find('.card-collapse').hasClass('collapse'), 'card-collapse has collapse class');
    assert.notOk(item.find('.card-collapse').hasClass('show'), 'card-collapse has not show class');

    done();
  }, 500);
});

testBS3('calls onChange action when changing selection in BS3', function(assert) {
  let action = this.spy();
  this.on('change', action);
  this.render(hbs`{{#bs-accordion onChange=(action "change") as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);

  this.$('.panel:eq(0) .panel-heading').click();
  assert.ok(action.calledWith(1), 'onClick action has been called.');
});

testBS4('calls onChange action when changing selection in BS4', function(assert) {
  let action = this.spy();
  this.on('change', action);
  this.render(hbs`{{#bs-accordion onChange=(action "change") as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);

  this.$('.card:eq(0) .card-heading').click();
  assert.ok(action.calledWith(1), 'onClick action has been called.');
});

testBS3('prevents changing selection when onChange returns false', function(assert) {
  let action = this.stub();
  action.returns(false);
  this.on('change', action);
  this.render(hbs`{{#bs-accordion onChange=(action "change") as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);

  let item = this.$('.panel:eq(0)');
  let done = assert.async();

  item.find('.panel-heading').click();
  assert.ok(action.calledWith(1), 'onClick action has been called.');

  // wait for transitions to complete
  setTimeout(() => {
    assert.ok(item.find('.panel-heading').hasClass('collapsed'), 'panel-heading has collapsed class');
    assert.ok(item.find('.panel-collapse').hasClass('collapse'), 'panel-collapse has collapse class');
    assert.notOk(item.find('.panel-collapse').hasClass('in'), 'panel-collapse has not in class');

    done();
  }, 500);
});

testBS4('prevents changing selection when onChange returns false', function(assert) {
  let action = this.stub();
  action.returns(false);
  this.on('change', action);
  this.render(hbs`{{#bs-accordion onChange=(action "change") as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);

  let item = this.$('.card:eq(0)');
  let done = assert.async();

  item.find('.card-heading').click();
  assert.ok(action.calledWith(1), 'onClick action has been called.');

  // wait for transitions to complete
  setTimeout(() => {
    assert.ok(item.find('.card-heading').hasClass('collapsed'), 'card-heading has collapsed class');
    assert.ok(item.find('.card-collapse').hasClass('collapse'), 'card-collapse has collapse class');
    assert.notOk(item.find('.card-collapse').hasClass('in'), 'card-collapse has not in class');

    done();
  }, 500);
});

testBS3('changing selection does not leak to public selected property (DDAU)', function(assert) {
  this.set('selected', 1);
  this.render(hbs`{{#bs-accordion selected=selected as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);

  let item = this.$('.panel:eq(1)');

  item.find('.panel-heading').click();
  assert.equal(this.get('selected'), 1, 'Does not modify public selected property');
});

testBS4('changing selection does not leak to public selected property (DDAU)', function(assert) {
  this.set('selected', 1);
  this.render(hbs`{{#bs-accordion selected=selected as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);

  let item = this.$('.card:eq(1)');

  item.find('.card-heading').click();
  assert.equal(this.get('selected'), 1, 'Does not modify public selected property');
});

testBS3('yields change action to add custom behaviour', function(assert) {
  this.set('selected', 1);
  this.render(hbs`{{#bs-accordion selected=1 as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1 <button {{action acc.change 2}}>Next</button>{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);

  let item = this.$('.panel:eq(0)');
  let done = assert.async();

  item.find('button').click();

  let newItem = this.$('.panel:eq(1)');

  // wait for transitions to complete
  setTimeout(() => {
    assert.notOk(newItem.find('.panel-heading').hasClass('collapsed'), 'panel-heading has not collapsed class');
    assert.ok(newItem.find('.panel-collapse').hasClass('collapse'), 'panel-collapse has collapse class');
    assert.ok(newItem.find('.panel-collapse').hasClass('in'), 'panel-collapse has in class');

    done();
  }, 500);
});

testBS4('yields change action to add custom behaviour', function(assert) {
  this.set('selected', 1);
  this.render(hbs`{{#bs-accordion selected=1 as |acc|}}
    {{#acc.item value=1 title="TITLE1"}}CONTENT1 <button {{action acc.change 2}}>Next</button>{{/acc.item}}
    {{#acc.item value=2 title="TITLE2"}}CONTENT2{{/acc.item}}
  {{/bs-accordion}}`);

  let item = this.$('.card:eq(0)');
  let done = assert.async();

  item.find('button').click();

  let newItem = this.$('.card:eq(1)');

  // wait for transitions to complete
  setTimeout(() => {
    assert.notOk(newItem.find('.card-heading').hasClass('collapsed'), 'card-heading has not collapsed class');
    assert.ok(newItem.find('.card-collapse').hasClass('collapse'), 'card-collapse has collapse class');
    assert.ok(newItem.find('.card-collapse').hasClass('show'), 'card-collapse has show class');

    done();
  }, 500);
});
