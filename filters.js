let angular;
angular.module('myApp', [])
  .filter('filterByType', function() {
    return function(content, type) {
      if (!type) {
        return content.filter(function(item) {
          return !item.type;
        });
      } else {
        return content.filter(function(item) {
          return item.type === type;
        });
      }
    };
  });
