"use strict"

import express = require('express');
// let request = require('request');
// import jwt = require('express-jwt');
let mongoose = require('mongoose');
let InstagramAPI = require('instagram-api');

let router = express.Router();


let accessToken = '23612221.3fcb46b.348431486f3a4fb85081d5242db9ca1c';
let instagramAPI = new InstagramAPI(accessToken);
