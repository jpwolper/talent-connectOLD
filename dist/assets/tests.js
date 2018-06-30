'use strict';

define('talent-connect/tests/acceptance/contact-list-test', ['qunit', '@ember/test-helpers', 'ember-qunit'], function (_qunit, _testHelpers, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Acceptance | contact list', function (hooks) {
    (0, _emberQunit.setupApplicationTest)(hooks);

    (0, _qunit.test)('should show contact list as the home page', async function (assert) {
      await (0, _testHelpers.visit)('/');
      assert.equal((0, _testHelpers.currentURL)(), '/contact-list', 'should redirect automatically');
    });
    (0, _qunit.test)('should list all contact names.', async function (assert) {});
    (0, _qunit.test)('should link to contact page.', async function (assert) {});
    (0, _qunit.test)('should be able to add a contact.', async function (assert) {});
    (0, _qunit.test)('Contact page should show details.', async function (assert) {});
    (0, _qunit.test)('Contact can be edited.', async function (assert) {});
    (0, _qunit.test)('Contact can be deleted.', async function (assert) {});
  });
});
define('talent-connect/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/contact-listing.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/contact-listing.js should pass ESLint\n\n');
  });

  QUnit.test('models/contact.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/contact.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/contact-details.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact-details.js should pass ESLint\n\n');
  });

  QUnit.test('routes/contact-list.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/contact-list.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
});
define('talent-connect/tests/integration/components/contact-listing-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | contact-listing', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "f+tUOvPQ",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"contact-listing\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "rc0z5Tdk",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"contact-listing\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('talent-connect/tests/test-helper', ['talent-connect/app', 'talent-connect/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('talent-connect/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/contact-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'acceptance/contact-list-test.js should pass ESLint\n\n12:57 - \'assert\' is defined but never used. (no-unused-vars)\n14:55 - \'assert\' is defined but never used. (no-unused-vars)\n16:59 - \'assert\' is defined but never used. (no-unused-vars)\n18:60 - \'assert\' is defined but never used. (no-unused-vars)\n20:49 - \'assert\' is defined but never used. (no-unused-vars)\n22:50 - \'assert\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('integration/components/contact-listing-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/contact-listing-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/adapters/application-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/contact-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/contact-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/contact-details-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-details-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/contact-list-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/contact-list-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
});
define('talent-connect/tests/unit/adapters/application-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Adapter | application', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let adapter = this.owner.lookup('adapter:application');
      assert.ok(adapter);
    });
  });
});
define('talent-connect/tests/unit/models/contact-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | contact', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = Ember.run(() => store.createRecord('contact', {}));
      assert.ok(model);
    });
  });
});
define('talent-connect/tests/unit/routes/contact-details-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | contact-details', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact-details');
      assert.ok(route);
    });
  });
});
define('talent-connect/tests/unit/routes/contact-list-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | contact-list', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:contact-list');
      assert.ok(route);
    });
  });
});
define('talent-connect/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('talent-connect/config/environment', [], function() {
  var prefix = 'talent-connect';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('talent-connect/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
