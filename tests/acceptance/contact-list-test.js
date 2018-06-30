import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | contact list', function(hooks) {
  setupApplicationTest(hooks);
  
  test('should show contact list as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/contact-list', 'should redirect automatically');
  });
  test('should list all contact names.', async function(assert) {
  });
  test('should link to contact page.', async function(assert) {
  });
  test('should be able to add a contact.', async function(assert) {
  });
  test('Contact page should show details.', async function(assert) {
  });
  test('Contact can be edited.', async function(assert) {
  });
  test('Contact can be deleted.', async function(assert) {
  });

});
