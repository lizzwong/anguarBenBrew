myApp.service('IngredientService', ['$http', '$location', function ($http, $location) {
    console.log('UserService Loaded');
    var self = this;
    self.userObject = {};

    self.ingredient = {
        type = '',
        name = '',
        variety = '',
        aa = '',

    }

}]);