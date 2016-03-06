(function() {
    'use strict';

    angular
		.module('fancychat.inputcontroller', [])
	    .controller('ChatInput', sendmessage);

	sendmessage.$inject = ["$scope", "$rootScope", 'dataservice', '$sce'];

	function sendmessage($scope, $rootScope, dataservice, $sce) {
		var vm = this;
	    $rootScope.messages = [];
	    activate(); /*to get players*/

        function activate() {
	        return dataservice.getUsers()
	            .then(function(data) {
	                vm.players = data;
	                return vm.players;
	            });
	    }
	    $scope.send = function (message, author, avatar) {
	    	message = message.replace(/\n/g, "<br />");
	    	message = to_trusted(message);
	    	$rootScope.messages.push({text:message,player:author,avatar:avatar});
	    	vm.text = "";
	    }
	    /*make safe html message*/
	    function to_trusted(message){
	    	return $sce.trustAsHtml(message);
	    }
	}

})();