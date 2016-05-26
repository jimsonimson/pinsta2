"use strict";
var app;
(function (app) {
    var Services;
    (function (Services) {
        var InstagramService = (function () {
            function InstagramService($resource) {
                this.$resource = $resource;
            }
            InstagramService.prototype.getIg = function () { };
            ;
            ;
            return InstagramService;
        }());
        Services.InstagramService = InstagramService;
        angular.module('app').service('InstagramService', InstagramService);
    })(Services = app.Services || (app.Services = {}));
})(app || (app = {}));
