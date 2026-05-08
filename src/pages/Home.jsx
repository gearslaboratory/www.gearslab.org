import React from 'react';

export default function Home() {
  return (
    <div className="container" style={ padding: '2rem' }>
      <div dangerouslySetInnerHTML={ __html: `<div id="wsite-content" class="wsite-elements wsite-not-footer">
	<div class="wsite-section-wrap">
	<div class="wsite-section wsite-body-section wsite-section-bg-color wsite-background-4 wsite-custom-background" style="background-color: #f8f8f8;background-image: none;is_customized: 1;" >
		<div class="wsite-section-content">
		    <div class="container">
			<div class="wsite-section-elements">
				<h2 class="wsite-content-title" style="text-align:left;"><font size="3">Email</font></h2>

<div class="wsite-spacer" style="height:21px;"></div>

<h2 class="wsite-content-title" style="text-align:center;"><font><font><font size="3">Earth, The Final Frontier...</font></font></font></h2>

<div class="paragraph" style="text-align:center;">The Global Environmental Analysis and Remote Sensing (GEARS) Laboratory, led by Dr. Jonathan A. Greenberg, focuses on addressing questions of the impacts of climate change and land use/land cover change on vegetated ecosystems using remote sensing data. Our research ranges across scales from individual plants to the globe, across many terrestrial and aquatic ecosystems, and utilizes state-of-the-art remote sensing imagery including hyperspectral, hyperspatial, multitemporal, thermal, and LiDAR data, collected from spaceborne, airborne, and terrestrial sensors.&#8203;</div>

<div id="157942202575846167"><div><style type="text/css">
	#element-376a57e2-a61b-4ad8-9b2f-647e0d73775e .border-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
#element-376a57e2-a61b-4ad8-9b2f-647e0d73775e .hide-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
#element-376a57e2-a61b-4ad8-9b2f-647e0d73775e .hide-box .hide-box-content {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

</style><div id="element-376a57e2-a61b-4ad8-9b2f-647e0d73775e" data-platform-element-id="874959678356211109-1.0.1" class="platform-element-contents">
	<div class="hide-box">
    <div class="hide-box-content">
        <div style="width: auto"><div></div><div class="wsite-spacer" style="height:14px;"></div></div>
    </div>
</div>

</div>
<div style="clear:both;"></div><script type="text/javascript" class="element-script">function setupElement157942202575846167() {
	var requireFunc = window.platformElementRequire || window.require;

	// Relies on a global require, specific to platform elements
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		\$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "874959678356211109-1.0.1";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new \$.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return \$.getScript(nextScript);
				});
			}, \$().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
( function() {

    var HideBox,
        resizeTimeout,
        that;

    that = this;
    resizeTimeout = null;

    HideBox = PlatformElement.extend( {

        "update": function() {

            var display,                //  value of CSS "display" to use
                width;

            //  get screen width
            width = \$( window ).width();

            //  determine which "display" value to use
            if ( width < 768 ) {
                display = that.settings.get( "xs" );
            } else if ( width < 992 ) {
                display = that.settings.get( "sm" );
            } else if ( width < 1200 ) {
                display = that.settings.get( "md" );
            } else {
                display = that.settings.get( "lg" );
            }

            //  update value of "display"
            that.\$( ".hide-box" ).css( "display", display );
        },

        "installResizeHandler": function() {

            \$( window ).resize( function() {

                // ignore resize events as long as an actualResizeHandler execution is in the queue
                if ( resizeTimeout === null ) {
                    resizeTimeout = setTimeout( function() {
                        resizeTimeout = null;
                        that.actualResizeHandler();
                    }, 66 );                            //  66ms: the actualResizeHandler will execute at a rate of 15fps
                }
            } );            
        },

        "actualResizeHandler": function() {
            that.update();
        },

        "initialize": function() {

            that = this;

            //  update the element's display
            that.update();

            //  need to resize the element when the window resizes
            that.installResizeHandler();
        }

    } );

    return HideBox;
}() );
;

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					// we still want to call the initialize function defined by the developer
					// however, we don't want to call it until placeholders have been replaced
					this.placeholderInterval = setInterval(function() {
						// so use setInterval to check for placeholders.
						if (this.\$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings({"xs":"block","sm":"block","md":"block","lg":"block"});
			_Element.prototype.settings.page_element_id = "157942202575846167";

			_Element.prototype.element_id = "376a57e2-a61b-4ad8-9b2f-647e0d73775e";
			_Element.prototype.user_id = "130848673";
			_Element.prototype.site_id = "566621870380770122";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-874959678356211109-1.0.1/assets/";
			new _Element({
				el: '#element-376a57e2-a61b-4ad8-9b2f-647e0d73775e'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement157942202575846167();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement157942202575846167, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement157942202575846167();
		}
	});
}

</script></div></div>

<div><div class="wsite-multicol"><div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
	<table class="wsite-multicol-table">
		<tbody class="wsite-multicol-tbody">
			<tr class="wsite-multicol-tr">
				<td class="wsite-multicol-col" style="width:33.333333333333%; padding:0 15px;">
					
						

<div><div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:0px;margin-left:0px;margin-right:0px;text-align:center">
<a>
<img src="uploads/1/3/0/8/130848673/editor/plantclimate.png%3F1581890210" alt="Picture" style="width:auto;max-width:100%" />
</a>
<div style="display:block;font-size:90%"></div>
</div></div>

<div id="207699818861432177"><div><style type="text/css">
	#element-25a16f63-115c-4299-a09b-4dd395c546a1 .colored-box-content {
  clear: both;
  float: left;
  width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  -webkit-border-top-left-radius: 0px;
  -moz-border-top-left-radius: 0px;
  border-top-left-radius: 0px;
  -webkit-border-top-right-radius: 0px;
  -moz-border-top-right-radius: 0px;
  border-top-right-radius: 0px;
  -webkit-border-bottom-left-radius: 0px;
  -moz-border-bottom-left-radius: 0px;
  border-bottom-left-radius: 0px;
  -webkit-border-bottom-right-radius: 0px;
  -moz-border-bottom-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

</style><div id="element-25a16f63-115c-4299-a09b-4dd395c546a1" data-platform-element-id="848857247979793891-1.0.1" class="platform-element-contents">
	<div class="colored-box">
    <div class="colored-box-content">
        <div style="width: auto"><div></div><h2 class="wsite-content-title" style="text-align:center;"><font size="4">PLANT-CLIMATE INTERACTIONS</font><font size="4">&#8203;<br />&#8203;</font><br /></h2>

<div class="paragraph" style="text-align:center;"><span><span style="color:rgb(0, 0, 0)"><font size="3">We apply remote sensing, GIS, and modeling to answer the following questions: 1)&nbsp;<span><span style="color:rgb(0, 0, 0)"><font size="3">How do plants respond to their climate at multiple scales? 2)&nbsp;<span><span style="color:rgb(0, 0, 0)"><font size="3">What will be the future state of vegetated ecosystems under climate change? 3)&nbsp;<span><span style="color:rgb(0, 0, 0)"><font size="3">How do non-climate factors impact the distribution of plants?</font></span></span></font></span></span></font></span></span></font></span></span></div></div>
    </div>
</div>
</div>
<div style="clear:both;"></div><script type="text/javascript" class="element-script">function setupElement207699818861432177() {
	var requireFunc = window.platformElementRequire || window.require;

	// Relies on a global require, specific to platform elements
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		\$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "848857247979793891-1.0.1";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new \$.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return \$.getScript(nextScript);
				});
			}, \$().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function() {
    var ColoredBox = PlatformElement.extend({

        initialize: function() {
        }

    });

    return ColoredBox;
})();

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					// we still want to call the initialize function defined by the developer
					// however, we don't want to call it until placeholders have been replaced
					this.placeholderInterval = setInterval(function() {
						// so use setInterval to check for placeholders.
						if (this.\$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings({"top_padding_each":[{"top_padding_index":0},{"top_padding_index":1},{"top_padding_index":2},{"top_padding_index":3},{"top_padding_index":4},{"top_padding_index":5},{"top_padding_index":6},{"top_padding_index":7},{"top_padding_index":8},{"top_padding_index":9},{"top_padding_index":10},{"top_padding_index":11},{"top_padding_index":12},{"top_padding_index":13},{"top_padding_index":14},{"top_padding_index":15},{"top_padding_index":16},{"top_padding_index":17},{"top_padding_index":18},{"top_padding_index":19},{"top_padding_index":20},{"top_padding_index":21},{"top_padding_index":22},{"top_padding_index":23},{"top_padding_index":24},{"top_padding_index":25},{"top_padding_index":26},{"top_padding_index":27},{"top_padding_index":28},{"top_padding_index":29}],"bottom_padding_each":[{"bottom_padding_index":0},{"bottom_padding_index":1},{"bottom_padding_index":2},{"bottom_padding_index":3},{"bottom_padding_index":4},{"bottom_padding_index":5},{"bottom_padding_index":6},{"bottom_padding_index":7},{"bottom_padding_index":8},{"bottom_padding_index":9},{"bottom_padding_index":10},{"bottom_padding_index":11},{"bottom_padding_index":12},{"bottom_padding_index":13},{"bottom_padding_index":14},{"bottom_padding_index":15},{"bottom_padding_index":16},{"bottom_padding_index":17},{"bottom_padding_index":18},{"bottom_padding_index":19},{"bottom_padding_index":20},{"bottom_padding_index":21},{"bottom_padding_index":22},{"bottom_padding_index":23},{"bottom_padding_index":24},{"bottom_padding_index":25},{"bottom_padding_index":26},{"bottom_padding_index":27},{"bottom_padding_index":28},{"bottom_padding_index":29},{"bottom_padding_index":30},{"bottom_padding_index":31},{"bottom_padding_index":32},{"bottom_padding_index":33},{"bottom_padding_index":34},{"bottom_padding_index":35},{"bottom_padding_index":36},{"bottom_padding_index":37},{"bottom_padding_index":38},{"bottom_padding_index":39}],"left_padding_each":[{"left_padding_index":0},{"left_padding_index":1},{"left_padding_index":2},{"left_padding_index":3},{"left_padding_index":4},{"left_padding_index":5},{"left_padding_index":6},{"left_padding_index":7},{"left_padding_index":8},{"left_padding_index":9},{"left_padding_index":10},{"left_padding_index":11},{"left_padding_index":12},{"left_padding_index":13},{"left_padding_index":14},{"left_padding_index":15},{"left_padding_index":16},{"left_padding_index":17},{"left_padding_index":18},{"left_padding_index":19},{"left_padding_index":20},{"left_padding_index":21},{"left_padding_index":22},{"left_padding_index":23},{"left_padding_index":24},{"left_padding_index":25},{"left_padding_index":26},{"left_padding_index":27},{"left_padding_index":28},{"left_padding_index":29},{"left_padding_index":30},{"left_padding_index":31},{"left_padding_index":32},{"left_padding_index":33},{"left_padding_index":34},{"left_padding_index":35},{"left_padding_index":36},{"left_padding_index":37},{"left_padding_index":38},{"left_padding_index":39}],"right_padding_each":[{"right_padding_index":0},{"right_padding_index":1},{"right_padding_index":2},{"right_padding_index":3},{"right_padding_index":4},{"right_padding_index":5},{"right_padding_index":6},{"right_padding_index":7},{"right_padding_index":8},{"right_padding_index":9},{"right_padding_index":10},{"right_padding_index":11},{"right_padding_index":12},{"right_padding_index":13},{"right_padding_index":14},{"right_padding_index":15},{"right_padding_index":16},{"right_padding_index":17},{"right_padding_index":18},{"right_padding_index":19},{"right_padding_index":20},{"right_padding_index":21},{"right_padding_index":22},{"right_padding_index":23},{"right_padding_index":24},{"right_padding_index":25},{"right_padding_index":26},{"right_padding_index":27},{"right_padding_index":28},{"right_padding_index":29},{"right_padding_index":30},{"right_padding_index":31},{"right_padding_index":32},{"right_padding_index":33},{"right_padding_index":34},{"right_padding_index":35},{"right_padding_index":36},{"right_padding_index":37},{"right_padding_index":38},{"right_padding_index":39}],"background_color":"#ffffff","opacity":100,"top_left_radius":0,"top_right_radius":0,"bottom_left_radius":0,"bottom_right_radius":0,"top_padding":30,"bottom_padding":40,"left_padding":40,"right_padding":40});
			_Element.prototype.settings.page_element_id = "207699818861432177";

			_Element.prototype.element_id = "25a16f63-115c-4299-a09b-4dd395c546a1";
			_Element.prototype.user_id = "130848673";
			_Element.prototype.site_id = "566621870380770122";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-848857247979793891-1.0.1/assets/";
			new _Element({
				el: '#element-25a16f63-115c-4299-a09b-4dd395c546a1'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement207699818861432177();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement207699818861432177, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement207699818861432177();
		}
	});
}

</script></div></div>


					
				</td>				<td class="wsite-multicol-col" style="width:33.333333333333%; padding:0 15px;">
					
						

<div><div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:0px;margin-left:0px;margin-right:0px;text-align:center">
<a>
<img src="uploads/1/3/0/8/130848673/published/cross-section.jpg%3F1581890183" alt="Picture" style="width:380;max-width:100%" />
</a>
<div style="display:block;font-size:90%"></div>
</div></div>

<div id="193486152716961639"><div><style type="text/css">
	#element-c7574ca3-7c75-4317-b0fd-5ba86df8b5ba .colored-box-content {
  clear: both;
  float: left;
  width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  -webkit-border-top-left-radius: 0px;
  -moz-border-top-left-radius: 0px;
  border-top-left-radius: 0px;
  -webkit-border-top-right-radius: 0px;
  -moz-border-top-right-radius: 0px;
  border-top-right-radius: 0px;
  -webkit-border-bottom-left-radius: 0px;
  -moz-border-bottom-left-radius: 0px;
  border-bottom-left-radius: 0px;
  -webkit-border-bottom-right-radius: 0px;
  -moz-border-bottom-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

</style><div id="element-c7574ca3-7c75-4317-b0fd-5ba86df8b5ba" data-platform-element-id="848857247979793891-1.0.1" class="platform-element-contents">
	<div class="colored-box">
    <div class="colored-box-content">
        <div style="width: auto"><div></div><h2 class="wsite-content-title" style="text-align:center;"><font size="4">Remote Sensing Science<br />&#8203;</font></h2>

<div class="paragraph" style="text-align:center;"><span><span style="color:rgb(0, 0, 0)"><font size="3">We generate novel techniques to extract more accurate and precise products from remote sensing data utilizing LiDAR, hyperspectral, hyperspatial, and hypertemporal datasets.<br /><br />&#8203;</font></span></span><br /></div></div>
    </div>
</div>
</div>
<div style="clear:both;"></div><script type="text/javascript" class="element-script">function setupElement193486152716961639() {
	var requireFunc = window.platformElementRequire || window.require;

	// Relies on a global require, specific to platform elements
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		\$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "848857247979793891-1.0.1";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new \$.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return \$.getScript(nextScript);
				});
			}, \$().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function() {
    var ColoredBox = PlatformElement.extend({

        initialize: function() {
        }

    });

    return ColoredBox;
})();

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					// we still want to call the initialize function defined by the developer
					// however, we don't want to call it until placeholders have been replaced
					this.placeholderInterval = setInterval(function() {
						// so use setInterval to check for placeholders.
						if (this.\$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings({"top_padding_each":[{"top_padding_index":0},{"top_padding_index":1},{"top_padding_index":2},{"top_padding_index":3},{"top_padding_index":4},{"top_padding_index":5},{"top_padding_index":6},{"top_padding_index":7},{"top_padding_index":8},{"top_padding_index":9},{"top_padding_index":10},{"top_padding_index":11},{"top_padding_index":12},{"top_padding_index":13},{"top_padding_index":14},{"top_padding_index":15},{"top_padding_index":16},{"top_padding_index":17},{"top_padding_index":18},{"top_padding_index":19},{"top_padding_index":20},{"top_padding_index":21},{"top_padding_index":22},{"top_padding_index":23},{"top_padding_index":24},{"top_padding_index":25},{"top_padding_index":26},{"top_padding_index":27},{"top_padding_index":28},{"top_padding_index":29}],"bottom_padding_each":[{"bottom_padding_index":0},{"bottom_padding_index":1},{"bottom_padding_index":2},{"bottom_padding_index":3},{"bottom_padding_index":4},{"bottom_padding_index":5},{"bottom_padding_index":6},{"bottom_padding_index":7},{"bottom_padding_index":8},{"bottom_padding_index":9},{"bottom_padding_index":10},{"bottom_padding_index":11},{"bottom_padding_index":12},{"bottom_padding_index":13},{"bottom_padding_index":14},{"bottom_padding_index":15},{"bottom_padding_index":16},{"bottom_padding_index":17},{"bottom_padding_index":18},{"bottom_padding_index":19},{"bottom_padding_index":20},{"bottom_padding_index":21},{"bottom_padding_index":22},{"bottom_padding_index":23},{"bottom_padding_index":24},{"bottom_padding_index":25},{"bottom_padding_index":26},{"bottom_padding_index":27},{"bottom_padding_index":28},{"bottom_padding_index":29},{"bottom_padding_index":30},{"bottom_padding_index":31},{"bottom_padding_index":32},{"bottom_padding_index":33},{"bottom_padding_index":34},{"bottom_padding_index":35},{"bottom_padding_index":36},{"bottom_padding_index":37},{"bottom_padding_index":38},{"bottom_padding_index":39}],"left_padding_each":[{"left_padding_index":0},{"left_padding_index":1},{"left_padding_index":2},{"left_padding_index":3},{"left_padding_index":4},{"left_padding_index":5},{"left_padding_index":6},{"left_padding_index":7},{"left_padding_index":8},{"left_padding_index":9},{"left_padding_index":10},{"left_padding_index":11},{"left_padding_index":12},{"left_padding_index":13},{"left_padding_index":14},{"left_padding_index":15},{"left_padding_index":16},{"left_padding_index":17},{"left_padding_index":18},{"left_padding_index":19},{"left_padding_index":20},{"left_padding_index":21},{"left_padding_index":22},{"left_padding_index":23},{"left_padding_index":24},{"left_padding_index":25},{"left_padding_index":26},{"left_padding_index":27},{"left_padding_index":28},{"left_padding_index":29},{"left_padding_index":30},{"left_padding_index":31},{"left_padding_index":32},{"left_padding_index":33},{"left_padding_index":34},{"left_padding_index":35},{"left_padding_index":36},{"left_padding_index":37},{"left_padding_index":38},{"left_padding_index":39}],"right_padding_each":[{"right_padding_index":0},{"right_padding_index":1},{"right_padding_index":2},{"right_padding_index":3},{"right_padding_index":4},{"right_padding_index":5},{"right_padding_index":6},{"right_padding_index":7},{"right_padding_index":8},{"right_padding_index":9},{"right_padding_index":10},{"right_padding_index":11},{"right_padding_index":12},{"right_padding_index":13},{"right_padding_index":14},{"right_padding_index":15},{"right_padding_index":16},{"right_padding_index":17},{"right_padding_index":18},{"right_padding_index":19},{"right_padding_index":20},{"right_padding_index":21},{"right_padding_index":22},{"right_padding_index":23},{"right_padding_index":24},{"right_padding_index":25},{"right_padding_index":26},{"right_padding_index":27},{"right_padding_index":28},{"right_padding_index":29},{"right_padding_index":30},{"right_padding_index":31},{"right_padding_index":32},{"right_padding_index":33},{"right_padding_index":34},{"right_padding_index":35},{"right_padding_index":36},{"right_padding_index":37},{"right_padding_index":38},{"right_padding_index":39}],"background_color":"#ffffff","opacity":100,"top_left_radius":0,"top_right_radius":0,"bottom_left_radius":0,"bottom_right_radius":0,"top_padding":30,"bottom_padding":40,"left_padding":40,"right_padding":40});
			_Element.prototype.settings.page_element_id = "193486152716961639";

			_Element.prototype.element_id = "c7574ca3-7c75-4317-b0fd-5ba86df8b5ba";
			_Element.prototype.user_id = "130848673";
			_Element.prototype.site_id = "566621870380770122";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-848857247979793891-1.0.1/assets/";
			new _Element({
				el: '#element-c7574ca3-7c75-4317-b0fd-5ba86df8b5ba'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement193486152716961639();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement193486152716961639, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement193486152716961639();
		}
	});
}

</script></div></div>


					
				</td>				<td class="wsite-multicol-col" style="width:33.333333333333%; padding:0 15px;">
					
						

<div><div class="wsite-image wsite-image-border-none " style="padding-top:10px;padding-bottom:0px;margin-left:0px;margin-right:0px;text-align:center">
<a>
<img src="uploads/1/3/0/8/130848673/published/screen-shot-2020-02-16-at-12-09-26-pm.png%3F1581890181" alt="Picture" style="width:auto;max-width:100%" />
</a>
<div style="display:block;font-size:90%"></div>
</div></div>

<div id="661165748365307310"><div><style type="text/css">
	#element-79fb8b95-0351-4d96-867e-edf8dbfa229a .colored-box-content {
  clear: both;
  float: left;
  width: 100%;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #ffffff;
  padding-top: 30px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  -webkit-border-top-left-radius: 0px;
  -moz-border-top-left-radius: 0px;
  border-top-left-radius: 0px;
  -webkit-border-top-right-radius: 0px;
  -moz-border-top-right-radius: 0px;
  border-top-right-radius: 0px;
  -webkit-border-bottom-left-radius: 0px;
  -moz-border-bottom-left-radius: 0px;
  border-bottom-left-radius: 0px;
  -webkit-border-bottom-right-radius: 0px;
  -moz-border-bottom-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

</style><div id="element-79fb8b95-0351-4d96-867e-edf8dbfa229a" data-platform-element-id="848857247979793891-1.0.1" class="platform-element-contents">
	<div class="colored-box">
    <div class="colored-box-content">
        <div style="width: auto"><div></div><h2 class="wsite-content-title" style="text-align:center;"><font size="4">Enabling Technologies in RS and GIS</font></h2>

<div class="paragraph" style="text-align:center;"><span><span style="color:rgb(0, 0, 0)"><font size="3">&#8203;To improve the scale and resolution of analyses, and enable the use of more advanced and computationally costly algorithms for remote sensing and GIS analyses.<br />&#8203;<br /><br />&#8203;</font></span></span></div></div>
    </div>
</div>
</div>
<div style="clear:both;"></div><script type="text/javascript" class="element-script">function setupElement661165748365307310() {
	var requireFunc = window.platformElementRequire || window.require;

	// Relies on a global require, specific to platform elements
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		\$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "848857247979793891-1.0.1";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new \$.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return \$.getScript(nextScript);
				});
			}, \$().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
(function() {
    var ColoredBox = PlatformElement.extend({

        initialize: function() {
        }

    });

    return ColoredBox;
})();

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					// we still want to call the initialize function defined by the developer
					// however, we don't want to call it until placeholders have been replaced
					this.placeholderInterval = setInterval(function() {
						// so use setInterval to check for placeholders.
						if (this.\$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings({"top_padding_each":[{"top_padding_index":0},{"top_padding_index":1},{"top_padding_index":2},{"top_padding_index":3},{"top_padding_index":4},{"top_padding_index":5},{"top_padding_index":6},{"top_padding_index":7},{"top_padding_index":8},{"top_padding_index":9},{"top_padding_index":10},{"top_padding_index":11},{"top_padding_index":12},{"top_padding_index":13},{"top_padding_index":14},{"top_padding_index":15},{"top_padding_index":16},{"top_padding_index":17},{"top_padding_index":18},{"top_padding_index":19},{"top_padding_index":20},{"top_padding_index":21},{"top_padding_index":22},{"top_padding_index":23},{"top_padding_index":24},{"top_padding_index":25},{"top_padding_index":26},{"top_padding_index":27},{"top_padding_index":28},{"top_padding_index":29}],"bottom_padding_each":[{"bottom_padding_index":0},{"bottom_padding_index":1},{"bottom_padding_index":2},{"bottom_padding_index":3},{"bottom_padding_index":4},{"bottom_padding_index":5},{"bottom_padding_index":6},{"bottom_padding_index":7},{"bottom_padding_index":8},{"bottom_padding_index":9},{"bottom_padding_index":10},{"bottom_padding_index":11},{"bottom_padding_index":12},{"bottom_padding_index":13},{"bottom_padding_index":14},{"bottom_padding_index":15},{"bottom_padding_index":16},{"bottom_padding_index":17},{"bottom_padding_index":18},{"bottom_padding_index":19},{"bottom_padding_index":20},{"bottom_padding_index":21},{"bottom_padding_index":22},{"bottom_padding_index":23},{"bottom_padding_index":24},{"bottom_padding_index":25},{"bottom_padding_index":26},{"bottom_padding_index":27},{"bottom_padding_index":28},{"bottom_padding_index":29},{"bottom_padding_index":30},{"bottom_padding_index":31},{"bottom_padding_index":32},{"bottom_padding_index":33},{"bottom_padding_index":34},{"bottom_padding_index":35},{"bottom_padding_index":36},{"bottom_padding_index":37},{"bottom_padding_index":38},{"bottom_padding_index":39}],"left_padding_each":[{"left_padding_index":0},{"left_padding_index":1},{"left_padding_index":2},{"left_padding_index":3},{"left_padding_index":4},{"left_padding_index":5},{"left_padding_index":6},{"left_padding_index":7},{"left_padding_index":8},{"left_padding_index":9},{"left_padding_index":10},{"left_padding_index":11},{"left_padding_index":12},{"left_padding_index":13},{"left_padding_index":14},{"left_padding_index":15},{"left_padding_index":16},{"left_padding_index":17},{"left_padding_index":18},{"left_padding_index":19},{"left_padding_index":20},{"left_padding_index":21},{"left_padding_index":22},{"left_padding_index":23},{"left_padding_index":24},{"left_padding_index":25},{"left_padding_index":26},{"left_padding_index":27},{"left_padding_index":28},{"left_padding_index":29},{"left_padding_index":30},{"left_padding_index":31},{"left_padding_index":32},{"left_padding_index":33},{"left_padding_index":34},{"left_padding_index":35},{"left_padding_index":36},{"left_padding_index":37},{"left_padding_index":38},{"left_padding_index":39}],"right_padding_each":[{"right_padding_index":0},{"right_padding_index":1},{"right_padding_index":2},{"right_padding_index":3},{"right_padding_index":4},{"right_padding_index":5},{"right_padding_index":6},{"right_padding_index":7},{"right_padding_index":8},{"right_padding_index":9},{"right_padding_index":10},{"right_padding_index":11},{"right_padding_index":12},{"right_padding_index":13},{"right_padding_index":14},{"right_padding_index":15},{"right_padding_index":16},{"right_padding_index":17},{"right_padding_index":18},{"right_padding_index":19},{"right_padding_index":20},{"right_padding_index":21},{"right_padding_index":22},{"right_padding_index":23},{"right_padding_index":24},{"right_padding_index":25},{"right_padding_index":26},{"right_padding_index":27},{"right_padding_index":28},{"right_padding_index":29},{"right_padding_index":30},{"right_padding_index":31},{"right_padding_index":32},{"right_padding_index":33},{"right_padding_index":34},{"right_padding_index":35},{"right_padding_index":36},{"right_padding_index":37},{"right_padding_index":38},{"right_padding_index":39}],"background_color":"#ffffff","opacity":100,"top_left_radius":0,"top_right_radius":0,"bottom_left_radius":0,"bottom_right_radius":0,"top_padding":30,"bottom_padding":40,"left_padding":40,"right_padding":40});
			_Element.prototype.settings.page_element_id = "661165748365307310";

			_Element.prototype.element_id = "79fb8b95-0351-4d96-867e-edf8dbfa229a";
			_Element.prototype.user_id = "130848673";
			_Element.prototype.site_id = "566621870380770122";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-848857247979793891-1.0.1/assets/";
			new _Element({
				el: '#element-79fb8b95-0351-4d96-867e-edf8dbfa229a'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement661165748365307310();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement661165748365307310, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement661165748365307310();
		}
	});
}

</script></div></div>


					
				</td>			</tr>
		</tbody>
	</table>
</div></div></div>

<div class="wsite-spacer" style="height:76px;"></div>
			</div>
		</div>
		</div>

	</div>
</div>
<div class="wsite-section-wrap">
	<div class="wsite-section wsite-body-section wsite-background-30 wsite-custom-background"  >
		<div class="wsite-section-content">
		    <div class="container">
			<div class="wsite-section-elements">
				<h2 class="wsite-content-title">Recent Updates</h2>

<div><div style="height:20px;overflow:hidden"></div>
<div id='255552750243429070-slideshow'></div>
<script type='text/javascript'>
(function(jQuery) {
function init() { window.wSlideshow && window.wSlideshow.render({elementID:"255552750243429070",nav:"thumbnails",navLocation:"bottom",captionLocation:"bottom",transition:"fade",autoplay:"1",speed:"5",aspectRatio:"auto",showControls:"true",randomStart:"false",images:[{"url":"1/3/0/8/130848673/20230627-114934.jpg","width":"800","height":"600","caption":"Congratulation to Mr. Johanson Onyegbula, who successfully defended his MS in NRES thesis entitled &quot;Improving tree crown mapping using airborne LiDAR with genetic algorithms&quot;."},{"url":"1/3/0/8/130848673/gearslab-agu-f22.png","width":"765","height":"800","caption":"GEARS Lab is at AGU Fall 2022 this year!  Come see our posters!  https://www.agu.org/Fall-Meeting"},{"url":"1/3/0/8/130848673/tls-species-wade.png","width":"1280","height":"720","caption":"Congratulations to Ms. Laura Wade, who defended her NRES MS thesis entitled &quot;Deriving Novel Allometric Equations of Northern Sierra Nevada Trees Using Terrestrial Laser Scanning&quot;"},{"url":"1/3/0/8/130848673/parra2021a-phd-defense.png","width":"1280","height":"720","caption":"Congratulations to Dr. Adriana Parra, who successfully defended her dissertation entitled &quot;Quantifying and understanding vegetation change in the conterminous United States using geospatial data&quot;!","link":"https://drive.google.com/file/d/16sgTXxoQX-UV06TDsQkhwN1hLdY80CmD/view?usp=sharingweeblylink_new_window"},{"url":"1/3/0/8/130848673/weisbergetal2021a.png","width":"687","height":"901","caption":"Weisberg, P., T.E. Dilts, J.A. Greenberg, K.N. Johnson, H. Pai, C. Sladek, C. Kratt, S.W. Tyler, and A. Ready. 2021. Phenology-based classification of invasive annual grasses to the species level. Remote Sensing of Environment. 263:112568.","link":"https://doi.org/10.1016/j.rse.2021.112568weeblylink_new_window"},{"url":"1/3/0/8/130848673/nevada-space-grant-logo-600.png","width":"600","height":"568","caption":"Theo Hartsook was awarded the 2021-2022 Nevada Space Grant Consortium (NVSGC) Fellowship for his proposal entitled &quot;Automated Stem Mapping Using Terrestrial Laser Scanning and Hough Transforms: A\nParameterless Processing Pipeline and Comparison to Existing Methods&quot;","link":"https://nasa.epscorspo.nevada.edu/weeblylink_new_window"},{"url":"1/3/0/8/130848673/chenetal2020a.png","width":"602","height":"800","caption":"Chen, W., K.D. Tape, E.S. Euskirchen, S. Liang, A. Matos, J. Greenberg, and J.M. Fraterrigo. 2020.  Impacts of arctic shrubs on root traits and belowground nutrient cycles across a Northern Alaskan climate gradient. Frontiers in Plant Science. Published.","link":"https://doi.org/10.3389/fpls.2020.588098weeblylink_new_window"},{"url":"1/3/0/8/130848673/agu-2020.png","width":"800","height":"526","caption":"Come join us at the AGU poster session for &quot;Remote Sensing to Support Investigations in Plant–Climate Interactions&quot;, December 9, 2020!","link":"https://agu.confex.com/agu/fm20/meetingapp.cgi/Session/103188weeblylink_new_window"},{"url":"1/3/0/8/130848673/caldwelletal.png","width":"826","height":"689","caption":"Caldwell, T.J., S. Chandra, T.P. Albright, A.A. Harpold, T. Dilts, J.A. Greenberg, S. Sadro, M.D. Dettinger. Drivers and projections of ice phenology in mountain lakes in the Western United States. 2020.  Limnology and Oceanography. Early view.","link":"http://dx.doi.org/10.1002/lno.11656weeblylink_new_window"},{"url":"1/3/0/8/130848673/hartsook2020a-tls-with-slice.jpg","width":"1325","height":"722","caption":"Theo Hartsook gave a talk in Plant Talk about his MS research, &quot;Using Hough transforms and TLS to create stem maps&quot; on 14 October 2020.  Click the photo to view the presentation.","link":"https://unr.zoom.us/rec/share/VmWG_OxstjnqF1VbUymz47bZ3BHU_umadHfTUiutSfTHJ7NoGZjJZjObH5CKYV9d.gaGA59eA3LxogREaweeblylink_new_window"},{"url":"1/3/0/8/130848673/greenbergetal2020b-bigdata-lessons.jpg","width":"720","height":"405","caption":"Lessons learned in big data, presented at the Big Data Summer School, 8 July 2020. ","link":"https://drive.google.com/file/d/1AFLK56CpfyjhtnnNv9f2_y6hI906M5sg/view?usp=sharingweeblylink_new_window"},{"url":"1/3/0/8/130848673/scalable-surface-fuels-mapping-using-three-dimensional-remote-sensing-slide6.png","width":"720","height":"405","caption":"Ferguson Fire canopy fuels loss, presented by Jonathan Greenberg at the USFS-NASA Virtual Pitch Fest on 2 June 2020."},{"url":"1/3/0/8/130848673/screen-shot-2020-06-03-at-11-37-56-am.png","width":"738","height":"800","caption":"Harpold, A., K. Sebastian, J. Greenberg, D. Eckberg, M. Kohler, G. Sterle, and P. Broxton. 2019. Increasing the efficacy of forest thinning for snow using high-resolution modeling: a proof of concept in the Lake Tahoe Basin, California, USA. Ecohydrology: e2203. ","link":"http://dx.doi.org/10.1002/eco.2203weeblylink_new_window"},{"url":"1/3/0/8/130848673/img-20200312-103325.jpg","width":"800","height":"600","caption":"Adriana Parra presenting GEARS Lab Research at UNR&#x27;s Cyberinfrastructure Day, 12 March 2020. Click the photo to view the presentation.","link":"https://drive.google.com/file/d/1FKEygqE79R8nolCTCjRMdky4fuG82TDQ/view?usp=sharingweeblylink_new_window"}]}) }
jQuery(document).ready(init);
})(window.jQuery)
</script>

<div style="height:20px;overflow:hidden"></div></div>
			</div>
		</div>
		</div>

	</div>
</div>
<div class="wsite-section-wrap">
	<div class="wsite-section wsite-body-section wsite-background-6 wsite-custom-background"  >
		<div class="wsite-section-content">
		    <div class="container">
			<div class="wsite-section-elements">
				<div><div class="wsite-multicol"><div class="wsite-multicol-table-wrap" style="margin:0 -55px;">
	<table class="wsite-multicol-table">
		<tbody class="wsite-multicol-tbody">
			<tr class="wsite-multicol-tr">
				<td class="wsite-multicol-col" style="width:33.333333333333%; padding:0 55px;">
					
						

<h2 class="wsite-content-title" style="text-align:center;"><font size="3">Want to work with us?</font></h2>

<div class="paragraph" style="text-align:center;">&#8203;<font size="4"><a href="https://www.unr.edu/nres/graduate-programs" target="_blank">Get a degree at UNR!</a><br />&#8203;</font></div>

<div id="486349219157761249"><div><style type="text/css">
	#element-6b5db23a-9780-4c69-85d1-6758fc6c236a .border-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
#element-6b5db23a-9780-4c69-85d1-6758fc6c236a .hide-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
#element-6b5db23a-9780-4c69-85d1-6758fc6c236a .hide-box .hide-box-content {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

</style><div id="element-6b5db23a-9780-4c69-85d1-6758fc6c236a" data-platform-element-id="874959678356211109-1.0.1" class="platform-element-contents">
	<div class="hide-box">
    <div class="hide-box-content">
        <div style="width: auto"><div></div><div class="wsite-spacer" style="height:32px;"></div></div>
    </div>
</div>

</div>
<div style="clear:both;"></div><script type="text/javascript" class="element-script">function setupElement486349219157761249() {
	var requireFunc = window.platformElementRequire || window.require;

	// Relies on a global require, specific to platform elements
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		\$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "874959678356211109-1.0.1";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new \$.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return \$.getScript(nextScript);
				});
			}, \$().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
( function() {

    var HideBox,
        resizeTimeout,
        that;

    that = this;
    resizeTimeout = null;

    HideBox = PlatformElement.extend( {

        "update": function() {

            var display,                //  value of CSS "display" to use
                width;

            //  get screen width
            width = \$( window ).width();

            //  determine which "display" value to use
            if ( width < 768 ) {
                display = that.settings.get( "xs" );
            } else if ( width < 992 ) {
                display = that.settings.get( "sm" );
            } else if ( width < 1200 ) {
                display = that.settings.get( "md" );
            } else {
                display = that.settings.get( "lg" );
            }

            //  update value of "display"
            that.\$( ".hide-box" ).css( "display", display );
        },

        "installResizeHandler": function() {

            \$( window ).resize( function() {

                // ignore resize events as long as an actualResizeHandler execution is in the queue
                if ( resizeTimeout === null ) {
                    resizeTimeout = setTimeout( function() {
                        resizeTimeout = null;
                        that.actualResizeHandler();
                    }, 66 );                            //  66ms: the actualResizeHandler will execute at a rate of 15fps
                }
            } );            
        },

        "actualResizeHandler": function() {
            that.update();
        },

        "initialize": function() {

            that = this;

            //  update the element's display
            that.update();

            //  need to resize the element when the window resizes
            that.installResizeHandler();
        }

    } );

    return HideBox;
}() );
;

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					// we still want to call the initialize function defined by the developer
					// however, we don't want to call it until placeholders have been replaced
					this.placeholderInterval = setInterval(function() {
						// so use setInterval to check for placeholders.
						if (this.\$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings({"xs":"none","sm":"block","md":"block","lg":"block"});
			_Element.prototype.settings.page_element_id = "486349219157761249";

			_Element.prototype.element_id = "6b5db23a-9780-4c69-85d1-6758fc6c236a";
			_Element.prototype.user_id = "130848673";
			_Element.prototype.site_id = "566621870380770122";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-874959678356211109-1.0.1/assets/";
			new _Element({
				el: '#element-6b5db23a-9780-4c69-85d1-6758fc6c236a'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement486349219157761249();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement486349219157761249, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement486349219157761249();
		}
	});
}

</script></div></div>

<div class="paragraph" style="text-align:center;"><font color="#535353" size="3">GEARS Lab is part of the <a href="https://www.unr.edu/nres" target="_blank">Department of Natural Resources and Environmental Sciences</a> at the <a href="https://www.unr.edu/" target="_blank">University of Nevada, Reno</a>.&nbsp; We are always looking for folks interested in working towards a Master's or PhD Degree in our lab.&nbsp; Please take a look at our <a href="https://www.unr.edu/nres/graduates" target="_blank">graduate degrees</a>.&nbsp;&nbsp;</font></div>


					
				</td>				<td class="wsite-multicol-col" style="width:33.333333333333%; padding:0 55px;">
					
						

<h2 class="wsite-content-title" style="text-align:center;"><font size="3">Interested in our research?</font></h2>

<div class="paragraph" style="text-align:center;"><font size="4"><a href="research.html">Learn more about the exciting research our lab is involved in!</a></font></div>

<div id="722107642704340040"><div><style type="text/css">
	#element-ec803bf7-0a77-4a3d-bce8-cc126a7cf540 .border-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
#element-ec803bf7-0a77-4a3d-bce8-cc126a7cf540 .hide-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
#element-ec803bf7-0a77-4a3d-bce8-cc126a7cf540 .hide-box .hide-box-content {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

</style><div id="element-ec803bf7-0a77-4a3d-bce8-cc126a7cf540" data-platform-element-id="874959678356211109-1.0.1" class="platform-element-contents">
	<div class="hide-box">
    <div class="hide-box-content">
        <div style="width: auto"><div></div><div class="wsite-spacer" style="height:33px;"></div></div>
    </div>
</div>

</div>
<div style="clear:both;"></div><script type="text/javascript" class="element-script">function setupElement722107642704340040() {
	var requireFunc = window.platformElementRequire || window.require;

	// Relies on a global require, specific to platform elements
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		\$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "874959678356211109-1.0.1";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new \$.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return \$.getScript(nextScript);
				});
			}, \$().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
( function() {

    var HideBox,
        resizeTimeout,
        that;

    that = this;
    resizeTimeout = null;

    HideBox = PlatformElement.extend( {

        "update": function() {

            var display,                //  value of CSS "display" to use
                width;

            //  get screen width
            width = \$( window ).width();

            //  determine which "display" value to use
            if ( width < 768 ) {
                display = that.settings.get( "xs" );
            } else if ( width < 992 ) {
                display = that.settings.get( "sm" );
            } else if ( width < 1200 ) {
                display = that.settings.get( "md" );
            } else {
                display = that.settings.get( "lg" );
            }

            //  update value of "display"
            that.\$( ".hide-box" ).css( "display", display );
        },

        "installResizeHandler": function() {

            \$( window ).resize( function() {

                // ignore resize events as long as an actualResizeHandler execution is in the queue
                if ( resizeTimeout === null ) {
                    resizeTimeout = setTimeout( function() {
                        resizeTimeout = null;
                        that.actualResizeHandler();
                    }, 66 );                            //  66ms: the actualResizeHandler will execute at a rate of 15fps
                }
            } );            
        },

        "actualResizeHandler": function() {
            that.update();
        },

        "initialize": function() {

            that = this;

            //  update the element's display
            that.update();

            //  need to resize the element when the window resizes
            that.installResizeHandler();
        }

    } );

    return HideBox;
}() );
;

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					// we still want to call the initialize function defined by the developer
					// however, we don't want to call it until placeholders have been replaced
					this.placeholderInterval = setInterval(function() {
						// so use setInterval to check for placeholders.
						if (this.\$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings({"xs":"none","sm":"block","md":"block","lg":"block"});
			_Element.prototype.settings.page_element_id = "722107642704340040";

			_Element.prototype.element_id = "ec803bf7-0a77-4a3d-bce8-cc126a7cf540";
			_Element.prototype.user_id = "130848673";
			_Element.prototype.site_id = "566621870380770122";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-874959678356211109-1.0.1/assets/";
			new _Element({
				el: '#element-ec803bf7-0a77-4a3d-bce8-cc126a7cf540'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement722107642704340040();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement722107642704340040, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement722107642704340040();
		}
	});
}

</script></div></div>

<div class="paragraph" style="text-align:center;"><span style="color:rgb(83, 83, 83)"><font size="3">Our lab works on projects from the scale of leaves to the globe.&nbsp; Our research involves ecology, natural resource management, computer science, and engineering.&nbsp;&nbsp;</font></span></div>


					
				</td>				<td class="wsite-multicol-col" style="width:33.333333333333%; padding:0 55px;">
					
						

<h2 class="wsite-content-title" style="text-align:center;"><font size="3">LOOKING FOR DATA AND SOFTWARE?</font></h2>

<div class="paragraph" style="text-align:center;"><font size="4"><a href="data-and-code.html">Take a look at our published datasets and open source code!</a></font></div>

<div id="617959146791067822"><div><style type="text/css">
	#element-3a349b50-8a71-4fdd-afd5-dc7b517ca5fb .border-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
#element-3a349b50-8a71-4fdd-afd5-dc7b517ca5fb .hide-box {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}
#element-3a349b50-8a71-4fdd-afd5-dc7b517ca5fb .hide-box .hide-box-content {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

</style><div id="element-3a349b50-8a71-4fdd-afd5-dc7b517ca5fb" data-platform-element-id="874959678356211109-1.0.1" class="platform-element-contents">
	<div class="hide-box">
    <div class="hide-box-content">
        <div style="width: auto"><div></div><div class="wsite-spacer" style="height:34px;"></div></div>
    </div>
</div>

</div>
<div style="clear:both;"></div><script type="text/javascript" class="element-script">function setupElement617959146791067822() {
	var requireFunc = window.platformElementRequire || window.require;

	// Relies on a global require, specific to platform elements
	requireFunc([
		'w-global',
		'underscore',
		'jquery',
		'backbone',
		'util/platform/elements/PlatformElement',
		'util/platform/elements/PlatformElementSettings'
	], function(
		_W,
		_,
		\$,
		Backbone,
		PlatformElement,
		PlatformElementSettings
	) {
		var dependencies = null || [];
		var platform_element_id = "874959678356211109-1.0.1";

		if (typeof _W.loadedPlatformDependencies === 'undefined') {
			_W.loadedPlatformDependencies = [];
		}

		if (typeof _W.platformElements === 'undefined') {
			_W.platformElements = [];
		}

		if (typeof _W.platformElements[platform_element_id] === 'undefined') {
			_W.platformElements[platform_element_id] = {};
			_W.platformElements[platform_element_id].deferredObject = new \$.Deferred();
			_W.platformElements[platform_element_id].deferredPromise = _W.platformElements[platform_element_id].deferredObject.promise();
		}

		if(_.intersection(_W.loadedPlatformDependencies, dependencies).length !== dependencies.length){
			_.reduce(dependencies, function(promise, nextScript){
				_W.loadedPlatformDependencies.push(nextScript);
				return promise.then(function(){
					return \$.getScript(nextScript);
				});
			}, \$().promise()).then(function(){
				_W.platformElements[platform_element_id].deferredObject.resolve();
			});
		}

		if (dependencies.length === 0){
			_W.platformElements[platform_element_id].deferredObject.resolve();
		}

		_W.platformElements[platform_element_id].deferredPromise.done(function(){
			var _ElementDefinition = /**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 */
( function() {

    var HideBox,
        resizeTimeout,
        that;

    that = this;
    resizeTimeout = null;

    HideBox = PlatformElement.extend( {

        "update": function() {

            var display,                //  value of CSS "display" to use
                width;

            //  get screen width
            width = \$( window ).width();

            //  determine which "display" value to use
            if ( width < 768 ) {
                display = that.settings.get( "xs" );
            } else if ( width < 992 ) {
                display = that.settings.get( "sm" );
            } else if ( width < 1200 ) {
                display = that.settings.get( "md" );
            } else {
                display = that.settings.get( "lg" );
            }

            //  update value of "display"
            that.\$( ".hide-box" ).css( "display", display );
        },

        "installResizeHandler": function() {

            \$( window ).resize( function() {

                // ignore resize events as long as an actualResizeHandler execution is in the queue
                if ( resizeTimeout === null ) {
                    resizeTimeout = setTimeout( function() {
                        resizeTimeout = null;
                        that.actualResizeHandler();
                    }, 66 );                            //  66ms: the actualResizeHandler will execute at a rate of 15fps
                }
            } );            
        },

        "actualResizeHandler": function() {
            that.update();
        },

        "initialize": function() {

            that = this;

            //  update the element's display
            that.update();

            //  need to resize the element when the window resizes
            that.installResizeHandler();
        }

    } );

    return HideBox;
}() );
;

			if (typeof _ElementDefinition == 'undefined' || typeof _ElementDefinition == 'null') {
				var _ElementDefinition = PlatformElement.extend({});
			}

			var _Element = _ElementDefinition.extend({
				initialize: function() {
					// we still want to call the initialize function defined by the developer
					// however, we don't want to call it until placeholders have been replaced
					this.placeholderInterval = setInterval(function() {
						// so use setInterval to check for placeholders.
						if (this.\$('.platform-element-child-placeholder').length == 0) {
							clearInterval(this.placeholderInterval);
							this.constructor.__super__.initialize.apply(this);
						}
					}.bind(this), 100);
				}
			});

			_Element.prototype.settings = new PlatformElementSettings({"xs":"none","sm":"block","md":"block","lg":"block"});
			_Element.prototype.settings.page_element_id = "617959146791067822";

			_Element.prototype.element_id = "3a349b50-8a71-4fdd-afd5-dc7b517ca5fb";
			_Element.prototype.user_id = "130848673";
			_Element.prototype.site_id = "566621870380770122";
			_Element.prototype.assets_path = "//marketplace.editmysite.com/uploads/b/marketplace-elements-874959678356211109-1.0.1/assets/";
			new _Element({
				el: '#element-3a349b50-8a71-4fdd-afd5-dc7b517ca5fb'
			});
		});
	});

}

if (typeof document.documentElement.appReady == 'undefined') {
	document.documentElement.appReady = 0;
}

if (document.documentElement.appReady || (window.inEditor && window.inEditor())) {
	setupElement617959146791067822();
} else if (document.createEvent && document.addEventListener) {
	document.addEventListener('appReady', setupElement617959146791067822, false);
} else {
	document.documentElement.attachEvent('onpropertychange', function(event){
		if (event.propertyName == 'appReady') {
			setupElement617959146791067822();
		}
	});
}

</script></div></div>

<div class="paragraph" style="text-align:center;"><font color="#535353" size="3">Our lab has a commitment&nbsp;to Open Content and Open Source standards for our data and code.</font></div>


					
				</td>			</tr>
		</tbody>
	</table>
</div></div></div>
			</div>
		</div>
		</div>

	</div>
</div>

</div>

	  </div>

    <div class="footer-wrap">
    	<div class="container">
    		<div class="footer"><div class='wsite-elements wsite-footer'>
<div><div class="wsite-multicol"><div class="wsite-multicol-table-wrap" style="margin:0 -20px;">
	<table class="wsite-multicol-table">
		<tbody class="wsite-multicol-tbody">
			<tr class="wsite-multicol-tr">
				<td class="wsite-multicol-col" style="width:79.1%; padding:0 20px;">
					
						

<h2 class="wsite-content-title" style="text-align:left;"><font size="4">Contact us for more information on programs, collaborations and datasets!</font></h2>


					
				</td>				<td class="wsite-multicol-col" style="width:20.9%; padding:0 20px;">
					
						

<div style="text-align:left;"><div style="height:20px;overflow:hidden"></div>
<span class="wsite-social wsite-social-default"><a class='first-child wsite-social-item wsite-social-mail' href="https://www.gearslab.org/cdn-cgi/l/email-protection#deb4b9acbbbbb0bcbbacb99eabb0acf0bbbaab" target='_blank' alt='Mail' aria-label='Mail'><span class='wsite-social-item-inner'></span></a><a class='last-child wsite-social-item wsite-social-youtube' href='https://www.youtube.com/playlist?list=PLKlHeZB5GHIjOPcKP1NVVqvejEfxt2h6G' target='_blank' alt='Youtube' aria-label='Youtube'><span class='wsite-social-item-inner'></span></a></span>
<div style="height:0px;overflow:hidden"></div></div>


					
				</td>			</tr>
		</tbody>
	</table>
</div></div></div>

<div><div style="height: 20px; overflow: hidden; width: 100%;"></div>
<hr class="styled-hr" style="width:100%;"></hr>
<div style="height: 20px; overflow: hidden; width: 100%;"></div></div>

<div><div class="wsite-multicol"><div class="wsite-multicol-table-wrap" style="margin:0 -15px;">
	<table class="wsite-multicol-table">
		<tbody class="wsite-multicol-tbody">
			<tr class="wsite-multicol-tr">
				<td class="wsite-multicol-col" style="width:18.623962040332%; padding:0 15px;">
					
						

<h2 class="wsite-content-title" style="text-align:left;"><font size="3">Email</font></h2>

<div class="paragraph" style="text-align:left;"><a href="https://www.gearslab.org/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="0d676a7f6868636f687f6a4d78637f23686978">[email&#160;protected]</a></div>


					
				</td>				<td class="wsite-multicol-col" style="width:81.376037959668%; padding:0 15px;">
					
						

<h2 class="wsite-content-title" style="text-align:left;"><font size="3">Mailing Address</font></h2>

<div class="paragraph" style="text-align:left;"><font color="#d5d5d5">Natural Resources &amp; Environmental Science<br />University of Nevada, Reno<br />1664 N Virginia St MS 0186<br />Reno, NV 89557</font></div>


					
				</td>			</tr>
		</tbody>
	</table>
</div></div></div></div></div>
    	` } />
    </div>
  );
}
