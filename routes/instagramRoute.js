"use strict";
var express = require('express');
var request = require('request');
var mongoose = require('mongoose');
var InstagramAPI = require('instagram-api');
var router = express.Router();
var accessToken = '23612221.3fcb46b.348431486f3a4fb85081d5242db9ca1c';
var instagramAPI = new InstagramAPI(accessToken);
