app.config(['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
  	    url: '/home',
  	    templateUrl: '/partials/home.html',
  	    controller: 'HomeController'
      })

      .state('posts', {
      	url: '/posts/{id}',
      	templateUrl: '/partials/posts.html',
      	controller: 'PostsController'
      });

    $urlRouterProvider.otherwise('home');
  }
]);