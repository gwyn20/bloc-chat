var validationApp = angular.module('validationApp', []);

(function() {
    function UsernameModalCtrl ($uibModalInstance, $cookies) {
        this.submitForm = function() {
            if (this.username !== '' && this.username) {
                $cookies.put('blocChatCurrentUser', this.username);
                $uibModalInstance.close();
            }
            
        };
        
    };

    angular
        .module('blocChat')
        .controller('UsernameModalCtrl', ['$uibModalInstance','$cookies', UsernameModalCtrl]);
})();
