
var imgCnt=0;
$(document).ready(function(){

    $('body,html').animate({
		scrollTop:	0
	},800);	

    $("#toTop").hide();
    $('header').removeClass("headerBg");
    
	$("#index_believe img").animate({
		"margin-top":"0px",
		"opacity":1
	},800);
	
	$("#index_believe h2").animate({
		"margin-left":"0px",
		"opacity":1
	},800);
	
	$("#index_believe p").animate({
		"margin-right":"0px",
		"opacity":1
	},800);

    
	var timeStamp_last = 0;
	var timeStamp_this = 0;


    // $(window).on('mousewheel DOMMouseScroll', function(e){
    //     if(timeStamp_this - timeStamp_last == 0){
	// 		timeStamp_last = e.timeStamp
	// 		if(e.originalEvent.deltaY >= 100){
	// 			if(imgCnt>=4){
	// 				imgCnt = 4
	// 			}else{
	// 				imgCnt+=1;
	// 			}
	// 		}else{
	// 			if(imgCnt<=0){
	// 				imgCnt = 0
	// 			}else{
	// 				imgCnt-=1;
	// 			}
	// 		}			
	// 		console.log("imgCnt",imgCnt)
	// 		if(imgCnt <= 0){
	// 			// alert(imgCnt);
	// 			$('body,html').animate({
	// 				scrollTop:	0
	// 			},600);	
	// 		}
	// 		if(imgCnt == 1){
	// 			$('body,html').animate({
	// 				scrollTop:	offsetEnergic
	// 			},800);	
	// 		}
	// 		if(imgCnt == 2){
	// 			$('body,html').animate({
	// 				scrollTop:	offsetSuccess
	// 			},800);	
	// 		}
	// 		if(imgCnt == 3){
	// 			$('body,html').animate({
	// 				scrollTop:	offsetTeamwork
	// 			},800);	
	// 		}
	// 		if(imgCnt >= 4){
	// 			$('body,html').animate({
	// 				scrollTop:	offsetFooter
	// 			},800);	
                
	// 		}

	// 	}else{			
	// 		timeStamp_this = e.timeStamp;
	// 		if(timeStamp_this - timeStamp_last > 100){
	// 			timeStamp_last = e.timeStamp
	// 			console.log("first2")
	// 		}else{
	// 			timeStamp_this = e.timeStamp;
	// 		}
	// 	}
    // });
    window.addEventListener('scroll', function(){
        
        var topHeight = 600;
        var st = this.scrollY;

        var offsetBelieve = $("#index_believe").offset().top;
        var offsetEnergic = $("#index_energic").offset().top-400;
        var offsetSuccess = $("#index_success").offset().top-300;
        var offsetTeamwork = $("#index_teamwork").offset().top-300;	
        var offsetFooter = $("#index_footer").offset().top;	

        // console.log("st--",st);
        // console.log("offsetBelieve--",offsetBelieve);
        // console.log("offsetEnergic--",offsetEnergic);
        // console.log("offsetSuccess--",offsetSuccess);
        // console.log("offsetTeamwork--",offsetTeamwork);

        // console.log("topHeight--",topHeight);
        // 判斷是向上捲動，而且捲軸超過 200px
        if( st > topHeight) {
            $("#toTop").fadeTo(400,1);
			$('header').addClass("headerBg");

        }else {	
            $("#toTop").hide();
			$('header').removeClass("headerBg");
        }

        if(st >= offsetBelieve){
            
			$('.indexNav a').removeClass(" action");
			$('.indexNav a:nth-of-type(1)').addClass("action");

			$("#index_believe h2").animate({
				"margin-left":"0px",
				"opacity":1
			},800);
			
			$("#index_believe p").animate({
				"margin-right":"0px",
				"opacity":1
			},800);

        }
        if(st >= offsetEnergic) {
			$('.indexNav a').removeClass(" action");
			$('.indexNav a:nth-of-type(2)').addClass("action");

			$("#index_energic h2").animate({
				"margin-left":"0px",
				"opacity":1
			},800);
			
			$("#index_energic p").animate({
				"margin-right":"0px",
				"opacity":1
			},800);
			
			// $('body,html').animate({
			// 	scrollTop:	offsetEnergic
			// },800);	

        }

        if(st >= offsetSuccess){
            $('.indexNav a').removeClass(" action");
			$('.indexNav a:nth-of-type(3)').addClass("action");
			
			$("#index_success h2").animate({
				"margin-left":"0px",
				"opacity":1
			},800);
			
			$("#index_success p").animate({
				"margin-right":"0px",
				"opacity":1
			},800);

			// $('body,html').animate({
			// 	scrollTop:	offsetSuccess
			// },800);	
            
        }

        if(st >= offsetTeamwork){
            $('.indexNav a').removeClass(" action");
			$('.indexNav a:nth-of-type(4)').addClass("action");

			$("#index_teamwork h2").animate({
				"margin-left":"0px",
				"opacity":1
			},800);
			
			$("#index_teamwork p").animate({
				"margin-right":"0px",
				"opacity":1
			},800);

			// $('body,html').animate({
			// 	scrollTop:	offsetTeamwork
			// },800);	
            
        }
    });

});

