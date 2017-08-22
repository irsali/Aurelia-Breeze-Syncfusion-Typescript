define(["require", "exports", "./environment", "breeze-client/breeze.modelLibrary.backingStore", "breeze-client/breeze.dataService.webApi", "breeze-client/breeze.uriBuilder.json"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-bootstrap', function (plugin) { return plugin.options.version = 4; })
            .plugin('aurelia-syncfusion-bridge', function (plugin) { return plugin.useAll(); })
            .plugin('aurelia-breeze')
            .plugin('moment');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () {
            aurelia.setRoot();
        });
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map