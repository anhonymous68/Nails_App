angular.module('homePageModule',[]).factory('myFactory',
    function($http)
    {
        var method =
            {
                getCustomer: function(userId)
                {
                    return $http.get('/api/customer', userId);
                },

                updateCustomer: function(userId)
                {
                    return $https.put('/api/customer', userId);
                },

                createCustomer: function()
                {
                    return $https.post('/api/customer');
                },

                deleteCustomer: function(userId)
                {
                    return $https.delete('/api/customer', userId);
                }

            };

        return method;
    });