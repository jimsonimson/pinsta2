"use strict";
namespace app.Controllers{
  export class InstagramController {
    public igFeed = {};
    public igResult;

    public getIgUser(){
      this.InstagramService.getIg().then((res) => {
        this.igResult = res;
      })
    };

    constructor(
      private InstagramService: app.Services.InstagramService,
      private $location: ng.ILocationService,
      private $routeParams: ng.route.IRouteParamsService
    ){}
  }
  angular.module('app').controller('InstagramController', InstagramController);
};
