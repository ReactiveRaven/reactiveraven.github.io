function IndexCtrl($scope, Post, TimeHelper) {
  $scope.posts = Post.query();
  
  $scope.isPostPublished = TimeHelper.isPublished;
  
}
IndexCtrl.$inject = ['$scope', 'Post', 'TimeHelper'];


function PostCtrl($scope, $routeParams, $http, Post, Author) {
  $scope.posts = Post.query({},function (data) {
    var i = null;
    for (i in data) {
      if (data[i].id === $routeParams.id) {
        $scope.post = data[i];
      }
    }
    
    disqus_identifier = "post-" + $scope.post.id;
    disqus_title = $scope.post.title;
    
    if ($scope.post.author === undefined) {
      $scope.post.author = "reactiveraven";
    }
    
    $scope.author = Author.get({id: $scope.post.author}, function (data) {
      if (data.accounts.coderwall) {
        $http.jsonp("https://coderwall.com/" + data.accounts.coderwall + ".json?callback=JSON_CALLBACK").success(function (data) {
          $scope.coderwall = data.data;
        });
      }
    });
  });
  
  //$scope.post = Post.get({id: $routeParams.id});
  $http.get("/json/posts/" + $routeParams.id + ".md").success(function (data) {
    $scope.body = data;
  });
}
PostCtrl.$inject = ['$scope', '$routeParams', '$http', 'Post', 'Author'];

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
