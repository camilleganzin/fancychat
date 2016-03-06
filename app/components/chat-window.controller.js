(function() {
    'use strict';

    angular
		.module('fancychat.controller', [])
	    .controller('ChatWindow', chat);

	  chat.$inject = ['dataservice'];

	function chat(dataservice) {
		var vm = this;
		activate(); /*to get players*/

        function activate() {
	        return dataservice.getUsers()
	            .then(function(data) {
	                vm.players = data;
	                return vm.players;
	            });
	    }
	}

})();