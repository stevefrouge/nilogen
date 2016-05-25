angular.module('ContactCtrl', ['vcRecaptcha']).controller('ContactController', function(vcRecaptchaService, $scope, $http) {
    
    
     $scope.response = null;
     $scope.widgetId = null;
     $scope.model = {
                    key: '6Ley4yATAAAAAGJxuFAoltN-AIQQQhPgukh1CcxZ'
                };
    
     $scope.setResponse = function (response) {
                    console.info('Response available');
                    $scope.response = response;
                    $scope.disabledsubmit = false;
     };
     $scope.setWidgetId = function (widgetId) {
                    console.info('Created widget ID: %s', widgetId);
                    $scope.widgetId = widgetId;
     };
     $scope.cbExpiration = function() {
                    console.info('Captcha expired. Resetting response object');
                    vcRecaptchaService.reload($scope.widgetId);
                    $scope.response = null;
                    $scope.disabledsubmit = true;
     };
    
    $scope.tagline = 'Nothing beats a pocket protector!';

    $scope.contactform = new Object;

    $scope.contactform.name = null;
    $scope.contactform.email = null;
    $scope.contactform.phone = null;
    $scope.contactform.comments = null;
    $scope.nameinvalid = false;
    $scope.emailinvalid = false;
    $scope.disabledsubmit = true;
    
    
    $scope.contactClicked = function(){
         
        // var valid;
       // console.log('sending the captcha response to the server', $scope.response);
        
        // if($scope.response == null){
       //      valid = false;
             
       //  }else{
       //      valid = true;
       //  }
        
        
        // if (valid) {
         //               console.log('Success');
        // } else {
        //   console.log('Failed validation');
                        // In case of a failed validation you need to reload the captcha
                        // because each response can be checked just once
              
       // }
                    
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
        
        }else{
              $scope.response =null;
              vcRecaptchaService.reload($scope.widgetId);
              $scope.disabledsubmit = true;
        };
           
    }
    $scope.resetFields =function (){
          $scope.contactform.name = null;
          $scope.contactform.email = null;
          $scope.contactform.phone = null;
          $scope.contactform.comments = null;
          $scope.response =null;
          vcRecaptchaService.reload($scope.widgetId);
          $scope.disabledsubmit = true;
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