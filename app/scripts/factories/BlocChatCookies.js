(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    
      if (!currentUser || currentUser === '') {
        $uibModal.open({
            templateUrl: '/templates/usernameModal.html',
            controller: 'UsernameModalCtrl',
            controllerAs: 'usernameModal',
            size: 'sm'
        });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();