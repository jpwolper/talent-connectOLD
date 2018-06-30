import DS from 'ember-data';

export default DS.Model.extend({
  fn: DS.attr(),
  ln: DS.attr(),
  p: DS.attr(),
  email: DS.attr(),
  image: DS.attr()
});