function goTop(){
	$('body,html').animate({
		scrollTop:	0
	},800);	
    
    $('.indexNav a').removeClass("action");
    $('.indexNav a:nth-of-type(1)').addClass("action");

    $('header').removeClass("headerBg");
    $("#toTop").fadeTo(400,0);
    
    imgCnt = 0
    
}
function goPgTitle(thisTitle){
	// console.log("index_believe--",$("#index_believe").offset().top);
	
	var offsetBelieve = $("#index_believe").offset().top;
	var offsetEnergic = $("#index_energic").offset().top;
	var offsetSuccess = $("#index_success").offset().top;
	var offsetTeamwork = $("#index_teamwork").offset().top-60;	
	var offsetFooter = $("#index_footer").offset().top;	

	if(thisTitle == 'index_energic'){

		$('body,html').animate({
			scrollTop:	offsetEnergic
		},600);	
		
		$('.indexNav a').removeClass("action");
		$('.indexNav a:nth-of-type(2)').addClass("action");

        $("#index_energic h2").animate({
            "margin-left":"0px",
            "opacity":1
        },800);
        
        $("#index_energic p").animate({
            "margin-right":"0px",
            "opacity":1
        },800);
        
        $('header').addClass("headerBg");
        $("#toTop").fadeTo(400,1);

        imgCnt = 1
        this.scrollY = offsetEnergic-200

	}else if(thisTitle == 'index_success'){
		
		$('body,html').animate({
			scrollTop:	offsetSuccess-120
		},600);	
		
		$('.indexNav a').removeClass("action");
		$('.indexNav a:nth-of-type(3)').addClass("action");

        
        $("#index_success h2").animate({
            "margin-left":"0px",
            "opacity":1
        },800);
        
        $("#index_success p").animate({
            "margin-right":"0px",
            "opacity":1
        },800);

        $('header').addClass("headerBg");
        $("#toTop").fadeTo(400,1);
        imgCnt = 2
        this.scrollY = offsetSuccess-220

	}else if(thisTitle == 'index_teamwork'){
		
		$('body,html').animate({
			scrollTop:	offsetTeamwork
		},600);	
		
		$('.indexNav a').removeClass("action");
		$('.indexNav a:nth-of-type(4)').addClass("action");

        $("#index_teamwork h2").animate({
            "margin-left":"0px",
            "opacity":1
        },800);
        
        $("#index_teamwork p").animate({
            "margin-right":"0px",
            "opacity":1
        },800);
        
        $('header').addClass("headerBg");
        $("#toTop").fadeTo(400,1);
        imgCnt = 3
        this.scrollY = offsetTeamwork

        // $(window).scrollTop = offsetTeamwork
        // $(window).clientY = offsetTeamwork
        // $(window).pageY = offsetTeamwork
        // console.log(this)
        // console.log(window)

	}else if(thisTitle == 'index_footer'){
		
		$('body,html').animate({
			scrollTop:	offsetFooter
		},600);	
		
		$('.indexNav a').removeClass("action");
		$('.indexNav a:nth-of-type(4)').addClass("action");

	}else{		
		
		$('body,html').animate({
			scrollTop:	0
		},600);	

        $('header').removeClass("headerBg");
        $("#toTop").fadeTo(400,0);

		$('.indexNav a').removeClass("action");
		$('.indexNav a:nth-of-type(1)').addClass("action");

        this.scrollY = 0
        
        $('header').removeClass("headerBg");
        $("#toTop").fadeTo(400,0);
	}
}