'use strict';

angular.module('app').controller('topicCtrl', function ($scope, topicStorage) {

    $scope.topicStorage = topicStorage;

    $scope.$watch('topicStorage.data', function() {
        $scope.topicList = $scope.topicStorage.data;
    });

    $scope.topicStorage.findAll(function(data){
        $scope.topicList = data;
        $scope.$apply();
    });

    $scope.add = function() {
        topicStorage.add($scope.newContent);
        $scope.newContent = '';
    }

    $scope.remove = function(topic) {
        topicStorage.remove(topic);
    }

    $scope.removeAll = function() {
        topicStorage.removeAll();
    }

    $scope.toggleCompleted = function() {
        topicStorage.sync();
    }

});