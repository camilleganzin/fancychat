angular
    .module('fancychat.inputdirective', [])
    .directive('chatinput', initinput);

function initinput() {
    var directive = {
        restrict: 'E',
        templateUrl: '/templates/chat_input.html',
        scope: {'authorname':'@',
            'authoravatar':'@'
        },
        controller: 'ChatInput',
        controllerAs: 'vm'
    };

    return directive;
}