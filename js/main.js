$(function () {
    
    
	    var h = $(window).height();
	    $('.page').height(h);
    
	    var s = skrollr.init({
    //            edgeStrategy: 'set',
		constants: {
		    h: h,
                    h2: h*2,
                    h3: h*3,
                    h4: h*4
		},
		easing: {
		    stepper: function (p) {
    //                    return p;
			return Math.round(p * 3) / 3;
		    }
    //            WTF: Math.random,
    //            inverted: function(p) {
    //                return 1-p;
    //            }
		}
	    });
	    
	    console.log(h);
    
	    
            
            
            
            window.scrollTo(0,h*12);
    
	});