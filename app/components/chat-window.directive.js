angular
    .module('fancychat.directive', [])
    .directive('windowchat', initchat);

function initchat() {
    var directive = {
        restrict: 'E',
        templateUrl: '/templates/chat-window.html',
        scope: {
            'text':'@',
            'name':'@',
            'avatar':'@',
            'user':'@'
        },
        controller: 'ChatWindow',
        controllerAs: 'vm'
    };

    return directive;
}