(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.rooms = Room.all;
        
        this.modal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                size: 'sm'
            });
        };
        
        this.currentRoom = function(room) {
            this.currentChatRoom = room.$value;
            this.messages = Message.getByRoomId(room.$id);
        };
    };
    
    

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
