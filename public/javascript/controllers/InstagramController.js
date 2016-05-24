"use strict";
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var InstagramController = (function () {
            function InstagramController(InstagramService) {
                this.InstagramService = InstagramService;
                this.igFeed = {};
            }
            return InstagramController;
        }());
        Controllers.InstagramController = InstagramController;
        angular.module('app').controller('InstagramController', InstagramController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
;
