"use strict";
var app;
(function (app) {
    var Controllers;
    (function (Controllers) {
        var InstagramController = (function () {
            function InstagramController(InstagramService, $location, $routeParams) {
                this.InstagramService = InstagramService;
                this.$location = $location;
                this.$routeParams = $routeParams;
                this.igFeed = {};
            }
            InstagramController.prototype.getIgUser = function () {
                var _this = this;
                this.InstagramService.getIg().then(function (res) {
                    _this.igResult = res;
                });
            };
            ;
            return InstagramController;
        }());
        Controllers.InstagramController = InstagramController;
        angular.module('app').controller('InstagramController', InstagramController);
    })(Controllers = app.Controllers || (app.Controllers = {}));
})(app || (app = {}));
;
