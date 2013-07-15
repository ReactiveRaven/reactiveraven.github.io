angular.module('rravenServices', ['ngResource']).
  factory(
    "TimeHelper",
    function () {
      var result = {};
      
      result.isPublished = function (object) {
        var now = moment().format("YYYY-MM-DD HH:mm:ss");
    
        var published = object.published;
        var unpublished = object.unpublished;

        if (window.location.hostname !== "reactiveraven.github.io") {
          published = (object.localPublished ? object.localPublished : published);
          unpublished = (object.localUnpublished ? object.localUnpublished : unpublished);
        }

        return (
          published
          && published < now 
          && (
            !unpublished 
            || unpublished > now
          )
        );
      }
      
      
      return result;
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
  factory(
    'Author', 
    function($resource){
      return $resource(
        'json/authors/:id.json', 
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