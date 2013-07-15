function IndexCtrl($scope, Post, TimeHelper) {
  $scope.posts = Post.query();
  
  $scope.isPostPublished = TimeHelper.isPublished;
  
}
IndexCtrl.$inject = ['$scope', 'Post', 'TimeHelper'];


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

function AboutCtrl($scope, $routeParams, $http) {
  
  $http.get("/json/about/index.md").success(function (data) {
    $scope.body = data;
  });
}
AboutCtrl.$inject = ['$scope', '$routeParams', '$http'];

function MenuCtrl($scope, Post, TimeHelper) {
  
  $scope.posts = Post.query();
  
  $scope.isPostPublished = TimeHelper.isPublished;
  
}
