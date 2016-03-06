angular
    .module('fancychat.wrapperdirective', [])
    .directive('chatwrapper', initwrapper);

function initwrapper() {
    var directive = {
        restrict: 'E',
        templateUrl: '/templates/chat_wrapper.html',
        scope: {
        },
        controller: 'ChatWrapper',
        controllerAs: 'vm'
    };

    return directive;
}