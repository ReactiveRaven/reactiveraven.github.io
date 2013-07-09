function IndexCtrl($scope, Post) {
  $scope.posts = Post.query();
  
  $scope.isPostPublished = function (post) {
    
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    
    return (
      post.published 
      && post.published < now 
      && (
        !post.unpublished 
        || post.unpublished > now
      )
    );
    
  }
  
}
IndexCtrl.$inject = ['$scope', 'Post'];


function PostCtrl($scope, $routeParams, $http, Post) {
  $scope.posts = Post.query({},function (data) {
    var i = null;
    for (i in data) {
      if (data[i].id == $routeParams.id) {
        $scope.post = data[i];
      }
    }
  });
  
  //$scope.post = Post.get({id: $routeParams.id});
  $http.get("/json/posts/" + $routeParams.id + ".md").success(function (data) {
    $scope.body = data;
  });
}
PostCtrl.$inject = ['$scope', '$routeParams', '$http', 'Post'];

function MenuCtrl($scope, Post) {
  $scope.posts = Post.query();
  
  $scope.isPostPublished = function (post) {
    
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    
    return (
      post.published 
      && post.published < now 
      && (
        !post.unpublished 
        || post.unpublished > now
      )
    );
    
  }
}
