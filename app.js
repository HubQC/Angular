

(function() {
	var app = angular.module('store', [ ]);

	/** Controller ***/

	app.controller('StoreController', function() {
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.setTab = function(TabNo) {
			this.tab = TabNo;
		};

		this.isSelected = function(tabNum){
			return this.tab === tabNum;
		};
	});

	app.controller('ReviewController', function() {
		this.liveReview = {};

	});

	/**** directives ****/

	app.directive('productDescription', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-description.html'
		};
	});

	app.directive('productSpecification', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-specification.html'
		};
	});

	/*** Gem Products **/

	var gems = [
		{
			name: "DiamondA",
			price: 2.95,
			description: 'blabla',
			canPurchase: true,
			soldOut: false,
			images: [
				{
					full:'',
					thumb:''
				}
			],
			reviews: [
				{
					stars: 4,
					author: 'Chen',
					body: 'This is the body of reviews'
				}
			] 
		},

		{
			name: "DiamondB",
			price: 3.95,
			description: 'blabla',
			canPurchase: true,
			soldOut: false 
		},
		
		{
			name: "DiamondC",
			price: 4.95,
			description: 'blabla',
			canPurchase: true,
			soldOut: false 
		},	
	];

})();