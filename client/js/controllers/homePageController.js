

angular.module('homePageModule',[]).controller('HomeController', ['$scope', 'myFactory',
    function($scope, myFactory)
    {

        $scope.AddToDataBase = function()
        {
            var newUser = {
                Name : $scope.Name,
                Account_ID: $scope.accountID,
                userName : $scope.userID,
                Password : $scope.password,
                email : $scope.email
            };

            myFactory.Create_Customer(newUser);
        };
    }]
);
