"use strict";
namespace app.Controllers{
  export class InstagramController {
    public igFeed = {};

    constructor(
      private InstagramService: app.Services.InstagramService
    ){}
  }
  angular.module('app').controller('InstagramController', InstagramController);
};
