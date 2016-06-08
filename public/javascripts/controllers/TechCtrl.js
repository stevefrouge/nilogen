angular.module('TechCtrl', []).controller('TechController', function($scope) {

     $scope.img = '';
     $scope.imgClicked = function(obj){
        
         //alert(obj);
         $scope.img = obj;
         $("#maxtechimg").attr("src", obj);
         $('#myModal').modal('toggle');
     }
});