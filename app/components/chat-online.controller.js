(function() {
    'use strict';

    angular
		.module('fancychat.onlinecontroller', [])
	    .controller('ChatOnline', online);

	online.$inject = ['dataservice'];

	function online(dataservice) {
		var vm = this;
		activate(); /*get users*/

        function activate() {
	        return dataservice.getUsers()
	            .then(function(data) {
	                vm.players = data;
	                return vm.players;
	            });
	    }
	}

})();