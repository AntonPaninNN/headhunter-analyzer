var app = angular.module("vacancyApp", []);

app.controller("vacancyController", function ($scope, $http) {

    function requestData(url) {
        $http.get(url).then(
            function (resp) {
                $scope.vacancies = resp.data.items;
                $scope.vacancyCount = resp.data.items.length;
                $scope.dataLoaded = true;
            }, function (resp) {
                console.log('ERROR: ' + resp);
            });
    }

    function prepareUrl(searchText) {
        return 'https://api.hh.ru/vacancies?text=' +
            searchText + '&area=66&only_with_salary=true';
    }

    $scope.calcSalary = function(vacancy) {
        var from = vacancy.salary.from == undefined ? '?' : vacancy.salary.from;
        var to = vacancy.salary.to == undefined ? '?' : vacancy.salary.to;
        return 'from ' + from + ' to ' + to + ' ' + vacancy.salary.currency;
    };

    $scope.getVacancies = function () {
        var url = prepareUrl(escape($scope.searchData.searchText));
        $scope.vacancies = requestData(url);
    };

});
