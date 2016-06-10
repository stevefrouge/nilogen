angular.module('TechCtrl', []).controller('TechController', function($scope) {

     $scope.img = '';
     $scope.imgClicked = function(obj,text){
        
         //alert(obj);
         $scope.img = obj;
         $("#maxtechimg").attr("src", obj);
         $('#myModal').modal('toggle');
         $('#myModalLabel').html(text);
     }
});