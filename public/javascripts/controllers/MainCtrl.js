// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {

    $scope.tagline = 'To the moon and back!';   
    $scope.menuopen = false;

    $scope.doMenu = function(){
        if($scope.menuopen){
              $(".menumobilerow").slideUp( "slow", function() {
                 $scope.menuopen = false;
         });
        }else{
              $(".menumobilerow").slideDown( "slow", function() {
                $scope.menuopen = true;
         });
        }
     
    }
    $scope.menuClicked = function(){
       window.scrollTo(0, 0);
       $(".menumobilerow").slideUp( "slow", function() {
                 $scope.menuopen = false;
                
       });
    }
});