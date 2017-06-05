(function() {
    function UsernameModalCtrl ($uibModalInstance, $cookies) {
        this.setUser = function() {
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        };
        
    };

    angular
        .module('blocChat')
        .controller('UsernameModalCtrl', ['$uibModalInstance','$cookies', UsernameModalCtrl]);
})();
