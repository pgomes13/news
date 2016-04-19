app.controller('HomeController', ['$scope', 'Posts',
	function($scope, Posts) {

		Posts.getAll();
		$scope.posts = Posts.posts;

		$scope.addPost = function(){
			if(!$scope.title || $scope.title === '') { return; }
			Posts.create({
				title: $scope.title,
				link: $scope.link,
			});
			$scope.title = '';
			$scope.link = '';
		};

		$scope.incrementUpvotes = function(post) {
  			Posts.upvote(post);
		};
	}
]);