var validationApp = angular.module('validationApp', []);

(function() {
    function UsernameModalCtrl ($uibModalInstance, $cookies) {
        this.submitForm = function(isValid) {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        };
        
    };

    angular
        .module('blocChat')
        .controller('UsernameModalCtrl', ['$uibModalInstance','$cookies', UsernameModalCtrl]);
})();
