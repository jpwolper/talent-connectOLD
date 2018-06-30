"use strict";



define('talent-connect/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = _emberData.default.JSONAPIAdapter.extend({
        namespace: 'api'
    });
});
define('talent-connect/app', ['exports', 'talent-connect/resolver', 'ember-load-initializers', 'talent-connect/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('talent-connect/components/contact-listing', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('talent-connect/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('talent-connect/helpers/app-version', ['exports', 'talent-connect/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('talent-connect/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('talent-connect/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('talent-connect/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'talent-connect/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('talent-connect/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('talent-connect/initializers/ember-cli-mirage', ['exports', 'talent-connect/config/environment', 'talent-connect/mirage/config', 'ember-cli-mirage/get-rfc232-test-context', 'ember-cli-mirage/start-mirage'], function (exports, _environment, _config, _getRfc232TestContext, _startMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize(application) {
      if (_config.default) {
        application.register('mirage:base-config', _config.default, { instantiate: false });
      }
      if (_config.testConfig) {
        application.register('mirage:test-config', _config.testConfig, { instantiate: false });
      }

      _environment.default['ember-cli-mirage'] = _environment.default['ember-cli-mirage'] || {};
      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage(env = _environment.default) {
    return (0, _startMirage.default)(null, { env, baseConfig: _config.default, testConfig: _config.testConfig });
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    if ((0, _getRfc232TestContext.default)()) {
      return false;
    }
    let userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    let defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    let usingInDev = env === 'development' && !addonConfig.usingProxy;
    let usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('talent-connect/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('talent-connect/initializers/export-application-global', ['exports', 'talent-connect/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('talent-connect/instance-initializers/ember-cli-mirage-autostart', ['exports', 'ember-cli-mirage/instance-initializers/ember-cli-mirage-autostart'], function (exports, _emberCliMirageAutostart) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberCliMirageAutostart.default;
    }
  });
});
define("talent-connect/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('talent-connect/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    this.namespace = '/api';

    this.get('/contact-list', function () {
      return {
        data: [{
          type: 'contact-list',
          id: 'margaret-gonzalez',
          attributes: {
            fn: 'Margaret',
            ln: 'Gonzalez',
            p: '2139893898',
            email: 'margonzo@hotmail.com',
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg'
          }
        }, {
          type: 'contact-list',
          id: 'gary-owens',
          attributes: {
            fn: 'Gary',
            ln: 'Owens',
            p: '2138739275',
            email: 'gowens1979@gmail.com',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Jamie_Marsh_Headshot.jpg'
          }
        }, {
          type: 'contact-list',
          id: 'melissa-morris',
          attributes: {
            fn: 'Melissa',
            ln: 'Morris',
            p: '2138398468',
            email: 'mmorris@yahoo.com',
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alissa_Moreno.jpg'
          } /*,
            {
             type: 'rentals',
             id: 'grand-old-mansion',
             attributes: {
               title: 'Grand Old Mansion',
               owner: 'Veruca Salt',
               city: 'San Francisco',
               category: 'Estate',
               bedrooms: 15,
               image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
             }
            }, {
             type: 'rentals',
             id: 'urban-living',
             attributes: {
               title: 'Urban Living',
               owner: 'Mike Teavee',
               city: 'Seattle',
               category: 'Condo',
               bedrooms: 1,
               image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
             }
            }, {
             type: 'rentals',
             id: 'downtown-charm',
             attributes: {
               title: 'Downtown Charm',
               owner: 'Violet Beauregarde',
               city: 'Portland',
               category: 'Apartment',
               bedrooms: 3,
               image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
             }
            } */ }]
      };
    });
  };
});
define("talent-connect/mirage/scenarios/default", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () /* server */{

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
  };
});
define('talent-connect/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('talent-connect/models/contact', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    fn: _emberData.default.attr(),
    ln: _emberData.default.attr(),
    p: _emberData.default.attr(),
    email: _emberData.default.attr(),
    image: _emberData.default.attr()
  });
});
define('talent-connect/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('talent-connect/router', ['exports', 'talent-connect/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('contact-details');
    this.route('contact-list');
  });

  exports.default = Router;
});
define('talent-connect/routes/contact-details', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('talent-connect/routes/contact-list', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model() {
      return this.get('store').findAll('contact');
      /* return [{
        id: 'margaret-gonzalez',
        fn: 'Margaret',
        ln: 'Gonzalez',
        p: '2139893898',
        email: 'margonzo@hotmail.com',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg'
      }, {
        id: 'Ggary-owens',
        fn: 'Gary',
        ln: 'Owens',
        p: '2138739275',
        email: 'gowens1979@gmail.com',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Jamie_Marsh_Headshot.jpg'
      }, {
        id: 'melissa-morris',
        fn: 'Melissa',
        ln: 'Morris',
        p: '2138398468',
        email: 'mmorris@yahoo.com',
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alissa_Moreno.jpg'
      }]; */
    }
  });
});
define('talent-connect/routes/index', ['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = Ember.Route.extend({
        beforeModel() {
            this.replaceWith('contact-list');
        }
    });
});
define('talent-connect/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("talent-connect/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "J33g+0Oh", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"container\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"menu\"],[8],[0,\"\\n\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"      \"],[6,\"h1\"],[8],[0,\"\\n        TalentConnect\\n      \"],[9],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"body\"],[8],[0,\"\\n    \"],[1,[20,\"outlet\"],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "talent-connect/templates/application.hbs" } });
});
define("talent-connect/templates/components/contact-listing", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "oXf8aT/z", "block": "{\"symbols\":[],\"statements\":[[6,\"article\"],[10,\"class\",\"listing\"],[8],[0,\"\\n  \"],[6,\"img\"],[11,\"src\",[27,[[22,[\"contact\",\"image\"]]]]],[10,\"alt\",\"\"],[8],[9],[0,\"\\n  \"],[6,\"h3\"],[8],[1,[22,[\"contact\",\"fn\"]],false],[0,\" \"],[1,[22,[\"contact\",\"ln\"]],false],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"detail phone\"],[8],[0,\"\\n    \"],[6,\"span\"],[8],[0,\"Phone:\"],[9],[0,\" \"],[1,[22,[\"contact\",\"p\"]],false],[0,\"\\n  \"],[9],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"detail email\"],[8],[0,\"\\n    \"],[6,\"span\"],[8],[0,\"Email:\"],[9],[0,\" \"],[1,[22,[\"contact\",\"email\"]],false],[0,\"\\n  \"],[9],[0,\"\\n\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "talent-connect/templates/components/contact-listing.hbs" } });
});
define("talent-connect/templates/contact-details", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "bnWA8Vfj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[10,\"class\",\"jumbo\"],[8],[0,\"\\n  \"],[6,\"h2\"],[8],[0,\"**Contact Name\"],[9],[0,\"\\n  \"],[6,\"p\"],[8],[0,\"\\n    Phone Number:\\n  \"],[9],[0,\"\\n  \"],[6,\"p\"],[8],[0,\"\\n    Email:\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[4,\"link-to\",[\"contact-list\"],[[\"class\"],[\"button\"]],{\"statements\":[[0,\"    Back to list\\n\"]],\"parameters\":[]},null],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "talent-connect/templates/contact-details.hbs" } });
});
define("talent-connect/templates/contact-list", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "XjxKqcfy", "block": "{\"symbols\":[\"contactListing\"],\"statements\":[[6,\"div\"],[10,\"class\",\"jumbo\"],[8],[0,\"\\n  \"],[6,\"div\"],[10,\"class\",\"right tomster\"],[8],[9],[0,\"\\n  \"],[6,\"h2\"],[8],[0,\"Sacks Talent Agency, LLC\"],[9],[0,\"\\n  \"],[6,\"p\"],[8],[0,\"\\n    Premier independent acting agency with an industry-leading list of both industry contacts and actors.\\n  \"],[9],[0,\"\\n  \"],[6,\"p\"],[8],[0,\"\\n    (213) 398-0334\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"  \"],[1,[26,\"contact-listing\",null,[[\"contact\"],[[21,1,[]]]]],false],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "talent-connect/templates/contact-list.hbs" } });
});
define("talent-connect/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "CeRfHSJS", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "talent-connect/templates/index.hbs" } });
});
define('talent-connect/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
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

if (!runningTests) {
  require("talent-connect/app")["default"].create({"name":"talent-connect","version":"0.0.0+55a38b48"});
}
//# sourceMappingURL=talent-connect.map
