angular.module('ContactCtrl', []).controller('ContactController', function($scope, $http) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    $scope.contactform = new Object;

    $scope.contactform.name = null;
    $scope.contactform.email = null;
    $scope.contactform.phone = null;
    $scope.contactform.comments = null;
    $scope.nameinvalid = false;
    $scope.emailinvalid = false;
    $scope.disabledsubmit = false;
    
    
    $scope.contactClicked = function(){
        var data = angular.toJson($scope.contactform, true);       
        
        var isValid =  $scope.validate();
        $scope.disabledsubmit = true;
        if(isValid){
             $http.post('/contact', data).success(function(data) {
                        console.log("posted successfully");
                        $('#myModal').modal('toggle');
                        $scope.resetFields();
                        $scope.disabledsubmit = false;
        }).error(function(data) {
            console.error("error in posting");
        })
        };
        
      
        
    }
    $scope.resetFields =function (){
          $scope.contactform.name = null;
          $scope.contactform.email = null;
          $scope.contactform.phone = null;
          $scope.contactform.comments = null;
    }
    $scope.validate = function(){
        
        var isblank = $scope.isblank;        
        var contactform = $scope.contactform;
        var valid = true;
        if(isblank(contactform.name)){
            valid = false;
            $scope.nameinvalid = true;
        }else{
            $scope.nameinvalid = false;
        }
        if(isblank(contactform.email)){
            $scope.emailinvalid = true;
            valid = false;
        }else{
             $scope.emailinvalid = false;
        }
        
        return valid;
    }
    $scope.isblank = function(str){
        return (!str || /^\s*$/.test(str));
    }
    

});