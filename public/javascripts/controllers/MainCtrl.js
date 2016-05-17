// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', []).controller('MainController', function($scope) {

    $scope.tagline = 'To the moon and back!';   
    $scope.menuopen = false;
    $scope.search = "";
    $scope.doMenu = function(){
        if($scope.menuopen){
              $(".mobileDropMenu").slideUp( "slow", function() {
                 $scope.menuopen = false;
         });
        }else{
              $(".mobileDropMenu").slideDown( "slow", function() {
                $scope.menuopen = true;
         });
        }
     
    }
    $scope.menuClicked = function(){
       window.scrollTo(0, 0);
       $(".mobileDropMenu").slideUp( "slow", function() {
                 $scope.menuopen = false;
                
       });
    }
    $scope.doSearch = function(){     
        var searchStr = "https://www.google.com/search?q=" + $scope.search +"+site:nilogen.com";
        window.open(searchStr);
        //cancer site:webmd.com
        
    }
});