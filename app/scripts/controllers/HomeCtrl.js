(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        this.rooms = Room.all;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        var currentChatId;
        
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
            currentChatId = room.$id;
            this.messages = Message.getByRoomId(room.$id);
        };
        
        var m_names =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var d = new Date();
        var spl = d.toString().split(' ');
        var mnth = parseInt(m_names.indexOf(spl[1])+1).toString();
        mnth = (mnth.length == 1) ? '0'+mnth : mnth
				//  yyyy       mm      dd       hh:mm:ss 
        var dateStamp = spl[3]+'/'+mnth+'/'+spl[2]+' -  '+spl[4]
        
        this.addMessage = function(message) {
            var newMessage = {
                username: $cookies.get('blocChatCurrentUser'),
                content: this.message,
                sentAt: dateStamp,
                roomId: currentChatId
            };
            
            Message.send(newMessage);
            
        };
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', '$cookies', HomeCtrl]);
})();
