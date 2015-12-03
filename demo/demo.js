angular.module('demo', ['ht.tables']).controller('DemoCtrl', function ($scope, $q, $timeout) {
    var expand = {id: 1, name: "a11", age: 34};

    var defer = $q.defer();
    $scope.data = [];
    defer.promise.then(function(result) {
        angular.copy(result, $scope.data);
    });

    $timeout(function() {
        defer.resolve([
            {id: 1, name: "Moroni", age: 50, a: {b: 'a'}},
            {id: 1, name: "Moróni", age: 43, a: {b: 'b'}},
            {id: 1, name: "Jacob", age: 27},
            {id: 1, name: "Nephi", age: 29},
            {id: 1, name: "Enos", age: 34},
            {id: 1, name: "Tiancum", age: 43},
            {id: 1, name: "Jacob", age: 27},
            {id: 1, name: "Nephi", age: 29},
            {id: 1, name: "Enos", age: 33},
            {id: 1, name: "Tiancum", age: 43},
            {id: 1, name: "Jacob", age: 27},
            {id: 1, name: "Nephi", age: 29},
            {id: 1, name: "Enos", age: 34},
            {id: 1, name: "Tiancum", age: 43},
            {id: 1, name: "Jacob", age: 27},
            {id: 1, name: "Nephi", age: 29},
            {id: 1, name: "a2", age: 34},
            expand,
            {id: 1, name: "a23", age: 34}
        ]);
    }, 1000);


        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve(expand);
        }, 1000);

    /**
     * pobranie nowych danych
     */
    var deferred2 = $q.defer();

    $scope.settings = {
        id: 'table-id',
        fields: [
            {
                name: 'imię',
                field: 'name',
                visible: false
            },
            {
                name: 'wiek',
                field: 'age',
                type: 'sum'
            },
            {
                name: 'a',
                field: 'a.b'
            },
            {
                name: 'Template',
                type: 'template',
                value: function(element) {return element.name + '!';},
                templateUrl: 'template.html'
            }
        ],
        filters: [],
        selectFilters: [
            {
                name: "W wieku",
                options: [
                    {name: "50 lat", field: "age", value: 50, type: "filter"},
                    {name: "34 lat", field: "age", value: 34, type: "filter"}
                ]
            }
        ],
        sorting: [
            {field: 'age', sort: 'desc'}
        ],
        expanded: deferred.promise,
        expand: true,
        comparator: function(object1, object2) {return true;},
        activeStyle: 'active',
        showFilters: true,
        selectMultiple: true
    };
});
angular.module('demo').run(function($templateCache) {
    $templateCache.put("template.html","<div>{{ row.name }}!</div>");
});
