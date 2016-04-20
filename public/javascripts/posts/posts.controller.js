app.controller('PostsController', ['$scope', '$stateParams', 'Posts',

	function($scope, $stateParams, Posts) {

		Posts.get($stateParams.id).then(function(response) {
			$scope.post = response;
		});
		

		$scope.addComment = function() {
			if($scope.body === '') { return; }
			Posts.addComment($scope.post._id, {
				body: $scope.body,
				author: 'user',
			}).success(function(comment) {
				$scope.post.comments.push(comment);
			});
			$scope.body = '';
		};

		$scope.incrementUpvotes = function(comment) {
			Posts.upvoteComment($scope.post, comment);
		};
	}
]);