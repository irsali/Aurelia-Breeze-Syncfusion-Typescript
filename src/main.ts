import { Aurelia } from 'aurelia-framework';
import { config } from 'breeze-client';

import environment from './environment';
import 'breeze-client/breeze.modelLibrary.backingStore';
import 'breeze-client/breeze.dataService.webApi';
import 'breeze-client/breeze.uriBuilder.json';

export function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources')
        .plugin('aurelia-bootstrap', plugin => plugin.options.version = 4)
        .plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll())
        .plugin('aurelia-breeze')
        .plugin('moment');

    if (environment.debug) {
        aurelia.use.developmentLogging();
    }

    if (environment.testing) {
        aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => {
        aurelia.setRoot();

    });
}
