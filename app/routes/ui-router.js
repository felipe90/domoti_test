'use strict'

import indexTemplate from './index/index.html!text';
import page2template from './page2/page2.html!text';

function applicationRouteConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            template: indexTemplate,
            controller: 'Controller as ctrl'
        })
        .state('detail', {
            url: "/page2",
            template: page2template,
            controller: 'Controller2 as ctrl'
        })
}

applicationRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

export default applicationRouteConfig;