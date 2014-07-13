angular.module('starter.controllers', ['google-maps'])

.controller('DashCtrl', function($scope) {
  $scope.map = {
      center: {
          latitude: 45,
          longitude: -73
      },
     zoom: 8
  };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
