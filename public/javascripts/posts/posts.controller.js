app.controller('PostsController', ['$scope', '$stateParams', 'Posts',

	function($scope, $stateParams, Posts){
		$scope.post = Posts.posts[$stateParams.id];
		$scope.addComment = function(){
			if($scope.body === '') { return; }
			$scope.post.comments.push({
				body: $scope.body,
				author: 'user',
				upvotes: 0
			});
			$scope.body = '';
		};
	}
]);