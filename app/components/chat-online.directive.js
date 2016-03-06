angular
    .module('fancychat.onlinedirective', [])
    .directive('online', initonline);

function initonline() {
    var directive = {
        restrict: 'E',
        templateUrl: '/templates/chat_online.html',
        scope: {availables:'@'
        },
        controller: 'ChatOnline',
        controllerAs: 'vm'
    };

    return directive;
}