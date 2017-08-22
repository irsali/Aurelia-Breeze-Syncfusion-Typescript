var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('app',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Aurelia with Syncfusion';
            config.map([
                { route: 'practice', moduleId: 'views/practice', name: 'practice' },
                { route: 'iq-portal', moduleId: 'views/iq-portal', name: 'iq-portal' },
                { route: 'drawer', moduleId: 'views/navigation/drawer', name: 'drawer', title: 'Drawer' },
                { route: 'generatedControls/firstForm', moduleId: 'views/generatedControls/first-form', name: 'generatedControlsFirstForm', title: 'First Form' },
                { route: 'orders', moduleId: './views/orders/orders-section', name: 'orders', nav: true, title: 'Orders' },
                { route: 'customers', moduleId: './views/customers/customers-section', name: 'customers', nav: true, title: 'Customers' },
                { route: 'employees', moduleId: './views/employees/employees-section', name: 'employees', nav: true, title: 'Employees' },
                { route: '', redirect: 'practice' }
            ]);
        };
        App = __decorate([
            aurelia_framework_1.autoinject()
        ], App);
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFJQTtRQUFBO1FBeUJBLENBQUM7UUF2QkcsNkJBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDdkQsTUFBTSxDQUFDLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztZQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNQLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtnQkFDbkUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO2dCQUN0RSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRTtnQkFDekYsRUFBRSxLQUFLLEVBQUUsNkJBQTZCLEVBQUUsUUFBUSxFQUFFLG9DQUFvQyxFQUFFLElBQUksRUFBRSw0QkFBNEIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFO2dCQUVqSixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLCtCQUErQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFO2dCQUMxRyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2dCQUN6SCxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLHFDQUFxQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFO2dCQUV6SCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRTthQUN0QyxDQUFDLENBQUM7UUFRUCxDQUFDO1FBdkJRLEdBQUc7WUFEZiw4QkFBVSxFQUFFO1dBQ0EsR0FBRyxDQXlCZjtRQUFELFVBQUM7S0F6QkQsQUF5QkMsSUFBQTtJQXpCWSxrQkFBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgUmVkaXJlY3QsIFJvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuQGF1dG9pbmplY3QoKVxuZXhwb3J0IGNsYXNzIEFwcCB7XG5cbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSB3aXRoIFN5bmNmdXNpb24nO1xuICAgICAgICBjb25maWcubWFwKFtcbiAgICAgICAgICAgIHsgcm91dGU6ICdwcmFjdGljZScsIG1vZHVsZUlkOiAndmlld3MvcHJhY3RpY2UnLCBuYW1lOiAncHJhY3RpY2UnIH0sXG4gICAgICAgICAgICB7IHJvdXRlOiAnaXEtcG9ydGFsJywgbW9kdWxlSWQ6ICd2aWV3cy9pcS1wb3J0YWwnLCBuYW1lOiAnaXEtcG9ydGFsJyB9LFxuICAgICAgICAgICAgeyByb3V0ZTogJ2RyYXdlcicsIG1vZHVsZUlkOiAndmlld3MvbmF2aWdhdGlvbi9kcmF3ZXInLCBuYW1lOiAnZHJhd2VyJywgdGl0bGU6ICdEcmF3ZXInIH0sXG4gICAgICAgICAgICB7IHJvdXRlOiAnZ2VuZXJhdGVkQ29udHJvbHMvZmlyc3RGb3JtJywgbW9kdWxlSWQ6ICd2aWV3cy9nZW5lcmF0ZWRDb250cm9scy9maXJzdC1mb3JtJywgbmFtZTogJ2dlbmVyYXRlZENvbnRyb2xzRmlyc3RGb3JtJywgdGl0bGU6ICdGaXJzdCBGb3JtJyB9LFxuXG4gICAgICAgICAgICB7IHJvdXRlOiAnb3JkZXJzJywgbW9kdWxlSWQ6ICcuL3ZpZXdzL29yZGVycy9vcmRlcnMtc2VjdGlvbicsIG5hbWU6ICdvcmRlcnMnLCBuYXY6IHRydWUsIHRpdGxlOiAnT3JkZXJzJyB9LFxuICAgICAgICAgICAgeyByb3V0ZTogJ2N1c3RvbWVycycsIG1vZHVsZUlkOiAnLi92aWV3cy9jdXN0b21lcnMvY3VzdG9tZXJzLXNlY3Rpb24nLCBuYW1lOiAnY3VzdG9tZXJzJywgbmF2OiB0cnVlLCB0aXRsZTogJ0N1c3RvbWVycycgfSxcbiAgICAgICAgICAgIHsgcm91dGU6ICdlbXBsb3llZXMnLCBtb2R1bGVJZDogJy4vdmlld3MvZW1wbG95ZWVzL2VtcGxveWVlcy1zZWN0aW9uJywgbmFtZTogJ2VtcGxveWVlcycsIG5hdjogdHJ1ZSwgdGl0bGU6ICdFbXBsb3llZXMnIH0sXG5cbiAgICAgICAgICAgIHsgcm91dGU6ICcnLCByZWRpcmVjdDogJ3ByYWN0aWNlJyB9XG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vLy8gNDA0IHBhZ2VcbiAgICAgICAgLy9jb25maWcubWFwVW5rbm93blJvdXRlcygndmlld3Mvbm90LWZvdW5kJyk7XG5cbiAgICAgICAgLy8vLyBXaGVuZXZlciBuYXZpZ2F0aW9uIGlzIHJlamVjdGVkLCBpdCBpcyByZWRpcmVjdGVkIHRvIGEgcHJldmlvdXMgbG9jYXRpb24uIEhvd2V2ZXIgaW4gY2VydGFpbiBjYXNlcyBhIHByZXZpb3VzIGxvY2F0aW9uIGRvZXNuJ3QgZXhpc3QsIGUuZy4gd2hlbiBpdCBoYXBwZW5zIGFzIHRoZSBmaXJzdCBuYXZpZ2F0aW9uIGFmdGVyIHRoZSBzdGFydHVwIG9mIGFwcGxpY2F0aW9uLiBUbyBoYW5kbGUgdGhpcyBzY2VuYXJpbywgeW91IGNhbiBzZXQgdXAgYSBmYWxsYmFjayByb3V0ZS5cbiAgICAgICAgLy9jb25maWcuZmFsbGJhY2tSb3V0ZSgndmlld3Mvbm90LWZvdW5kJyk7XG4gICAgICAgIFxuICAgIH1cbiAgICBcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment", "breeze-client/breeze.modelLibrary.backingStore", "breeze-client/breeze.dataService.webApi", "breeze-client/breeze.uriBuilder.json"], function (require, exports, environment_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBUUEsbUJBQTBCLE9BQWdCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHO2FBQ04scUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQzthQUNwQixNQUFNLENBQUMsbUJBQW1CLEVBQUUsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQTFCLENBQTBCLENBQUM7YUFDakUsTUFBTSxDQUFDLDJCQUEyQixFQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFmLENBQWUsQ0FBQzthQUM5RCxNQUFNLENBQUMsZ0JBQWdCLENBQUM7YUFDeEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDckMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUV0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyQkQsOEJBcUJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXJlbGlhIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnYnJlZXplLWNsaWVudCc7XG5cbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCAnYnJlZXplLWNsaWVudC9icmVlemUubW9kZWxMaWJyYXJ5LmJhY2tpbmdTdG9yZSc7XG5pbXBvcnQgJ2JyZWV6ZS1jbGllbnQvYnJlZXplLmRhdGFTZXJ2aWNlLndlYkFwaSc7XG5pbXBvcnQgJ2JyZWV6ZS1jbGllbnQvYnJlZXplLnVyaUJ1aWxkZXIuanNvbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICAgIGF1cmVsaWEudXNlXG4gICAgICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgICAgICAuZmVhdHVyZSgncmVzb3VyY2VzJylcbiAgICAgICAgLnBsdWdpbignYXVyZWxpYS1ib290c3RyYXAnLCBwbHVnaW4gPT4gcGx1Z2luLm9wdGlvbnMudmVyc2lvbiA9IDQpXG4gICAgICAgIC5wbHVnaW4oJ2F1cmVsaWEtc3luY2Z1c2lvbi1icmlkZ2UnLCBwbHVnaW4gPT4gcGx1Z2luLnVzZUFsbCgpKVxuICAgICAgICAucGx1Z2luKCdhdXJlbGlhLWJyZWV6ZScpXG4gICAgICAgIC5wbHVnaW4oJ21vbWVudCcpO1xuXG4gICAgaWYgKGVudmlyb25tZW50LmRlYnVnKSB7XG4gICAgICAgIGF1cmVsaWEudXNlLmRldmVsb3BtZW50TG9nZ2luZygpO1xuICAgIH1cblxuICAgIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgICAgIGF1cmVsaWEudXNlLnBsdWdpbignYXVyZWxpYS10ZXN0aW5nJyk7XG4gICAgfVxuXG4gICAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBhdXJlbGlhLnNldFJvb3QoKTtcblxuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('settings',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        serviceName: "http://sampleservice.breezejs.com/api/northwind",
        pageSize: 10,
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBLGtCQUFlO1FBQ2IsV0FBVyxFQUFFLGlEQUFpRDtRQUM5RCxRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUMiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogR2xvYmFsIHNldHRpbmdzL2NvbnN0YW50c1xuKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2VydmljZU5hbWU6IFwiaHR0cDovL3NhbXBsZXNlcnZpY2UuYnJlZXplanMuY29tL2FwaS9ub3J0aHdpbmRcIixcbiAgcGFnZVNpemU6IDEwLFxufTtcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('models/element-enum',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ElementEnum;
    (function (ElementEnum) {
        ElementEnum[ElementEnum["InputBox"] = 2] = "InputBox";
        ElementEnum[ElementEnum["DropDown"] = 19] = "DropDown";
        ElementEnum[ElementEnum["MultiSelectDropDown"] = 23] = "MultiSelectDropDown";
        ElementEnum[ElementEnum["NumberInputBox"] = 13] = "NumberInputBox";
        ElementEnum[ElementEnum["PercentageInputBox"] = 51] = "PercentageInputBox";
        ElementEnum[ElementEnum["CurrencyInputBox"] = 52] = "CurrencyInputBox";
        ElementEnum[ElementEnum["AutoCompleteInputBox"] = 53] = "AutoCompleteInputBox";
        ElementEnum[ElementEnum["DateInputBox"] = 6] = "DateInputBox";
        ElementEnum[ElementEnum["DateTimeInputBox"] = 14] = "DateTimeInputBox";
        ElementEnum[ElementEnum["TimeInputBox"] = 1] = "TimeInputBox";
        ElementEnum[ElementEnum["TextArea"] = 24] = "TextArea";
        ElementEnum[ElementEnum["FileUpload"] = 54] = "FileUpload";
    })(ElementEnum = exports.ElementEnum || (exports.ElementEnum = {}));
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9lbGVtZW50LWVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsSUFBWSxXQWNYO0lBZEQsV0FBWSxXQUFXO1FBQ25CLHFEQUFZLENBQUE7UUFDWixzREFBYSxDQUFBO1FBQ2IsNEVBQXNCLENBQUE7UUFDdEIsa0VBQW1CLENBQUE7UUFDbkIsMEVBQXVCLENBQUE7UUFDdkIsc0VBQXFCLENBQUE7UUFDckIsOEVBQXlCLENBQUE7UUFDekIsNkRBQWdCLENBQUE7UUFDaEIsc0VBQXFCLENBQUE7UUFDckIsNkRBQWdCLENBQUE7UUFDaEIsc0RBQWEsQ0FBQTtRQUNiLDBEQUFlLENBQUE7SUFFbkIsQ0FBQyxFQWRXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBY3RCIiwiZmlsZSI6Im1vZGVscy9lbGVtZW50LWVudW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBFbGVtZW50RW51bSB7XG4gICAgSW5wdXRCb3ggPSAyLFxuICAgIERyb3BEb3duID0gMTksXG4gICAgTXVsdGlTZWxlY3REcm9wRG93bj0yMyxcbiAgICBOdW1iZXJJbnB1dEJveCA9IDEzLFxuICAgIFBlcmNlbnRhZ2VJbnB1dEJveCA9IDUxLFxuICAgIEN1cnJlbmN5SW5wdXRCb3ggPSA1MixcbiAgICBBdXRvQ29tcGxldGVJbnB1dEJveCA9IDUzLFxuICAgIERhdGVJbnB1dEJveCA9IDYsXG4gICAgRGF0ZVRpbWVJbnB1dEJveCA9IDE0LFxuICAgIFRpbWVJbnB1dEJveCA9IDEsXG4gICAgVGV4dEFyZWEgPSAyNCxcbiAgICBGaWxlVXBsb2FkID0gNTRcblxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('models/field-identifiers',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FieldIdentifiers = (function () {
        function FieldIdentifiers() {
        }
        FieldIdentifiers.Id = 'FieldId';
        FieldIdentifiers.Name = 'Name';
        FieldIdentifiers.MaxLength = 'MaxLength';
        FieldIdentifiers.ElementId = 'ElementId';
        FieldIdentifiers.ListId = 'ListId';
        return FieldIdentifiers;
    }());
    exports.FieldIdentifiers = FieldIdentifiers;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9maWVsZC1pZGVudGlmaWVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBTUEsQ0FBQztRQUxVLG1CQUFFLEdBQUcsU0FBUyxDQUFDO1FBQ2YscUJBQUksR0FBRyxNQUFNLENBQUM7UUFDZCwwQkFBUyxHQUFHLFdBQVcsQ0FBQztRQUN4QiwwQkFBUyxHQUFHLFdBQVcsQ0FBQztRQUN4Qix1QkFBTSxHQUFHLFFBQVEsQ0FBQztRQUM3Qix1QkFBQztLQU5ELEFBTUMsSUFBQTtJQU5ZLDRDQUFnQiIsImZpbGUiOiJtb2RlbHMvZmllbGQtaWRlbnRpZmllcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRmllbGRJZGVudGlmaWVycyB7XG4gICAgc3RhdGljIElkID0gJ0ZpZWxkSWQnO1xuICAgIHN0YXRpYyBOYW1lID0gJ05hbWUnO1xuICAgIHN0YXRpYyBNYXhMZW5ndGggPSAnTWF4TGVuZ3RoJztcbiAgICBzdGF0aWMgRWxlbWVudElkID0gJ0VsZW1lbnRJZCc7XG4gICAgc3RhdGljIExpc3RJZCA9ICdMaXN0SWQnO1xufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('models/index',["require", "exports", "./element-enum", "./field-identifiers"], function (require, exports, element_enum_1, field_identifiers_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(element_enum_1);
    __export(field_identifiers_1);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQSx5QkFBK0I7SUFDL0IsOEJBQW9DIiwiZmlsZSI6Im1vZGVscy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vZWxlbWVudC1lbnVtJztcbmV4cG9ydCAqIGZyb20gJy4vZmllbGQtaWRlbnRpZmllcnMnO1xuXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            './attributes/go-to-route',
            "./elements/pager",
            "./value-converters/date-format",
            "./value-converters/number-format"
        ]);
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7UUFHcEQsTUFBTSxDQUFDLGVBQWUsQ0FBQztZQUVuQiwwQkFBMEI7WUFHMUIsa0JBQWtCO1lBR2xCLGdDQUFnQztZQUNoQyxrQ0FBa0M7U0FDckMsQ0FBQyxDQUFDO0lBRVAsQ0FBQztJQWZELDhCQWVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKSB7XG5cbiAgICAvLyBhZGQgcmVzb3VyY2VzIHRvIGdsb2JhbCByZXNvdXJjZSBzbyB0aGF0IHRoZXkgYXJlIGFjY2Vzc2libGUgZGlyZWN0eSBldmVyeXdoZXJlIGluIGFwcGxpY2F0aW9uXG4gICAgY29uZmlnLmdsb2JhbFJlc291cmNlcyhbXG4gICAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgICAgJy4vYXR0cmlidXRlcy9nby10by1yb3V0ZScsXG5cbiAgICAgICAgLy8gZWxlbWVudHNcbiAgICAgICAgXCIuL2VsZW1lbnRzL3BhZ2VyXCIsXG5cbiAgICAgICAgLy8gdmFsdWUtY29udmVydGVyc1xuICAgICAgICBcIi4vdmFsdWUtY29udmVydGVycy9kYXRlLWZvcm1hdFwiLFxuICAgICAgICBcIi4vdmFsdWUtY29udmVydGVycy9udW1iZXItZm9ybWF0XCJcbiAgICBdKTtcblxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('services/customer-service',["require", "exports", "./entity-manager-factory", "breeze-client", "../settings"], function (require, exports, entity_manager_factory_1, breeze, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomerService = (function () {
        function CustomerService() {
        }
        CustomerService.prototype.getPage = function (pageIndex) {
            var query = new breeze.EntityQuery()
                .from('Customers')
                .select('CustomerID, CompanyName, ContactName, City, Phone, Fax')
                .orderBy('CompanyName')
                .skip(pageIndex * settings_1.default.pageSize)
                .take(settings_1.default.pageSize)
                .inlineCount();
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return em.executeQuery(query); })
                .then(function (queryResult) {
                return {
                    entities: queryResult.results,
                    pageCount: 1,
                };
            });
        };
        CustomerService.prototype.loadExisting = function (id) {
            var customerQuery = new breeze.EntityQuery().from('Customers').where('CustomerID', breeze.FilterQueryOp.Equals, id);
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return em.executeQuery(customerQuery); })
                .then(function (queryResult) {
                return {
                    entity: queryResult.results[0],
                    entityManager: queryResult.entityManager
                };
            });
        };
        CustomerService.prototype.createNew = function () {
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) {
                return {
                    entity: em.createEntity('Customer'),
                    entityManager: em
                };
            });
        };
        return CustomerService;
    }());
    exports.CustomerService = CustomerService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2N1c3RvbWVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUE7UUFBQTtRQTJDQSxDQUFDO1FBekNHLGlDQUFPLEdBQVAsVUFBUSxTQUFpQjtZQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7aUJBQy9CLElBQUksQ0FBQyxXQUFXLENBQUM7aUJBQ2pCLE1BQU0sQ0FBQyx3REFBd0QsQ0FBQztpQkFDaEUsT0FBTyxDQUFDLGFBQWEsQ0FBQztpQkFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDO2lCQUN2QixXQUFXLEVBQUUsQ0FBQztZQUVuQixNQUFNLENBQUMsNENBQW1CLEVBQUU7aUJBQ3ZCLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxVQUFBLFdBQVc7Z0JBQ2IsTUFBTSxDQUFrQjtvQkFDcEIsUUFBUSxFQUFFLFdBQVcsQ0FBQyxPQUFPO29CQUM3QixTQUFTLEVBQUUsQ0FBQztpQkFDZixDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDO1FBRUQsc0NBQVksR0FBWixVQUFhLEVBQUU7WUFDWCxJQUFJLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVwSCxNQUFNLENBQUMsNENBQW1CLEVBQUU7aUJBQ3ZCLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQTlCLENBQThCLENBQUM7aUJBQzFDLElBQUksQ0FBQyxVQUFBLFdBQVc7Z0JBQ2IsTUFBTSxDQUFnQjtvQkFDbEIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM5QixhQUFhLEVBQUUsV0FBVyxDQUFDLGFBQWE7aUJBQzNDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFFRCxtQ0FBUyxHQUFUO1lBQ0ksTUFBTSxDQUFDLDRDQUFtQixFQUFFO2lCQUN2QixJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUNKLE1BQU0sQ0FBZ0I7b0JBQ2xCLE1BQU0sRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztvQkFDbkMsYUFBYSxFQUFFLEVBQUU7aUJBQ3BCLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7UUFDTCxzQkFBQztJQUFELENBM0NBLEFBMkNDLElBQUE7SUEzQ1ksMENBQWUiLCJmaWxlIjoic2VydmljZXMvY3VzdG9tZXItc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVudGl0eU1hbmFnZXIgfSBmcm9tICcuL2VudGl0eS1tYW5hZ2VyLWZhY3RvcnknO1xuaW1wb3J0ICogYXMgYnJlZXplIGZyb20gJ2JyZWV6ZS1jbGllbnQnO1xuXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MnO1xuaW1wb3J0IHsgSUVudGl0eVJlc3VsdCwgSUVudGl0aWVzUmVzdWx0LCBJU2VydmljZSB9IGZyb20gJy4vaS1zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VydmljZSBpbXBsZW1lbnRzIElTZXJ2aWNlIHtcblxuICAgIGdldFBhZ2UocGFnZUluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0gbmV3IGJyZWV6ZS5FbnRpdHlRdWVyeSgpXG4gICAgICAgICAgICAuZnJvbSgnQ3VzdG9tZXJzJylcbiAgICAgICAgICAgIC5zZWxlY3QoJ0N1c3RvbWVySUQsIENvbXBhbnlOYW1lLCBDb250YWN0TmFtZSwgQ2l0eSwgUGhvbmUsIEZheCcpXG4gICAgICAgICAgICAub3JkZXJCeSgnQ29tcGFueU5hbWUnKVxuICAgICAgICAgICAgLnNraXAocGFnZUluZGV4ICogc2V0dGluZ3MucGFnZVNpemUpXG4gICAgICAgICAgICAudGFrZShzZXR0aW5ncy5wYWdlU2l6ZSlcbiAgICAgICAgICAgIC5pbmxpbmVDb3VudCgpO1xuXG4gICAgICAgIHJldHVybiBjcmVhdGVFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAgIC50aGVuKGVtID0+IGVtLmV4ZWN1dGVRdWVyeShxdWVyeSkpXG4gICAgICAgICAgICAudGhlbihxdWVyeVJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJRW50aXRpZXNSZXN1bHQ+e1xuICAgICAgICAgICAgICAgICAgICBlbnRpdGllczogcXVlcnlSZXN1bHQucmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgcGFnZUNvdW50OiAxLCAvL01hdGguY2VpbChxdWVyeVJlc3VsdC5pbmxpbmVDb3VudCAvIHRoaXMucGFnZVNpemUpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkRXhpc3RpbmcoaWQpIHtcbiAgICAgICAgdmFyIGN1c3RvbWVyUXVlcnkgPSBuZXcgYnJlZXplLkVudGl0eVF1ZXJ5KCkuZnJvbSgnQ3VzdG9tZXJzJykud2hlcmUoJ0N1c3RvbWVySUQnLCBicmVlemUuRmlsdGVyUXVlcnlPcC5FcXVhbHMsIGlkKTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlRW50aXR5TWFuYWdlcigpXG4gICAgICAgICAgICAudGhlbihlbSA9PiBlbS5leGVjdXRlUXVlcnkoY3VzdG9tZXJRdWVyeSkpXG4gICAgICAgICAgICAudGhlbihxdWVyeVJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJRW50aXR5UmVzdWx0PntcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBxdWVyeVJlc3VsdC5yZXN1bHRzWzBdLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlNYW5hZ2VyOiBxdWVyeVJlc3VsdC5lbnRpdHlNYW5hZ2VyXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZU5ldygpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVudGl0eU1hbmFnZXIoKVxuICAgICAgICAgICAgLnRoZW4oZW0gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8SUVudGl0eVJlc3VsdD57XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogZW0uY3JlYXRlRW50aXR5KCdDdXN0b21lcicpLFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlNYW5hZ2VyOiBlbVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('services/employee-service',["require", "exports", "breeze-client", "../settings", "./entity-manager-factory"], function (require, exports, breeze, settings_1, entity_manager_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeService = (function () {
        function EmployeeService() {
        }
        EmployeeService.prototype.getPage = function (pageIndex) {
            var query = new breeze.EntityQuery()
                .from('Employees')
                .select('EmployeeID, FirstName, LastName, Title, HireDate, HomePhone, Extension')
                .orderBy('LastName')
                .skip(pageIndex * settings_1.default.pageSize)
                .take(settings_1.default.pageSize)
                .inlineCount();
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return em.executeQuery(query); })
                .then(function (queryResult) {
                return {
                    entities: queryResult.results,
                    pageCount: 1,
                };
            });
        };
        EmployeeService.prototype.loadExisting = function (id) {
            var employeeQuery = new breeze.EntityQuery().from('Employees').where('EmployeeID', '==', id);
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return em.executeQuery(employeeQuery); })
                .then(function (queryResult) {
                return {
                    entity: queryResult.results[0],
                    entityManager: queryResult.entityManager
                };
            });
        };
        EmployeeService.prototype.createNew = function () {
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) {
                return {
                    entity: em.createEntity('Employee'),
                    entityManager: em
                };
            });
        };
        return EmployeeService;
    }());
    exports.EmployeeService = EmployeeService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2VtcGxveWVlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBS0E7UUFBQTtRQTBDQSxDQUFDO1FBekNDLGlDQUFPLEdBQVAsVUFBUSxTQUFTO1lBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO2lCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDO2lCQUNqQixNQUFNLENBQUMsd0VBQXdFLENBQUM7aUJBQ2hGLE9BQU8sQ0FBQyxVQUFVLENBQUM7aUJBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUM7aUJBQ25DLElBQUksQ0FBQyxrQkFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDdkIsV0FBVyxFQUFFLENBQUM7WUFFakIsTUFBTSxDQUFDLDRDQUFtQixFQUFFO2lCQUN6QixJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUF0QixDQUFzQixDQUFDO2lCQUNsQyxJQUFJLENBQUMsVUFBQSxXQUFXO2dCQUNmLE1BQU0sQ0FBQztvQkFDTCxRQUFRLEVBQUUsV0FBVyxDQUFDLE9BQU87b0JBQzdCLFNBQVMsRUFBRSxDQUFDO2lCQUNiLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxzQ0FBWSxHQUFaLFVBQWEsRUFBRTtZQUNiLElBQUksYUFBYSxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztZQUU3RixNQUFNLENBQUMsNENBQW1CLEVBQUU7aUJBQ3pCLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQTlCLENBQThCLENBQUM7aUJBQzFDLElBQUksQ0FBQyxVQUFBLFdBQVc7Z0JBQ2YsTUFBTSxDQUFDO29CQUNMLE1BQU0sRUFBRSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsYUFBYSxFQUFFLFdBQVcsQ0FBQyxhQUFhO2lCQUN6QyxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsbUNBQVMsR0FBVDtZQUNFLE1BQU0sQ0FBQyw0Q0FBbUIsRUFBRTtpQkFDekIsSUFBSSxDQUFDLFVBQUEsRUFBRTtnQkFDTixNQUFNLENBQUM7b0JBQ0wsTUFBTSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO29CQUNuQyxhQUFhLEVBQUUsRUFBRTtpQkFDbEIsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNILHNCQUFDO0lBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtJQTFDWSwwQ0FBZSIsImZpbGUiOiJzZXJ2aWNlcy9lbXBsb3llZS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYnJlZXplIGZyb20gJ2JyZWV6ZS1jbGllbnQnO1xuXG5pbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi4vc2V0dGluZ3MnO1xuaW1wb3J0IHtjcmVhdGVFbnRpdHlNYW5hZ2VyfSBmcm9tICcuL2VudGl0eS1tYW5hZ2VyLWZhY3RvcnknO1xuXG5leHBvcnQgY2xhc3MgRW1wbG95ZWVTZXJ2aWNlIHtcbiAgZ2V0UGFnZShwYWdlSW5kZXgpIHtcbiAgICB2YXIgcXVlcnkgPSBuZXcgYnJlZXplLkVudGl0eVF1ZXJ5KClcbiAgICAgIC5mcm9tKCdFbXBsb3llZXMnKVxuICAgICAgLnNlbGVjdCgnRW1wbG95ZWVJRCwgRmlyc3ROYW1lLCBMYXN0TmFtZSwgVGl0bGUsIEhpcmVEYXRlLCBIb21lUGhvbmUsIEV4dGVuc2lvbicpXG4gICAgICAub3JkZXJCeSgnTGFzdE5hbWUnKVxuICAgICAgLnNraXAocGFnZUluZGV4ICogc2V0dGluZ3MucGFnZVNpemUpXG4gICAgICAudGFrZShzZXR0aW5ncy5wYWdlU2l6ZSlcbiAgICAgIC5pbmxpbmVDb3VudCgpO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVudGl0eU1hbmFnZXIoKVxuICAgICAgLnRoZW4oZW0gPT4gZW0uZXhlY3V0ZVF1ZXJ5KHF1ZXJ5KSlcbiAgICAgIC50aGVuKHF1ZXJ5UmVzdWx0ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbnRpdGllczogcXVlcnlSZXN1bHQucmVzdWx0cyxcbiAgICAgICAgICBwYWdlQ291bnQ6IDEsIC8vTWF0aC5jZWlsKHF1ZXJ5UmVzdWx0LmlubGluZUNvdW50IC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvYWRFeGlzdGluZyhpZCkge1xuICAgIHZhciBlbXBsb3llZVF1ZXJ5ID0gbmV3IGJyZWV6ZS5FbnRpdHlRdWVyeSgpLmZyb20oJ0VtcGxveWVlcycpLndoZXJlKCdFbXBsb3llZUlEJywgJz09JywgaWQpO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVudGl0eU1hbmFnZXIoKVxuICAgICAgLnRoZW4oZW0gPT4gZW0uZXhlY3V0ZVF1ZXJ5KGVtcGxveWVlUXVlcnkpKVxuICAgICAgLnRoZW4ocXVlcnlSZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVudGl0eTogcXVlcnlSZXN1bHQucmVzdWx0c1swXSxcbiAgICAgICAgICBlbnRpdHlNYW5hZ2VyOiBxdWVyeVJlc3VsdC5lbnRpdHlNYW5hZ2VyXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZU5ldygpIHtcbiAgICByZXR1cm4gY3JlYXRlRW50aXR5TWFuYWdlcigpXG4gICAgICAudGhlbihlbSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZW50aXR5OiBlbS5jcmVhdGVFbnRpdHkoJ0VtcGxveWVlJyksXG4gICAgICAgICAgZW50aXR5TWFuYWdlcjogZW1cbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('services/entity-manager-factory',["require", "exports", "../settings", "breeze-client"], function (require, exports, settings_1, breeze) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var entityManager;
    function createEntityManager() {
        if (entityManager) {
            return Promise.resolve(copyEntityManager());
        }
        entityManager = new breeze.EntityManager(settings_1.default.serviceName);
        return entityManager.fetchMetadata()
            .then(function () { return copyEntityManager(); });
    }
    exports.createEntityManager = createEntityManager;
    function copyEntityManager() {
        var copy = entityManager.createEmptyCopy();
        copy.entityChanged.subscribe(logChanges);
        return copy;
    }
    function logChanges(data) {
        var message = 'Entity Changed.  Entity: ' + (data.entity ? data.entity.entityType.name + '/' + data.entity.entityAspect.getKey().toString() : '?') + ';  EntityAction: ' + data.entityAction.getName() + '; ';
        if (data.entityAction === breeze.EntityAction.PropertyChange) {
            var pcArgs = data.args;
            message += 'PropertyName: ' + (pcArgs.propertyName || 'null') + '; Old Value: ' + (pcArgs.oldValue ? pcArgs.oldValue.toString() : 'null') + '; New Value: ' + (pcArgs.newValue ? pcArgs.newValue.toString() : 'null') + ';';
        }
        if (data.entityAction === breeze.EntityAction.EntityStateChange) {
            message += 'New State: ' + data.entity.entityAspect.entityState.getName() + ';';
        }
        console.log(message);
    }
    ;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2VudGl0eS1tYW5hZ2VyLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsSUFBSSxhQUFtQyxDQUFDO0lBS3hDO1FBQ0ksRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUVELGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUMsa0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRTthQUMvQixJQUFJLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBUkQsa0RBUUM7SUFFRDtRQUNJLElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxvQkFBb0IsSUFBbUM7UUFDbkQsSUFBSSxPQUFPLEdBQUcsMkJBQTJCLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFDOU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxNQUFNLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxNQUFNLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3QixPQUFPLElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLE1BQU0sQ0FBQyxHQUFHLGVBQWUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxlQUFlLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2hPLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzlELE9BQU8sSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUNwRixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQUEsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9lbnRpdHktbWFuYWdlci1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uL3NldHRpbmdzJztcbmltcG9ydCAqIGFzIGJyZWV6ZSBmcm9tICdicmVlemUtY2xpZW50JztcblxudmFyIGVudGl0eU1hbmFnZXI6IGJyZWV6ZS5FbnRpdHlNYW5hZ2VyO1xuXG4vKipcbiogQ3JlYXRlcyBCcmVlemUgRW50aXR5TWFuYWdlciBpbnN0YW5jZXMuXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVudGl0eU1hbmFnZXIoKSB7XG4gICAgaWYgKGVudGl0eU1hbmFnZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb3B5RW50aXR5TWFuYWdlcigpKTtcbiAgICB9XG5cbiAgICBlbnRpdHlNYW5hZ2VyID0gbmV3IGJyZWV6ZS5FbnRpdHlNYW5hZ2VyKHNldHRpbmdzLnNlcnZpY2VOYW1lKTtcbiAgICByZXR1cm4gZW50aXR5TWFuYWdlci5mZXRjaE1ldGFkYXRhKClcbiAgICAgICAgLnRoZW4oKCkgPT4gY29weUVudGl0eU1hbmFnZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGNvcHlFbnRpdHlNYW5hZ2VyKCk6IGJyZWV6ZS5FbnRpdHlNYW5hZ2VyIHtcbiAgICB2YXIgY29weSA9IGVudGl0eU1hbmFnZXIuY3JlYXRlRW1wdHlDb3B5KCk7XG4gICAgY29weS5lbnRpdHlDaGFuZ2VkLnN1YnNjcmliZShsb2dDaGFuZ2VzKTtcbiAgICByZXR1cm4gY29weTtcbn1cblxuLy8gbG9nIGVudGl0eSBjaGFuZ2VzIHRvIHRoZSBjb25zb2xlIGZvciBkZWJ1Z2dpbmcgcHVycG9zZXMuXG5mdW5jdGlvbiBsb2dDaGFuZ2VzKGRhdGE6IGJyZWV6ZS5FbnRpdHlDaGFuZ2VkRXZlbnRBcmdzKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnRW50aXR5IENoYW5nZWQuICBFbnRpdHk6ICcgKyAoZGF0YS5lbnRpdHkgPyBkYXRhLmVudGl0eS5lbnRpdHlUeXBlLm5hbWUgKyAnLycgKyBkYXRhLmVudGl0eS5lbnRpdHlBc3BlY3QuZ2V0S2V5KCkudG9TdHJpbmcoKSA6ICc/JykgKyAnOyAgRW50aXR5QWN0aW9uOiAnICsgZGF0YS5lbnRpdHlBY3Rpb24uZ2V0TmFtZSgpICsgJzsgJztcbiAgICBpZiAoZGF0YS5lbnRpdHlBY3Rpb24gPT09IGJyZWV6ZS5FbnRpdHlBY3Rpb24uUHJvcGVydHlDaGFuZ2UpIHtcbiAgICAgICAgdmFyIHBjQXJncyA6IGFueSA9IGRhdGEuYXJncztcbiAgICAgICAgbWVzc2FnZSArPSAnUHJvcGVydHlOYW1lOiAnICsgKHBjQXJncy5wcm9wZXJ0eU5hbWUgfHwgJ251bGwnKSArICc7IE9sZCBWYWx1ZTogJyArIChwY0FyZ3Mub2xkVmFsdWUgPyBwY0FyZ3Mub2xkVmFsdWUudG9TdHJpbmcoKSA6ICdudWxsJykgKyAnOyBOZXcgVmFsdWU6ICcgKyAocGNBcmdzLm5ld1ZhbHVlID8gcGNBcmdzLm5ld1ZhbHVlLnRvU3RyaW5nKCkgOiAnbnVsbCcpICsgJzsnO1xuICAgIH1cbiAgICBpZiAoZGF0YS5lbnRpdHlBY3Rpb24gPT09IGJyZWV6ZS5FbnRpdHlBY3Rpb24uRW50aXR5U3RhdGVDaGFuZ2UpIHtcbiAgICAgICAgbWVzc2FnZSArPSAnTmV3IFN0YXRlOiAnICsgZGF0YS5lbnRpdHkuZW50aXR5QXNwZWN0LmVudGl0eVN0YXRlLmdldE5hbWUoKSArICc7JztcbiAgICB9XG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('services/i-service',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXJ2aWNlcy9pLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('services/index',["require", "exports", "./entity-manager-factory", "./lookups", "./customer-service", "./employee-service", "./order-service"], function (require, exports, entity_manager_factory_1, lookups_1, customer_service_1, employee_service_1, order_service_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(entity_manager_factory_1);
    __export(lookups_1);
    __export(customer_service_1);
    __export(employee_service_1);
    __export(order_service_1);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUVBLG1DQUF5QztJQUV6QyxvQkFBMEI7SUFFMUIsNkJBQW1DO0lBQ25DLDZCQUFtQztJQUNuQywwQkFBZ0MiLCJmaWxlIjoic2VydmljZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2ktc2VydmljZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZW50aXR5LW1hbmFnZXItZmFjdG9yeSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbG9va3Vwcyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXItc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2VtcGxveWVlLXNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9vcmRlci1zZXJ2aWNlJztcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('services/lookups',["require", "exports", "./entity-manager-factory", "breeze-client"], function (require, exports, entity_manager_factory_1, breeze) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var customersQuery = new breeze.EntityQuery()
        .from('Customers')
        .select('CustomerID, CompanyName')
        .orderBy('CompanyName');
    var productsQuery = new breeze.EntityQuery()
        .from('Products')
        .select('ProductID, ProductName, UnitPrice')
        .orderBy('ProductName');
    var Lookups = (function () {
        function Lookups() {
        }
        Lookups.prototype.load = function () {
            var _this = this;
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return Promise.all([em.executeQuery(customersQuery), em.executeQuery(productsQuery)]); })
                .then(function (queryResults) {
                _this.customers = queryResults[0].results;
                _this.products = queryResults[1].results;
            });
        };
        return Lookups;
    }());
    exports.Lookups = Lookups;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2xvb2t1cHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsSUFBSSxjQUFjLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO1NBQ3hDLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDakIsTUFBTSxDQUFDLHlCQUF5QixDQUFDO1NBQ2pDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU1QixJQUFJLGFBQWEsR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEVBQUU7U0FDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUNoQixNQUFNLENBQUMsbUNBQW1DLENBQUM7U0FDM0MsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBTTVCO1FBQUE7UUFZQSxDQUFDO1FBUkcsc0JBQUksR0FBSjtZQUFBLGlCQU9DO1lBTkcsTUFBTSxDQUFDLDRDQUFtQixFQUFFO2lCQUN2QixJQUFJLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBOUUsQ0FBOEUsQ0FBQztpQkFDMUYsSUFBSSxDQUFDLFVBQUEsWUFBWTtnQkFDZCxLQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQTtRQUNWLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FaQSxBQVlDLElBQUE7SUFaWSwwQkFBTyIsImZpbGUiOiJzZXJ2aWNlcy9sb29rdXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRW50aXR5TWFuYWdlciB9IGZyb20gJy4vZW50aXR5LW1hbmFnZXItZmFjdG9yeSc7XG5pbXBvcnQgKiBhcyBicmVlemUgZnJvbSAnYnJlZXplLWNsaWVudCc7XG5cbnZhciBjdXN0b21lcnNRdWVyeSA9IG5ldyBicmVlemUuRW50aXR5UXVlcnkoKVxuICAgIC5mcm9tKCdDdXN0b21lcnMnKVxuICAgIC5zZWxlY3QoJ0N1c3RvbWVySUQsIENvbXBhbnlOYW1lJylcbiAgICAub3JkZXJCeSgnQ29tcGFueU5hbWUnKTtcblxudmFyIHByb2R1Y3RzUXVlcnkgPSBuZXcgYnJlZXplLkVudGl0eVF1ZXJ5KClcbiAgICAuZnJvbSgnUHJvZHVjdHMnKVxuICAgIC5zZWxlY3QoJ1Byb2R1Y3RJRCwgUHJvZHVjdE5hbWUsIFVuaXRQcmljZScpXG4gICAgLm9yZGVyQnkoJ1Byb2R1Y3ROYW1lJyk7XG5cbi8qKlxuKiBNYW5hZ2VzIHRoZSBhcHBsaWNhdGlvbidzIHNoYXJlZCBsb29rdXBzLlxuKiBFYWdlcmx5IGxvYWRpbmcgdGhlIGxvb2t1cHMgYmVjYXVzZSB0aGVyZSBhcmUgb25seSB0d28uXG4qL1xuZXhwb3J0IGNsYXNzIExvb2t1cHMge1xuICAgIGN1c3RvbWVycztcbiAgICBwcm9kdWN0cztcblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVFbnRpdHlNYW5hZ2VyKClcbiAgICAgICAgICAgIC50aGVuKGVtID0+IFByb21pc2UuYWxsKFtlbS5leGVjdXRlUXVlcnkoY3VzdG9tZXJzUXVlcnkpLCBlbS5leGVjdXRlUXVlcnkocHJvZHVjdHNRdWVyeSldKSlcbiAgICAgICAgICAgIC50aGVuKHF1ZXJ5UmVzdWx0cyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lcnMgPSBxdWVyeVJlc3VsdHNbMF0ucmVzdWx0cztcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzID0gcXVlcnlSZXN1bHRzWzFdLnJlc3VsdHM7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('services/order-service',["require", "exports", "breeze-client", "../settings", "./entity-manager-factory"], function (require, exports, breeze, settings_1, entity_manager_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrderService = (function () {
        function OrderService() {
        }
        OrderService.prototype.getPage = function (pageIndex) {
            var query = new breeze.EntityQuery()
                .from('Orders')
                .select('OrderID, Customer.CompanyName, Employee.FirstName, Employee.LastName, OrderDate, Freight')
                .orderByDesc('OrderDate')
                .skip(pageIndex * settings_1.default.pageSize)
                .take(settings_1.default.pageSize)
                .inlineCount();
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return em.executeQuery(query); })
                .then(function (queryResult) {
                return {
                    entities: queryResult.results,
                    pageCount: 8,
                };
            });
        };
        OrderService.prototype.loadExisting = function (id) {
            var orderQuery = new breeze.EntityQuery().from('Orders').where('OrderID', '==', id), detailQuery = new breeze.EntityQuery().from('OrderDetails').where('OrderID', '==', id);
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) { return Promise.all([em.executeQuery(orderQuery), em.executeQuery(detailQuery)]); })
                .then(function (values) {
                var queryResult = values[0];
                return {
                    entity: queryResult.results[0],
                    entityManager: queryResult.entityManager
                };
            });
        };
        OrderService.prototype.createNew = function () {
            return entity_manager_factory_1.createEntityManager()
                .then(function (em) {
                return {
                    entity: em.createEntity('Order'),
                    entityManager: em
                };
            });
        };
        return OrderService;
    }());
    exports.OrderService = OrderService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL29yZGVyLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBS0E7UUFBQTtRQTRDQSxDQUFDO1FBM0NDLDhCQUFPLEdBQVAsVUFBUSxTQUFTO1lBQ2YsSUFBSSxLQUFLLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFO2lCQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNkLE1BQU0sQ0FBQywwRkFBMEYsQ0FBQztpQkFDbEcsV0FBVyxDQUFDLFdBQVcsQ0FBQztpQkFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLFFBQVEsQ0FBQztpQkFDbkMsSUFBSSxDQUFDLGtCQUFRLENBQUMsUUFBUSxDQUFDO2lCQUN2QixXQUFXLEVBQUUsQ0FBQztZQUVqQixNQUFNLENBQUMsNENBQW1CLEVBQUU7aUJBQ3pCLElBQUksQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQXRCLENBQXNCLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxVQUFBLFdBQVc7Z0JBQ2YsTUFBTSxDQUFDO29CQUNMLFFBQVEsRUFBRSxXQUFXLENBQUMsT0FBTztvQkFDN0IsU0FBUyxFQUFFLENBQUM7aUJBQ2IsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELG1DQUFZLEdBQVosVUFBYSxFQUFFO1lBQ2IsSUFBSSxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUMvRSxXQUFXLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBRTNGLE1BQU0sQ0FBQyw0Q0FBbUIsRUFBRTtpQkFDekIsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQXhFLENBQXdFLENBQUM7aUJBQ3BGLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1YsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUM7b0JBQ0wsTUFBTSxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUM5QixhQUFhLEVBQUUsV0FBVyxDQUFDLGFBQWE7aUJBQ3pDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCxnQ0FBUyxHQUFUO1lBQ0UsTUFBTSxDQUFDLDRDQUFtQixFQUFFO2lCQUN6QixJQUFJLENBQUMsVUFBQSxFQUFFO2dCQUNOLE1BQU0sQ0FBQztvQkFDTCxNQUFNLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUM7b0JBQ2hDLGFBQWEsRUFBRSxFQUFFO2lCQUNsQixDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0gsbUJBQUM7SUFBRCxDQTVDQSxBQTRDQyxJQUFBO0lBNUNZLG9DQUFZIiwiZmlsZSI6InNlcnZpY2VzL29yZGVyLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBicmVlemUgZnJvbSAnYnJlZXplLWNsaWVudCc7XG5cbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBjcmVhdGVFbnRpdHlNYW5hZ2VyIH0gZnJvbSAnLi9lbnRpdHktbWFuYWdlci1mYWN0b3J5JztcblxuZXhwb3J0IGNsYXNzIE9yZGVyU2VydmljZSB7XG4gIGdldFBhZ2UocGFnZUluZGV4KSB7XG4gICAgdmFyIHF1ZXJ5ID0gbmV3IGJyZWV6ZS5FbnRpdHlRdWVyeSgpXG4gICAgICAuZnJvbSgnT3JkZXJzJylcbiAgICAgIC5zZWxlY3QoJ09yZGVySUQsIEN1c3RvbWVyLkNvbXBhbnlOYW1lLCBFbXBsb3llZS5GaXJzdE5hbWUsIEVtcGxveWVlLkxhc3ROYW1lLCBPcmRlckRhdGUsIEZyZWlnaHQnKVxuICAgICAgLm9yZGVyQnlEZXNjKCdPcmRlckRhdGUnKVxuICAgICAgLnNraXAocGFnZUluZGV4ICogc2V0dGluZ3MucGFnZVNpemUpXG4gICAgICAudGFrZShzZXR0aW5ncy5wYWdlU2l6ZSlcbiAgICAgIC5pbmxpbmVDb3VudCgpO1xuXG4gICAgcmV0dXJuIGNyZWF0ZUVudGl0eU1hbmFnZXIoKVxuICAgICAgLnRoZW4oZW0gPT4gZW0uZXhlY3V0ZVF1ZXJ5KHF1ZXJ5KSlcbiAgICAgIC50aGVuKHF1ZXJ5UmVzdWx0ID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbnRpdGllczogcXVlcnlSZXN1bHQucmVzdWx0cyxcbiAgICAgICAgICBwYWdlQ291bnQ6IDgsIC8vTWF0aC5jZWlsKHF1ZXJ5UmVzdWx0LmlubGluZUNvdW50IC8gdGhpcy5wYWdlU2l6ZSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvYWRFeGlzdGluZyhpZCkge1xuICAgIHZhciBvcmRlclF1ZXJ5ID0gbmV3IGJyZWV6ZS5FbnRpdHlRdWVyeSgpLmZyb20oJ09yZGVycycpLndoZXJlKCdPcmRlcklEJywgJz09JywgaWQpLFxuICAgICAgICBkZXRhaWxRdWVyeSA9IG5ldyBicmVlemUuRW50aXR5UXVlcnkoKS5mcm9tKCdPcmRlckRldGFpbHMnKS53aGVyZSgnT3JkZXJJRCcsICc9PScsIGlkKTtcblxuICAgIHJldHVybiBjcmVhdGVFbnRpdHlNYW5hZ2VyKClcbiAgICAgIC50aGVuKGVtID0+IFByb21pc2UuYWxsKFtlbS5leGVjdXRlUXVlcnkob3JkZXJRdWVyeSksIGVtLmV4ZWN1dGVRdWVyeShkZXRhaWxRdWVyeSldKSlcbiAgICAgIC50aGVuKHZhbHVlcyA9PiB7XG4gICAgICAgIHZhciBxdWVyeVJlc3VsdCA9IHZhbHVlc1swXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBlbnRpdHk6IHF1ZXJ5UmVzdWx0LnJlc3VsdHNbMF0sXG4gICAgICAgICAgZW50aXR5TWFuYWdlcjogcXVlcnlSZXN1bHQuZW50aXR5TWFuYWdlclxuICAgICAgICB9O1xuICAgICAgfSk7XG4gIH1cblxuICBjcmVhdGVOZXcoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUVudGl0eU1hbmFnZXIoKVxuICAgICAgLnRoZW4oZW0gPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVudGl0eTogZW0uY3JlYXRlRW50aXR5KCdPcmRlcicpLFxuICAgICAgICAgIGVudGl0eU1hbmFnZXI6IGVtXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define('views/iq-portal',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IQPortal = (function () {
        function IQPortal() {
        }
        IQPortal = __decorate([
            aurelia_framework_1.customElement('iq-portal')
        ], IQPortal);
        return IQPortal;
    }());
    exports.IQPortal = IQPortal;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2lxLXBvcnRhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFJQTtRQUFBO1FBWUEsQ0FBQztRQVpZLFFBQVE7WUFEcEIsaUNBQWEsQ0FBQyxXQUFXLENBQUM7V0FDZCxRQUFRLENBWXBCO1FBQUQsZUFBQztLQVpELEFBWUMsSUFBQTtJQVpZLDRCQUFRIiwiZmlsZSI6InZpZXdzL2lxLXBvcnRhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbkBjdXN0b21FbGVtZW50KCdpcS1wb3J0YWwnKVxuZXhwb3J0IGNsYXNzIElRUG9ydGFsIHtcblxuICAgIC8vY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAvLyAgICBjb25maWcudGl0bGUgPSAnSVEgUG9ydGFsJztcbiAgICAvLyAgICBjb25maWcubWFwKFtcbiAgICAvLyAgICAgICAgLy97IHJvdXRlOiAnc2ltcGxlLWdyaWQnLCBtb2R1bGVJZDogJy4vZ3JpZHMvc2ltcGxlLWdyaWQnLCBuYW1lOiAnc2ltcGxlLWdyaWQnLCB0aXRsZTogJ1NpbXBsZSBHcmlkJyB9LFxuICAgIC8vICAgICAgICAvL3sgcm91dGU6IFsnJywgJ3NpbXBsZS1mb3JtJ10sIG1vZHVsZUlkOiAnLi9mb3Jtcy9zaW1wbGUtZm9ybScsIG5hbWU6ICdzaW1wbGUtZm9ybScsIHRpdGxlOiAnU2ltcGxlIEZvcm0nIH0sXG4gICAgICAgICAgICBcbiAgICAvLyAgICBdKTtcblxuICAgIC8vfVxuXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('views/not-found',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NotFound = (function () {
        function NotFound() {
        }
        return NotFound;
    }());
    exports.NotFound = NotFound;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL25vdC1mb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFBQTtRQUFBO1FBQ0EsQ0FBQztRQUFELGVBQUM7SUFBRCxDQURBLEFBQ0MsSUFBQTtJQURZLDRCQUFRIiwiZmlsZSI6InZpZXdzL25vdC1mb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb3RGb3VuZCB7XG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('views/practice',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Practice = (function () {
        function Practice() {
        }
        Practice.prototype.configureRouter = function (config, router) {
            config.title = 'Practice';
            config.map([
                { route: ['', 'simple-form'], moduleId: './forms/simple-form', name: 'simple-form', title: 'Simple Form' },
                { route: 'simple-grid', moduleId: './grids/simple-grid', name: 'simple-grid', title: 'Simple Grid' },
                { route: 'dropdown', moduleId: './forms/dropdown', name: 'dropdown', title: 'Dropdown' },
            ]);
        };
        return Practice;
    }());
    exports.Practice = Practice;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3ByYWN0aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUlBO1FBQUE7UUFZQSxDQUFDO1FBVkcsa0NBQWUsR0FBZixVQUFnQixNQUEyQixFQUFFLE1BQWM7WUFDdkQsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDUCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsRUFBRSxRQUFRLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFO2dCQUMxRyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRTtnQkFDcEcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7YUFDM0YsQ0FBQyxDQUFDO1FBRVAsQ0FBQztRQUVMLGVBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLDRCQUFRIiwiZmlsZSI6InZpZXdzL3ByYWN0aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmFjdGljZSB7XHJcbiAgICBcclxuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgY29uZmlnLnRpdGxlID0gJ1ByYWN0aWNlJztcclxuICAgICAgICBjb25maWcubWFwKFtcclxuICAgICAgICAgICAgeyByb3V0ZTogWycnLCAnc2ltcGxlLWZvcm0nXSwgbW9kdWxlSWQ6ICcuL2Zvcm1zL3NpbXBsZS1mb3JtJywgbmFtZTogJ3NpbXBsZS1mb3JtJywgdGl0bGU6ICdTaW1wbGUgRm9ybScgfSxcclxuICAgICAgICAgICAgeyByb3V0ZTogJ3NpbXBsZS1ncmlkJywgbW9kdWxlSWQ6ICcuL2dyaWRzL3NpbXBsZS1ncmlkJywgbmFtZTogJ3NpbXBsZS1ncmlkJywgdGl0bGU6ICdTaW1wbGUgR3JpZCcgfSxcclxuICAgICAgICAgICAgeyByb3V0ZTogJ2Ryb3Bkb3duJywgbW9kdWxlSWQ6ICcuL2Zvcm1zL2Ryb3Bkb3duJywgbmFtZTogJ2Ryb3Bkb3duJywgdGl0bGU6ICdEcm9wZG93bicgfSxcclxuICAgICAgICBdKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/attributes/go-to-route',["require", "exports", "aurelia-framework", "aurelia-router"], function (require, exports, aurelia_framework_1, aurelia_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GoToRoute = (function () {
        function GoToRoute(element, router) {
            this.element = element;
            this.router = router;
            this.element = element;
            this.router = router;
        }
        GoToRoute.prototype.attached = function () {
            var _this = this;
            this.element.addEventListener("click", function () {
                _this.router.navigateToRoute(_this.route, _this.params);
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GoToRoute.prototype, "route", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], GoToRoute.prototype, "params", void 0);
        GoToRoute = __decorate([
            aurelia_framework_1.inject(Element, aurelia_router_1.Router),
            aurelia_framework_1.customAttribute('go-to-route'),
            __metadata("design:paramtypes", [Object, Object])
        ], GoToRoute);
        return GoToRoute;
    }());
    exports.GoToRoute = GoToRoute;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdHRyaWJ1dGVzL2dvLXRvLXJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVFBO1FBS0ksbUJBQW9CLE9BQU8sRUFBVSxNQUFNO1lBQXZCLFlBQU8sR0FBUCxPQUFPLENBQUE7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLENBQUM7UUFFRCw0QkFBUSxHQUFSO1lBQUEsaUJBSUM7WUFIRyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBWlM7WUFBVCw0QkFBUTs7Z0RBQU87UUFDTjtZQUFULDRCQUFROztpREFBUTtRQUhSLFNBQVM7WUFGckIsMEJBQU0sQ0FBQyxPQUFPLEVBQUUsdUJBQU0sQ0FBQztZQUN2QixtQ0FBZSxDQUFDLGFBQWEsQ0FBQzs7V0FDbEIsU0FBUyxDQWVyQjtRQUFELGdCQUFDO0tBZkQsQUFlQyxJQUFBO0lBZlksOEJBQVMiLCJmaWxlIjoicmVzb3VyY2VzL2F0dHJpYnV0ZXMvZ28tdG8tcm91dGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcclxuXHJcbi8vIEV4YW1wbGU6IFVzZSBnby10by1yb3V0ZSB0byBuYXZpZ2F0ZSB2aWEgdXJsIGNoYW5nZS4gXHJcbi8vIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBnby10by1yb3V0ZT1cInJvdXRlOiBjb250YWN0cztcIj5DcmVhdGUgTmV3IENvbnRhY3Q8L2J1dHRvbj5cclxuXHJcbkBpbmplY3QoRWxlbWVudCwgUm91dGVyKVxyXG5AY3VzdG9tQXR0cmlidXRlKCdnby10by1yb3V0ZScpXHJcbmV4cG9ydCBjbGFzcyBHb1RvUm91dGUge1xyXG5cclxuICAgIEBiaW5kYWJsZSByb3V0ZTtcclxuICAgIEBiaW5kYWJsZSBwYXJhbXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50LCBwcml2YXRlIHJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlVG9Sb3V0ZSh0aGlzLnJvdXRlLCB0aGlzLnBhcmFtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/pager',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Pager = (function () {
        function Pager() {
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], Pager.prototype, "pageIndex", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], Pager.prototype, "pageCount", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], Pager.prototype, "setPage", void 0);
        return Pager;
    }());
    exports.Pager = Pager;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9lbGVtZW50cy9wYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFFQTtRQUFBO1FBSUEsQ0FBQztRQUhXO1lBQVQsNEJBQVE7O2dEQUFXO1FBQ1Y7WUFBVCw0QkFBUTs7Z0RBQVc7UUFDVjtZQUFULDRCQUFROzs4Q0FBUztRQUNwQixZQUFDO0tBSkQsQUFJQyxJQUFBO0lBSlksc0JBQUsiLCJmaWxlIjoicmVzb3VyY2VzL2VsZW1lbnRzL3BhZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5leHBvcnQgY2xhc3MgUGFnZXIge1xuICBAYmluZGFibGUgcGFnZUluZGV4O1xuICBAYmluZGFibGUgcGFnZUNvdW50O1xuICBAYmluZGFibGUgc2V0UGFnZTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/value-converters/date-format',["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
        }
        DateFormatValueConverter.prototype.toView = function (value, format) {
            if (value === null)
                return '';
            return moment(value).format(format);
        };
        DateFormatValueConverter.prototype.fromView = function (value, format) {
            if (value === '')
                return null;
            return moment(value, format).toDate();
        };
        return DateFormatValueConverter;
    }());
    exports.DateFormatValueConverter = DateFormatValueConverter;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy92YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQUE7UUFZQSxDQUFDO1FBWEMseUNBQU0sR0FBTixVQUFPLEtBQUssRUFBRSxNQUFNO1lBQ2xCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRUQsMkNBQVEsR0FBUixVQUFTLEtBQUssRUFBRSxNQUFNO1lBQ3BCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFDSCwrQkFBQztJQUFELENBWkEsQUFZQyxJQUFBO0lBWlksNERBQXdCIiwiZmlsZSI6InJlc291cmNlcy92YWx1ZS1jb252ZXJ0ZXJzL2RhdGUtZm9ybWF0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0VmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsdWUsIGZvcm1hdCkge1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbClcbiAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gbW9tZW50KHZhbHVlKS5mb3JtYXQoZm9ybWF0KTtcbiAgfVxuXG4gIGZyb21WaWV3KHZhbHVlLCBmb3JtYXQpIHtcbiAgICBpZiAodmFsdWUgPT09ICcnKVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG1vbWVudCh2YWx1ZSwgZm9ybWF0KS50b0RhdGUoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('resources/value-converters/number-format',["require", "exports", "numeral"], function (require, exports, numeral) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberFormatValueConverter = (function () {
        function NumberFormatValueConverter() {
        }
        NumberFormatValueConverter.prototype.toView = function (value, format) {
            if (value === null || value === undefined || isNaN(value)) {
                return null;
            }
            return numeral(value).format(format);
        };
        return NumberFormatValueConverter;
    }());
    exports.NumberFormatValueConverter = NumberFormatValueConverter;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy92YWx1ZS1jb252ZXJ0ZXJzL251bWJlci1mb3JtYXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBRUE7UUFBQTtRQU9BLENBQUM7UUFOQywyQ0FBTSxHQUFOLFVBQU8sS0FBSyxFQUFFLE1BQU07WUFDbEIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkMsQ0FBQztRQUNILGlDQUFDO0lBQUQsQ0FQQSxBQU9DLElBQUE7SUFQWSxnRUFBMEIiLCJmaWxlIjoicmVzb3VyY2VzL3ZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLWZvcm1hdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG51bWVyYWwgZnJvbSAnbnVtZXJhbCc7XG5cbmV4cG9ydCBjbGFzcyBOdW1iZXJGb3JtYXRWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWx1ZSwgZm9ybWF0KSB7XG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgaXNOYU4odmFsdWUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIG51bWVyYWwodmFsdWUpLmZvcm1hdChmb3JtYXQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('views/common/entity-view-model',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EntityViewModel = (function () {
        function EntityViewModel(service) {
            this.service = service;
        }
        EntityViewModel.prototype.activate = function (info) {
            var _this = this;
            var promise;
            if (info.id === 'new') {
                promise = this.service.createNew();
            }
            else {
                promise = this.service.loadExisting(info.id);
            }
            return promise.then(function (result) {
                _this.entityManager = result.entityManager;
                _this.entity = result.entity;
            });
        };
        EntityViewModel.prototype.canDeactivate = function () {
            if (this.entity.entityAspect.entityState.isAdded()) {
                console.log('Add-new cancelled.', 2000);
                return true;
            }
            if (this.hasChanges) {
                if (!this._lastPop || +new Date() - this._lastPop > 2000) {
                    this._lastPop = +new Date();
                    console.log('Navigation cancelled.  Save your changes!', 2000);
                }
                return false;
            }
            return true;
        };
        Object.defineProperty(EntityViewModel.prototype, "hasChanges", {
            get: function () {
                return this.entityManager.hasChanges();
            },
            enumerable: true,
            configurable: true
        });
        EntityViewModel.prototype.save = function () {
            this.entityManager.acceptChanges();
            console.log('Changes saved.', 2000);
        };
        EntityViewModel.prototype.revert = function () {
            this.entityManager.rejectChanges();
            console.log('Changes reverted.', 2000);
            if (this.hasChanges) {
                this.entityManager.rejectChanges();
            }
        };
        return EntityViewModel;
    }());
    exports.EntityViewModel = EntityViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbW1vbi9lbnRpdHktdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQTtRQU9JLHlCQUFZLE9BQWlCO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7UUFFRCxrQ0FBUSxHQUFSLFVBQVMsSUFBSTtZQUFiLGlCQWNDO1lBYkcsSUFBSSxPQUFPLENBQUM7WUFHWixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3ZDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELENBQUM7WUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ3RCLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUlELHVDQUFhLEdBQWI7WUFFSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFHRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFFbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7b0JBQ3ZELElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuRSxDQUFDO2dCQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQztZQUdELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELHNCQUFJLHVDQUFVO2lCQUFkO2dCQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzNDLENBQUM7OztXQUFBO1FBRUQsOEJBQUksR0FBSjtZQUVJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN2QyxDQUFDO1FBRUQsZ0NBQU0sR0FBTjtZQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUd0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QyxDQUFDO1FBQ0wsQ0FBQztRQUNMLHNCQUFDO0lBQUQsQ0FyRUEsQUFxRUMsSUFBQTtJQXJFWSwwQ0FBZSIsImZpbGUiOiJ2aWV3cy9jb21tb24vZW50aXR5LXZpZXctbW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIEVudGl0eVZpZXdNb2RlbCB7XG5cbiAgICBzZXJ2aWNlIDogSVNlcnZpY2U7XG4gICAgZW50aXR5TWFuYWdlciA6IGJyZWV6ZS5FbnRpdHlNYW5hZ2VyO1xuICAgIGVudGl0eSA6IGJyZWV6ZS5FbnRpdHk7XG4gICAgX2xhc3RQb3A6IG51bWJlcjsgLy8gbGFzdCBwb3AgdGltZSB0aW1lIGluIG51bWJlciBmb3JtYXQgaWYgdXNlciBoYXMgdHJpZWQgdG8gbW92ZSB0byBvdGhlciB2aWV3IGJ1dCB0aGVyZSBpcyB1bnNhdmVkIGNoYW5nZXNcblxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2U6IElTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoaW5mbykge1xuICAgICAgICB2YXIgcHJvbWlzZTtcblxuICAgICAgICAvLyBsb2FkIG9yIGNyZWF0ZSB0aGUgZW50aXR5LlxuICAgICAgICBpZiAoaW5mby5pZCA9PT0gJ25ldycpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnNlcnZpY2UuY3JlYXRlTmV3KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlID0gdGhpcy5zZXJ2aWNlLmxvYWRFeGlzdGluZyhpbmZvLmlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5TWFuYWdlciA9IHJlc3VsdC5lbnRpdHlNYW5hZ2VyO1xuICAgICAgICAgICAgdGhpcy5lbnRpdHkgPSByZXN1bHQuZW50aXR5O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBnZXQgY2FsbGVkIHdoZW4gbW92aW5nIGF3YXkgZnJvbSB0aGlzIHZpZXcsIGRvIHdoYXRldmVyIHlvdSB3YW5uYSBkbyBiZWZvcmUgbW92aW5nLlxuICAgIC8vIHJldHVybiB0cnVlIHRvIG1vdmUsIGZhbHNlIHRvIHN0YXkgb24gdGhpcyB2aWV3XG4gICAgY2FuRGVhY3RpdmF0ZSgpIHtcbiAgICAgICAgLy8gcGVybWl0IG5hdmlnYXRpbmcgYXdheSBmcm9tIG5ldyBlbnRpdGllcy5cbiAgICAgICAgaWYgKHRoaXMuZW50aXR5LmVudGl0eUFzcGVjdC5lbnRpdHlTdGF0ZS5pc0FkZGVkKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdBZGQtbmV3IGNhbmNlbGxlZC4nLCAyMDAwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZGlzYWxsb3cgbmF2aWdhdGluZyBhd2F5IGZyb20gbW9kaWZpZWQgZW50aXRpZXMuXG4gICAgICAgIGlmICh0aGlzLmhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgIC8vIHRocm90dGxlIHRoZSBhbW91bnQgb2YgdG9hc3Qgd2UgcG9wLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9sYXN0UG9wIHx8ICtuZXcgRGF0ZSgpIC0gdGhpcy5fbGFzdFBvcCA+IDIwMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9sYXN0UG9wID0gK25ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05hdmlnYXRpb24gY2FuY2VsbGVkLiAgU2F2ZSB5b3VyIGNoYW5nZXMhJywgMjAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwZXJtaXQgbmF2aWdhdGluZyBhd2F5IGZyb20gdW5tb2RpZmllZCBlbnRpdGllcy5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0IGhhc0NoYW5nZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudGl0eU1hbmFnZXIuaGFzQ2hhbmdlcygpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIC8vIGZha2Ugc2F2ZS4uLlxuICAgICAgICB0aGlzLmVudGl0eU1hbmFnZXIuYWNjZXB0Q2hhbmdlcygpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ2hhbmdlcyBzYXZlZC4nLCAyMDAwKVxuICAgIH1cblxuICAgIHJldmVydCgpIHtcbiAgICAgICAgdGhpcy5lbnRpdHlNYW5hZ2VyLnJlamVjdENoYW5nZXMoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0NoYW5nZXMgcmV2ZXJ0ZWQuJywgMjAwMClcblxuICAgICAgICAvLyB3b3JrYXJvdW5kIE1hdGVyaWFsaXplIGRhdGVwaWNrZXIgYmluZGluZyB0aW1lem9uZSBpc3N1ZS5cbiAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5lbnRpdHlNYW5hZ2VyLnJlamVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('views/common/list-view-model',["require", "exports", "../../settings"], function (require, exports, settings_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListViewModel = (function () {
        function ListViewModel(routeName, router, service) {
            this.entities = [];
            this.pageSize = settings_1.default.pageSize;
            this.pageCount = 0;
            this.pageIndex = 0;
            this.isLoading = false;
            this.routeName = routeName;
            this.router = router;
            this.service = service;
        }
        ListViewModel.prototype.activate = function () {
            this.load();
        };
        ListViewModel.prototype.load = function () {
            var _this = this;
            this.isLoading = true;
            this.service.getPage(this.pageIndex)
                .then(function (result) {
                _this.entities = result.entities;
                _this.pageCount = result.pageCount;
                _this.isLoading = false;
            });
        };
        ListViewModel.prototype.setPage = function (index) {
            this.pageIndex = index;
            this.load();
        };
        ListViewModel.prototype.open = function (id) {
            this.router.navigate(this.routeName + '/' + id);
        };
        return ListViewModel;
    }());
    exports.ListViewModel = ListViewModel;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2NvbW1vbi9saXN0LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUE7UUFVSSx1QkFBWSxTQUFpQixFQUFFLE1BQWlCLEVBQUUsT0FBTztZQU56RCxhQUFRLEdBQW9CLEVBQUUsQ0FBQztZQUMvQixhQUFRLEdBQUcsa0JBQVEsQ0FBQyxRQUFRLENBQUM7WUFDN0IsY0FBUyxHQUFHLENBQUMsQ0FBQztZQUNkLGNBQVMsR0FBRyxDQUFDLENBQUM7WUFDZCxjQUFTLEdBQUcsS0FBSyxDQUFDO1lBR2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDM0IsQ0FBQztRQUVELGdDQUFRLEdBQVI7WUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUVELDRCQUFJLEdBQUo7WUFBQSxpQkFRQztZQVBHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQy9CLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1IsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNoQyxLQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQUVELCtCQUFPLEdBQVAsVUFBUSxLQUFLO1lBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7UUFFRCw0QkFBSSxHQUFKLFVBQUssRUFBRTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELENBQUM7UUFDTCxvQkFBQztJQUFELENBdENBLEFBc0NDLElBQUE7SUF0Q1ksc0NBQWEiLCJmaWxlIjoidmlld3MvY29tbW9uL2xpc3Qtdmlldy1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGJyZWV6ZSBmcm9tICdicmVlemUtY2xpZW50JztcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4uLy4uL3NldHRpbmdzJztcbmltcG9ydCB7IElTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlbCB7XG4gICAgcm91dGVyOiBBcHBSb3V0ZXI7XG4gICAgcm91dGVOYW1lIDogc3RyaW5nO1xuICAgIHNlcnZpY2U6IElTZXJ2aWNlO1xuICAgIGVudGl0aWVzOiBicmVlemUuRW50aXR5W10gPSBbXTtcbiAgICBwYWdlU2l6ZSA9IHNldHRpbmdzLnBhZ2VTaXplO1xuICAgIHBhZ2VDb3VudCA9IDA7XG4gICAgcGFnZUluZGV4ID0gMDtcbiAgICBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHJvdXRlTmFtZTogc3RyaW5nLCByb3V0ZXI6IEFwcFJvdXRlciwgc2VydmljZSkge1xuICAgICAgICB0aGlzLnJvdXRlTmFtZSA9IHJvdXRlTmFtZTtcbiAgICAgICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgICAgIHRoaXMuc2VydmljZSA9IHNlcnZpY2U7XG4gICAgfVxuXG4gICAgYWN0aXZhdGUoKSB7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdldFBhZ2UodGhpcy5wYWdlSW5kZXgpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXRpZXMgPSByZXN1bHQuZW50aXRpZXM7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlQ291bnQgPSByZXN1bHQucGFnZUNvdW50O1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRQYWdlKGluZGV4KSB7XG4gICAgICAgIHRoaXMucGFnZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMubG9hZCgpO1xuICAgIH1cblxuICAgIG9wZW4oaWQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUodGhpcy5yb3V0ZU5hbWUgKyAnLycgKyBpZCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/customers/customer-list',["require", "exports", "aurelia-dependency-injection", "aurelia-router", "../common/list-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, list_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomerList = (function (_super) {
        __extends(CustomerList, _super);
        function CustomerList(router, service) {
            return _super.call(this, 'customers', router, service) || this;
        }
        CustomerList = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_router_1.AppRouter, index_1.CustomerService),
            aurelia_dependency_injection_1.singleton(),
            __metadata("design:paramtypes", [aurelia_router_1.AppRouter, index_1.CustomerService])
        ], CustomerList);
        return CustomerList;
    }(list_view_model_1.ListViewModel));
    exports.CustomerList = CustomerList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2N1c3RvbWVycy9jdXN0b21lci1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRQTtRQUFrQyxnQ0FBYTtRQUMzQyxzQkFBWSxNQUFpQixFQUFFLE9BQXdCO21CQUNuRCxrQkFBTSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUN2QyxDQUFDO1FBSFEsWUFBWTtZQUZ4QixxQ0FBTSxDQUFDLDBCQUFTLEVBQUUsdUJBQWUsQ0FBQztZQUNsQyx3Q0FBUyxFQUFFOzZDQUVZLDBCQUFTLEVBQVcsdUJBQWU7V0FEOUMsWUFBWSxDQUl4QjtRQUFELG1CQUFDO0tBSkQsQUFJQyxDQUppQywrQkFBYSxHQUk5QztJQUpZLG9DQUFZIiwiZmlsZSI6InZpZXdzL2N1c3RvbWVycy9jdXN0b21lci1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBzaW5nbGV0b24gfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuaW1wb3J0IHsgTGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uL2NvbW1vbi9saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuXG5AaW5qZWN0KEFwcFJvdXRlciwgQ3VzdG9tZXJTZXJ2aWNlKVxuQHNpbmdsZXRvbigpXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJMaXN0IGV4dGVuZHMgTGlzdFZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBBcHBSb3V0ZXIsIHNlcnZpY2U6IEN1c3RvbWVyU2VydmljZSkge1xuICAgICAgICBzdXBlcignY3VzdG9tZXJzJywgcm91dGVyLCBzZXJ2aWNlKVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/customers/customer',["require", "exports", "aurelia-dependency-injection", "../common/entity-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, entity_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Customer = (function (_super) {
        __extends(Customer, _super);
        function Customer(service, lookups) {
            return _super.call(this, service) || this;
        }
        Object.defineProperty(Customer.prototype, "title", {
            get: function () {
                return this.entity.CompanyName || 'Customer';
            },
            enumerable: true,
            configurable: true
        });
        Customer = __decorate([
            aurelia_dependency_injection_1.inject(index_1.CustomerService, index_1.Lookups),
            __metadata("design:paramtypes", [Object, Object])
        ], Customer);
        return Customer;
    }(entity_view_model_1.EntityViewModel));
    exports.Customer = Customer;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2N1c3RvbWVycy9jdXN0b21lci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTUE7UUFBOEIsNEJBQWU7UUFFekMsa0JBQVksT0FBTyxFQUFFLE9BQU87bUJBQ3hCLGtCQUFNLE9BQU8sQ0FBQztRQUNsQixDQUFDO1FBRUQsc0JBQUksMkJBQUs7aUJBQVQ7Z0JBQ0ksTUFBTSxDQUFPLElBQUksQ0FBQyxNQUFPLENBQUMsV0FBVyxJQUFJLFVBQVUsQ0FBQztZQUN4RCxDQUFDOzs7V0FBQTtRQVJRLFFBQVE7WUFEcEIscUNBQU0sQ0FBQyx1QkFBZSxFQUFFLGVBQU8sQ0FBQzs7V0FDcEIsUUFBUSxDQVNwQjtRQUFELGVBQUM7S0FURCxBQVNDLENBVDZCLG1DQUFlLEdBUzVDO0lBVFksNEJBQVEiLCJmaWxlIjoidmlld3MvY3VzdG9tZXJzL2N1c3RvbWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5cbmltcG9ydCB7IEVudGl0eVZpZXdNb2RlbCB9IGZyb20gJy4uL2NvbW1vbi9lbnRpdHktdmlldy1tb2RlbCc7XG5pbXBvcnQgeyBMb29rdXBzLCBDdXN0b21lclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5cbkBpbmplY3QoQ3VzdG9tZXJTZXJ2aWNlLCBMb29rdXBzKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyIGV4dGVuZHMgRW50aXR5Vmlld01vZGVsIHtcblxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2UsIGxvb2t1cHMpIHtcbiAgICAgICAgc3VwZXIoc2VydmljZSk7XG4gICAgfVxuXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICByZXR1cm4gKDxhbnk+dGhpcy5lbnRpdHkpLkNvbXBhbnlOYW1lIHx8ICdDdXN0b21lcic7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('views/customers/customers-section',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CustomersSection = (function () {
        function CustomersSection() {
        }
        CustomersSection.prototype.configureRouter = function (config, router) {
            config.map([
                { route: '', moduleId: './customer-list', nav: false, title: '' },
                { route: ':id', moduleId: './customer', nav: false, title: '' },
            ]);
        };
        return CustomersSection;
    }());
    exports.CustomersSection = CustomersSection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2N1c3RvbWVycy9jdXN0b21lcnMtc2VjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1FBT0EsQ0FBQztRQU5HLDBDQUFlLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLE1BQU07WUFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDUCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDakUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2FBQ2xFLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDTCx1QkFBQztJQUFELENBUEEsQUFPQyxJQUFBO0lBUFksNENBQWdCIiwiZmlsZSI6InZpZXdzL2N1c3RvbWVycy9jdXN0b21lcnMtc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBUaGUgc2hlbGwgZm9yIHRoZSBjdXN0b21lcnMgc2VjdGlvbiBvZiB0aGUgYXBwbGljYXRpb24uICBXaWxsIGNvbnRhaW4gZWl0aGVyXG4qIHRoZSBjdXN0b21lci1saXN0IG9yIGN1c3RvbWVyIHBhZ2UuXG4qL1xuZXhwb3J0IGNsYXNzIEN1c3RvbWVyc1NlY3Rpb24ge1xuICAgIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xuICAgICAgICBjb25maWcubWFwKFtcbiAgICAgICAgICAgIHsgcm91dGU6ICcnLCBtb2R1bGVJZDogJy4vY3VzdG9tZXItbGlzdCcsIG5hdjogZmFsc2UsIHRpdGxlOiAnJyB9LFxuICAgICAgICAgICAgeyByb3V0ZTogJzppZCcsIG1vZHVsZUlkOiAnLi9jdXN0b21lcicsIG5hdjogZmFsc2UsIHRpdGxlOiAnJyB9LFxuICAgICAgICBdKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/employees/employee-list',["require", "exports", "aurelia-dependency-injection", "aurelia-router", "../common/list-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, list_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeeList = (function (_super) {
        __extends(EmployeeList, _super);
        function EmployeeList(router, service) {
            return _super.call(this, 'employees', router, service) || this;
        }
        EmployeeList = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_router_1.AppRouter, index_1.EmployeeService),
            aurelia_dependency_injection_1.singleton(),
            __metadata("design:paramtypes", [Object, Object])
        ], EmployeeList);
        return EmployeeList;
    }(list_view_model_1.ListViewModel));
    exports.EmployeeList = EmployeeList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2VtcGxveWVlcy9lbXBsb3llZS1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRQTtRQUFrQyxnQ0FBYTtRQUM3QyxzQkFBWSxNQUFNLEVBQUUsT0FBTzttQkFDekIsa0JBQU0sV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFDckMsQ0FBQztRQUhVLFlBQVk7WUFGeEIscUNBQU0sQ0FBQywwQkFBUyxFQUFFLHVCQUFlLENBQUM7WUFDbEMsd0NBQVMsRUFBRTs7V0FDQyxZQUFZLENBSXhCO1FBQUQsbUJBQUM7S0FKRCxBQUlDLENBSmlDLCtCQUFhLEdBSTlDO0lBSlksb0NBQVkiLCJmaWxlIjoidmlld3MvZW1wbG95ZWVzL2VtcGxveWVlLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgc2luZ2xldG9ufSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7QXBwUm91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmltcG9ydCB7IExpc3RWaWV3TW9kZWwgfSBmcm9tICcuLi9jb21tb24vbGlzdC12aWV3LW1vZGVsJztcbmltcG9ydCB7IEVtcGxveWVlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2luZGV4JztcblxuQGluamVjdChBcHBSb3V0ZXIsIEVtcGxveWVlU2VydmljZSlcbkBzaW5nbGV0b24oKVxuZXhwb3J0IGNsYXNzIEVtcGxveWVlTGlzdCBleHRlbmRzIExpc3RWaWV3TW9kZWwge1xuICBjb25zdHJ1Y3Rvcihyb3V0ZXIsIHNlcnZpY2UpIHtcbiAgICBzdXBlcignZW1wbG95ZWVzJywgcm91dGVyLCBzZXJ2aWNlKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/employees/employee',["require", "exports", "aurelia-dependency-injection", "../common/entity-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, entity_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var missingPhoto = 'iVBORw0KGgoAAAANSUhEUgAAAIAAAACABAMAAAAxEHz4AAAAMFBMVEXFxcX19fX+/v7x8fHu7u7p6enl5eXh4eHc3NzZ2dnV1dXR0dHNzc3Jycn5+fnGxsbcfiHzAAACQ0lEQVR4Xu2Yz0obURTGxz+Nf2IyIcvSlswNmaixQxG6LIpLRRB9geAThO4KpUieQNy4kxBfQNoXCF103dJ9SWfTUiiOeQARXHhwvHf8zhfIxvnt8+Ny5nzn3BvvyZCTk5OTUzo9ePX77YfvrOBbbG6JPlIC/5O5409C/L5rBPNXbzgz9/inFfw0KXZ1gqU4LQh03+KzeUBLI1gwFnrEAdgjlIyNCK/ClbGyAQu27IIGWULhAhRcuwQVUNB1CVbAGBkXERapOePkCBJMuwVDLgfCGiQ4dAuakCB2CwIyCAISh/kswTEgKGQJOoBgNkuwCQimRMCloZwlGHKNKNQAwYgQECegazCJrzAzbh88yxK0J5GFJSSN/DxA2HcLQmImEgt6NO5ULgDzhB2KiQfx3iVY9gSqCJegYJ7rQ8FftwvqHsovu+C/CLg4DDyYvk2w6uHMkV0knHAXJKFIVkD4kRa89HT4qX4OE6Xg3KTYJn8vPCdeXLThi7Gy400ojcWqSxD0iCBA3Yjvxj0gyutZgvoA62E379iZLm8/7gDCi2yBX31MEAy4C5LwhlvtQgOchdyG/SoC6uFUihFBlABXRLKMXUywTHahkDhzCNLWXc/wLRmjggAehbrhWMYFFWAj64vgx7ggIksgHHOjQKhwSRRec7NECOEg4HFY0Al63CwQNtErOv6I7usELe4jCCGXZSEAvyL+hl3UCi7sbz2cDhYlfDlMawU1LIt4HvtaQQvbaviV8VAraGL/huMXlapOIM/YGwKj/drs5x+/AAAAAElFTkSuQmCC';
    var Employee = (function (_super) {
        __extends(Employee, _super);
        function Employee(service) {
            return _super.call(this, service) || this;
        }
        Object.defineProperty(Employee.prototype, "photo", {
            get: function () {
                return 'data:image/png;base64,' + (this.entity.Photo || missingPhoto);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Employee.prototype, "title", {
            get: function () {
                if (this.entity.FirstName || this.entity.LastName) {
                    return this.entity.FirstName + " " + this.entity.LastName;
                }
                return 'Employee';
            },
            enumerable: true,
            configurable: true
        });
        Employee = __decorate([
            aurelia_dependency_injection_1.inject(index_1.EmployeeService),
            __metadata("design:paramtypes", [Object])
        ], Employee);
        return Employee;
    }(entity_view_model_1.EntityViewModel));
    exports.Employee = Employee;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2VtcGxveWVlcy9lbXBsb3llZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBS0EsSUFBSSxZQUFZLEdBQUcsazZCQUFrNkIsQ0FBQztJQUd0N0I7UUFBOEIsNEJBQWU7UUFDekMsa0JBQVksT0FBTzttQkFDZixrQkFBTSxPQUFPLENBQUM7UUFDbEIsQ0FBQztRQUVELHNCQUFJLDJCQUFLO2lCQUFUO2dCQUNJLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLFlBQVksQ0FBQyxDQUFDO1lBQzFFLENBQUM7OztXQUFBO1FBRUQsc0JBQUksMkJBQUs7aUJBQVQ7Z0JBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxNQUFNLENBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFVLENBQUM7Z0JBQzlELENBQUM7Z0JBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUN0QixDQUFDOzs7V0FBQTtRQWRRLFFBQVE7WUFEcEIscUNBQU0sQ0FBQyx1QkFBZSxDQUFDOztXQUNYLFFBQVEsQ0FlcEI7UUFBRCxlQUFDO0tBZkQsQUFlQyxDQWY2QixtQ0FBZSxHQWU1QztJQWZZLDRCQUFRIiwiZmlsZSI6InZpZXdzL2VtcGxveWVlcy9lbXBsb3llZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuXG5pbXBvcnQgeyBFbnRpdHlWaWV3TW9kZWwgfSBmcm9tICcuLi9jb21tb24vZW50aXR5LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgRW1wbG95ZWVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuXG52YXIgbWlzc2luZ1Bob3RvID0gJ2lWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFJQUFBQUNBQkFNQUFBQXhFSHo0QUFBQU1GQk1WRVhGeGNYMTlmWCsvdjd4OGZIdTd1N3A2ZW5sNWVYaDRlSGMzTnpaMmRuVjFkWFIwZEhOemMzSnljbjUrZm5HeHNiY2ZpSHpBQUFDUTBsRVFWUjRYdTJZejBvYlVSVEd4eitOZjJJeUljdlNsc3dObWFpeFF4RzZMSXBMUlJCOWdlQVRoTzRLcFVpZVFOeTRreEJmUU5vWENGMTAzZEo5U1dmVFVpaU9lUUFSWEhod3ZIZjh6aGZJeHZudDgrTnk1bnpuM0J2dnlaQ1RrNU9UVXpvOWVQWDc3WWZ2ck9CYmJHNkpQbElDLzVPNTQwOUMvTDVyQlBOWGJ6Z3o5L2luRmZ3MEtYWjFncVU0TFFoMDMrS3plVUJMSTFnd0ZuckVBZGdqbEl5TkNLL0NsYkd5QVF1MjdJSUdXVUxoQWhSY3V3UVZVTkIxQ1ZiQUdCa1hFUmFwT2VQa0NCSk11d1ZETGdmQ0dpUTRkQXVha0NCMkN3SXlDQUlTaC9rc3dURWdLR1FKT29CZ05rdXdDUWltUk1DbG9ad2xHSEtOS05RQXdZZ1FFQ2VnYXpDSnJ6QXpiaDg4eXhLMEo1R0ZKU1NOL0R4QTJIY0xRbUltRWd0Nk5PNVVMZ0R6aEIyS2lRZngzaVZZOWdTcUNKZWdZSjdyUThGZnR3dnFIc292dStDL0NMZzRERHlZdmsydzZ1SE1rVjBrbkhBWEpLRklWa0Q0a1JhODlIVDRxWDRPRTZYZzNLVFlKbjh2UENkZVhMVGhpN0d5NDAwb2pjV3FTeEQwaUNCQTNZanZ4ajBneXV0Wmd2b0E2MkUzNzlpWkxtOC83Z0RDaTJ5QlgzMU1FQXk0QzVMd2hsdnRRZ09jaGR5Ry9Tb0M2dUZVaWhGQmxBQlhSTEtNWFV5d1RIYWhrRGh6Q05MV1hjL3dMUm1qZ2dBZWhicmhXTVlGRldBajY0dmd4N2dnSWtzZ0hIT2pRS2h3U1JSZWM3TkVDT0VnNEhGWTBBbDYzQ3dRTnRFck92Nkk3dXNFTGU0akNDR1haU0VBdnlMK2hsM1VDaTdzYnoyY0RoWWxmRGxNYXdVMUxJdDRIdnRhUVF2YmF2aVY4VkFyYUdML2h1TVhsYXBPSU0vWUd3S2ovZHJzNXgrL0FBQUFBRWxGVGtTdVFtQ0MnO1xuXG5AaW5qZWN0KEVtcGxveWVlU2VydmljZSlcbmV4cG9ydCBjbGFzcyBFbXBsb3llZSBleHRlbmRzIEVudGl0eVZpZXdNb2RlbCB7XG4gICAgY29uc3RydWN0b3Ioc2VydmljZSkge1xuICAgICAgICBzdXBlcihzZXJ2aWNlKTtcbiAgICB9XG5cbiAgICBnZXQgcGhvdG8oKSB7XG4gICAgICAgIHJldHVybiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyAodGhpcy5lbnRpdHkuUGhvdG8gfHwgbWlzc2luZ1Bob3RvKTtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVudGl0eS5GaXJzdE5hbWUgfHwgdGhpcy5lbnRpdHkuTGFzdE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmVudGl0eS5GaXJzdE5hbWV9ICR7dGhpcy5lbnRpdHkuTGFzdE5hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ0VtcGxveWVlJztcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('views/employees/employees-section',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmployeesSection = (function () {
        function EmployeesSection() {
        }
        EmployeesSection.prototype.configureRouter = function (config, router) {
            config.map([
                { route: '', moduleId: './employee-list', nav: false, title: '' },
                { route: ':id', moduleId: './employee', nav: false, title: '' },
            ]);
        };
        return EmployeesSection;
    }());
    exports.EmployeesSection = EmployeesSection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2VtcGxveWVlcy9lbXBsb3llZXMtc2VjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1FBT0EsQ0FBQztRQU5DLDBDQUFlLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLE1BQU07WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUssUUFBUSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDcEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQU8sR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2FBQ3JFLENBQUMsQ0FBQztRQUNMLENBQUM7UUFDSCx1QkFBQztJQUFELENBUEEsQUFPQyxJQUFBO0lBUFksNENBQWdCIiwiZmlsZSI6InZpZXdzL2VtcGxveWVlcy9lbXBsb3llZXMtc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBUaGUgc2hlbGwgZm9yIHRoZSBlbXBsb3llZXMgc2VjdGlvbiBvZiB0aGUgYXBwbGljYXRpb24uICBXaWxsIGNvbnRhaW4gZWl0aGVyXG4qIHRoZSBlbXBsb3llZS1saXN0IG9yIGVtcGxveWVlIHBhZ2UuXG4qL1xuZXhwb3J0IGNsYXNzIEVtcGxveWVlc1NlY3Rpb24ge1xuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6ICcnLCAgICBtb2R1bGVJZDogJy4vZW1wbG95ZWUtbGlzdCcsIG5hdjogZmFsc2UsIHRpdGxlOiAnJyB9LFxuICAgICAgeyByb3V0ZTogJzppZCcsIG1vZHVsZUlkOiAnLi9lbXBsb3llZScsICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6ICcnIH0sXG4gICAgXSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('views/forms/dropdown',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EjDDLCheckBox = (function () {
        function EjDDLCheckBox() {
            this.skillSet = [
                { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
                { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
                { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
                { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
            ];
            this.h = 5;
            this.cwidht = '70%';
            this.fields = { text: 'skill' };
            this.dataSource = this.skillSet;
            this.checkBox = true;
            this.watermarkText = 'Select your skill';
            this.h = 6;
        }
        return EjDDLCheckBox;
    }());
    exports.EjDDLCheckBox = EjDDLCheckBox;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2Zvcm1zL2Ryb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBWUk7WUFYQSxhQUFRLEdBQUc7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2dCQUNuRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7Z0JBQzFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDM0UsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2FBQzFFLENBQUM7WUFFRixNQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ04sV0FBTSxHQUFHLEtBQUssQ0FBQztZQUlYLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQW1CLENBQUM7WUFDekMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDO1FBRUwsb0JBQUM7SUFBRCxDQXBCQSxBQW9CQyxJQUFBO0lBcEJZLHNDQUFhIiwiZmlsZSI6InZpZXdzL2Zvcm1zL2Ryb3Bkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgJCB9IGZyb20gJ2pxdWVyeSc7XG5cbmV4cG9ydCBjbGFzcyBFakRETENoZWNrQm94IHtcclxuICAgIHNraWxsU2V0ID0gW1xyXG4gICAgICAgIHsgc2tpbGw6ICdBU1AuTkVUJyB9LCB7IHNraWxsOiAnQWN0aW9uU2NyaXB0JyB9LCB7IHNraWxsOiAnQmFzaWMnIH0sXHJcbiAgICAgICAgeyBza2lsbDogJ0MrKycgfSwgeyBza2lsbDogJ0MjJyB9LCB7IHNraWxsOiAnZEJhc2UnIH0sIHsgc2tpbGw6ICdEZWxwaGknIH0sXHJcbiAgICAgICAgeyBza2lsbDogJ0VTUE9MJyB9LCB7IHNraWxsOiAnRiMnIH0sIHsgc2tpbGw6ICdGb3hQcm8nIH0sIHsgc2tpbGw6ICdKYXZhJyB9LFxyXG4gICAgICAgIHsgc2tpbGw6ICdKIycgfSwgeyBza2lsbDogJ0xpc3AnIH0sIHsgc2tpbGw6ICdMb2dvJyB9LCB7IHNraWxsOiAnUEhQJyB9XHJcbiAgICBdO1xuXG4gICAgaCA9IDU7XG4gICAgY3dpZGh0ID0gJzcwJSc7XG4gICAgZmllbGRzO1xuICAgIGRhdGFTb3VyY2U7IGNoZWNrQm94OyB3YXRlcm1hcmtUZXh0OyB0YXJnZXQ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmZpZWxkcyA9IHsgdGV4dDogJ3NraWxsJyB9O1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuc2tpbGxTZXQ7XHJcbiAgICAgICAgdGhpcy5jaGVja0JveCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy53YXRlcm1hcmtUZXh0ID0gJ1NlbGVjdCB5b3VyIHNraWxsJztcbiAgICAgICAgdGhpcy5oID0gNjtcclxuICAgIH1cclxuICAgICAgICBcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('views/forms/simple-form',["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimpleForm = (function () {
        function SimpleForm() {
            this.skillSets = [
                { skill: 'ASP.NET' }, { skill: 'ActionScript' }, { skill: 'Basic' },
                { skill: 'C++' }, { skill: 'C#' }, { skill: 'dBase' }, { skill: 'Delphi' },
                { skill: 'ESPOL' }, { skill: 'F#' }, { skill: 'FoxPro' }, { skill: 'Java' },
                { skill: 'J#' }, { skill: 'Lisp' }, { skill: 'Logo' }, { skill: 'PHP' }
            ];
            this.fields = { text: 'skill' };
            this.checkBox = true;
            this.watermarkText = 'Select your skill';
            this.carList = [
                'Audi S6', 'Austin-Healey', 'Alfa Romeo', 'Aston Martin',
                'BMW 7', 'Bentley Mulsanne', 'Bugatti Veyron',
                'Chevrolet Camaro', 'Cadillac',
                'Duesenberg J', 'Dodge Sprinter',
                'Elantra', 'Excavator',
                'Ford Boss 302', 'Ferrari 360', 'Ford Thunderbird',
                'GAZ Siber',
                'Honda S2000', 'Hyundai Santro',
                'Isuzu Swift', 'Infiniti Skyline',
                'Jaguar XJS',
                'Kia Sedona EX', 'Koenigsegg Agera',
                'Lotus Esprit', 'Lamborghini Diablo',
                'Mercedes-Benz', 'Mercury Coupe', 'Maruti Alto 800',
                'Nissan Qashqai',
                'Oldsmobile S98', 'Opel Superboss',
                'Porsche 356', 'Pontiac Sunbird',
                'Scion SRS/SC/SD', 'Saab Sportcombi', 'Subaru Sambar', 'Suzuki Swift',
                'Triumph Spitfire', 'Toyota 2000GT',
                'Volvo P1800', 'Volkswagen Shirako'
            ];
            this.uploadFileUrl = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/saveFiles';
            this.removeUploadedFileUrl = 'http://mvc.syncfusion.com/Services/FileUpload/UploadBox/removeFiles';
            this.dragAndDrop = true;
            this.multipleFiles = true;
            this.numericValue = 35;
            this.percentValue = 5;
            this.currencyValue = 500;
            this.mvalue = '4242422424';
            this.maskFormat = '99 999-99999';
            this.cwidth = '100%';
            this.dateValue = new Date();
        }
        SimpleForm.prototype.populateDropdown = function () {
            this.skillSetsTarget = $('#skillsets').data('ejDropDownList');
        };
        SimpleForm.prototype.addSkill = function () {
            var text = this.skillName;
            this.skillSets.push({ skill: text });
        };
        SimpleForm.prototype.onEnableDisable = function (event) {
            (event.detail.isChecked) ? this.skillSetsTarget.disable() : this.skillSetsTarget.enable();
        };
        SimpleForm.prototype.addfilter = function () {
            this.skillSetsTarget.option({ 'enableFilterSearch': true });
        };
        return SimpleForm;
    }());
    exports.SimpleForm = SimpleForm;
    document.addEventListener('dragover', function (event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'none';
        return false;
    }, false);
    document.addEventListener('drop', function (event) {
        event.dataTransfer.dropEffect = 'none';
        event.preventDefault();
        return false;
    }, false);
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2Zvcm1zL3NpbXBsZS1mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBVUk7WUFhQSxjQUFTLEdBQUc7Z0JBQ1IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFO2dCQUNuRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7Z0JBQzFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDM0UsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO2FBQzFFLENBQUM7WUFFRixXQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7WUFDM0IsYUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixrQkFBYSxHQUFHLG1CQUFtQixDQUFDO1lBMEJwQyxZQUFPLEdBQUc7Z0JBQ04sU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsY0FBYztnQkFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLGdCQUFnQjtnQkFDN0Msa0JBQWtCLEVBQUUsVUFBVTtnQkFDOUIsY0FBYyxFQUFFLGdCQUFnQjtnQkFDaEMsU0FBUyxFQUFFLFdBQVc7Z0JBQ3RCLGVBQWUsRUFBRSxhQUFhLEVBQUUsa0JBQWtCO2dCQUNsRCxXQUFXO2dCQUNYLGFBQWEsRUFBRSxnQkFBZ0I7Z0JBQy9CLGFBQWEsRUFBRSxrQkFBa0I7Z0JBQ2pDLFlBQVk7Z0JBQ1osZUFBZSxFQUFFLGtCQUFrQjtnQkFDbkMsY0FBYyxFQUFFLG9CQUFvQjtnQkFDcEMsZUFBZSxFQUFFLGVBQWUsRUFBRSxpQkFBaUI7Z0JBQ25ELGdCQUFnQjtnQkFDaEIsZ0JBQWdCLEVBQUUsZ0JBQWdCO2dCQUNsQyxhQUFhLEVBQUUsaUJBQWlCO2dCQUNoQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsY0FBYztnQkFDckUsa0JBQWtCLEVBQUUsZUFBZTtnQkFDbkMsYUFBYSxFQUFFLG9CQUFvQjthQUN0QyxDQUFDO1lBT0Ysa0JBQWEsR0FBRyxtRUFBbUUsQ0FBQztZQUNwRiwwQkFBcUIsR0FBRyxxRUFBcUUsQ0FBQztZQUM5RixnQkFBVyxHQUFHLElBQUksQ0FBQztZQUNuQixrQkFBYSxHQUFHLElBQUksQ0FBQztZQTdFakIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFpQkQscUNBQWdCLEdBQWhCO1lBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEUsQ0FBQztRQUlELDZCQUFRLEdBQVI7WUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVELG9DQUFlLEdBQWYsVUFBZ0IsS0FBSztZQUNqQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzlGLENBQUM7UUFFRCw4QkFBUyxHQUFUO1lBQ0ksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1FBQy9ELENBQUM7UUF5Q0wsaUJBQUM7SUFBRCxDQTdGQSxBQTZGQyxJQUFBO0lBN0ZZLGdDQUFVO0lBK0Z2QixRQUFRLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLFVBQVUsS0FBSztRQUNqRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1YsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLEtBQUs7UUFDN0MsS0FBSyxDQUFDLFlBQVksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJ2aWV3cy9mb3Jtcy9zaW1wbGUtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBTaW1wbGVGb3JtIHtcclxuXHJcbiAgICBudW1lcmljVmFsdWU7XHJcbiAgICBwZXJjZW50VmFsdWU7XHJcbiAgICBjdXJyZW5jeVZhbHVlO1xyXG4gICAgbXZhbHVlO1xyXG4gICAgbWFza0Zvcm1hdDtcbiAgICBkYXRlVmFsdWU7XG4gICAgY3dpZHRoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubnVtZXJpY1ZhbHVlID0gMzU7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50VmFsdWUgPSA1O1xyXG4gICAgICAgIHRoaXMuY3VycmVuY3lWYWx1ZSA9IDUwMDtcclxuICAgICAgICB0aGlzLm12YWx1ZSA9ICc0MjQyNDIyNDI0JztcclxuICAgICAgICB0aGlzLm1hc2tGb3JtYXQgPSAnOTkgOTk5LTk5OTk5JztcbiAgICAgICAgdGhpcy5jd2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuZGF0ZVZhbHVlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gRHJvcGRvd24gZmVhdHVyZXNcclxuXHJcbiAgICBza2lsbFNldHMgPSBbXHJcbiAgICAgICAgeyBza2lsbDogJ0FTUC5ORVQnIH0sIHsgc2tpbGw6ICdBY3Rpb25TY3JpcHQnIH0sIHsgc2tpbGw6ICdCYXNpYycgfSxcclxuICAgICAgICB7IHNraWxsOiAnQysrJyB9LCB7IHNraWxsOiAnQyMnIH0sIHsgc2tpbGw6ICdkQmFzZScgfSwgeyBza2lsbDogJ0RlbHBoaScgfSxcclxuICAgICAgICB7IHNraWxsOiAnRVNQT0wnIH0sIHsgc2tpbGw6ICdGIycgfSwgeyBza2lsbDogJ0ZveFBybycgfSwgeyBza2lsbDogJ0phdmEnIH0sXHJcbiAgICAgICAgeyBza2lsbDogJ0ojJyB9LCB7IHNraWxsOiAnTGlzcCcgfSwgeyBza2lsbDogJ0xvZ28nIH0sIHsgc2tpbGw6ICdQSFAnIH1cclxuICAgIF07XHJcblxyXG4gICAgZmllbGRzID0geyB0ZXh0OiAnc2tpbGwnIH07XHJcbiAgICBjaGVja0JveCA9IHRydWU7XHJcbiAgICB3YXRlcm1hcmtUZXh0ID0gJ1NlbGVjdCB5b3VyIHNraWxsJztcclxuICAgIHNraWxsU2V0c1RhcmdldDtcclxuXHJcbiAgICBwb3B1bGF0ZURyb3Bkb3duKCkge1xyXG4gICAgICAgIHRoaXMuc2tpbGxTZXRzVGFyZ2V0ID0gJCgnI3NraWxsc2V0cycpLmRhdGEoJ2VqRHJvcERvd25MaXN0Jyk7XHJcbiAgICB9XG5cbiAgICBza2lsbE5hbWU7XG5cbiAgICBhZGRTa2lsbCgpIHtcbiAgICAgICAgdmFyIHRleHQgPSB0aGlzLnNraWxsTmFtZTtcbiAgICAgICAgdGhpcy5za2lsbFNldHMucHVzaCh7IHNraWxsOiB0ZXh0IH0pO1xuICAgIH1cclxuXG4gICAgb25FbmFibGVEaXNhYmxlKGV2ZW50KSB7XHJcbiAgICAgICAgKGV2ZW50LmRldGFpbC5pc0NoZWNrZWQpID8gdGhpcy5za2lsbFNldHNUYXJnZXQuZGlzYWJsZSgpIDogdGhpcy5za2lsbFNldHNUYXJnZXQuZW5hYmxlKCk7XHJcbiAgICB9XG5cbiAgICBhZGRmaWx0ZXIoKSB7XG4gICAgICAgIHRoaXMuc2tpbGxTZXRzVGFyZ2V0Lm9wdGlvbih7ICdlbmFibGVGaWx0ZXJTZWFyY2gnOiB0cnVlIH0pXG4gICAgfVxuXHJcbiAgICAvLyBFbmQgRHJvcGRvd24gZmVhdHVyZXNcblxuICAgIC8vIEF1dG9jb21wbGV0ZVxuXG4gICAgY2FyTGlzdCA9IFtcclxuICAgICAgICAnQXVkaSBTNicsICdBdXN0aW4tSGVhbGV5JywgJ0FsZmEgUm9tZW8nLCAnQXN0b24gTWFydGluJyxcclxuICAgICAgICAnQk1XIDcnLCAnQmVudGxleSBNdWxzYW5uZScsICdCdWdhdHRpIFZleXJvbicsXHJcbiAgICAgICAgJ0NoZXZyb2xldCBDYW1hcm8nLCAnQ2FkaWxsYWMnLFxyXG4gICAgICAgICdEdWVzZW5iZXJnIEonLCAnRG9kZ2UgU3ByaW50ZXInLFxyXG4gICAgICAgICdFbGFudHJhJywgJ0V4Y2F2YXRvcicsXHJcbiAgICAgICAgJ0ZvcmQgQm9zcyAzMDInLCAnRmVycmFyaSAzNjAnLCAnRm9yZCBUaHVuZGVyYmlyZCcsXHJcbiAgICAgICAgJ0dBWiBTaWJlcicsXHJcbiAgICAgICAgJ0hvbmRhIFMyMDAwJywgJ0h5dW5kYWkgU2FudHJvJyxcclxuICAgICAgICAnSXN1enUgU3dpZnQnLCAnSW5maW5pdGkgU2t5bGluZScsXHJcbiAgICAgICAgJ0phZ3VhciBYSlMnLFxyXG4gICAgICAgICdLaWEgU2Vkb25hIEVYJywgJ0tvZW5pZ3NlZ2cgQWdlcmEnLFxyXG4gICAgICAgICdMb3R1cyBFc3ByaXQnLCAnTGFtYm9yZ2hpbmkgRGlhYmxvJyxcclxuICAgICAgICAnTWVyY2VkZXMtQmVueicsICdNZXJjdXJ5IENvdXBlJywgJ01hcnV0aSBBbHRvIDgwMCcsXHJcbiAgICAgICAgJ05pc3NhbiBRYXNocWFpJyxcclxuICAgICAgICAnT2xkc21vYmlsZSBTOTgnLCAnT3BlbCBTdXBlcmJvc3MnLFxyXG4gICAgICAgICdQb3JzY2hlIDM1NicsICdQb250aWFjIFN1bmJpcmQnLFxyXG4gICAgICAgICdTY2lvbiBTUlMvU0MvU0QnLCAnU2FhYiBTcG9ydGNvbWJpJywgJ1N1YmFydSBTYW1iYXInLCAnU3V6dWtpIFN3aWZ0JyxcclxuICAgICAgICAnVHJpdW1waCBTcGl0ZmlyZScsICdUb3lvdGEgMjAwMEdUJyxcclxuICAgICAgICAnVm9sdm8gUDE4MDAnLCAnVm9sa3N3YWdlbiBTaGlyYWtvJ1xyXG4gICAgXTtcblxuICAgIC8vIEVuZCBBdXRvY29tcGxldGVcblxuXG4gICAgLy8gRmlsZSBVcGxvYWRcblxuICAgIHVwbG9hZEZpbGVVcmwgPSAnaHR0cDovL212Yy5zeW5jZnVzaW9uLmNvbS9TZXJ2aWNlcy9GaWxlVXBsb2FkL1VwbG9hZEJveC9zYXZlRmlsZXMnO1xyXG4gICAgcmVtb3ZlVXBsb2FkZWRGaWxlVXJsID0gJ2h0dHA6Ly9tdmMuc3luY2Z1c2lvbi5jb20vU2VydmljZXMvRmlsZVVwbG9hZC9VcGxvYWRCb3gvcmVtb3ZlRmlsZXMnO1xuICAgIGRyYWdBbmREcm9wID0gdHJ1ZTtcclxuICAgIG11bHRpcGxlRmlsZXMgPSB0cnVlO1xuICAgIFxuICAgIC8vIEVuZCBVcGxvYWRcblxyXG5cclxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59LCBmYWxzZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlci5kcm9wRWZmZWN0ID0gJ25vbmUnO1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufSwgZmFsc2UpO1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('views/generatedControls/first-form',["require", "exports", "./refData", "../../models/index"], function (require, exports, refData_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FirstForm = (function () {
        function FirstForm() {
            var _this = this;
            this.watermarkText = "Select";
            this.multiSelectShowCheckbox = true;
            this.cwidth = "100%";
            this.fullData = refData_1.RefData.fields;
            this.fieldIdentifier = this.fullData.fields[0];
            this.fieldValuesArr = this.fullData.fields[1];
            this.fields = { text: 'Name', value: 'Value' };
            var tempFieldLists = this.fullData.fieldLists[1];
            this.fieldLists = [];
            tempFieldLists.forEach(function (val, index, array) {
                _this.fieldLists.push({
                    'Id': val[0],
                    'Name': val[2],
                    'Value': val[1] || val[2]
                });
            });
            this.SetPositionOfFields();
            this.ElementEnum = index_1.ElementEnum;
        }
        FirstForm.prototype.filterDataForDropdown = function (listId) {
            return this.fieldLists.filter(function (v) {
                if (v['Id'] == listId) {
                    return true;
                }
            });
        };
        FirstForm.prototype.SetPositionOfFields = function () {
            if (this.fieldIdentifier) {
                this.posFieldId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.Id);
                this.posFieldName = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.Name);
                this.posFieldMaxLength = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.MaxLength);
                this.posFieldElementId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.ElementId);
                this.posFieldListId = this.fieldIdentifier.indexOf(index_1.FieldIdentifiers.ListId);
            }
            else {
                console.log('fieldIdentifier is not initailized');
            }
        };
        FirstForm.prototype.callDebugger = function () {
            debugger;
        };
        return FirstForm;
    }());
    exports.FirstForm = FirstForm;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2dlbmVyYXRlZENvbnRyb2xzL2ZpcnN0LWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBTUE7UUFvQkk7WUFBQSxpQkEyQkM7WUF4Q0Qsa0JBQWEsR0FBRyxRQUFRLENBQUM7WUFDekIsNEJBQXVCLEdBQUcsSUFBSSxDQUFDO1lBYTNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBRXJCLElBQUksQ0FBQyxRQUFRLEdBQUcsaUJBQU8sQ0FBQyxNQUFNLENBQUM7WUFHL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsQ0FBQztZQUcvQyxJQUFJLGNBQWMsR0FBVSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNyQixjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLO2dCQUNyQyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1osTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM1QixDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztZQUlILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsbUJBQVcsQ0FBQztRQUNuQyxDQUFDO1FBRUQseUNBQXFCLEdBQXJCLFVBQXNCLE1BQU07WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsQ0FBQztnQkFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFRCx1Q0FBbUIsR0FBbkI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyx3QkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDcEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyx3QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLHdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsd0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsd0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEYsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUN0RCxDQUFDO1FBRUwsQ0FBQztRQUVELGdDQUFZLEdBQVo7WUFDSSxRQUFRLENBQUM7UUFDYixDQUFDO1FBRUwsZ0JBQUM7SUFBRCxDQTNFQSxBQTJFQyxJQUFBO0lBM0VZLDhCQUFTIiwiZmlsZSI6InZpZXdzL2dlbmVyYXRlZENvbnRyb2xzL2ZpcnN0LWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlckNvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcbmltcG9ydCB7ICQgfSBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgeyBSZWZEYXRhIH0gZnJvbSAnLi9yZWZEYXRhJztcclxuaW1wb3J0IHsgRWxlbWVudEVudW0sIEZpZWxkSWRlbnRpZmllcnMgfSBmcm9tICcuLi8uLi9tb2RlbHMvaW5kZXgnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpcnN0Rm9ybSB7XHJcblxyXG4gICAgZnVsbERhdGE6IGFueTtcclxuICAgIGZpZWxkSWRlbnRpZmllcjogYW55W107IC8vIFtcIkZpZWxkSWRcIiwgXCJOYW1lXCIsIFwiTWF4TGVuZ3RoXCIsIFwiRWxlbWVudElkXCIsIFwiTGlzdElkXCJdXHJcbiAgICBmaWVsZFZhbHVlc0FycjogYW55W107IC8vIFsgW1wiNDMyXCIsIFwiU3lzdGVtIE51bWJlclwiLCBcIjRcIiwgXCIxM1wiLCBudWxsXSwgLi4uIF1cclxuICAgIGZpZWxkTGlzdHM6IGFueVtdO1xuICAgIGZpZWxkcztcbiAgICB3YXRlcm1hcmtUZXh0ID0gXCJTZWxlY3RcIjtcbiAgICBtdWx0aVNlbGVjdFNob3dDaGVja2JveCA9IHRydWU7XG5cbiAgICBjd2lkdGg7XHJcblxyXG4gICAgLy8gcG9zaXRpb25zXHJcbiAgICBwb3NGaWVsZElkO1xyXG4gICAgcG9zRmllbGROYW1lO1xyXG4gICAgcG9zRmllbGRNYXhMZW5ndGg7XHJcbiAgICBwb3NGaWVsZEVsZW1lbnRJZDtcclxuICAgIHBvc0ZpZWxkTGlzdElkO1xyXG4gICAgRWxlbWVudEVudW07XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jd2lkdGggPSBcIjEwMCVcIjtcclxuXHJcbiAgICAgICAgdGhpcy5mdWxsRGF0YSA9IFJlZkRhdGEuZmllbGRzO1xyXG5cclxuICAgICAgICAvLyBGaW5kIGZpZWxkIGlkZW50aWZpZXJzIGFuZCB0aGVpciB2YWx1ZXMgYXJyYXlcclxuICAgICAgICB0aGlzLmZpZWxkSWRlbnRpZmllciA9IHRoaXMuZnVsbERhdGEuZmllbGRzWzBdO1xyXG4gICAgICAgIHRoaXMuZmllbGRWYWx1ZXNBcnIgPSB0aGlzLmZ1bGxEYXRhLmZpZWxkc1sxXTtcclxuXG4gICAgICAgIC8vIGZvciBkcm9wZG93bnMgZGVmYXVsdCB0ZW1wbGF0ZSByZWFkIGRhdGEgZnJvbSBhbiBvYmplY3QgcHJvcGVydGllcyBuYW1lZCBhcyB0ZXh0IGFuZCB2YWx1ZS5cbiAgICAgICAgdGhpcy5maWVsZHMgPSB7IHRleHQ6ICdOYW1lJywgdmFsdWU6ICdWYWx1ZScgfTtcblxuICAgICAgICAvLyByZWFkIGRhdGEgcHV0IGluIG9iamVjdCBvZiBraW5kIGRlZmF1bHQgdGVtcGxhdGVcbiAgICAgICAgdmFyIHRlbXBGaWVsZExpc3RzOiBhbnlbXSA9IHRoaXMuZnVsbERhdGEuZmllbGRMaXN0c1sxXTtcbiAgICAgICAgdGhpcy5maWVsZExpc3RzID0gW107XG4gICAgICAgIHRlbXBGaWVsZExpc3RzLmZvckVhY2goKHZhbCwgaW5kZXgsIGFycmF5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkTGlzdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgJ0lkJzogdmFsWzBdLFxuICAgICAgICAgICAgICAgICdOYW1lJzogdmFsWzJdLFxuICAgICAgICAgICAgICAgICdWYWx1ZSc6IHZhbFsxXSB8fCB2YWxbMl1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG5cbiAgICAgICAgdGhpcy5TZXRQb3NpdGlvbk9mRmllbGRzKCk7XHJcbiAgICAgICAgdGhpcy5FbGVtZW50RW51bSA9IEVsZW1lbnRFbnVtO1xyXG4gICAgfVxuXG4gICAgZmlsdGVyRGF0YUZvckRyb3Bkb3duKGxpc3RJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZExpc3RzLmZpbHRlcigodikgPT4ge1xuICAgICAgICAgICAgaWYgKHZbJ0lkJ10gPT0gbGlzdElkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XG4gICAgfVxyXG5cclxuICAgIFNldFBvc2l0aW9uT2ZGaWVsZHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zRmllbGRJZCA9IHRoaXMuZmllbGRJZGVudGlmaWVyLmluZGV4T2YoRmllbGRJZGVudGlmaWVycy5JZCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zRmllbGROYW1lID0gdGhpcy5maWVsZElkZW50aWZpZXIuaW5kZXhPZihGaWVsZElkZW50aWZpZXJzLk5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc0ZpZWxkTWF4TGVuZ3RoID0gdGhpcy5maWVsZElkZW50aWZpZXIuaW5kZXhPZihGaWVsZElkZW50aWZpZXJzLk1heExlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zRmllbGRFbGVtZW50SWQgPSB0aGlzLmZpZWxkSWRlbnRpZmllci5pbmRleE9mKEZpZWxkSWRlbnRpZmllcnMuRWxlbWVudElkKTtcclxuICAgICAgICAgICAgdGhpcy5wb3NGaWVsZExpc3RJZCA9IHRoaXMuZmllbGRJZGVudGlmaWVyLmluZGV4T2YoRmllbGRJZGVudGlmaWVycy5MaXN0SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpZWxkSWRlbnRpZmllciBpcyBub3QgaW5pdGFpbGl6ZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEZWJ1Z2dlcigpIHtcclxuICAgICAgICBkZWJ1Z2dlcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('views/generatedControls/refData',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RefData = (function () {
        function RefData() {
        }
        RefData.fields = {
            "fields": [
                [
                    "FieldId",
                    "Name",
                    "MaxLength",
                    "ElementId",
                    "ListId"
                ],
                [
                    [
                        "432",
                        "System Number",
                        "4",
                        "13",
                        null
                    ],
                    [
                        "433",
                        "Crawford Handling Office Reference",
                        "35",
                        "2",
                        null
                    ],
                    [
                        "434",
                        "FNOL Reference",
                        "35",
                        "2",
                        null
                    ],
                    [
                        "435",
                        "Insurer's Reference",
                        "35",
                        "2",
                        null
                    ],
                    [
                        "436",
                        "Programme",
                        "100",
                        "23",
                        "47"
                    ],
                    [
                        "437",
                        "Policy Country",
                        "50",
                        "19",
                        "48"
                    ],
                    [
                        "438",
                        "Type of Incident",
                        "100",
                        "23",
                        "49"
                    ],
                    [
                        "439",
                        "Insured's Reference",
                        "35",
                        "2",
                        null
                    ],
                    [
                        "440",
                        "Broker's Reference",
                        "35",
                        "2",
                        null
                    ],
                    [
                        "2518",
                        "Incident Location",
                        "250",
                        "1",
                        null
                    ],
                    [
                        "2519",
                        "Insured Division",
                        "150",
                        "1",
                        null
                    ],
                    [
                        "2520",
                        "Incident Date, From",
                        "0",
                        "6",
                        null
                    ],
                    [
                        "2521",
                        "Incident Date, To",
                        "0",
                        "6",
                        null
                    ],
                    [
                        "442",
                        "Date Incident Recorded",
                        "3",
                        "6",
                        null
                    ],
                    [
                        "1114",
                        "Incident Status",
                        "150",
                        "19",
                        "114"
                    ],
                    [
                        "683",
                        "File Handler",
                        "101",
                        "1",
                        null
                    ],
                    [
                        "684",
                        "Claimant Name",
                        "100",
                        "1",
                        null
                    ],
                    [
                        "685",
                        "Vehicle Registration",
                        "100",
                        "1",
                        null
                    ],
                    [
                        "686",
                        "Driver Name",
                        "101",
                        "1",
                        null
                    ],
                    [
                        "1651",
                        "UCR",
                        "25",
                        "1",
                        null
                    ],
                    [
                        "1885",
                        "Legacy Crawford Reference",
                        "35",
                        "1",
                        null
                    ]
                ]
            ],
            "fieldLists": [
                [
                    "Id",
                    "Value",
                    "Name"
                ],
                [
                    [
                        "47",
                        null,
                        "ABF Global TPA"
                    ],
                    [
                        "47",
                        null,
                        "ABF Global TPA (Zurich)"
                    ],
                    [
                        "47",
                        null,
                        "Agility East"
                    ],
                    [
                        "47",
                        null,
                        "Agility West"
                    ],
                    [
                        "47",
                        null,
                        "Ahold Global TPA Programme"
                    ],
                    [
                        "47",
                        null,
                        "Aitch Holdings"
                    ],
                    [
                        "47",
                        null,
                        "Allied World - Globe"
                    ],
                    [
                        "47",
                        null,
                        "Alpha - IAS"
                    ],
                    [
                        "47",
                        null,
                        "Argosy"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - ACBA Bank"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - AK Bars Bank"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Avent Tarjeta"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Banco Sol"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Bank of America NA (APAC)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - BCEL Laos"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - BIAO"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Blom Bank S.A.L."
                    ],
                    [
                        "47",
                        null,
                        "Aspire - BNP Paribas Burkina Faso"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - BNP Paribas Cote d'Ivoire"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - BNP Paribas Mali"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - BNP Paribas Senegal"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - BOC Singapore"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - CBH Compagnie Bancaire Helvetique SA"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - CFC Capital Finance Company"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Citibank BCLW"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Citibank Corporate"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - GE Money"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Hang Seng Bank (part of UPI Scheme)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Himalayan Bank"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - IBL Bank Lebanon"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Kyrgyzkommertsbank"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Laiki Bank"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Mekong Bank (part of UPI Scheme)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Raiffeisenbank"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Russian Standard Bank"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - SAIB"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Sberbank Amex Black and Platinum"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Albania)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Benin)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Cameroun)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Cote d'Ivoire)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Croatia)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Ghana)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Macedonia)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Madagascar)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Mauritania)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Senegal)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Slovenia)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale (Tchad)"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Société Générale Bank Cyprus"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - Standard Chartered Bank Vietnam"
                    ],
                    [
                        "47",
                        null,
                        "Aspire - VISA"
                    ],
                    [
                        "47",
                        null,
                        "Aspire Defence"
                    ],
                    [
                        "47",
                        null,
                        "ASSOCIATED BRITISH FOODS"
                    ],
                    [
                        "47",
                        null,
                        "AstraZeneca"
                    ],
                    [
                        "47",
                        null,
                        "AstraZeneca Employers Liability"
                    ],
                    [
                        "47",
                        null,
                        "Aviva TPA Marine Claims"
                    ],
                    [
                        "47",
                        null,
                        "AWAC"
                    ],
                    [
                        "47",
                        null,
                        "Baxter Healthcare"
                    ],
                    [
                        "47",
                        null,
                        "BRITISH VITA PLC"
                    ],
                    [
                        "47",
                        null,
                        "Calderdale Metropolitan Borough Council"
                    ],
                    [
                        "47",
                        null,
                        "Canopius / Nordeuropa"
                    ],
                    [
                        "47",
                        null,
                        "Carrot Insurance"
                    ],
                    [
                        "47",
                        null,
                        "COATS VIYELLA"
                    ],
                    [
                        "47",
                        null,
                        "Countryside"
                    ],
                    [
                        "47",
                        null,
                        "Cross-border Motor Claims"
                    ],
                    [
                        "47",
                        null,
                        "CUA"
                    ],
                    [
                        "47",
                        null,
                        "Cummins Africa Liability (CU012)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins Africa Liability (CU020)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins Casualty/Motor/run-off (CU001)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins Chubb - Marine Cargo (CU018)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins Environmental Global Programme (CU014)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins France Product Liability (CU007)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins Marine Cargo (CU015)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins NAD Professional Liability (CU013)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins NAD Shiprepairer (CU016)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins non-USA Property (CU003)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins North American Distributors (CU010)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins UK EL (CU004)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins UK EL Run Off (CU006)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins UK Motor 1 July 13 to 1 July 14 (CU009)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins UK Motor up to 30 June 2013 (CU008)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins US Auto Liability (CU019)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins US NAD 3rd party Crime (CU017)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins USA Motor APD (CU005)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins USA Property (CU002)"
                    ],
                    [
                        "47",
                        null,
                        "Cummins Zurich Motor from 1 July 2014 (CU011)"
                    ],
                    [
                        "47",
                        null,
                        "DCC Energy"
                    ],
                    [
                        "47",
                        null,
                        "Demonstration Programme"
                    ],
                    [
                        "47",
                        null,
                        "Digiwise Gadget Insurance"
                    ],
                    [
                        "47",
                        null,
                        "DUAL/ANV"
                    ],
                    [
                        "47",
                        null,
                        "EDF Energy"
                    ],
                    [
                        "47",
                        null,
                        "Emprise Group Holdings Ltd"
                    ],
                    [
                        "47",
                        null,
                        "European Forecourt Retail Group"
                    ],
                    [
                        "47",
                        null,
                        "European Metal Recycling "
                    ],
                    [
                        "47",
                        null,
                        "Everest"
                    ],
                    [
                        "47",
                        null,
                        "FedEx Corporation European Motor"
                    ],
                    [
                        "47",
                        null,
                        "Foot Locker Europe"
                    ],
                    [
                        "47",
                        null,
                        "Forth Directive"
                    ],
                    [
                        "47",
                        null,
                        "ForwarderLink"
                    ],
                    [
                        "47",
                        null,
                        "Gefion Insurance"
                    ],
                    [
                        "47",
                        null,
                        "Handy Programme"
                    ],
                    [
                        "47",
                        null,
                        "HDI Group Accident"
                    ],
                    [
                        "47",
                        null,
                        "Hochtief "
                    ],
                    [
                        "47",
                        null,
                        "Homebase"
                    ],
                    [
                        "47",
                        null,
                        "Hub South West Scotland Limited"
                    ],
                    [
                        "47",
                        null,
                        "ICA AB"
                    ],
                    [
                        "47",
                        null,
                        "Infrared"
                    ],
                    [
                        "47",
                        null,
                        "Innisfree"
                    ],
                    [
                        "47",
                        null,
                        "Insurancentre"
                    ],
                    [
                        "47",
                        null,
                        "JLP"
                    ],
                    [
                        "47",
                        null,
                        "KONE Global Liability Programme"
                    ],
                    [
                        "47",
                        null,
                        "Kuwait Petroleum"
                    ],
                    [
                        "47",
                        null,
                        "Lifesure (CAA)"
                    ],
                    [
                        "47",
                        null,
                        "Lima Agency Ltd "
                    ],
                    [
                        "47",
                        null,
                        "Live Nation"
                    ],
                    [
                        "47",
                        null,
                        "London Borough of Hackney"
                    ],
                    [
                        "47",
                        null,
                        "Moorhouse Insurance"
                    ],
                    [
                        "47",
                        null,
                        "MOTO Hospitality"
                    ],
                    [
                        "47",
                        null,
                        "Mura Estates"
                    ],
                    [
                        "47",
                        null,
                        "MWH Constructions Ltd"
                    ],
                    [
                        "47",
                        null,
                        "Navigators Branch"
                    ],
                    [
                        "47",
                        null,
                        "Nestlé Motor "
                    ],
                    [
                        "47",
                        null,
                        "Novae"
                    ],
                    [
                        "47",
                        null,
                        "Offshore Market Placement Australia"
                    ],
                    [
                        "47",
                        null,
                        "OneSure Insurance"
                    ],
                    [
                        "47",
                        null,
                        "Opel Recovery"
                    ],
                    [
                        "47",
                        null,
                        "Pentair"
                    ],
                    [
                        "47",
                        null,
                        "Plum Underwriting Scheme"
                    ],
                    [
                        "47",
                        null,
                        "Puma Energy (Australia) Holdings PTY LTD"
                    ],
                    [
                        "47",
                        null,
                        "Randstad-Tempo Team"
                    ],
                    [
                        "47",
                        null,
                        "Reichhold Global TPA Programme"
                    ],
                    [
                        "47",
                        null,
                        "Right Choice Insurance"
                    ],
                    [
                        "47",
                        null,
                        "Rituals Cosmetics"
                    ],
                    [
                        "47",
                        null,
                        "Royal Mint Gardens"
                    ],
                    [
                        "47",
                        null,
                        "Semperian PPP Investment Partners"
                    ],
                    [
                        "47",
                        null,
                        "Shell Personal Effects"
                    ],
                    [
                        "47",
                        null,
                        "Sodexo"
                    ],
                    [
                        "47",
                        null,
                        "Sports Direct.com Retail (Non Motor)"
                    ],
                    [
                        "47",
                        null,
                        "St. George PLC"
                    ],
                    [
                        "47",
                        null,
                        "Tesco Real Estate"
                    ],
                    [
                        "47",
                        null,
                        "Thistle Motor "
                    ],
                    [
                        "47",
                        null,
                        "Travelers Insurance"
                    ],
                    [
                        "47",
                        null,
                        "Ultimart Insurance Services (De Montfort Fine Arts)"
                    ],
                    [
                        "47",
                        null,
                        "VCS"
                    ],
                    [
                        "47",
                        null,
                        "Vodafone"
                    ],
                    [
                        "47",
                        null,
                        "Watkins"
                    ],
                    [
                        "47",
                        null,
                        "Welsh Water"
                    ],
                    [
                        "47",
                        null,
                        "Westfield - Own Property Damage"
                    ],
                    [
                        "47",
                        null,
                        "Westfield Design & Construction"
                    ],
                    [
                        "47",
                        null,
                        "Westfield Europe Limited"
                    ],
                    [
                        "47",
                        null,
                        "Whitebarn Developments (Hitchin) Limited"
                    ],
                    [
                        "47",
                        null,
                        "William Hare Ltd"
                    ],
                    [
                        "47",
                        null,
                        "WizzAir"
                    ],
                    [
                        "47",
                        null,
                        "XL - Alcampo Retail"
                    ],
                    [
                        "47",
                        null,
                        "XL - Altamira Real Estate"
                    ],
                    [
                        "47",
                        null,
                        "XL - Auchan Spa"
                    ],
                    [
                        "47",
                        null,
                        "XL - Banco Santander S.A."
                    ],
                    [
                        "47",
                        null,
                        "XL - Banco Santander S.A. (BANSLEASE)"
                    ],
                    [
                        "47",
                        null,
                        "XL - Banco Santander S.A. (PIP'S)"
                    ],
                    [
                        "47",
                        null,
                        "XL - Barceló Hotel Group"
                    ],
                    [
                        "47",
                        null,
                        "XL - Citta di Susa"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Adro"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Arborea"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Arluno"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Bibbiano"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Borgaro Torinese"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Boves"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Brisighella"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Calenzano"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Cambiano"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Campegine"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Canossa"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Cantu"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Carate Brianza"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Caronno Pertusella"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Cascina"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Castel Bolognese"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Cinisello"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Cittadella"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Cortona"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Cuneo"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Dalmine"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Feltre"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Frabosa Sottana"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Gassino Torinese"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Giaveno"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Greve in Chianti"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Guidonia"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Latisana"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Legnago"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Manciano"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Mirandola"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Montecatini"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Montecchio Emilia"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Porto San Giorgio"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Priolo Gargallo"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Quarrata"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Riva Ligure"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Saluzzo"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di San Casciano in Val di Pesa"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di San Sperate"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Sant’Ilario Val d’Enza"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Sinnai"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Sirolo"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Terranuova Bracciolini"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Treviso"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Trezzano sul Naviglio"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Trieste"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Uboldo"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Valdagno"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Verano Brianza"
                    ],
                    [
                        "47",
                        null,
                        "XL - Comune di Vignanello"
                    ],
                    [
                        "47",
                        null,
                        "XL - Costco Programme"
                    ],
                    [
                        "47",
                        null,
                        "XL - Gallerie Commerciali Italia Spa"
                    ],
                    [
                        "47",
                        null,
                        "XL - NH Europa"
                    ],
                    [
                        "47",
                        null,
                        "XL - SMA Spa"
                    ],
                    [
                        "47",
                        null,
                        "XL - Sonae Group"
                    ],
                    [
                        "47",
                        null,
                        "XL - Unione dei comuni Chianti Fiorentino"
                    ],
                    [
                        "47",
                        null,
                        "XL - Urbaser Portugal"
                    ],
                    [
                        "48",
                        null,
                        "Afghanistan"
                    ],
                    [
                        "48",
                        null,
                        "Åland Islands"
                    ],
                    [
                        "48",
                        null,
                        "Albania"
                    ],
                    [
                        "48",
                        null,
                        "Algeria"
                    ],
                    [
                        "48",
                        null,
                        "American Samoa"
                    ],
                    [
                        "48",
                        null,
                        "Andorra"
                    ],
                    [
                        "48",
                        null,
                        "Angola"
                    ],
                    [
                        "48",
                        null,
                        "Anguilla"
                    ],
                    [
                        "48",
                        null,
                        "Antarctica"
                    ],
                    [
                        "48",
                        null,
                        "Antigua and Barbuda"
                    ],
                    [
                        "48",
                        null,
                        "Argentina"
                    ],
                    [
                        "48",
                        null,
                        "Armenia"
                    ],
                    [
                        "48",
                        null,
                        "Aruba"
                    ],
                    [
                        "48",
                        null,
                        "Australia"
                    ],
                    [
                        "48",
                        null,
                        "Austria"
                    ],
                    [
                        "48",
                        null,
                        "Azerbaijan"
                    ],
                    [
                        "48",
                        null,
                        "Bahamas"
                    ],
                    [
                        "48",
                        null,
                        "Bahrain"
                    ],
                    [
                        "48",
                        null,
                        "Bangladesh"
                    ],
                    [
                        "48",
                        null,
                        "Barbados"
                    ],
                    [
                        "48",
                        null,
                        "Belarus"
                    ],
                    [
                        "48",
                        null,
                        "Belgium"
                    ],
                    [
                        "48",
                        null,
                        "Belize"
                    ],
                    [
                        "48",
                        null,
                        "Benin"
                    ],
                    [
                        "48",
                        null,
                        "Bermuda"
                    ],
                    [
                        "48",
                        null,
                        "Bhutan"
                    ],
                    [
                        "48",
                        null,
                        "Bolivia, Plurinational State of"
                    ],
                    [
                        "48",
                        null,
                        "Bonaire, Sint Eustatius and Saba"
                    ],
                    [
                        "48",
                        null,
                        "Bosnia and Herzegovina"
                    ],
                    [
                        "48",
                        null,
                        "Botswana"
                    ],
                    [
                        "48",
                        null,
                        "Bouvet Island"
                    ],
                    [
                        "48",
                        null,
                        "Brazil"
                    ],
                    [
                        "48",
                        null,
                        "British Indian Ocean Territory"
                    ],
                    [
                        "48",
                        null,
                        "Brunei Darussalam"
                    ],
                    [
                        "48",
                        null,
                        "Bulgaria"
                    ],
                    [
                        "48",
                        null,
                        "Burkina Faso"
                    ],
                    [
                        "48",
                        null,
                        "Burundi"
                    ],
                    [
                        "48",
                        null,
                        "Cabo Verde"
                    ],
                    [
                        "48",
                        null,
                        "Cambodia"
                    ],
                    [
                        "48",
                        null,
                        "Cameroon"
                    ],
                    [
                        "48",
                        null,
                        "Canada"
                    ],
                    [
                        "48",
                        null,
                        "Cayman Islands"
                    ],
                    [
                        "48",
                        null,
                        "Central African Republic"
                    ],
                    [
                        "48",
                        null,
                        "Chad"
                    ],
                    [
                        "48",
                        null,
                        "Chile"
                    ],
                    [
                        "48",
                        null,
                        "China"
                    ],
                    [
                        "48",
                        null,
                        "Christmas Island"
                    ],
                    [
                        "48",
                        null,
                        "Cocos (Keeling) Islands"
                    ],
                    [
                        "48",
                        null,
                        "Colombia"
                    ],
                    [
                        "48",
                        null,
                        "Comoros"
                    ],
                    [
                        "48",
                        null,
                        "Congo"
                    ],
                    [
                        "48",
                        null,
                        "Cook Islands"
                    ],
                    [
                        "48",
                        null,
                        "Costa Rica"
                    ],
                    [
                        "48",
                        null,
                        "Côte d'Ivoire"
                    ],
                    [
                        "48",
                        null,
                        "Croatia"
                    ],
                    [
                        "48",
                        null,
                        "Cuba"
                    ],
                    [
                        "48",
                        null,
                        "Curaçao"
                    ],
                    [
                        "48",
                        null,
                        "Cyprus"
                    ],
                    [
                        "48",
                        null,
                        "Czech Republic"
                    ],
                    [
                        "48",
                        null,
                        "Democratic Republic of the Congo"
                    ],
                    [
                        "48",
                        null,
                        "Denmark"
                    ],
                    [
                        "48",
                        null,
                        "Djibouti"
                    ],
                    [
                        "48",
                        null,
                        "Dominica"
                    ],
                    [
                        "48",
                        null,
                        "Dominican Republic"
                    ],
                    [
                        "48",
                        null,
                        "Ecuador"
                    ],
                    [
                        "48",
                        null,
                        "Egypt"
                    ],
                    [
                        "48",
                        null,
                        "El Salvador"
                    ],
                    [
                        "48",
                        null,
                        "Equatorial Guinea"
                    ],
                    [
                        "48",
                        null,
                        "Eritrea"
                    ],
                    [
                        "48",
                        null,
                        "Estonia"
                    ],
                    [
                        "48",
                        null,
                        "Ethiopia"
                    ],
                    [
                        "48",
                        null,
                        "Falkland Islands"
                    ],
                    [
                        "48",
                        null,
                        "Faroe Islands"
                    ],
                    [
                        "48",
                        null,
                        "Fiji"
                    ],
                    [
                        "48",
                        null,
                        "Finland"
                    ],
                    [
                        "48",
                        null,
                        "France"
                    ],
                    [
                        "48",
                        null,
                        "French Guiana"
                    ],
                    [
                        "48",
                        null,
                        "French Polynesia"
                    ],
                    [
                        "48",
                        null,
                        "French Southern Territories"
                    ],
                    [
                        "48",
                        null,
                        "Gabon"
                    ],
                    [
                        "48",
                        null,
                        "Gambia"
                    ],
                    [
                        "48",
                        null,
                        "Georgia"
                    ],
                    [
                        "48",
                        null,
                        "Germany"
                    ],
                    [
                        "48",
                        null,
                        "Ghana"
                    ],
                    [
                        "48",
                        null,
                        "Gibraltar"
                    ],
                    [
                        "48",
                        null,
                        "Greece"
                    ],
                    [
                        "48",
                        null,
                        "Greenland"
                    ],
                    [
                        "48",
                        null,
                        "Grenada"
                    ],
                    [
                        "48",
                        null,
                        "Guadeloupe"
                    ],
                    [
                        "48",
                        null,
                        "Guam"
                    ],
                    [
                        "48",
                        null,
                        "Guatemala"
                    ],
                    [
                        "48",
                        null,
                        "Guernsey"
                    ],
                    [
                        "48",
                        null,
                        "Guinea"
                    ],
                    [
                        "48",
                        null,
                        "Guinea-Bissau"
                    ],
                    [
                        "48",
                        null,
                        "Guyana"
                    ],
                    [
                        "48",
                        null,
                        "Haiti"
                    ],
                    [
                        "48",
                        null,
                        "Heard Island and McDonald Islands"
                    ],
                    [
                        "48",
                        null,
                        "Holy See"
                    ],
                    [
                        "48",
                        null,
                        "Honduras"
                    ],
                    [
                        "48",
                        null,
                        "Hong Kong"
                    ],
                    [
                        "48",
                        null,
                        "Hungary"
                    ],
                    [
                        "48",
                        null,
                        "Iceland"
                    ],
                    [
                        "48",
                        null,
                        "India"
                    ],
                    [
                        "48",
                        null,
                        "Indonesia"
                    ],
                    [
                        "48",
                        null,
                        "Iran"
                    ],
                    [
                        "48",
                        null,
                        "Iraq"
                    ],
                    [
                        "48",
                        null,
                        "Ireland"
                    ],
                    [
                        "48",
                        null,
                        "Isle of Man"
                    ],
                    [
                        "48",
                        null,
                        "Israel"
                    ],
                    [
                        "48",
                        null,
                        "Italy"
                    ],
                    [
                        "48",
                        null,
                        "Jamaica"
                    ],
                    [
                        "48",
                        null,
                        "Japan"
                    ],
                    [
                        "48",
                        null,
                        "Jersey"
                    ],
                    [
                        "48",
                        null,
                        "Jordan"
                    ],
                    [
                        "48",
                        null,
                        "Kazakhstan"
                    ],
                    [
                        "48",
                        null,
                        "Kenya"
                    ],
                    [
                        "48",
                        null,
                        "Kiribati"
                    ],
                    [
                        "48",
                        null,
                        "Korea (the Democratic People's Republic of)"
                    ],
                    [
                        "48",
                        null,
                        "Korea (the Republic of)"
                    ],
                    [
                        "48",
                        null,
                        "Kuwait"
                    ],
                    [
                        "48",
                        null,
                        "Kyrgyzstan"
                    ],
                    [
                        "48",
                        null,
                        "Lao People's Democratic Republic"
                    ],
                    [
                        "48",
                        null,
                        "Latvia"
                    ],
                    [
                        "48",
                        null,
                        "Lebanon"
                    ],
                    [
                        "48",
                        null,
                        "Lesotho"
                    ],
                    [
                        "48",
                        null,
                        "Liberia"
                    ],
                    [
                        "48",
                        null,
                        "Libya"
                    ],
                    [
                        "48",
                        null,
                        "Liechtenstein"
                    ],
                    [
                        "48",
                        null,
                        "Lithuania"
                    ],
                    [
                        "48",
                        null,
                        "Luxembourg"
                    ],
                    [
                        "48",
                        null,
                        "Macao"
                    ],
                    [
                        "48",
                        null,
                        "Macedonia"
                    ],
                    [
                        "48",
                        null,
                        "Madagascar"
                    ],
                    [
                        "48",
                        null,
                        "Malawi"
                    ],
                    [
                        "48",
                        null,
                        "Malaysia"
                    ],
                    [
                        "48",
                        null,
                        "Maldives"
                    ],
                    [
                        "48",
                        null,
                        "Mali"
                    ],
                    [
                        "48",
                        null,
                        "Malta"
                    ],
                    [
                        "48",
                        null,
                        "Marshall Islands"
                    ],
                    [
                        "48",
                        null,
                        "Martinique"
                    ],
                    [
                        "48",
                        null,
                        "Mauritania"
                    ],
                    [
                        "48",
                        null,
                        "Mauritius"
                    ],
                    [
                        "48",
                        null,
                        "Mayotte"
                    ],
                    [
                        "48",
                        null,
                        "Mexico"
                    ],
                    [
                        "48",
                        null,
                        "Micronesia"
                    ],
                    [
                        "48",
                        null,
                        "Moldova"
                    ],
                    [
                        "48",
                        null,
                        "Monaco"
                    ],
                    [
                        "48",
                        null,
                        "Mongolia"
                    ],
                    [
                        "48",
                        null,
                        "Montenegro"
                    ],
                    [
                        "48",
                        null,
                        "Montserrat"
                    ],
                    [
                        "48",
                        null,
                        "Morocco"
                    ],
                    [
                        "48",
                        null,
                        "Mozambique"
                    ],
                    [
                        "48",
                        null,
                        "Myanmar"
                    ],
                    [
                        "48",
                        null,
                        "Namibia"
                    ],
                    [
                        "48",
                        null,
                        "Nauru"
                    ],
                    [
                        "48",
                        null,
                        "Nepal"
                    ],
                    [
                        "48",
                        null,
                        "Netherlands"
                    ],
                    [
                        "48",
                        null,
                        "New Caledonia"
                    ],
                    [
                        "48",
                        null,
                        "New Zealand"
                    ],
                    [
                        "48",
                        null,
                        "Nicaragua"
                    ],
                    [
                        "48",
                        null,
                        "Niger"
                    ],
                    [
                        "48",
                        null,
                        "Nigeria"
                    ],
                    [
                        "48",
                        null,
                        "Niue"
                    ],
                    [
                        "48",
                        null,
                        "Norfolk Island"
                    ],
                    [
                        "48",
                        null,
                        "Northern Mariana Islands"
                    ],
                    [
                        "48",
                        null,
                        "Norway"
                    ],
                    [
                        "48",
                        null,
                        "Oman"
                    ],
                    [
                        "48",
                        null,
                        "Pakistan"
                    ],
                    [
                        "48",
                        null,
                        "Palau"
                    ],
                    [
                        "48",
                        null,
                        "Palestine, State of"
                    ],
                    [
                        "48",
                        null,
                        "Panama"
                    ],
                    [
                        "48",
                        null,
                        "Papua New Guinea"
                    ],
                    [
                        "48",
                        null,
                        "Paraguay"
                    ],
                    [
                        "48",
                        null,
                        "Peru"
                    ],
                    [
                        "48",
                        null,
                        "Philippines"
                    ],
                    [
                        "48",
                        null,
                        "Pitcairn"
                    ],
                    [
                        "48",
                        null,
                        "Poland"
                    ],
                    [
                        "48",
                        null,
                        "Portugal"
                    ],
                    [
                        "48",
                        null,
                        "Puerto Rico"
                    ],
                    [
                        "48",
                        null,
                        "Qatar"
                    ],
                    [
                        "48",
                        null,
                        "Réunion"
                    ],
                    [
                        "48",
                        null,
                        "Romania"
                    ],
                    [
                        "48",
                        null,
                        "Russian Federation"
                    ],
                    [
                        "48",
                        null,
                        "Rwanda"
                    ],
                    [
                        "48",
                        null,
                        "Saint Barthélemy"
                    ],
                    [
                        "48",
                        null,
                        "Saint Helena, Ascension and Tristan da Cunha"
                    ],
                    [
                        "48",
                        null,
                        "Saint Kitts and Nevis"
                    ],
                    [
                        "48",
                        null,
                        "Saint Lucia"
                    ],
                    [
                        "48",
                        null,
                        "Saint Martin (French part)"
                    ],
                    [
                        "48",
                        null,
                        "Saint Pierre and Miquelon"
                    ],
                    [
                        "48",
                        null,
                        "Saint Vincent and the Grenadines"
                    ],
                    [
                        "48",
                        null,
                        "Samoa"
                    ],
                    [
                        "48",
                        null,
                        "San Marino"
                    ],
                    [
                        "48",
                        null,
                        "Sao Tome and Principe"
                    ],
                    [
                        "48",
                        null,
                        "Saudi Arabia"
                    ],
                    [
                        "48",
                        null,
                        "Senegal"
                    ],
                    [
                        "48",
                        null,
                        "Serbia"
                    ],
                    [
                        "48",
                        null,
                        "Seychelles"
                    ],
                    [
                        "48",
                        null,
                        "Sierra Leone"
                    ],
                    [
                        "48",
                        null,
                        "Singapore"
                    ],
                    [
                        "48",
                        null,
                        "Sint Maarten (Dutch part)"
                    ],
                    [
                        "48",
                        null,
                        "Slovakia"
                    ],
                    [
                        "48",
                        null,
                        "Slovenia"
                    ],
                    [
                        "48",
                        null,
                        "Solomon Islands"
                    ],
                    [
                        "48",
                        null,
                        "Somalia"
                    ],
                    [
                        "48",
                        null,
                        "South Africa"
                    ],
                    [
                        "48",
                        null,
                        "South Georgia and the South Sandwich Islands"
                    ],
                    [
                        "48",
                        null,
                        "South Sudan"
                    ],
                    [
                        "48",
                        null,
                        "Spain"
                    ],
                    [
                        "48",
                        null,
                        "Sri Lanka"
                    ],
                    [
                        "48",
                        null,
                        "Sudan"
                    ],
                    [
                        "48",
                        null,
                        "Suriname"
                    ],
                    [
                        "48",
                        null,
                        "Svalbard and Jan Mayen"
                    ],
                    [
                        "48",
                        null,
                        "Swaziland"
                    ],
                    [
                        "48",
                        null,
                        "Sweden"
                    ],
                    [
                        "48",
                        null,
                        "Switzerland"
                    ],
                    [
                        "48",
                        null,
                        "Syrian Arab Republic"
                    ],
                    [
                        "48",
                        null,
                        "Taiwan"
                    ],
                    [
                        "48",
                        null,
                        "Tajikistan"
                    ],
                    [
                        "48",
                        null,
                        "Tanzania, United Republic of"
                    ],
                    [
                        "48",
                        null,
                        "Thailand"
                    ],
                    [
                        "48",
                        null,
                        "Timor-Leste"
                    ],
                    [
                        "48",
                        null,
                        "Togo"
                    ],
                    [
                        "48",
                        null,
                        "Tokelau"
                    ],
                    [
                        "48",
                        null,
                        "Tonga"
                    ],
                    [
                        "48",
                        null,
                        "Trinidad and Tobago"
                    ],
                    [
                        "48",
                        null,
                        "Tunisia"
                    ],
                    [
                        "48",
                        null,
                        "Turkey"
                    ],
                    [
                        "48",
                        null,
                        "Turkmenistan"
                    ],
                    [
                        "48",
                        null,
                        "Turks and Caicos Islands"
                    ],
                    [
                        "48",
                        null,
                        "Tuvalu"
                    ],
                    [
                        "48",
                        null,
                        "Uganda"
                    ],
                    [
                        "48",
                        null,
                        "Ukraine"
                    ],
                    [
                        "48",
                        null,
                        "United Arab Emirates"
                    ],
                    [
                        "48",
                        null,
                        "United Kingdom"
                    ],
                    [
                        "48",
                        null,
                        "United States"
                    ],
                    [
                        "48",
                        null,
                        "United States Minor Outlying Islands"
                    ],
                    [
                        "48",
                        null,
                        "Uruguay"
                    ],
                    [
                        "48",
                        null,
                        "Uzbekistan"
                    ],
                    [
                        "48",
                        null,
                        "Vanuatu"
                    ],
                    [
                        "48",
                        null,
                        "Venezuela, Bolivarian Republic of "
                    ],
                    [
                        "48",
                        null,
                        "Viet Nam"
                    ],
                    [
                        "48",
                        null,
                        "Virgin Islands (British)"
                    ],
                    [
                        "48",
                        null,
                        "Virgin Islands (U.S.)"
                    ],
                    [
                        "48",
                        null,
                        "Wallis and Futuna"
                    ],
                    [
                        "48",
                        null,
                        "Western Sahara"
                    ],
                    [
                        "48",
                        null,
                        "Yemen"
                    ],
                    [
                        "48",
                        null,
                        "Zambia"
                    ],
                    [
                        "48",
                        null,
                        "Zimbabwe"
                    ],
                    [
                        "49",
                        null,
                        "Accident and Health"
                    ],
                    [
                        "49",
                        null,
                        "Accidental Death and Disability"
                    ],
                    [
                        "49",
                        null,
                        "Affinity"
                    ],
                    [
                        "49",
                        null,
                        "Automobile Liability"
                    ],
                    [
                        "49",
                        null,
                        "Aviation"
                    ],
                    [
                        "49",
                        null,
                        "BCLW - Card Misuse (employee fraud - corp cards)"
                    ],
                    [
                        "49",
                        null,
                        "Business Travel Accident"
                    ],
                    [
                        "49",
                        null,
                        "Cash Withdrawal Protection"
                    ],
                    [
                        "49",
                        null,
                        "Casualty"
                    ],
                    [
                        "49",
                        null,
                        "Completed Operations"
                    ],
                    [
                        "49",
                        null,
                        "Contractors All Risks"
                    ],
                    [
                        "49",
                        null,
                        "Credit Protection"
                    ],
                    [
                        "49",
                        null,
                        "Crime"
                    ],
                    [
                        "49",
                        null,
                        "Directors & Officers"
                    ],
                    [
                        "49",
                        null,
                        "Employee Benefits"
                    ],
                    [
                        "49",
                        null,
                        "Employers Liability"
                    ],
                    [
                        "49",
                        null,
                        "Energy"
                    ],
                    [
                        "49",
                        null,
                        "Environmental Empairment Liability"
                    ],
                    [
                        "49",
                        null,
                        "Equine"
                    ],
                    [
                        "49",
                        null,
                        "Extended Warranty"
                    ],
                    [
                        "49",
                        null,
                        "Fraudulent use of Credit Card"
                    ],
                    [
                        "49",
                        null,
                        "Fraudulent use of Mobile Phone"
                    ],
                    [
                        "49",
                        null,
                        "Fraudulent use of Pin"
                    ],
                    [
                        "49",
                        null,
                        "General Liability (Public)"
                    ],
                    [
                        "49",
                        null,
                        "Identity Theft"
                    ],
                    [
                        "49",
                        null,
                        "Internet Delivery"
                    ],
                    [
                        "49",
                        null,
                        "Lloyd's Marine"
                    ],
                    [
                        "49",
                        null,
                        "Loss Damage Waiver"
                    ],
                    [
                        "49",
                        null,
                        "Lost or Stolen"
                    ],
                    [
                        "49",
                        null,
                        "Marine"
                    ],
                    [
                        "49",
                        null,
                        "Marine / Transit"
                    ],
                    [
                        "49",
                        null,
                        "Medical Assistance"
                    ],
                    [
                        "49",
                        null,
                        "Motor"
                    ],
                    [
                        "49",
                        null,
                        "Motor Rental Liability"
                    ],
                    [
                        "49",
                        null,
                        "PA / Travel"
                    ],
                    [
                        "49",
                        null,
                        "Payment Protection"
                    ],
                    [
                        "49",
                        null,
                        "Personal Accident"
                    ],
                    [
                        "49",
                        null,
                        "Price Protection"
                    ],
                    [
                        "49",
                        null,
                        "Product Liability"
                    ],
                    [
                        "49",
                        null,
                        "Product Liability Legal Notice Only"
                    ],
                    [
                        "49",
                        null,
                        "Professional Indemnity"
                    ],
                    [
                        "49",
                        null,
                        "Property"
                    ],
                    [
                        "49",
                        null,
                        "Property and Business Interruption"
                    ],
                    [
                        "49",
                        null,
                        "Purchase Protection"
                    ],
                    [
                        "49",
                        null,
                        "Travel - Baggage and Money"
                    ],
                    [
                        "49",
                        null,
                        "Travel - Cancellation"
                    ],
                    [
                        "49",
                        null,
                        "Travel - Curtailment"
                    ],
                    [
                        "49",
                        null,
                        "Travel - Inconvenience"
                    ],
                    [
                        "49",
                        null,
                        "Travel - Legal"
                    ],
                    [
                        "49",
                        null,
                        "Travel - Overseas Medical Expenses"
                    ],
                    [
                        "49",
                        null,
                        "Travel Accident"
                    ],
                    [
                        "114",
                        null,
                        "Incident Only"
                    ],
                    [
                        "114",
                        null,
                        "Open"
                    ],
                    [
                        "114",
                        null,
                        "Closed"
                    ],
                    [
                        "114",
                        null,
                        "Data Entry Error"
                    ]
                ]
            ],
            "screenLinks": [
                [
                    "ScreenId",
                    "Name",
                    "ScreenType",
                    "ScreenLinkType",
                    "ScreenLinkHref"
                ],
                [
                    [
                        "15",
                        "Incident",
                        "Sequence",
                        "New Record",
                        "15-Sequence"
                    ]
                ]
            ],
            "screen": [
                [
                    "ScreenId",
                    "ScreenName",
                    "ScreenHeader"
                ],
                [
                    [
                        "7",
                        "Incident Search",
                        ""
                    ]
                ]
            ]
        };
        return RefData;
    }());
    exports.RefData = RefData;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2dlbmVyYXRlZENvbnRyb2xzL3JlZkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQXd3RkEsQ0FBQztRQXR3RlUsY0FBTSxHQUFHO1lBQ1osUUFBUSxFQUFFO2dCQUNOO29CQUNJLFNBQVM7b0JBQ1QsTUFBTTtvQkFDTixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsUUFBUTtpQkFDWDtnQkFDRDtvQkFDSTt3QkFDSSxLQUFLO3dCQUNMLGVBQWU7d0JBQ2YsR0FBRzt3QkFDSCxJQUFJO3dCQUNKLElBQUk7cUJBQ1A7b0JBQ0Q7d0JBQ0ksS0FBSzt3QkFDTCxvQ0FBb0M7d0JBQ3BDLElBQUk7d0JBQ0osR0FBRzt3QkFDSCxJQUFJO3FCQUNQO29CQUNEO3dCQUNJLEtBQUs7d0JBQ0wsZ0JBQWdCO3dCQUNoQixJQUFJO3dCQUNKLEdBQUc7d0JBQ0gsSUFBSTtxQkFDUDtvQkFDRDt3QkFDSSxLQUFLO3dCQUNMLHFCQUFxQjt3QkFDckIsSUFBSTt3QkFDSixHQUFHO3dCQUNILElBQUk7cUJBQ1A7b0JBQ0Q7d0JBQ0ksS0FBSzt3QkFDTCxXQUFXO3dCQUNYLEtBQUs7d0JBQ0wsSUFBSTt3QkFDSixJQUFJO3FCQUNQO29CQUNEO3dCQUNJLEtBQUs7d0JBQ0wsZ0JBQWdCO3dCQUNoQixJQUFJO3dCQUNKLElBQUk7d0JBQ0osSUFBSTtxQkFDUDtvQkFDRDt3QkFDSSxLQUFLO3dCQUNMLGtCQUFrQjt3QkFDbEIsS0FBSzt3QkFDTCxJQUFJO3dCQUNKLElBQUk7cUJBQ1A7b0JBQ0Q7d0JBQ0ksS0FBSzt3QkFDTCxxQkFBcUI7d0JBQ3JCLElBQUk7d0JBQ0osR0FBRzt3QkFDSCxJQUFJO3FCQUNQO29CQUNEO3dCQUNJLEtBQUs7d0JBQ0wsb0JBQW9CO3dCQUNwQixJQUFJO3dCQUNKLEdBQUc7d0JBQ0gsSUFBSTtxQkFDUDtvQkFDRDt3QkFDSSxNQUFNO3dCQUNOLG1CQUFtQjt3QkFDbkIsS0FBSzt3QkFDTCxHQUFHO3dCQUNILElB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QUk7d0JBQ0osWUFBWTtxQkFDZjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0oscUJBQXFCO3FCQUN4QjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osV0FBVztxQkFDZDtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osU0FBUztxQkFDWjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osT0FBTztxQkFDVjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osV0FBVztxQkFDZDtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osU0FBUztxQkFDWjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osWUFBWTtxQkFDZjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osU0FBUztxQkFDWjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osU0FBUztxQkFDWjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osWUFBWTtxQkFDZjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osVUFBVTtxQkFDYjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osU0FBUztxQkFDWjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osU0FBUztxQkFDWjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osUUFBUTtxQkFDWDtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osT0FBTztxQkFDVjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osU0FBUztxQkFDWjtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osUUFBUTtxQkFDWDtvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osaUNBQWlDO3FCQUNwQztvQkFDRDt3QkFDSSxJQUFJO3dCQUNKLElBQUk7d0JBQ0osa0NBQWtDO3FCQUNyQztvQkFDRDt3QkFDSSxJQUFJ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QUNUO29CQUNEO3dCQUNJLEtBQUs7d0JBQ0wsSUFBSTt3QkFDSixRQUFRO3FCQUNYO29CQUNEO3dCQUNJLEtBQUs7d0JBQ0wsSUFBSTt3QkFDSixrQkFBa0I7cUJBQ3JCO2lCQUNKO2FBQ0o7WUFDRCxhQUFhLEVBQUU7Z0JBQ1g7b0JBQ0ksVUFBVTtvQkFDVixNQUFNO29CQUNOLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixnQkFBZ0I7aUJBQ25CO2dCQUNEO29CQUNJO3dCQUNJLElBQUk7d0JBQ0osVUFBVTt3QkFDVixVQUFVO3dCQUNWLFlBQVk7d0JBQ1osYUFBYTtxQkFDaEI7aUJBQ0o7YUFDSjtZQUNELFFBQVEsRUFBRTtnQkFDTjtvQkFDSSxVQUFVO29CQUNWLFlBQVk7b0JBQ1osY0FBYztpQkFDakI7Z0JBQ0Q7b0JBQ0k7d0JBQ0ksR0FBRzt3QkFDSCxpQkFBaUI7d0JBQ2pCLEVBQUU7cUJBQ0w7aUJBQ0o7YUFDSjtTQUNKLENBQUE7UUFFTCxjQUFDO0tBeHdGRCxBQXd3RkMsSUFBQTtJQXh3RlksMEJBQU8iLCJmaWxlIjoidmlld3MvZ2VuZXJhdGVkQ29udHJvbHMvcmVmRGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBSZWZEYXRhIHtcclxuXHJcbiAgICBzdGF0aWMgZmllbGRzID0ge1xyXG4gICAgICAgIFwiZmllbGRzXCI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgXCJGaWVsZElkXCIsXHJcbiAgICAgICAgICAgICAgICBcIk5hbWVcIixcclxuICAgICAgICAgICAgICAgIFwiTWF4TGVuZ3RoXCIsXHJcbiAgICAgICAgICAgICAgICBcIkVsZW1lbnRJZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJMaXN0SWRcIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0MzJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlN5c3RlbSBOdW1iZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjEzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQzM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3Jhd2ZvcmQgSGFuZGxpbmcgT2ZmaWNlIFJlZmVyZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMzVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjJcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDM0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGTk9MIFJlZmVyZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMzVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjJcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbnN1cmVyJ3MgUmVmZXJlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIzNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0MzZcIixcclxuICAgICAgICAgICAgICAgICAgICBcIlByb2dyYW1tZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQzN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUG9saWN5IENvdW50cnlcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjUwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQzOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHlwZSBvZiBJbmNpZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQzOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW5zdXJlZCdzIFJlZmVyZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMzVcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjJcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDQwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCcm9rZXIncyBSZWZlcmVuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjM1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjI1MThcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkluY2lkZW50IExvY2F0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyNTBcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiMjUxOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW5zdXJlZCBEaXZpc2lvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjI1MjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkluY2lkZW50IERhdGUsIEZyb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjZcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiMjUyMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW5jaWRlbnQgRGF0ZSwgVG9cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjZcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDQyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEYXRlIEluY2lkZW50IFJlY29yZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCI2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjExMTRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkluY2lkZW50IFN0YXR1c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTUwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTE0XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI2ODNcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkZpbGUgSGFuZGxlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjY4NFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2xhaW1hbnQgTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjY4NVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVmVoaWNsZSBSZWdpc3RyYXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBcIjEwMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI2ODZcIixcclxuICAgICAgICAgICAgICAgICAgICBcIkRyaXZlciBOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxMDFcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjFcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiMTY1MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVUNSXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIyNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxODg1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMZWdhY3kgQ3Jhd2ZvcmQgUmVmZXJlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCIzNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJmaWVsZExpc3RzXCI6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgXCJJZFwiLFxyXG4gICAgICAgICAgICAgICAgXCJWYWx1ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJOYW1lXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQUJGIEdsb2JhbCBUUEFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFCRiBHbG9iYWwgVFBBIChadXJpY2gpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBZ2lsaXR5IEVhc3RcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFnaWxpdHkgV2VzdFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWhvbGQgR2xvYmFsIFRQQSBQcm9ncmFtbWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFpdGNoIEhvbGRpbmdzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbGxpZWQgV29ybGQgLSBHbG9iZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWxwaGEgLSBJQVNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFyZ29zeVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gQUNCQSBCYW5rXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBBSyBCYXJzIEJhbmtcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIEF2ZW50IFRhcmpldGFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIEJhbmNvIFNvbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gQmFuayBvZiBBbWVyaWNhIE5BIChBUEFDKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gQkNFTCBMYW9zXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBCSUFPXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBCbG9tIEJhbmsgUy5BLkwuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBCTlAgUGFyaWJhcyBCdXJraW5hIEZhc29cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIEJOUCBQYXJpYmFzIENvdGUgZCdJdm9pcmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIEJOUCBQYXJpYmFzIE1hbGlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIEJOUCBQYXJpYmFzIFNlbmVnYWxcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIEJPQyBTaW5nYXBvcmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIENCSCBDb21wYWduaWUgQmFuY2FpcmUgSGVsdmV0aXF1ZSBTQVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gQ0ZDIENhcGl0YWwgRmluYW5jZSBDb21wYW55XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBDaXRpYmFuayBCQ0xXXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBDaXRpYmFuayBDb3Jwb3JhdGVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIEdFIE1vbmV5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBIYW5nIFNlbmcgQmFuayAocGFydCBvZiBVUEkgU2NoZW1lKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gSGltYWxheWFuIEJhbmtcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIElCTCBCYW5rIExlYmFub25cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIEt5cmd5emtvbW1lcnRzYmFua1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gTGFpa2kgQmFua1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gTWVrb25nIEJhbmsgKHBhcnQgb2YgVVBJIFNjaGVtZSlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFJhaWZmZWlzZW5iYW5rXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBSdXNzaWFuIFN0YW5kYXJkIEJhbmtcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFNBSUJcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFNiZXJiYW5rIEFtZXggQmxhY2sgYW5kIFBsYXRpbnVtXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBTb2Npw6l0w6kgR8OpbsOpcmFsZSAoQWxiYW5pYSlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFNvY2nDqXTDqSBHw6luw6lyYWxlIChCZW5pbilcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFNvY2nDqXTDqSBHw6luw6lyYWxlIChDYW1lcm91bilcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFNvY2nDqXTDqSBHw6luw6lyYWxlIChDb3RlIGQnSXZvaXJlKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gU29jacOpdMOpIEfDqW7DqXJhbGUgKENyb2F0aWEpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBTb2Npw6l0w6kgR8OpbsOpcmFsZSAoR2hhbmEpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBTb2Npw6l0w6kgR8OpbsOpcmFsZSAoTWFjZWRvbmlhKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gU29jacOpdMOpIEfDqW7DqXJhbGUgKE1hZGFnYXNjYXIpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3BpcmUgLSBTb2Npw6l0w6kgR8OpbsOpcmFsZSAoTWF1cml0YW5pYSlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFNvY2nDqXTDqSBHw6luw6lyYWxlIChTZW5lZ2FsKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gU29jacOpdMOpIEfDqW7DqXJhbGUgKFNsb3ZlbmlhKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gU29jacOpdMOpIEfDqW7DqXJhbGUgKFRjaGFkKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXNwaXJlIC0gU29jacOpdMOpIEfDqW7DqXJhbGUgQmFuayBDeXBydXNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFN0YW5kYXJkIENoYXJ0ZXJlZCBCYW5rIFZpZXRuYW1cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSAtIFZJU0FcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzcGlyZSBEZWZlbmNlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBU1NPQ0lBVEVEIEJSSVRJU0ggRk9PRFNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkFzdHJhWmVuZWNhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBc3RyYVplbmVjYSBFbXBsb3llcnMgTGlhYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdml2YSBUUEEgTWFyaW5lIENsYWltc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQVdBQ1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmF4dGVyIEhlYWx0aGNhcmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkJSSVRJU0ggVklUQSBQTENcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNhbGRlcmRhbGUgTWV0cm9wb2xpdGFuIEJvcm91Z2ggQ291bmNpbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2Fub3BpdXMgLyBOb3JkZXVyb3BhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDYXJyb3QgSW5zdXJhbmNlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDT0FUUyBWSVlFTExBXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb3VudHJ5c2lkZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3Jvc3MtYm9yZGVyIE1vdG9yIENsYWltc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ1VBXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDdW1taW5zIEFmcmljYSBMaWFiaWxpdHkgKENVMDEyKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VtbWlucyBBZnJpY2EgTGlhYmlsaXR5IChDVTAyMClcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgQ2FzdWFsdHkvTW90b3IvcnVuLW9mZiAoQ1UwMDEpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDdW1taW5zIENodWJiIC0gTWFyaW5lIENhcmdvIChDVTAxOClcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgRW52aXJvbm1lbnRhbCBHbG9iYWwgUHJvZ3JhbW1lIChDVTAxNClcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgRnJhbmNlIFByb2R1Y3QgTGlhYmlsaXR5IChDVTAwNylcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgTWFyaW5lIENhcmdvIChDVTAxNSlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgTkFEIFByb2Zlc3Npb25hbCBMaWFiaWxpdHkgKENVMDEzKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VtbWlucyBOQUQgU2hpcHJlcGFpcmVyIChDVTAxNilcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgbm9uLVVTQSBQcm9wZXJ0eSAoQ1UwMDMpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDdW1taW5zIE5vcnRoIEFtZXJpY2FuIERpc3RyaWJ1dG9ycyAoQ1UwMTApXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDdW1taW5zIFVLIEVMIChDVTAwNClcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgVUsgRUwgUnVuIE9mZiAoQ1UwMDYpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDdW1taW5zIFVLIE1vdG9yIDEgSnVseSAxMyB0byAxIEp1bHkgMTQgKENVMDA5KVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VtbWlucyBVSyBNb3RvciB1cCB0byAzMCBKdW5lIDIwMTMgKENVMDA4KVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VtbWlucyBVUyBBdXRvIExpYWJpbGl0eSAoQ1UwMTkpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDdW1taW5zIFVTIE5BRCAzcmQgcGFydHkgQ3JpbWUgKENVMDE3KVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VtbWlucyBVU0EgTW90b3IgQVBEIChDVTAwNSlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgVVNBIFByb3BlcnR5IChDVTAwMilcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN1bW1pbnMgWnVyaWNoIE1vdG9yIGZyb20gMSBKdWx5IDIwMTQgKENVMDExKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRENDIEVuZXJneVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRGVtb25zdHJhdGlvbiBQcm9ncmFtbWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkRpZ2l3aXNlIEdhZGdldCBJbnN1cmFuY2VcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkRVQUwvQU5WXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFREYgRW5lcmd5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFbXByaXNlIEdyb3VwIEhvbGRpbmdzIEx0ZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXVyb3BlYW4gRm9yZWNvdXJ0IFJldGFpbCBHcm91cFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXVyb3BlYW4gTWV0YWwgUmVjeWNsaW5nIFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXZlcmVzdFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRmVkRXggQ29ycG9yYXRpb24gRXVyb3BlYW4gTW90b3JcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkZvb3QgTG9ja2VyIEV1cm9wZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRm9ydGggRGlyZWN0aXZlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGb3J3YXJkZXJMaW5rXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHZWZpb24gSW5zdXJhbmNlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJIYW5keSBQcm9ncmFtbWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkhESSBHcm91cCBBY2NpZGVudFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSG9jaHRpZWYgXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJIb21lYmFzZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSHViIFNvdXRoIFdlc3QgU2NvdGxhbmQgTGltaXRlZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSUNBIEFCXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbmZyYXJlZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW5uaXNmcmVlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbnN1cmFuY2VudHJlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJKTFBcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIktPTkUgR2xvYmFsIExpYWJpbGl0eSBQcm9ncmFtbWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkt1d2FpdCBQZXRyb2xldW1cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpZmVzdXJlIChDQUEpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaW1hIEFnZW5jeSBMdGQgXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaXZlIE5hdGlvblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTG9uZG9uIEJvcm91Z2ggb2YgSGFja25leVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTW9vcmhvdXNlIEluc3VyYW5jZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTU9UTyBIb3NwaXRhbGl0eVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTXVyYSBFc3RhdGVzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNV0ggQ29uc3RydWN0aW9ucyBMdGRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk5hdmlnYXRvcnMgQnJhbmNoXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOZXN0bMOpIE1vdG9yIFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTm92YWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk9mZnNob3JlIE1hcmtldCBQbGFjZW1lbnQgQXVzdHJhbGlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJPbmVTdXJlIEluc3VyYW5jZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiT3BlbCBSZWNvdmVyeVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGVudGFpclwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGx1bSBVbmRlcndyaXRpbmcgU2NoZW1lXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQdW1hIEVuZXJneSAoQXVzdHJhbGlhKSBIb2xkaW5ncyBQVFkgTFREXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSYW5kc3RhZC1UZW1wbyBUZWFtXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZWljaGhvbGQgR2xvYmFsIFRQQSBQcm9ncmFtbWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlJpZ2h0IENob2ljZSBJbnN1cmFuY2VcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlJpdHVhbHMgQ29zbWV0aWNzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSb3lhbCBNaW50IEdhcmRlbnNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNlbXBlcmlhbiBQUFAgSW52ZXN0bWVudCBQYXJ0bmVyc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2hlbGwgUGVyc29uYWwgRWZmZWN0c1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU29kZXhvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTcG9ydHMgRGlyZWN0LmNvbSBSZXRhaWwgKE5vbiBNb3RvcilcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlN0LiBHZW9yZ2UgUExDXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUZXNjbyBSZWFsIEVzdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGhpc3RsZSBNb3RvciBcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlRyYXZlbGVycyBJbnN1cmFuY2VcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlVsdGltYXJ0IEluc3VyYW5jZSBTZXJ2aWNlcyAoRGUgTW9udGZvcnQgRmluZSBBcnRzKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVkNTXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJWb2RhZm9uZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2F0a2luc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2Vsc2ggV2F0ZXJcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIldlc3RmaWVsZCAtIE93biBQcm9wZXJ0eSBEYW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIldlc3RmaWVsZCBEZXNpZ24gJiBDb25zdHJ1Y3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIldlc3RmaWVsZCBFdXJvcGUgTGltaXRlZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2hpdGViYXJuIERldmVsb3BtZW50cyAoSGl0Y2hpbikgTGltaXRlZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2lsbGlhbSBIYXJlIEx0ZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2l6ekFpclwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBBbGNhbXBvIFJldGFpbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBBbHRhbWlyYSBSZWFsIEVzdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBBdWNoYW4gU3BhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIEJhbmNvIFNhbnRhbmRlciBTLkEuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIEJhbmNvIFNhbnRhbmRlciBTLkEuIChCQU5TTEVBU0UpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIEJhbmNvIFNhbnRhbmRlciBTLkEuIChQSVAnUylcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQmFyY2Vsw7MgSG90ZWwgR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ2l0dGEgZGkgU3VzYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgQWRyb1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgQXJib3JlYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgQXJsdW5vXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBCaWJiaWFub1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgQm9yZ2FybyBUb3JpbmVzZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgQm92ZXNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIEJyaXNpZ2hlbGxhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBDYWxlbnphbm9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIENhbWJpYW5vXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBDYW1wZWdpbmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIENhbm9zc2FcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIENhbnR1XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBDYXJhdGUgQnJpYW56YVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgQ2Fyb25ubyBQZXJ0dXNlbGxhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBDYXNjaW5hXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBDYXN0ZWwgQm9sb2duZXNlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBDaW5pc2VsbG9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIENpdHRhZGVsbGFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIENvcnRvbmFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIEN1bmVvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBEYWxtaW5lXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBGZWx0cmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIEZyYWJvc2EgU290dGFuYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgR2Fzc2lubyBUb3JpbmVzZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgR2lhdmVub1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgR3JldmUgaW4gQ2hpYW50aVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgR3VpZG9uaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIExhdGlzYW5hXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBMZWduYWdvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBNYW5jaWFub1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgTWlyYW5kb2xhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBNb250ZWNhdGluaVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgTW9udGVjY2hpbyBFbWlsaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIFBvcnRvIFNhbiBHaW9yZ2lvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBQcmlvbG8gR2FyZ2FsbG9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIFF1YXJyYXRhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBSaXZhIExpZ3VyZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgU2FsdXp6b1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgU2FuIENhc2NpYW5vIGluIFZhbCBkaSBQZXNhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBTYW4gU3BlcmF0ZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgU2FudOKAmUlsYXJpbyBWYWwgZOKAmUVuemFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIFNpbm5haVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgU2lyb2xvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBUZXJyYW51b3ZhIEJyYWNjaW9saW5pXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBUcmV2aXNvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBUcmV6emFubyBzdWwgTmF2aWdsaW9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIFRyaWVzdGVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIFVib2xkb1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBDb211bmUgZGkgVmFsZGFnbm9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gQ29tdW5lIGRpIFZlcmFubyBCcmlhbnphXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvbXVuZSBkaSBWaWduYW5lbGxvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0N1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJYTCAtIENvc3RjbyBQcm9ncmFtbWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gR2FsbGVyaWUgQ29tbWVyY2lhbGkgSXRhbGlhIFNwYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBOSCBFdXJvcGFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gU01BIFNwYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBTb25hZSBHcm91cFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDdcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiWEwgLSBVbmlvbmUgZGVpIGNvbXVuaSBDaGlhbnRpIEZpb3JlbnRpbm9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlhMIC0gVXJiYXNlciBQb3J0dWdhbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWZnaGFuaXN0YW5cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIsOFbGFuZCBJc2xhbmRzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbGJhbmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbGdlcmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbWVyaWNhbiBTYW1vYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5kb3JyYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQW5nb2xhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBbmd1aWxsYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQW50YXJjdGljYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQW50aWd1YSBhbmQgQmFyYnVkYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXJnZW50aW5hXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBcm1lbmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBcnViYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXVzdHJhbGlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBdXN0cmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBemVyYmFpamFuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCYWhhbWFzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCYWhyYWluXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCYW5nbGFkZXNoXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCYXJiYWRvc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmVsYXJ1c1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmVsZ2l1bVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmVsaXplXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCZW5pblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmVybXVkYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmh1dGFuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCb2xpdmlhLCBQbHVyaW5hdGlvbmFsIFN0YXRlIG9mXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQm90c3dhbmFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkJvdXZldCBJc2xhbmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkJyYXppbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCcnVuZWkgRGFydXNzYWxhbVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQnVsZ2FyaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkJ1cmtpbmEgRmFzb1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQnVydW5kaVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2FibyBWZXJkZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2FtYm9kaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNhbWVyb29uXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDYW5hZGFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNheW1hbiBJc2xhbmRzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNoYWRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNoaWxlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDaGluYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2hyaXN0bWFzIElzbGFuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbG9tYmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb21vcm9zXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb25nb1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29vayBJc2xhbmRzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb3N0YSBSaWNhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDw7R0ZSBkJ0l2b2lyZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3JvYXRpYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3ViYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3VyYcOnYW9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkN5cHJ1c1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3plY2ggUmVwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkRlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIENvbmdvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEZW5tYXJrXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJEamlib3V0aVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRG9taW5pY2FcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkRvbWluaWNhbiBSZXB1YmxpY1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWN1YWRvclwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRWd5cHRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkVsIFNhbHZhZG9yXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFcXVhdG9yaWFsIEd1aW5lYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXJpdHJlYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXN0b25pYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRXRoaW9waWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkZhbGtsYW5kIElzbGFuZHNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkZhcm9lIElzbGFuZHNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkZpamlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkZpbmxhbmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkZyYW5jZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnJlbmNoIEd1aWFuYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnJlbmNoIFBvbHluZXNpYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnJlbmNoIFNvdXRoZXJuIFRlcnJpdG9yaWVzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHYWJvblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR2FtYmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHZW9yZ2lhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHZXJtYW55XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHaGFuYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR2licmFsdGFyXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHcmVlY2VcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkdyZWVubGFuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR3JlbmFkYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR3VhZGVsb3VwZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR3VhbVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR3VhdGVtYWxhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHdWVybnNleVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiR3VpbmVhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHdWluZWEtQmlzc2F1XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJHdXlhbmFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkhhaXRpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkhvbHkgU2VlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJIb25kdXJhc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSG9uZyBLb25nXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJIdW5nYXJ5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJY2VsYW5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbmRpYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW5kb25lc2lhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJcmFuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJcmFxXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJcmVsYW5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJc2xlIG9mIE1hblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSXNyYWVsXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJdGFseVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSmFtYWljYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSmFwYW5cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkplcnNleVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSm9yZGFuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJLYXpha2hzdGFuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJLZW55YVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiS2lyaWJhdGlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIktvcmVhICh0aGUgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZilcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIktvcmVhICh0aGUgUmVwdWJsaWMgb2YpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJLdXdhaXRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkt5cmd5enN0YW5cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkxhbyBQZW9wbGUncyBEZW1vY3JhdGljIFJlcHVibGljXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMYXR2aWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkxlYmFub25cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkxlc290aG9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpYmVyaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkxpYnlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaWVjaHRlbnN0ZWluXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMaXRodWFuaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkx1eGVtYm91cmdcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1hY2FvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNYWNlZG9uaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1hZGFnYXNjYXJcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1hbGF3aVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWFsYXlzaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1hbGRpdmVzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNYWxpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNYWx0YVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWFyc2hhbGwgSXNsYW5kc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWFydGluaXF1ZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWF1cml0YW5pYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWF1cml0aXVzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNYXlvdHRlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNZXhpY29cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1pY3JvbmVzaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1vbGRvdmFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1vbmFjb1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTW9uZ29saWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1vbnRlbmVncm9cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1vbnRzZXJyYXRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1vcm9jY29cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1vemFtYmlxdWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk15YW5tYXJcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk5hbWliaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk5hdXJ1XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOZXBhbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTmV0aGVybGFuZHNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk5ldyBDYWxlZG9uaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk5ldyBaZWFsYW5kXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOaWNhcmFndWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk5pZ2VyXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOaWdlcmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOaXVlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOb3Jmb2xrIElzbGFuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJOb3J3YXlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk9tYW5cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlBha2lzdGFuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQYWxhdVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGFuYW1hXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQYXB1YSBOZXcgR3VpbmVhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQYXJhZ3VheVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGVydVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUGhpbGlwcGluZXNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlBpdGNhaXJuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQb2xhbmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlBvcnR1Z2FsXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQdWVydG8gUmljb1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUWF0YXJcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlLDqXVuaW9uXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSb21hbmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJSdXNzaWFuIEZlZGVyYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlJ3YW5kYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2FpbnQgQmFydGjDqWxlbXlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNhaW50IEx1Y2lhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTYWludCBNYXJ0aW4gKEZyZW5jaCBwYXJ0KVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNhbW9hXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTYW4gTWFyaW5vXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNhdWRpIEFyYWJpYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VuZWdhbFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VyYmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTZXljaGVsbGVzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTaWVycmEgTGVvbmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNpbmdhcG9yZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2xvdmFraWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNsb3ZlbmlhXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTb2xvbW9uIElzbGFuZHNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNvbWFsaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNvdXRoIEFmcmljYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU291dGggR2VvcmdpYSBhbmQgdGhlIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlNvdXRoIFN1ZGFuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTcGFpblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3JpIExhbmthXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTdWRhblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3VyaW5hbWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlN2YWxiYXJkIGFuZCBKYW4gTWF5ZW5cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlN3YXppbGFuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3dlZGVuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJTd2l0emVybGFuZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlRhaXdhblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGFqaWtpc3RhblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGhhaWxhbmRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlRpbW9yLUxlc3RlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUb2dvXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUb2tlbGF1XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUb25nYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHJpbmlkYWQgYW5kIFRvYmFnb1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHVuaXNpYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHVya2V5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUdXJrbWVuaXN0YW5cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHV2YWx1XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJVZ2FuZGFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlVrcmFpbmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJVbml0ZWQgS2luZ2RvbVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVW5pdGVkIFN0YXRlc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJVcnVndWF5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJVemJla2lzdGFuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJWYW51YXR1XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2bCoFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVmlldCBOYW1cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlZpcmdpbiBJc2xhbmRzIChCcml0aXNoKVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVmlyZ2luIElzbGFuZHMgKFUuUy4pXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJXYWxsaXMgYW5kIEZ1dHVuYVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDhcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiV2VzdGVybiBTYWhhcmFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlllbWVuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJaYW1iaWFcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlppbWJhYndlXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBY2NpZGVudCBhbmQgSGVhbHRoXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBY2NpZGVudGFsIERlYXRoIGFuZCBEaXNhYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJBZmZpbml0eVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQXV0b21vYmlsZSBMaWFiaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkF2aWF0aW9uXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJCQ0xXIC0gQ2FyZCBNaXN1c2UgKGVtcGxveWVlIGZyYXVkIC0gY29ycCBjYXJkcylcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkJ1c2luZXNzIFRyYXZlbCBBY2NpZGVudFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2FzaCBXaXRoZHJhd2FsIFByb3RlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkNhc3VhbHR5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb21wbGV0ZWQgT3BlcmF0aW9uc1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udHJhY3RvcnMgQWxsIFJpc2tzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJDcmVkaXQgUHJvdGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ3JpbWVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkRpcmVjdG9ycyAmIE9mZmljZXJzXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFbXBsb3llZSBCZW5lZml0c1wiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRW1wbG95ZXJzIExpYWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRW5lcmd5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFbnZpcm9ubWVudGFsIEVtcGFpcm1lbnQgTGlhYmlsaXR5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJFcXVpbmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkV4dGVuZGVkIFdhcnJhbnR5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGcmF1ZHVsZW50IHVzZSBvZiBDcmVkaXQgQ2FyZFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRnJhdWR1bGVudCB1c2Ugb2YgTW9iaWxlIFBob25lXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJGcmF1ZHVsZW50IHVzZSBvZiBQaW5cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkdlbmVyYWwgTGlhYmlsaXR5IChQdWJsaWMpXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJZGVudGl0eSBUaGVmdFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW50ZXJuZXQgRGVsaXZlcnlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkxsb3lkJ3MgTWFyaW5lXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJMb3NzIERhbWFnZSBXYWl2ZXJcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkxvc3Qgb3IgU3RvbGVuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJNYXJpbmVcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1hcmluZSAvIFRyYW5zaXRcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1lZGljYWwgQXNzaXN0YW5jZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiTW90b3JcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIk1vdG9yIFJlbnRhbCBMaWFiaWxpdHlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlBBIC8gVHJhdmVsXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQYXltZW50IFByb3RlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlBlcnNvbmFsIEFjY2lkZW50XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQcmljZSBQcm90ZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQcm9kdWN0IExpYWJpbGl0eVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiUHJvZHVjdCBMaWFiaWxpdHkgTGVnYWwgTm90aWNlIE9ubHlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlByb2Zlc3Npb25hbCBJbmRlbW5pdHlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlByb3BlcnR5XCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQcm9wZXJ0eSBhbmQgQnVzaW5lc3MgSW50ZXJydXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJQdXJjaGFzZSBQcm90ZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUcmF2ZWwgLSBCYWdnYWdlIGFuZCBNb25leVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHJhdmVsIC0gQ2FuY2VsbGF0aW9uXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCI0OVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJUcmF2ZWwgLSBDdXJ0YWlsbWVudFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHJhdmVsIC0gSW5jb252ZW5pZW5jZVwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiNDlcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiVHJhdmVsIC0gTGVnYWxcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlRyYXZlbCAtIE92ZXJzZWFzIE1lZGljYWwgRXhwZW5zZXNcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjQ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIlRyYXZlbCBBY2NpZGVudFwiXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiMTE0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBcIkluY2lkZW50IE9ubHlcIlxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjExNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJPcGVuXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxMTRcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ2xvc2VkXCJcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgXCIxMTRcIixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiRGF0YSBFbnRyeSBFcnJvclwiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwic2NyZWVuTGlua3NcIjogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBcIlNjcmVlbklkXCIsXHJcbiAgICAgICAgICAgICAgICBcIk5hbWVcIixcclxuICAgICAgICAgICAgICAgIFwiU2NyZWVuVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTY3JlZW5MaW5rVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJTY3JlZW5MaW5rSHJlZlwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICBcIjE1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbmNpZGVudFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VxdWVuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBcIk5ldyBSZWNvcmRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIjE1LVNlcXVlbmNlXCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCJzY3JlZW5cIjogW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBcIlNjcmVlbklkXCIsXHJcbiAgICAgICAgICAgICAgICBcIlNjcmVlbk5hbWVcIixcclxuICAgICAgICAgICAgICAgIFwiU2NyZWVuSGVhZGVyXCJcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW5jaWRlbnQgU2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/grids/simple-grid',["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SimpleGrid = (function () {
        function SimpleGrid() {
            this.gridData = [{
                    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5,
                    OrderDate: new Date(8364186e5), Freight: 32.38
                },
                {
                    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6,
                    OrderDate: new Date(836505e6), Freight: 11.61
                },
                {
                    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4,
                    OrderDate: new Date(8367642e5), Freight: 65.83
                },
                {
                    OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3,
                    OrderDate: new Date(8367642e5), Freight: 41.34
                },
                {
                    OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4,
                    OrderDate: new Date(8368506e5), Freight: 51.3
                }];
        }
        SimpleGrid.prototype.recordClick = function (e) {
        };
        SimpleGrid = __decorate([
            aurelia_framework_1.customElement('simple-grid'),
            __metadata("design:paramtypes", [])
        ], SimpleGrid);
        return SimpleGrid;
    }());
    exports.SimpleGrid = SimpleGrid;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL2dyaWRzL3NpbXBsZS1ncmlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQUdBO1FBSUk7WUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7b0JBQ2IsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO29CQUNsRCxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUs7aUJBQ2pEO2dCQUNEO29CQUNJLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztvQkFDbEQsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLO2lCQUNoRDtnQkFDRDtvQkFDSSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUM7b0JBQ2xELFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSztpQkFDakQ7Z0JBQ0Q7b0JBQ0ksT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDO29CQUNsRCxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUs7aUJBQ2pEO2dCQUNEO29CQUNJLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQztvQkFDbEQsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJO2lCQUNoRCxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRUQsZ0NBQVcsR0FBWCxVQUFZLENBQUM7UUFFYixDQUFDO1FBN0JRLFVBQVU7WUFEdEIsaUNBQWEsQ0FBQyxhQUFhLENBQUM7O1dBQ2hCLFVBQVUsQ0ErQnRCO1FBQUQsaUJBQUM7S0EvQkQsQUErQkMsSUFBQTtJQS9CWSxnQ0FBVSIsImZpbGUiOiJ2aWV3cy9ncmlkcy9zaW1wbGUtZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQgfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AY3VzdG9tRWxlbWVudCgnc2ltcGxlLWdyaWQnKVxyXG5leHBvcnQgY2xhc3MgU2ltcGxlR3JpZCB7XHJcblxyXG4gICAgZ3JpZERhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdyaWREYXRhID0gW3tcclxuICAgICAgICAgICAgT3JkZXJJRDogMTAyNDgsIEN1c3RvbWVySUQ6ICdWSU5FVCcsIEVtcGxveWVlSUQ6IDUsXHJcbiAgICAgICAgICAgIE9yZGVyRGF0ZTogbmV3IERhdGUoODM2NDE4NmU1KSwgRnJlaWdodDogMzIuMzhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgT3JkZXJJRDogMTAyNDksIEN1c3RvbWVySUQ6ICdUT01TUCcsIEVtcGxveWVlSUQ6IDYsXHJcbiAgICAgICAgICAgIE9yZGVyRGF0ZTogbmV3IERhdGUoODM2NTA1ZTYpLCBGcmVpZ2h0OiAxMS42MVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcmRlcklEOiAxMDI1MCwgQ3VzdG9tZXJJRDogJ0hBTkFSJywgRW1wbG95ZWVJRDogNCxcclxuICAgICAgICAgICAgT3JkZXJEYXRlOiBuZXcgRGF0ZSg4MzY3NjQyZTUpLCBGcmVpZ2h0OiA2NS44M1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcmRlcklEOiAxMDI1MSwgQ3VzdG9tZXJJRDogJ1ZJQ1RFJywgRW1wbG95ZWVJRDogMyxcclxuICAgICAgICAgICAgT3JkZXJEYXRlOiBuZXcgRGF0ZSg4MzY3NjQyZTUpLCBGcmVpZ2h0OiA0MS4zNFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBPcmRlcklEOiAxMDI1MiwgQ3VzdG9tZXJJRDogJ1NVUFJEJywgRW1wbG95ZWVJRDogNCxcclxuICAgICAgICAgICAgT3JkZXJEYXRlOiBuZXcgRGF0ZSg4MzY4NTA2ZTUpLCBGcmVpZ2h0OiA1MS4zXHJcbiAgICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb3JkQ2xpY2soZSkge1xyXG4gICAgICAgIC8vaGFuZGxlIGV2ZW50IGhlcmVcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('views/navigation/drawer',["require", "exports", "jquery"], function (require, exports, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Practice = (function () {
        function Practice() {
            this.listViewSettings = { width: 300, selectedItemIndex: 0 };
        }
        Practice.prototype.headChange = function (e) {
            console.log(e);
            console.log($);
            $('#butdrawer').parent().children('h2').text($(e.target).text());
        };
        return Practice;
    }());
    exports.Practice = Practice;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL25hdmlnYXRpb24vZHJhd2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBSUk7WUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ2pFLENBQUM7UUFFRCw2QkFBVSxHQUFWLFVBQVcsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3JFLENBQUM7UUFDTCxlQUFDO0lBQUQsQ0FiQSxBQWFDLElBQUE7SUFiWSw0QkFBUSIsImZpbGUiOiJ2aWV3cy9uYXZpZ2F0aW9uL2RyYXdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmFjdGljZSB7XHJcblxyXG4gICAgbGlzdFZpZXdTZXR0aW5ncztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmxpc3RWaWV3U2V0dGluZ3MgPSB7IHdpZHRoOiAzMDAsIHNlbGVjdGVkSXRlbUluZGV4OiAwIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZENoYW5nZShlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJCk7XHJcbiAgICAgICAgJCgnI2J1dGRyYXdlcicpLnBhcmVudCgpLmNoaWxkcmVuKCdoMicpLnRleHQoJChlLnRhcmdldCkudGV4dCgpKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('views/navigation/list-box',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListBox = (function () {
        function ListBox() {
        }
        return ListBox;
    }());
    exports.ListBox = ListBox;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL25hdmlnYXRpb24vbGlzdC1ib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQ0E7UUFDSTtRQUNBLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSwwQkFBTyIsImZpbGUiOiJ2aWV3cy9uYXZpZ2F0aW9uL2xpc3QtYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgTGlzdEJveCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/orders/order-details',["require", "exports", "aurelia-dependency-injection", "../../services/index", "jquery"], function (require, exports, aurelia_dependency_injection_1, index_1, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrderDetails = (function () {
        function OrderDetails(lookups) {
            var _this = this;
            this.productsIndex = {};
            this.detail = null;
            this.products = this.allProducts = lookups.products;
            this.products.forEach(function (p) { return _this.productsIndex[p.ProductID] = p; });
        }
        OrderDetails.prototype.activate = function (order) {
            this.order = order;
        };
        OrderDetails.prototype.addDetail = function () {
            this.detail = this.order.entityAspect.entityManager
                .createEntity('OrderDetail', { OrderID: this.order.OrderID, Quantity: 1 });
            this.openDetail();
        };
        OrderDetails.prototype.editDetail = function (detail) {
            this.detail = detail;
            this.openDetail();
        };
        OrderDetails.prototype.removeDetail = function (detail) {
            detail.entityAspect.setDeleted();
        };
        OrderDetails.prototype.detailPropertyChanged = function (args) {
            if (args.propertyName !== 'ProductID') {
                return;
            }
            var product = this.productsIndex[args.newValue];
            this.detail.UnitPrice = product ? product.UnitPrice : null;
        };
        OrderDetails.prototype.openDetail = function () {
            var _this = this;
            this._subscription = this.detail.entityAspect.propertyChanged.subscribe(function (args) { return _this.detailPropertyChanged(args); });
            this.products = this.allProducts
                .filter(function (p) { return _this.order.OrderDetails.filter(function (d) { return d.ProductID === p.ProductID && d !== _this.detail; }).length === 0; });
            jquery_1.default('#detail').openModal();
        };
        OrderDetails.prototype.closeDetail = function () {
            this.detail.entityAspect.propertyChanged.unsubscribe(this._subscription);
            jquery_1.default('#detail').closeModal();
        };
        OrderDetails.prototype.calculateDetailCost = function (detail) {
            return detail.Quantity * detail.UnitPrice * (1 - detail.Discount);
        };
        Object.defineProperty(OrderDetails.prototype, "detailTotal", {
            get: function () {
                return this.order.OrderDetails.map(this.calculateDetailCost).reduce(function (a, b) { return a + b; }, 0);
            },
            enumerable: true,
            configurable: true
        });
        OrderDetails = __decorate([
            aurelia_dependency_injection_1.inject(index_1.Lookups),
            __metadata("design:paramtypes", [Object])
        ], OrderDetails);
        return OrderDetails;
    }());
    exports.OrderDetails = OrderDetails;
    var DiscountValueConverter = (function () {
        function DiscountValueConverter() {
        }
        DiscountValueConverter.prototype.toView = function (value) {
            return value === null ? null : Math.floor(value * 100);
        };
        DiscountValueConverter.prototype.fromView = function (value) {
            value = +value;
            if (isNaN(value) || value >= 100) {
                return 0;
            }
            return (value / 100).toFixed(2);
        };
        return DiscountValueConverter;
    }());
    exports.DiscountValueConverter = DiscountValueConverter;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL29yZGVycy9vcmRlci1kZXRhaWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BO1FBUUUsc0JBQVksT0FBTztZQUFuQixpQkFHQztZQVBELGtCQUFhLEdBQUcsRUFBRSxDQUFDO1lBQ25CLFdBQU0sR0FBRyxJQUFJLENBQUM7WUFJWixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1FBQ2xFLENBQUM7UUFFRCwrQkFBUSxHQUFSLFVBQVMsS0FBSztZQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLENBQUM7UUFFRCxnQ0FBUyxHQUFUO1lBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxhQUFhO2lCQUNoRCxZQUFZLENBQUMsYUFBYSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNwQixDQUFDO1FBRUQsaUNBQVUsR0FBVixVQUFXLE1BQU07WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsQ0FBQztRQUVELG1DQUFZLEdBQVosVUFBYSxNQUFNO1lBQ2pCLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELDRDQUFxQixHQUFyQixVQUFzQixJQUFJO1lBRXhCLEVBQUUsQ0FBQyxD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Y2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5cbmltcG9ydCB7IExvb2t1cHMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG5AaW5qZWN0KExvb2t1cHMpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzIHtcbiAgb3JkZXI7XG4gIGFsbFByb2R1Y3RzO1xuICBwcm9kdWN0cztcbiAgcHJvZHVjdHNJbmRleCA9IHt9O1xuICBkZXRhaWwgPSBudWxsO1xuICBfc3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGxvb2t1cHMpIHtcbiAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5hbGxQcm9kdWN0cyA9IGxvb2t1cHMucHJvZHVjdHM7XG4gICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKHAgPT4gdGhpcy5wcm9kdWN0c0luZGV4W3AuUHJvZHVjdElEXSA9IHApO1xuICB9XG5cbiAgYWN0aXZhdGUob3JkZXIpIHtcbiAgICB0aGlzLm9yZGVyID0gb3JkZXI7XG4gIH1cblxuICBhZGREZXRhaWwoKSB7XG4gICAgdGhpcy5kZXRhaWwgPSB0aGlzLm9yZGVyLmVudGl0eUFzcGVjdC5lbnRpdHlNYW5hZ2VyXG4gICAgICAuY3JlYXRlRW50aXR5KCdPcmRlckRldGFpbCcsIHsgT3JkZXJJRDogdGhpcy5vcmRlci5PcmRlcklELCBRdWFudGl0eTogMSB9KTtcbiAgICB0aGlzLm9wZW5EZXRhaWwoKTtcbiAgfVxuXG4gIGVkaXREZXRhaWwoZGV0YWlsKSB7XG4gICAgdGhpcy5kZXRhaWwgPSBkZXRhaWw7XG4gICAgdGhpcy5vcGVuRGV0YWlsKCk7XG4gIH1cblxuICByZW1vdmVEZXRhaWwoZGV0YWlsKSB7XG4gICAgZGV0YWlsLmVudGl0eUFzcGVjdC5zZXREZWxldGVkKCk7XG4gIH1cblxuICBkZXRhaWxQcm9wZXJ0eUNoYW5nZWQoYXJncykge1xuICAgIC8vIGF1dG9maWxsIFVuaXRQcmljZSBiYXNlZCBvbiBzZWxlY3RlZCBQcm9kdWN0XG4gICAgaWYgKGFyZ3MucHJvcGVydHlOYW1lICE9PSAnUHJvZHVjdElEJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgcHJvZHVjdCA9IHRoaXMucHJvZHVjdHNJbmRleFthcmdzLm5ld1ZhbHVlXTtcbiAgICB0aGlzLmRldGFpbC5Vbml0UHJpY2UgPSBwcm9kdWN0ID8gcHJvZHVjdC5Vbml0UHJpY2UgOiBudWxsO1xuICB9XG5cbiAgb3BlbkRldGFpbCgpIHtcbiAgICAvLyBzdWJzY3JpYmUgdG8gUHJvZHVjdCBjaGFuZ2UgdG8gYXV0b2ZpbGwgVW5pdFByaWNlXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5kZXRhaWwuZW50aXR5QXNwZWN0LnByb3BlcnR5Q2hhbmdlZC5zdWJzY3JpYmUoYXJncyA9PiB0aGlzLmRldGFpbFByb3BlcnR5Q2hhbmdlZChhcmdzKSk7XG5cbiAgICAvLyBwcmV2ZW50IHNlbGVjdGluZyB0aGUgc2FtZSBwcm9kdWN0IHR3aWNlLlxuICAgIHRoaXMucHJvZHVjdHMgPSB0aGlzLmFsbFByb2R1Y3RzXG4gICAgICAuZmlsdGVyKHAgPT4gdGhpcy5vcmRlci5PcmRlckRldGFpbHMuZmlsdGVyKGQgPT4gZC5Qcm9kdWN0SUQgPT09IHAuUHJvZHVjdElEICYmIGQgIT09IHRoaXMuZGV0YWlsKS5sZW5ndGggPT09IDApO1xuXG4gICAgLy8gb3BlbiB0aGUgbW9kYWwuXG4gICAgJCgnI2RldGFpbCcpLm9wZW5Nb2RhbCgpO1xuICB9XG5cbiAgY2xvc2VEZXRhaWwoKSB7XG4gICAgdGhpcy5kZXRhaWwuZW50aXR5QXNwZWN0LnByb3BlcnR5Q2hhbmdlZC51bnN1YnNjcmliZSh0aGlzLl9zdWJzY3JpcHRpb24pO1xuICAgICQoJyNkZXRhaWwnKS5jbG9zZU1vZGFsKCk7XG4gIH1cblxuICBjYWxjdWxhdGVEZXRhaWxDb3N0KGRldGFpbCkge1xuICAgIHJldHVybiBkZXRhaWwuUXVhbnRpdHkgKiBkZXRhaWwuVW5pdFByaWNlICogKDEgLSBkZXRhaWwuRGlzY291bnQpO1xuICB9XG5cbiAgZ2V0IGRldGFpbFRvdGFsKCkge1xuICAgIHJldHVybiB0aGlzLm9yZGVyLk9yZGVyRGV0YWlscy5tYXAodGhpcy5jYWxjdWxhdGVEZXRhaWxDb3N0KS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgfVxufVxuXG4vKipcbiogVmFsdWUgY29udmVydGVyIGZvciB0aGUgXCJkaXNjb3VudFwiIGZpZWxkIHRvIGFsbG93IHVzZXJzIHRvIGVudGVyIGRpc2NvdW50cyBhcyB3aG9sZSBudW1iZXJzXG4qIGV2ZW4gdGhvdWdoIHRoZXkgYXJlIHN0b3JlZCBhcyBkZWNpbWFscy5cbiovXG5leHBvcnQgY2xhc3MgRGlzY291bnRWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCA/IG51bGwgOiBNYXRoLmZsb29yKHZhbHVlICogMTAwKTtcbiAgfVxuXG4gIGZyb21WaWV3KHZhbHVlKSB7XG4gICAgdmFsdWUgPSArdmFsdWU7XG5cbiAgICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID49IDEwMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuICh2YWx1ZSAvIDEwMCkudG9GaXhlZCgyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/orders/order-list',["require", "exports", "aurelia-dependency-injection", "aurelia-router", "../common/list-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, list_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrderList = (function (_super) {
        __extends(OrderList, _super);
        function OrderList(router, service) {
            return _super.call(this, 'orders', router, service) || this;
        }
        OrderList = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_router_1.AppRouter, index_1.OrderService),
            aurelia_dependency_injection_1.singleton(),
            __metadata("design:paramtypes", [Object, Object])
        ], OrderList);
        return OrderList;
    }(list_view_model_1.ListViewModel));
    exports.OrderList = OrderList;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL29yZGVycy9vcmRlci1saXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRQTtRQUErQiw2QkFBYTtRQUMxQyxtQkFBWSxNQUFNLEVBQUUsT0FBTzttQkFDekIsa0JBQU0sUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFDbEMsQ0FBQztRQUhVLFNBQVM7WUFGckIscUNBQU0sQ0FBQywwQkFBUyxFQUFFLG9CQUFZLENBQUM7WUFDL0Isd0NBQVMsRUFBRTs7V0FDQyxTQUFTLENBSXJCO1FBQUQsZ0JBQUM7S0FKRCxBQUlDLENBSjhCLCtCQUFhLEdBSTNDO0lBSlksOEJBQVMiLCJmaWxlIjoidmlld3Mvb3JkZXJzL29yZGVyLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgc2luZ2xldG9ufSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7IEFwcFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuaW1wb3J0IHsgTGlzdFZpZXdNb2RlbCB9IGZyb20gJy4uL2NvbW1vbi9saXN0LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuXG5AaW5qZWN0KEFwcFJvdXRlciwgT3JkZXJTZXJ2aWNlKVxuQHNpbmdsZXRvbigpXG5leHBvcnQgY2xhc3MgT3JkZXJMaXN0IGV4dGVuZHMgTGlzdFZpZXdNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKHJvdXRlciwgc2VydmljZSkge1xuICAgIHN1cGVyKCdvcmRlcnMnLCByb3V0ZXIsIHNlcnZpY2UpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('views/orders/order',["require", "exports", "aurelia-dependency-injection", "../common/entity-view-model", "../../services/index"], function (require, exports, aurelia_dependency_injection_1, entity_view_model_1, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Order = (function (_super) {
        __extends(Order, _super);
        function Order(service, lookups) {
            var _this = _super.call(this, service) || this;
            _this.customers = lookups.customers;
            return _this;
        }
        Object.defineProperty(Order.prototype, "title", {
            get: function () {
                if (this.entity.OrderID <= 0) {
                    return 'New Order';
                }
                return "Order #" + this.entity.OrderID;
            },
            enumerable: true,
            configurable: true
        });
        Order = __decorate([
            aurelia_dependency_injection_1.inject(index_1.OrderService, index_1.Lookups),
            __metadata("design:paramtypes", [Object, Object])
        ], Order);
        return Order;
    }(entity_view_model_1.EntityViewModel));
    exports.Order = Order;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL29yZGVycy9vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBTUE7UUFBMkIseUJBQWU7UUFHdEMsZUFBWSxPQUFPLEVBQUUsT0FBTztZQUE1QixZQUNJLGtCQUFNLE9BQU8sQ0FBQyxTQUVqQjtZQURHLEtBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQzs7UUFDdkMsQ0FBQztRQUVELHNCQUFJLHdCQUFLO2lCQUFUO2dCQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZCLENBQUM7Z0JBQ0QsTUFBTSxDQUFDLFlBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFTLENBQUM7WUFDM0MsQ0FBQzs7O1dBQUE7UUFiUSxLQUFLO1lBRGpCLHFDQUFNLENBQUMsb0JBQVksRUFBRSxlQUFPLENBQUM7O1dBQ2pCLEtBQUssQ0FjakI7UUFBRCxZQUFDO0tBZEQsQUFjQyxDQWQwQixtQ0FBZSxHQWN6QztJQWRZLHNCQUFLIiwiZmlsZSI6InZpZXdzL29yZGVycy9vcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuXG5pbXBvcnQgeyBFbnRpdHlWaWV3TW9kZWwgfSBmcm9tICcuLi9jb21tb24vZW50aXR5LXZpZXctbW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJTZXJ2aWNlLCBMb29rdXBzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW5kZXgnO1xuXG5AaW5qZWN0KE9yZGVyU2VydmljZSwgTG9va3VwcylcbmV4cG9ydCBjbGFzcyBPcmRlciBleHRlbmRzIEVudGl0eVZpZXdNb2RlbCB7XG4gICAgY3VzdG9tZXJzO1xuXG4gICAgY29uc3RydWN0b3Ioc2VydmljZSwgbG9va3Vwcykge1xuICAgICAgICBzdXBlcihzZXJ2aWNlKTtcbiAgICAgICAgdGhpcy5jdXN0b21lcnMgPSBsb29rdXBzLmN1c3RvbWVycztcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVudGl0eS5PcmRlcklEIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiAnTmV3IE9yZGVyJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYE9yZGVyICMke3RoaXMuZW50aXR5Lk9yZGVySUR9YDtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('views/orders/orders-section',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OrdersSection = (function () {
        function OrdersSection() {
        }
        OrdersSection.prototype.configureRouter = function (config, router) {
            config.map([
                { route: '', moduleId: './order-list', nav: false, title: '' },
                { route: ':id', moduleId: './order', nav: false, title: '' },
            ]);
        };
        return OrdersSection;
    }());
    exports.OrdersSection = OrdersSection;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL29yZGVycy9vcmRlcnMtc2VjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1FBT0EsQ0FBQztRQU5DLHVDQUFlLEdBQWYsVUFBZ0IsTUFBTSxFQUFFLE1BQU07WUFDNUIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUssUUFBUSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQ2pFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTthQUNsRSxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0gsb0JBQUM7SUFBRCxDQVBBLEFBT0MsSUFBQTtJQVBZLHNDQUFhIiwiZmlsZSI6InZpZXdzL29yZGVycy9vcmRlcnMtc2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBUaGUgc2hlbGwgZm9yIHRoZSBvcmRlcnMgc2VjdGlvbiBvZiB0aGUgYXBwbGljYXRpb24uICBXaWxsIGNvbnRhaW4gZWl0aGVyXG4qIHRoZSBvcmRlci1saXN0IG9yIG9yZGVyIHBhZ2UuXG4qL1xuZXhwb3J0IGNsYXNzIE9yZGVyc1NlY3Rpb24ge1xuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6ICcnLCAgICBtb2R1bGVJZDogJy4vb3JkZXItbGlzdCcsIG5hdjogZmFsc2UsIHRpdGxlOiAnJyB9LFxuICAgICAgeyByb3V0ZTogJzppZCcsIG1vZHVsZUlkOiAnLi9vcmRlcicsICAgICAgbmF2OiBmYWxzZSwgdGl0bGU6ICcnIH0sXG4gICAgXSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('app.html!text', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"syncfusion-javascript/Content/ej/web/ej.widgets.core.bootstrap.min.css\"></require>\r\n  <require from=\"syncfusion-javascript/Content/ej/web/bootstrap-theme/ej.theme.min.css\"></require>\r\n  <require from=\"syncfusion-javascript/Content/ej/web/responsive-css/ej.responsive.css\"></require>\r\n\n  <require from=\"bootstrap/css/bootstrap.min.css\"></require>\r\n \r\n  <!--<require from=\"./views/index\" ></require>-->\r\n\r\n  <router-view></router-view>\r\n\r\n</template>\n"; });
define('views/navigation/drawer.css!text', ['module'], function(module) { module.exports = "#navpane_listbox img.e-list-img {\r\n  padding-right: 10px;\r\n}\r\n\r\n.e-lv .e-list a {\r\n  box-sizing: content-box;\r\n}\r\n\r\n#navpane {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n\r\n\r\n.e-header {\r\n  padding-top: 8px;\r\n  padding-left: 0px;\r\n}\r\n\r\n#container {\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.peopleimage {\r\n  background: none no-repeat scroll center center / 70px 70px rgba(0, 0, 0, 0);\r\n  height: 100px;\r\n  margin: auto;\r\n  width: 100px;\r\n  border: 1px solid #737373;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.profileimage {\r\n  background: none no-repeat scroll center center / 90px 90px rgba(0, 0, 0, 0);\r\n  height: 95px;\r\n  border: 1px solid #b3b3b3;\r\n  margin-right: 12px;\r\n  width: 95px;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n#people td {\r\n  border: 1px solid #9f9f9f;\r\n  text-align: center;\r\n  padding: 10px;\r\n}\r\n\r\n#photos td div {\r\n  background-position: center center;\r\n  background-size: 100% 100%;\r\n  border: 1px solid #b3b3b3;\r\n  margin-left: 14px;\r\n}\r\n\r\n.photoimage {\r\n  background: none no-repeat scroll center center / 140px 120px rgba(0, 0, 0, 0);\r\n  height: 125px;\r\n  margin: auto;\r\n  width: 145px;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.locationimage {\r\n  background: url(\"img/location.png\") no-repeat scroll center center / 300px 200px rgba(0, 0, 0, 0);\r\n  height: 230px;\r\n  margin: auto;\r\n  padding: 10px;\r\n  width: 320px;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.drawericon {\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  height: 32px;\r\n  width: 32px;\r\n  background-size: 100% 100%;\r\n  padding-right: 10px;\r\n}\r\n\r\n.subpage {\r\n  padding: 10px;\r\n  text-align: justify;\r\n  overflow-x: auto;\r\n  overflow-y: auto;\r\n}\r\n\r\n#navpane .subpage {\r\n  padding: 0px;\r\n}\r\n\r\n.drawericon:before {\r\n  content: \"\\e76b\";\r\n  font-size: 28px;\r\n  height: 26px;\r\n}\r\n\r\n.row {\r\n  margin: 0;\r\n}\r\n"; });
define('views/entity-header.html!text', ['module'], function(module) { module.exports = "<template>\n  <br />\n  <div class=\"row\">\n    \n    <div class=\"col-md-8 no-padding\">\n      <h3 class=\"left\">${title}</h3>\n    </div>\n    \n    <div class=\"col-md-4\">\n      <button type=\"button\" class=\"btn btn-secondary float-right\"\n              disabled.one-way=\"!hasChanges\"\n              show.bind=\"!entity.entityAspect.entityState.isAdded()\"\n              click.delegate=\"revert()\">\n        Revert\n      </button>\n      <button type=\"submit\" class=\"btn btn-success float-right\"\n              disabled.one-way=\"!hasChanges\">\n        Save\n      </button>\n    </div>\n  </div>\n  <br />\n</template>\n"; });
define('views/navigation/list-box.css!text', ['module'], function(module) { module.exports = ".e-ddl-popup {\r\n  margin: 0 auto;\r\n}\r\n\r\n.ctrllabel {\r\n  font-weight: 600;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n.row [class*=\"cols-\"]:first-child > div:first-child {\r\n  margin: 0 auto;\r\n}\r\n\r\n.listbox.frame {\r\n  display: table;\r\n  /*width: auto !important;*/\r\n  padding: 50px 30px;\r\n}\r\n\r\n.frame {\r\n  /*border: 1px solid #BBBCBB;*/\r\n  /*border-radius: 10px;*/\r\n  padding: 30px 20px;\r\n  /*width: 350px;*/\r\n  color: #5C5C5C;\r\n}\r\n"; });
define('views/iq-portal.html!text', ['module'], function(module) { module.exports = "<template>\n  <div>\n    Hello! IQ portal is under construction.\n  </div>\n</template>"; });
define('views/not-found.html!text', ['module'], function(module) { module.exports = "<template>\n  <div>The page you are looking for not found</div>\n</template>"; });
define('views/practice.html!text', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./navigation/list-box\"></require>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\">\r\n      <list-box></list-box>\r\n    </div>\r\n    <div class=\"col-md-10\">\r\n      <router-view></router-view>\r\n    </div>\r\n  </div>\r\n  \r\n</template>\r\n"; });
define('resources/elements/pager.html!text', ['module'], function(module) { module.exports = "<template>\n  <ul class=\"pagination\" show.bind=\"pageCount > 1\">\n    <li class=\"${pageIndex === 0 ? 'disabled' : 'waves-effect'}\">\n      <a href=\"#\" click.delegate=\"setPage(0)\"><i class=\"mdi-navigation-chevron-left\"></i></a>\n    </li>\n    <li repeat.for=\"p of pageCount\" class=\"${p === $parent.pageIndex ? 'active' : 'waves-effect'}\">\n      <a href=\"#\" click.delegate=\"$parent.setPage(p)\">${p + 1}</a>\n    </li>\n    <li class=\"${pageIndex === pageCount - 1 ? 'disabled' : 'waves-effect'}\">\n      <a href=\"#\" click.delegate=\"setPage(pageCount - 1)\"><i class=\"mdi-navigation-chevron-right\"></i></a>\n    </li>\n  </ul>\n</template>\n"; });
define('views/customers/customer-list.html!text', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\n\n    <h3 class=\"left\">Customers</h3>\n    <a href=\"#customers/new\" class=\"waves-effect waves-light btn right header-button\">New</a>\n\n    <table class=\"table table-striped table-bordered table-hover table-responsive\">\n      <thead>\n        <tr>\n          <th>Company Name</th>\n          <th>Contact Name</th>\n          <th>City</th>\n          <th>Phone</th>\n          <th>Fax</th>\n        </tr>\n      </thead>\n      <tbody class=\"cursor-pointer\">\n        <tr repeat.for=\"entity of entities\" click.delegate=\"$parent.open(entity.CustomerID)\">\n          <td>${entity.CompanyName}</td>\n          <td>${entity.ContactName}</td>\n          <td>${entity.City}</td>\n          <td>${entity.Phone}</td>\n          <td>${entity.Fax}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"progress\" show.bind=\"isLoading\">\n      <div class=\"indeterminate\"></div>\n    </div>\n\n    <pager page-count.bind=\"pageCount\"\n           page-index.bind=\"pageIndex\"\n           set-page.call=\"setPage($event)\">\n    </pager>\n\n  </div>\n</template>\n"; });
define('views/customers/customer.html!text', ['module'], function(module) { module.exports = "<template>\r\n  <div class=\"container\">\r\n    <form submit.delegate=\"save()\" novalidate>\r\n      <!-- header -->\r\n      <compose view=\"../entity-header.html\"></compose>\r\n\r\n      <!-- customer fields -->\r\n      <div class=\"row\">\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"CompanyName\" type=\"text\" value.bind=\"entity.CompanyName\" class=\"form-control\">\r\n          <label for=\"CompanyName\" materialize>Company Name</label>\r\n        </div>\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"ContactName\" type=\"text\" value.bind=\"entity.ContactName\" class=\"form-control\">\r\n          <label for=\"ContactName\" materialize>Contact Name</label>\r\n        </div>\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"ContactTitle\" type=\"text\" value.bind=\"entity.ContactTitle\" class=\"form-control\">\r\n          <label for=\"ContactTitle\" materialize>Contact Title</label>\r\n        </div>\r\n\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"Phone\" type=\"text\" value.bind=\"entity.Phone\" class=\"form-control\">\r\n          <label for=\"Phone\" materialize>Phone</label>\r\n        </div>\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"Fax\" type=\"text\" value.bind=\"entity.Fax\" class=\"form-control\">\r\n          <label for=\"Fax\" materialize>Fax</label>\r\n        </div>\r\n      </div>\r\n\r\n      <h4>Address</h4>\n\r\n      <div class=\"row\">\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"Address\" type=\"text\" value.bind=\"entity.Address\" class=\"form-control\">\r\n          <label for=\"Address\" materialize>Address</label>\r\n        </div>\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"City\" type=\"text\" value.bind=\"entity.City\" class=\"form-control\">\r\n          <label for=\"City\" materialize>City</label>\r\n        </div>\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"Region\" type=\"text\" value.bind=\"entity.Region\" class=\"form-control\">\r\n          <label for=\"Region\" materialize>Region</label>\r\n        </div>\r\n        <div class=\"input-field col-md-6\">\r\n          <input id=\"PostalCode\" type=\"tel\" value.bind=\"entity.PostalCode\" class=\"form-control\">\r\n          <label for=\"PostalCode\" materialize>Postal Code</label>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</template>\r\n"; });
define('views/customers/customers-section.html!text', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('views/forms/dropdown.html!text', ['module'], function(module) { module.exports = "<template>\n\n  <br />\r\n  <br/>\n\r\n  <div>\r\n    <input ej-drop-down-list=\"e-data-source.bind:dataSource;e-fields.bind:fields;e-watermark-text.bind:watermarkText;e-show-checkbox.bind:checkBox;e-width.bind:cwidth;\" />\r\n  </div>\n\n  <div>\n    h = ${h}.\n  </div>\r\n\r\n</template>"; });
define('views/forms/simple-form.html!text', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <br />\r\n  <br />\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 offset-3\">\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Name</label>\r\n        <div class=\"col-10\">\r\n          <input id=\"firstName\" type=\"text\" class=\"form-control\" ej-mask-edit=\"e-value.bind:firstName;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Pattern</label>\r\n        <div class=\"col-10\">\r\n          <input id=\"maskedit\" type=\"text\" ej-mask-edit=\"e-value.bind:mvalue;e-mask-format.bind:maskFormat;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Textarea</label>\r\n        <div class=\"col-10\">\r\n          <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\"></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Number</label>\r\n        <div class=\"col-10\">\r\n          <input id=\"numeric\" type=\"text\" ej-numeric-textbox=\"e-value.bind:numericValue;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Percentage</label>\r\n        <div class=\"col-10\">\r\n          <input id=\"percent\" type=\"text\" ej-percentage-textbox=\"e-value.bind:percentValue;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Currency</label>\r\n        <div class=\"col-10\">\r\n          <input id=\"currency\" type=\"text\" ej-currency-textbox=\"e-value.bind:currencyValue;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Date</label>\r\n        <div class=\"col-10\">\r\n          <input ej-date-picker=\"e-value.bind:dateValue;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Time</label>\r\n        <div class=\"col-10\">\r\n          <input ej-time-picker=\"e-value.two-way:timeValue;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Date Time</label>\r\n        <div class=\"col-10\">\r\n          <input ej-date-time-picker=\"e-value.bind:datetimeValue;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Car list</label>\r\n        <div class=\"col-10\">\r\n          <input type=\"text\" ej-autocomplete=\"e-watermark-text:Select a car; e-data-source.bind: carList;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Select a file to upload</label>\r\n        <div class=\"col-10\">\r\n          <!--<div class=\"uploadbox-default-control\">-->\r\n          <ej-uploadbox e-save-url.bind=\"uploadFileUrl\" e-remove-url.bind=\"removeUploadedFileUrl\"></ej-uploadbox>\r\n        </div>\r\n      </div>\r\n\r\n      <style>\r\n        .uploadbox-default-control {\r\n          width: 100%;\r\n          height: 35px;\r\n        }\r\n\r\n        .uploadbox-drag-and-drop-control {\r\n          width: 100%;\r\n          height: 100%;\r\n        }\r\n\r\n        #UploadDragAndDrop .e-selectpart {\r\n          height: 35px;\r\n        }\r\n      </style>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Drag drop file to upload</label>\r\n        <div class=\"col-10\">\r\n          <ej-uploadbox id=\"UploadDragAndDrop\" e-save-url.bind=\"uploadFileUrl\" e-remove-url.bind=\"removeUploadedFileUrl\" e-allow-drag-and-drop.bind=\"dragAndDrop\"\r\n                        e-multiple-files-selection.bind=\"multipleFiles\"></ej-uploadbox>\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"e-btn\" ej-button=\"e-width.bind:cwidth;\"> Save </button>\r\n\r\n      <br />\r\n      <br />\r\n      <!--Dropdown-->\r\n      <h2>Play with Dropdown</h2>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Simple</label>\r\n        <div class=\"col-10\">\r\n          <input id=\"skillsets\" type=\"text\" ej-drop-down-list=\"e-data-source.bind:skillSets;e-fields.bind:fields;e-watermark-text.bind:watermarkText;e-width.bind:cwidth;\" e-on-create.trigger=\"populateDropdown()\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Add this text</label>\r\n        <div class=\"col-10\">\r\n          <input id=\"skillName\" type=\"text\" ej-mask-edit=\"e-value.two-way:skillName;e-width.bind:cwidth;\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <div class=\"col-12\">\r\n          <button class=\"e-btn\" ej-button=\"e-text.bind:'Add Skill';e-width.bind:cwidth;\" e-on-click.trigger=\"addSkill($event)\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Toggle Checkbox</label>\r\n        <div class=\"col-10\">\r\n          <input type=\"checkbox\" class=\"e-togglebtn\" ej-toggle-button=\"e-default-text:Disable;e-active-text:Enable;e-size.bind:cwidth;\" e-on-change.trigger=\"onEnableDisable($event)\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-2 col-form-label\">Add Search Filter</label>\r\n        <div class=\"col-10\">\r\n          <button class=\"e-btn\" ej-button=\"e-text.bind:'Add Search filter';e-width.bind:cwidth;\" e-on-click.trigger=\"addFilter()\" />\r\n        </div>\r\n      </div>\r\n\r\n      <!-- End Dropdown-->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</template>"; });
define('views/employees/employee-list.html!text', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\n\n    <h3 class=\"left\">Employees</h3>\n    <a href=\"#employees/new\" class=\"waves-effect waves-light btn right header-button\">New</a>\n\n    <table class=\"bordered hoverable table-responsive\">\n      <thead>\n        <tr>\n          <th>Employee #</th>\n          <th>Name</th>\n          <th>Title</th>\n          <th>Hire Date</th>\n          <th>Extension</th>\n        </tr>\n      </thead>\n      <tbody class=\"cursor-pointer\">\n        <tr repeat.for=\"entity of entities\" click.delegate=\"$parent.open(entity.EmployeeID)\">\n          <td>${entity.EmployeeID}</td>\n          <td>${entity.LastName + ', ' + entity.FirstName}</td>\n          <td>${entity.Title}</td>\n          <td>${entity.HireDate | dateFormat:'M/D/YYYY'}</td>\n          <td>${entity.Extension}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"progress\" show.bind=\"isLoading\">\n      <div class=\"indeterminate\"></div>\n    </div>\n\n    <pager page-count.bind=\"pageCount\"\n           page-index.bind=\"pageIndex\"\n           set-page.call=\"setPage($event)\">\n    </pager>\n\n  </div>\n</template>\n"; });
define('views/employees/employee.html!text', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\n    <form submit.delegate=\"save()\" novalidate>\n      <!-- header -->\n      <compose view=\"../entity-header.html\"></compose>\n\n      <!-- employee fields -->\n      <div class=\"row\">\n        <div class=\"col s12 m10\">\n          <div class=\"row\">\n            <div class=\"input-field col s12 m4\">\n              <input id=\"FirstName\" type=\"text\" value.bind=\"entity.FirstName\">\n              <label for=\"FirstName\" materialize>First Name</label>\n            </div>\n            <div class=\"input-field col s12 m4\">\n              <input id=\"LastName\" type=\"text\" value.bind=\"entity.LastName\">\n              <label for=\"LastName\" materialize>Last Name</label>\n            </div>\n            <div class=\"input-field col s12 m4\">\n              <input id=\"Title\" type=\"text\" value.bind=\"entity.Title\">\n              <label for=\"Title\" materialize>Title</label>\n            </div>\n          </row>\n          <row>\n            <div class=\"input-field col s12 m3\">\n              <input id=\"HireDate\" type=\"text\" materialize=\"datepicker\" value.bind=\"entity.HireDate | dateFormat:'M/D/YYYY'\">\n              <label for=\"HireDate\" materialize>Hire Date</label>\n            </div>\n            <div class=\"input-field col s12 m2\">\n              <input id=\"Extension\" type=\"text\" value.bind=\"entity.Extension\">\n              <label for=\"Extension\" materialize>Extension</label>\n            </div>\n            <div class=\"input-field col s12 m4\">\n              <input id=\"HomePhone\" type=\"text\" value.bind=\"entity.HomePhone\">\n              <label for=\"HomePhone\" materialize>Home Phone</label>\n            </div>\n            <div class=\"input-field col s12 m3\">\n              <input id=\"BirthDate\" type=\"text\" materialize=\"datepicker\" value.bind=\"entity.BirthDate | dateFormat:'M/D/YYYY'\">\n              <label for=\"BirthDate\" materialize>Birth Date</label>\n            </div>\n          </div>\n        </div>\n        <div class=\"col s12 m2\">\n          <img src.one-time=\"photo\" class=\"responsive-img circle\"></img>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <h4>Address</h4>\n        <div class=\"input-field col s12 m4\">\n          <input id=\"Address\" type=\"text\" value.bind=\"entity.Address\">\n          <label for=\"Address\" materialize>Address</label>\n        </div>\n        <div class=\"input-field col s12 m4\">\n          <input id=\"City\" type=\"text\" value.bind=\"entity.City\">\n          <label for=\"City\" materialize>City</label>\n        </div>\n        <div class=\"input-field col s12 m2\">\n          <input id=\"Region\" type=\"text\" value.bind=\"entity.Region\">\n          <label for=\"Region\" materialize>Region</label>\n        </div>\n        <div class=\"input-field col s12 m2\">\n          <input id=\"PostalCode\" type=\"tel\" value.bind=\"entity.PostalCode\">\n          <label for=\"PostalCode\" materialize>Postal Code</label>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <h4>Notes</h4>\n        <div class=\"input-field col s12\">\n          <textarea id=\"Notes\" class=\"materialize-textarea\" value.bind=\"entity.Notes\"></textarea>\n          <label for=\"Notes\" class=\"active\">Notes</label>\n        </div>\n      </div>\n    </form>\n  </div>\n</template>\n"; });
define('views/employees/employees-section.html!text', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
define('views/grids/simple-grid.html!text', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <br />\r\n  <br/>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-10 offset-1\">\r\n      <ej-grid e-data-source.two-way=\"gridData\" e-allow-paging=true e-allow-sorting=true e-on-record-click.delegate=\"recordClick($event.detail)\">\r\n        <ej-column e-field=\"OrderID\" e-header-text=\"Order ID\" e-text-align=\"right\"></ej-column>\r\n        <ej-column e-field=\"CustomerID\" e-header-text=\"Customer ID\"></ej-column>\r\n        <ej-column e-field=\"EmployeeID\" e-header-text=\"Employee ID\" e-text-align=\"right\"></ej-column>\r\n        <ej-column e-field=\"Freight\" e-header-text=\"Freight\" e-format=\"{0:C}\" e-text-align=\"right\"></ej-column>\r\n        <ej-column e-field=\"OrderDate\" e-header-text=\"Order Date\" e-format=\"{0:MM/dd/yyyy}\" e-text-align=\"right\"></ej-column>\r\n      </ej-grid>\r\n    </div>\r\n  </div>\r\n\r\n</template>"; });
define('views/generatedControls/first-form.html!text', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <div class=\"float-right\" click.delegate=\"callDebugger()\">\r\n    Debugger\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 offset-3\">\r\n      <h1> Dynamically Generated controls</h1>\r\n\r\n      <!--Repeat for all controls-->\r\n      <div repeat.for=\"fieldValues of fieldValuesArr\" class=\"form-group row\">\r\n        <label for=\"example-text-input\" class=\"col-4 col-form-label\">${fieldValues[posFieldName]}</label>\r\n        <div class=\"col-8\">\r\n          <!--Conditionally render a control-->\r\n          <!--Simple field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.InputBox\" id=\"dynCtrl${fieldValues[posFieldId]}\" type=\"text\" class=\"form-control\" ej-mask-edit=\"e-value.bind:firstName;e-width.bind:cwidth;\" />\r\n          <!--Text Area-->\r\n          <textarea if.bind=\"fieldValues[posFieldElementId]==ElementEnum.TextArea\" class=\"form-control\" id=\"dynCtrl${fieldValues[posFieldId]}\" rows=\"3\"></textarea>\r\n          <!--Numeric field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.NumberInputBox\" id=\"dynCtrl${fieldValues[posFieldId]}\" type=\"text\" ej-numeric-textbox=\"e-value.bind:numericValue;e-width.bind:cwidth;\" />\r\n          <!--Percentage field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.PercentageInputBox\" id=\"dynCtrl${fieldValues[posFieldId]}\" type=\"text\" ej-percentage-textbox=\"e-value.bind:percentValue;e-width.bind:cwidth;\" />\r\n          <!--Currency field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.CurrencyInputBox\" id=\"dynCtrl${fieldValues[posFieldId]}\" type=\"text\" ej-currency-textbox=\"e-value.bind:currencyValue;e-width.bind:cwidth;\" />\r\n          <!--Date field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.DateInputBox\" ej-date-picker=\"e-value.bind:dateValue;e-width.bind:cwidth;\" />\r\n          <!--Time field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.TimeInputBox\" ej-time-picker=\"e-value.two-way:timeValue;e-width.bind:cwidth;\" />\r\n          <!--DateTime field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.DateTimeInputBox\" ej-date-time-picker=\"e-value.bind:datetimeValue;e-width.bind:cwidth;\" />\r\n          <!--Autocomplete field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.AutoCompleteInputBox\" type=\"text\" ej-autocomplete=\"e-watermark-text:Select a car; e-data-source.bind: carList;e-width.bind:cwidth;\" />\r\n          <!--File Uploader field-->\r\n          <ej-uploadbox if.bind=\"fieldValues[posFieldElementId]==ElementEnum.FileUpload\" e-save-url.bind=\"uploadFileUrl\" e-remove-url.bind=\"removeUploadedFileUrl\"></ej-uploadbox>\r\n          <!--Dropdown field-->\r\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.DropDown\" id=\"dynCtrl${fieldValues[posFieldId]}\" ej-drop-down-list=\"e-data-source.bind:filterDataForDropdown(fieldValues[posFieldListId]);e-fields.bind:fields;e-watermark-text.bind:watermarkText;e-width.bind:cwidth;\" type=\"text\" />\r\n          <!--MultiSelect DropDown field-->\n          <input if.bind=\"fieldValues[posFieldElementId]==ElementEnum.MultiSelectDropDown\" id=\"dynCtrl${fieldValues[posFieldId]}\" ej-drop-down-list=\"e-data-source.bind:filterDataForDropdown(fieldValues[posFieldListId]);e-fields.bind:fields;e-show-checkbox.bind:multiSelectShowCheckbox;e-multiSelectMode.bind:true;e-watermark-text.bind:watermarkText;e-width.bind:cwidth;\" type=\"text\"  />\r\n\n          ${ElementEnum[fieldValues[posFieldElementId]]}\n          <!--[fieldValues[posFieldListId]]-->\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</template>\r\n"; });
define('views/navigation/drawer.html!text', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <require from=\"./drawer.css\"></require>\r\n\r\n  <div class=\"content-container-fluid\" style=\"overflow: hidden\">\r\n    <div class=\"row\">\r\n      <div id=\"targetPane\" class=\"cols-sample-area\" style=\"padding: 0px; overflow: hidden; margin: 0px; min-height: 451px;height:500px;position:relative;\">\r\n        <div>\r\n          <div>\r\n            <div id=\"container\">\r\n              <div class=\"e-lv\">\r\n                <div class=\"e-header\">\r\n                  <div id=\"butdrawer\"\r\n                       class=\"drawericon e-icon\">\r\n                  </div>\r\n                  <h2>\r\n                    <a route-href=\"route: practice;\"> Simple Form </a>\r\n                  </h2>\r\n                </div>\r\n              </div>\r\n              <!--Home page Content-->\r\n              <div id=\"home\" class=\"subpage\">\r\n                <p>\r\n                  The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) and Britain, is a sovereign state located off the north-western coast of continental Europe. The country includes the island of Great Britain, the north-eastern part of the island of Ireland and many smaller islands. Northern Ireland is the only part of the UK that shares a land border with another state—the Republic of Ireland. Apart from this land border, the UK is surrounded by the Atlantic Ocean in the west and north, the North Sea in the east, the English Channel in the south and the Irish Sea in the west.\r\n                </p>\r\n              </div>\r\n              <!--People page Content-->\r\n              <div id=\"people\" class=\"subpage\">\r\n                <table cellpadding=\"5px\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"peopleimage Agatha_ie8\">\r\n                        </div>\r\n                        <span>Agatha Jessie</span>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"peopleimage Andrew_ie8\">\r\n                        </div>\r\n                        <span>Andrew Philip</span>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"peopleimage Lilly_ie8\">\r\n                        </div>\r\n                        <span>Lilly Thomas</span>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"peopleimage Jaden_ie8\">\r\n                        </div>\r\n                        <span>Jaden Storm</span>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"peopleimage Angel_ie8\">\r\n                        </div>\r\n                        <span>Angel Christie</span>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"peopleimage Joe_ie8\">\r\n                        </div>\r\n                        <span>Joe Michael</span>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"peopleimage Marie_ie8\">\r\n                        </div>\r\n                        <span>Marie Luke</span>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"peopleimage Mage_ie8\">\r\n                        </div>\r\n                        <span>Magen Mia</span>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!--Profile page Content-->\r\n              <div id=\"profile\" class=\"subpage\">\r\n                <table>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\" class=\"profileimage\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <h2>\r\n                          Andrew Philip\r\n                        </h2>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n                <br />\r\n                <span style=\"font-weight: bold\">Profile</span><br>\r\n                <p>\r\n                  Born on December 25, 1954, in Spokane, Washington. Philip graduated from Texas University in 1978. He started his career as a teacher.\r\n                  Later he started business with his friend Paul. They both spent more time together working on business. They earned enough money and spent that for poor and social welfares. Later they together started an organization for children welfare.\r\n                </p>\r\n              </div>\r\n              <!--Photos page Content-->\r\n              <div id=\"photos\" class=\"subpage\">\r\n                <table>\r\n                  <tbody>\r\n                    <tr>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\"\r\n                             class=\"photoimage photoimage1_ie8\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\"\r\n                             class=\"photoimage photoimage2_ie8\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\"\r\n                             class=\"photoimage photoimage3_ie8\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\"\r\n                             class=\"photoimage photoimage4_ie8\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\"\r\n                             class=\"photoimage photoimage5_ie8\">\r\n                        </div>\r\n                      </td>\r\n                      <td>\r\n                        <div style=\"background-image: url('images/person.png')\"\r\n                             class=\"photoimage photoimage6_ie8\">\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                </table>\r\n              </div>\r\n              <!--Communities page Content-->\r\n              <div id=\"communities\" class=\"subpage\">\r\n                <h2>\r\n                  Product Breadth\r\n                </h2>\r\n                <p>\r\n                  UI, reporting and business intelligence on any .NET platform, all from one vendor.\r\n                </p>\r\n                <h2>\r\n                  No-Hassle Licensing\r\n                </h2>\r\n                <p>\r\n                  No royalties, run-time, or server-deployment fees means no surprises.\r\n                </p>\r\n                <h2>\r\n                  Uncompromising Quality\r\n                </h2>\r\n                <p>\r\n                  An almost brutal QA process makes our products truly enterprise-quality.\r\n                </p>\r\n                <h2>\r\n                  Outstanding Support\r\n                </h2>\r\n                <p>\r\n                  Our team is in-house, accessible, and fast. The online forum, knowledge base, and\r\n                  Direct-Trac support system provide 24/7 access.\r\n                </p>\r\n              </div>\r\n              <!--Location page Content-->\r\n              <div id=\"location\" class=\"subpage\">\r\n                <div style=\"background-image: url('images/person.png')\"\r\n                     class=\"locationimage\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Navigation Drawer Control-->\r\n            <div id=\"content_container\">rtwertwertwer</div>\r\n\r\n          </div>\r\n        </div>\r\n        <ej-navigation-drawer id=\"navpane\" e-target-id=\"butdrawer\" e-content-id=\"content_container\" e-type=\"overlay\" e-direction=\"left\" e-enable-list-view=\"true\" e-list-view-settings.bind=\"listViewSettings\" e-position=\"normal\" click.delegate=\"headChange($event)\">\r\n          <ul>\r\n            <li data-ej-imageurl=\"images/person.png\" data-ej-text=\"Home\" data-ej-href=\"#home\"\r\n                id=\"navhome\"></li>\r\n            <li data-ej-imageurl=\"images/person.png\" data-ej-text=\"People\" data-ej-href=\"#people\"\r\n                id=\"navpeople\"></li>\r\n                <!--go-to-route=\"route: simple-grid\"-->\r\n            <li data-ej-imageurl=\"images/person.png\" data-ej-text=\"Simple Grid\" data-ej-href=\"#profile\"\r\n                id=\"navprofile\"></li>\r\n            <li data-ej-imageurl=\"images/person.png\" data-ej-text=\"Photos\" data-ej-href=\"#photos\"\r\n                id=\"navphotos\"></li>\r\n            <li data-ej-imageurl=\"images/person.png\" data-ej-text=\"Communities\" data-ej-href=\"#communities\"\r\n                id=\"navcommunities\"></li>\r\n            <li data-ej-imageurl=\"images/person.png\" data-ej-text=\"Location\" data-ej-href=\"#location\"\r\n                id=\"navlocation\"></li>\r\n          </ul>\r\n        </ej-navigation-drawer>\r\n      \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</template>\r\n"; });
define('views/navigation/list-box.html!text', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"./list-box.css\"></require>\r\n\r\n  <div class=\"content-container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"cols-sample-area\">\r\n        <div class=\"listbox frame\">\r\n          <ul id=\"selectcar\" ej-list-box=\"e-height:'100%;'\">\r\n            <li go-to-route=\"route:simple-form;\" >Simple Form</li>\r\n            <li go-to-route=\"route:simple-grid;\">Grid</li>\r\n            <li go-to-route=\"route:drawer;\">Drawer</li>\r\n            <li go-to-route=\"route:iq-portal;\">IQ Portal</li>\r\n            <li go-to-route=\"route:generatedControlsFirstForm;\">Generated Controls</li>\r\n            <li go-to-route=\"route:dropdown;\">Dropdown</li>\r\n            <li go-to-route=\"route:orders;\">orders</li>\r\n            <li go-to-route=\"route:customers;\">customers</li>\r\n            <li go-to-route=\"route:employees;\">employees</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\n"; });
define('views/orders/order-details.html!text', ['module'], function(module) { module.exports = "<template>\n  <!-- header -->\n  <div class=\"row\">\n    <h4 class=\"left\">Items</h4>\n    <button type=\"button\" click.delegate=\"addDetail()\" class=\"right waves-effect waves-light btn header-button\">\n      Add\n    </button>\n  </div>\n\n  <!-- grid -->\n  <table class=\"bordered hoverable table-responsive\">\n    <thead>\n      <tr>\n        <th></th>\n        <th>Product</th>\n        <th>Unit Price</th>\n        <th>Quantity</th>\n        <th>Discount</th>\n        <th>Total</th>\n      </tr>\n    </thead>\n    <tbody class=\"cursor-pointer\">\n      <tr repeat.for=\"detail of order.OrderDetails\" click.delegate=\"$parent.editDetail(detail)\">\n        <td click.delegate=\"$parent.removeDetail(detail)\">\n          <i class=\"mdi-navigation-close red-text darken-4\" />\n        </td>\n        <td>${$parent.productsIndex[detail.ProductID].ProductName}</td>\n        <td>${detail.UnitPrice | numberFormat:'$0,0.00'}</td>\n        <td>${detail.Quantity | numberFormat:'0,0'}</td>\n        <td>${detail.Discount | numberFormat:'0%'}</td>\n        <td>${detail.Quantity * detail.UnitPrice * (1 - detail.Discount) | numberFormat:'$0,0.00'}</td>\n      </tr>\n    </tbody>\n    <tfoot>\n      <tr>\n        <td colspan=\"4\"></td>\n        <td><strong class=\"right-align\">Subtotal:</strong></td>\n        <td>${detailTotal | numberFormat:'$0,0.00'}</td>\n      </tr>\n      <tr>\n        <td colspan=\"4\"></td>\n        <td><strong class=\"right-align\">Freight:</strong></td>\n        <td>${order.Freight | numberFormat:'$0,0.00'}</td>\n      </tr>\n      <tr>\n        <td colspan=\"4\"></td>\n        <td><strong class=\"right-align\">Total:</strong></td>\n        <td><strong>${detailTotal + order.Freight | numberFormat:'$0,0.00'}</strong></td>\n      </tr>\n    <tfoot>\n  </table>\n\n  <!-- modal -->\n  <div id=\"detail\" class=\"modal\">\n    <div class=\"modal-content\">\n      <h4>Order Detail</h4>\n      <div class=\"row\">\n        <div class=\"input-field col s8\">\n          <select value.bind=\"detail.ProductID\" id=\"Product\" materialize=\"select\">\n            <option model.bind=\"0\">Select a product</option>\n            <option repeat.for=\"product of products\" model.bind=\"product.ProductID\">${product.ProductName}</option>\n          </select>\n          <label for=\"Product\">Product</label>\n        </div>\n        <div class=\"col s4\">\n          <br/>\n          Unit Price: ${detail.UnitPrice | numberFormat:'$0,0.00'}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s4\">\n          <input id=\"Quantity\" type=\"number\" value.bind=\"detail.Quantity\">\n          <label for=\"Quantity\" class=\"active\">Quantity</label>\n        </div>\n        <div class=\"input-field col s4\">\n          <input id=\"Discount\" type=\"number\" value.bind=\"detail.Discount | discount\">\n          <label for=\"Discount\" class=\"active\">Discount %</label>\n        </div>\n        <div class=\"col s4\">\n          <br/>\n          Total: ${detail.Quantity * detail.UnitPrice * (1 - detail.Discount) | numberFormat:'$0,0.00'}\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <a href=\"#\" click.delegate=\"closeDetail\" class=\"modal-action modal-close waves-effect waves-green btn-flat\">OK</a>\n    </div>\n  </div>\n</template>\n"; });
define('views/orders/order-list.html!text', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\n\n    <h3 class=\"left\">Orders</h3>\n    <a href=\"#orders/new\" class=\"waves-effect waves-light btn right header-button\">New</a>\n\n    <table class=\"bordered hoverable table-responsive\">\n      <thead>\n        <tr>\n          <th>Order #</th>\n          <th>Date</th>\n          <th>Freight</th>\n          <th>Customer</th>\n          <th>Employee</th>\n        </tr>\n      </thead>\n      <tbody class=\"cursor-pointer\">\n        <tr repeat.for=\"entity of entities\" click.delegate=\"$parent.open(entity.OrderID)\">\n          <td>${entity.OrderID}</td>\n          <td>${entity.OrderDate | dateFormat:'M/D/YYYY'}</td>\n          <td>${entity.Freight | numberFormat:'$0,0.00'}</td>\n          <td>${entity.Customer_CompanyName}</td>\n          <td>${entity.Employee_FirstName + ' ' + entity.Employee_LastName}</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div class=\"progress\" show.bind=\"isLoading\">\n      <div class=\"indeterminate\"></div>\n    </div>\n\n    <pager page-count.bind=\"pageCount\"\n           page-index.bind=\"pageIndex\"\n           set-page.call=\"setPage($event)\">\n    </pager>\n\n  </div>\n</template>\n"; });
define('views/orders/order.html!text', ['module'], function(module) { module.exports = "<template>\n  <div class=\"container\">\n    <form submit.delegate=\"save()\" novalidate>\n      <!-- header -->\n      <compose view=\"../entity-header.html\"></compose>\n\n      <!-- order fields -->\n      <div class=\"row\">\n        <div class=\"input-field col s12 m6\">\n          <select value.bind=\"entity.CustomerID\" materialize=\"select\">\n            <option value=\"\">Select a customer</option>\n            <option repeat.for=\"customer of customers\" value.bind=\"customer.CustomerID\">${customer.CompanyName}</option>\n          </select>\n          <label for=\"Customer\">Customer</label>\n        </div>\n        <div class=\"input-field col s12 m3\">\n          <input id=\"OrderDate\" type=\"text\" materialize=\"datepicker\" value.bind=\"entity.OrderDate | dateFormat:'M/D/YYYY'\">\n          <label for=\"OrderDate\" materialize>Order Date</label>\n        </div>\n        <div class=\"input-field col s12 m3\">\n          <input id=\"ShippedDate\" type=\"text\" materialize=\"datepicker\" value.bind=\"entity.ShippedDate | dateFormat:'M/D/YYYY'\">\n          <label for=\"ShippedDate\" materialize>Shipped Date</label>\n        </div>\n      </div>\n\n      <!-- order shipping fields -->\n      <div class=\"row\">\n        <h4>Shipping</h4>\n        <div class=\"input-field col s12 m5\">\n          <input id=\"ShipName\" type=\"text\" value.bind=\"entity.ShipName\">\n          <label for=\"ShipName\" materialize>Name</label>\n        </div>\n        <div class=\"input-field col s12 m5\">\n          <input id=\"ShipCountry\" type=\"text\" value.bind=\"entity.ShipCountry\">\n          <label for=\"ShipCountry\" materialize>Country</label>\n        </div>\n        <div class=\"input-field col s12 m2\">\n          <input id=\"Freight\" type=\"number\" value.bind=\"entity.Freight\">\n          <label for=\"Freight\" materialize>Freight $</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"input-field col s12 m4\">\n          <input id=\"ShipAddress\" type=\"text\" value.bind=\"entity.ShipAddress\">\n          <label for=\"ShipAddress\" materialize>Address</label>\n        </div>\n        <div class=\"input-field col s12 m4\">\n          <input id=\"ShipCity\" type=\"text\" value.bind=\"entity.ShipCity\">\n          <label for=\"ShipCity\" materialize>City</label>\n        </div>\n        <div class=\"input-field col s12 m2\">\n          <input id=\"ShipRegion\" type=\"text\" value.bind=\"entity.ShipRegion\">\n          <label for=\"ShipRegion\" materialize>Region</label>\n        </div>\n        <div class=\"input-field col s12 m2\">\n          <input id=\"ShipPostalCode\" type=\"tel\" value.bind=\"entity.ShipPostalCode\">\n          <label for=\"ShipPostalCode\" materialize>Postal Code</label>\n        </div>\n      </div>\n\n      <!-- order details grid -->\n      <compose model.bind=\"entity\" view-model=\"orders/order-details\"></compose>\n    </form>\n  </div>\n</template>\n"; });
define('views/orders/orders-section.html!text', ['module'], function(module) { module.exports = "<template>\n  <router-view></router-view>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map