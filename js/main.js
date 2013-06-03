$(function () {
    
    
	    var h = $(window).height();
	    $('.page').height(h);
    
	    var s = skrollr.init({
    //            edgeStrategy: 'set',
		constants: {
		    h: h
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