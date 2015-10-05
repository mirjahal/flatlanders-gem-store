(function() {
    var app = angular.module('store-directives', []);
    
    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/product-description.html'
        };
    });
    
    app.directive('productSpecs', function() {
        return {
            restrict: 'A',
            templateUrl: 'views/product-specs.html'
        };
    });
    
    app.directive('productReviews', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/product-reviews.html'
        };
    });
    
    app.directive('productTabs', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/product-tabs.html',
            controller: function() {
                this.tab = 1;
                    
                this.setTab = function(tab) {
                    this.tab = tab;
                };
                    
                this.isSet = function(selectedTab) {
                    return this.tab === selectedTab;
                };
            },
            controllerAs: 'tab'
        };
    });
    
    app.directive('productGallery', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/product-gallery.html',
            controller: function() {
                this.current = 0;
                    
                this.setCurrent = function(current) {
                    this.current = (!current) ? 0 : current;
                };
            },
            controllerAs: 'gallery'
        };
    });
})();
