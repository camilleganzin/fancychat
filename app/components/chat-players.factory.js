(function() {
    'use strict';

    angular
        .module('fancychat.core', [])
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$q'];

    function dataservice($q) {
        var service = {
            getUsers: getUsers
        };

        return service;

        function getUsers() {
            var players = [
                {name:'Amy',avatar:'/images/amy.jpg',status:'online'},
                {name:'Sheldon',avatar:'/images/sheldon.jpg',status:'online'}
            ];
            return $q.when(players);
        }

    }
})();