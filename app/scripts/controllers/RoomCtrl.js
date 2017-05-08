(function() {
    function RoomCtrl(Room) {
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['home', 'Room', RoomCtrl]);
})();
