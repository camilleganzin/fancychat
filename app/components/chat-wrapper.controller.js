(function() {
    'use strict';

    angular
		.module('fancychat.wrappercontroller', [])
	    .controller('ChatWrapper', chatWrapped);

	  chatWrapped.$inject = ['dataservice'];

	function chatWrapped(dataservice) {
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