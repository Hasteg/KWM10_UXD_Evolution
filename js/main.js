$(function () {
    
    
	    var h = $(window).height();
	    $('.page').height(h);
    
	    var s = skrollr.init({
    //            edgeStrategy: 'set',
		constants: {
		    h: h,
            h2: h*2,
            h3: h*3,
            h4: h*4,
            h5: h*5,
            h6: h*6,
            h7: h*7,
            h8: h*8,
            h9: h*9,
            h10: h*10,
            h11: h*11,
            h12: h*12
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
    
	    
            
            
            
            window.scrollTo(0, h*12);
    
	});