"use strict";

namespace app.Services{
  export class InstagramService{
    public getIg(){};

    constructor(
      private $resource: ng.resource.IResourceService
    ){

    };
  }
  angular.module('app').service('InstagramService', InstagramService);
}
