import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css!';

import routeConfig from './routes/ui-router';
import controller from './controllers/controller1';
import controller2 from './controllers/controller2';

import ItemServices from "./services/itemsServices";

var app = angular.module('myModule', ['ui.router', 'ngMaterial']);

app.config(routeConfig);

app.controller('Controller', controller);
app.controller('Controller2', controller2);

app.service('ItemServices', ItemServices);

app.constant('config', {
	baseApiUrl: 'http://www.omdbapi.com/?'
});

