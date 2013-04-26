angular.module('rravenServices', ['ngResource']).
  factory(
    'Phone', 
    function($resource){
      return $resource(
        'phones/:phoneId.json', 
        {}, 
        {
          query: {
            method:'GET', 
            params:{
              phoneId:'phones'
            }, 
            isArray:true
          }
        }
      );
    }
  ).
  factory(
    'Post', 
    function($resource){
      return $resource(
        'json/posts/:id.json', 
        {}, 
        {
          query: {
            method:'GET', 
            params:{
              id:'index'
            }, 
            isArray:true
          }
        }
      );
    }
  ).
  filter('fromNow', function() {
    return function(dateString) {
      return moment(new Date(dateString)).fromNow()
    };
  });