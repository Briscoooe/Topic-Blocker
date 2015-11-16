angular.module('app').service('topicStorage', function ($q) {
    var _this = this;
    this.data = [];

    this.findAll = function(callback) {
        chrome.storage.sync.get('topic', function(keys) {
            if (keys.topic != null) {
                _this.data = keys.topic;
                for (var i=0; i<_this.data.length; i++) {
                    _this.data[i]['id'] = i + 1;
                }
                console.log(_this.data);
                callback(_this.data);
            }
        });
    }

    this.sync = function() {
        chrome.storage.sync.set({topic: this.data}, function() {
            console.log('Data is stored in Chrome storage');
        });
    }

    this.add = function (newContent) {
        var id = this.data.length + 1;
        var topic = {
            id: id,
            content: newContent,
            completed: false,
            createdAt: new Date()
        };
        this.data.push(topic);
        this.sync();
    }

    this.remove = function(topic) {
        this.data.splice(this.data.indexOf(topic), 1);
        this.sync();
    }

    this.removeAll = function() {
        this.data = [];
        this.sync();
    }

});