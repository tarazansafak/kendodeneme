var phonecatApp = angular.module('denemeApp', ['kendo.directives']);

phonecatApp.controller('DenemeCtrl', function ($scope) {
    $scope.phones = [
      {
          'name': 'Nexus S',
          'snippet': 'Fast just got faster with Nexus S.'
      },
      {
          'name': 'Motorola XOOM™ with Wi-Fi',
          'snippet': 'The Next, Next Generation tablet.'
      },
      {
          'name': 'MOTOROLA XOOM™',
          'snippet': 'The Next, Next Generation tablet.'
      }
    ];

    $scope.thingsOptions = {
        dataSource: {
            data: [{ name: "Thing 1", id: 1 },
                   { name: "Thing 2", id: 2 },
                   { name: "Thing 3", id: 3 }]
        },
        dataTextField: "name",
        dataValueField: "id",
        optionLabel: "Select A Thing"
    };

    $scope.products = new kendo.data.DataSource({
        data: [
           { id: 1, name: 'Tennis Balls', department: 'Sports', lastShipment: '10/01/2013' },
           { id: 2, name: 'Basket Balls', department: 'Sports', lastShipment: '10/02/2013' },
           { id: 3, name: 'Oil', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 4, name: 'Filters', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 5, name: 'Dresser', department: 'Home Furnishings', lastShipment: '10/01/2013' },
           { id: 1, name: 'Tennis Balls', department: 'Sports', lastShipment: '10/01/2013' },
           { id: 2, name: 'Basket Balls', department: 'Sports', lastShipment: '10/02/2013' },
           { id: 3, name: 'Oil', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 4, name: 'Filters', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 5, name: 'Dresser', department: 'Home Furnishings', lastShipment: '10/01/2013' },
           { id: 1, name: 'Tennis Balls', department: 'Sports', lastShipment: '10/01/2013' },
           { id: 2, name: 'Basket Balls', department: 'Sports', lastShipment: '10/02/2013' },
           { id: 3, name: 'Oil', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 4, name: 'Filters', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 5, name: 'Dresser', department: 'Home Furnishings', lastShipment: '10/01/2013' },
           { id: 1, name: 'Tennis Balls', department: 'Sports', lastShipment: '10/01/2013' },
           { id: 2, name: 'Basket Balls', department: 'Sports', lastShipment: '10/02/2013' },
           { id: 3, name: 'Oil', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 4, name: 'Filters', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 5, name: 'Dresser', department: 'Home Furnishings', lastShipment: '10/01/2013' },
           { id: 1, name: 'Tennis Balls', department: 'Sports', lastShipment: '10/01/2013' },
           { id: 2, name: 'Basket Balls', department: 'Sports', lastShipment: '10/02/2013' },
           { id: 3, name: 'Oil', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 4, name: 'Filters', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 5, name: 'Dresser', department: 'Home Furnishings', lastShipment: '10/01/2013' },
           { id: 1, name: 'Tennis Balls', department: 'Sports', lastShipment: '10/01/2013' },
           { id: 2, name: 'Basket Balls', department: 'Sports', lastShipment: '10/02/2013' },
           { id: 3, name: 'Oil', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 4, name: 'Filters', department: 'Auto', lastShipment: '10/01/2013' },
           { id: 5, name: 'Dresser', department: 'Home Furnishings', lastShipment: '10/01/2013' }
        ],
        pageSize: 2
    });

    $scope.window = {
        open: function () {
            $scope.modal.center().open();
        }
    };
});