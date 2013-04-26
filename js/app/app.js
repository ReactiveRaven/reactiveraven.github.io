var md = function () {
    marked.setOptions({
        gfm:true,
        pedantic:false,
        sanitize:true,
        // callback for code highlighter
        highlight:function (code, lang) {
            if (lang != undefined)
                return hljs.highlight(lang, code).value;

            return hljs.highlightAuto(code).value;
        }
    });

    var toHtml = function (markdown) {
        if (markdown == undefined)
            return '';

        return marked(markdown);
    };

    hljs.tabReplace = '    ';

    return {
        toHtml:toHtml
    };
}();

angular.module('rraven', ['rravenServices']).
  config(
    [
      '$routeProvider', 
      function($routeProvider) {
        $routeProvider.
        when('/', {
          templateUrl: 'templates/index.html',   
          controller: IndexCtrl
        }).
        when('/posts/:id', {
          templateUrl: 'templates/post.html', 
          controller: PostCtrl
        }).
        when('/about', {
          templateUrl: 'templates/about.html', 
          controller: IndexCtrl
        }).
        otherwise({
          redirectTo: '/'
        });
      }
    ]
  ).directive(
    'activeLink', 
    [
      '$location', 
      function(location) {
        return {
            restrict: 'A',
            link: function(scope, element, attrs, controller) {
                var clazz = attrs.activeLink;
                //var path = attrs.href;
                scope.location = location;
                scope.$watch('location.path()', function(newPath) {
                  
                    var path = attrs.href;
                    if (path) {
                      path = path.substring(1); //hack because path does bot return including hashbang
                    }
                  
                    if (path === newPath) {
                        element.parents("li").first().addClass(clazz);
                    } else {
                        element.parents("li").first().removeClass(clazz);
                    }
                });
            }

        };

      }
    ]
  ).directive(
    'markdown', 
    function() {
      return {
          restrict: 'E',
          link: function(scope, element, attrs) {
              scope.$watch(attrs.ngModel, function(value, oldValue) {
                  var markdown = value;
                  var html = md.toHtml(markdown);
                  element.html(html);
              });
          }
      };
    }
  );