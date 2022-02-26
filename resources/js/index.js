// JavaScript Document

var imgCnt=0;
$(document).ready(function() {	
	var lastScrollY = 0;
	var scorllthis = 0;

	
	$('body,html').animate({
		scrollTop:	0
	},800);	
    $('header').removeClass("headerBg");

	//transform:scale(1,1);transition: all 1s ease-out;
	//.animate({'max-width':600,'opacity':0},1000,

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

	//$(".indexImg1").addClass(" imgHover");
	// $(".indexImg1").animate({},5000,function(){
	// 	$(this).css({'transform':'translateX(300px)'});
	// 	})

	//$(".indexImg1").fadeTo(800,1);
	
    var thisScrollY = 0
	
	var offsetBelieve = $("#index_believe").offset().top;
	var offsetEnergic = $("#index_energic").offset().top - 200;
	var offsetSuccess = $("#index_success").offset().top - 120;
	var offsetTeamwork = $("#index_teamwork").offset().top - 220;	
	var offsetFooter = $("#index_footer").offset().top;	
	// console.log("index_believe--",$("#index_believe").offset().top);
	// console.log("index_energic--",$("#index_energic").offset().top);
	// console.log("index_success--",$("#index_success").offset().top);
	// console.log("index_teamwork--",$("#index_teamwork").offset().top);

	var timeStamp_last = 0;
	var timeStamp_this = 0;

    $(window).on('mousewheel DOMMouseScroll', function(e){		
		if(timeStamp_this - timeStamp_last == 0){
			timeStamp_last = e.timeStamp
			if(e.originalEvent.deltaY >= 100){
				if(imgCnt>=4){
					imgCnt = 4
				}else{
					imgCnt+=1;
				}
			}else{
				if(imgCnt<=0){
					imgCnt = 0
				}else{
					imgCnt-=1;
				}
			}
			//console.log("imgCnt",e)
			
			if(imgCnt <= 0){
				// alert(imgCnt);
				$('body,html').animate({
					scrollTop:	0
				},600);	

				$('.indexNav a').removeClass("action");
				$('.indexNav a:nth-of-type(1)').addClass("action");

                $('header').removeClass("headerBg");
                $("#toTop").fadeTo(400,0);
			}
			if(imgCnt == 1){
				// alert(imgCnt);
                
				$('body,html').animate({
					scrollTop:	offsetEnergic
				},800);	

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
                
                $('header').addClass("headerBg");
                $("#toTop").fadeTo(400,1);


			}
			if(imgCnt == 2){

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
				$('body,html').animate({
					scrollTop:	offsetSuccess
				},600);	


			}
			if(imgCnt == 3){
				$('body,html').animate({
					scrollTop:	offsetTeamwork
				},600);	

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
			}
			if(imgCnt >= 4){
				$('body,html').animate({
					scrollTop:	offsetFooter
				},600);	
                
				$('.indexNav a').removeClass(" action");
				$('.indexNav a:nth-of-type(4)').addClass("action");

			}

		}else{			
			timeStamp_this = e.timeStamp;
			if(timeStamp_this - timeStamp_last > 100){
				timeStamp_last = e.timeStamp
				//console.log("first2")
			}else{
				timeStamp_this = e.timeStamp;
			}
		}

		// //console.log("imgCnt",imgCnt)

        // if(e.originalEvent.deltaY > 0) {
        //     //scroll down - Show next section
		// // console.log("e.deltaY >0",e.originalEvent.deltaY)
		// // console.log("e.deltaY >0",e.originalEvent.detail)
        //     // if(imgCnt < (sections.length-1)){
        //     //     $("#"+sections[imgCnt]).fadeOut();
        //     //     imgCnt+=1;
        //     //     $("#"+sections[imgCnt]).fadeIn();
        //     // }
        // }
        // else{
        //     //scroll up - Show previous section
        //     // if(imgCnt > 0){
        //     //     $("#"+sections[imgCnt]).fadeOut();
        //     //     imgCnt-=1;
        //     //     $("#"+sections[imgCnt]).fadeIn();
        //     // }
        // }
        // //return false;

    });

	//window.addEventListener('scroll', function(){

        // var topHeight = 600;
        // var st = this.scrollY;
        // //console.log("st--",st);
        // // var titleDr = $("#titleDr").offset().top - topHeight;
        // // var titleMedicalTr = $("#titleMedicalTr").offset().top - topHeight;
        // // var titleDrTime = $("#titleDrTime").offset().top - topHeight;
        // // var titleEnvironment = $("#titleEnvironment").offset().top - topHeight;
        // // var titleConsultation = $("#titleConsultation").offset().top - topHeight;
        
        // // console.log("topHeight--",topHeight);
        // // 判斷是向上捲動，而且捲軸超過 200px
        // $("#toTop").hide();
        // if( st > topHeight) {
        //     $("#toTop").fadeTo(400,1);

        // }else {	
        //     $("#toTop").fadeTo(400,0);
        // }

        // if(st >= offsetBelieve){
        //     $('.indexNav a').removeClass("action");
        //     $('.indexNav a:nth-of-type(1)').addClass("action");
        //     // $(".drsDesc .col").animate({
        //     // 	"top":"0px"
        //     // },1200);
        // }
        // if(st >= offsetEnergic) {
        //     $('.indexNav a').removeClass("action");
        //     $('.indexNav a:nth-of-type(2)').addClass("action");
            
        //     $("#index_energic h2").animate({
        //         "margin-left":"0px",
        //         "opacity":1
        //     },800);
            
        //     $("#index_energic p").animate({
        //         "margin-right":"0px",
        //         "opacity":1
        //     },800);
            
        // }

        // if(st >= offsetSuccess){
        //     $('.indexNav a').removeClass("action");
        //     $('.indexNav a:nth-of-type(3)').addClass("action");
            
        //     $("#index_success h2").animate({
        //         "margin-left":"0px",
        //         "opacity":1
        //     },800);
            
        //     $("#index_success p").animate({
        //         "margin-right":"0px",
        //         "opacity":1
        //     },800);
            
        // }

        // if(st >= offsetTeamwork){
        //     $('.indexNav a').removeClass("action");
        //     $('.indexNav a:nth-of-type(4)').addClass("action");
            
        //     $("#index_teamwork h2").animate({
        //         "margin-left":"0px",
        //         "opacity":1
        //     },800);
            
        //     $("#index_teamwork p").animate({
        //         "margin-right":"0px",
        //         "opacity":1
        //     },800);
            
        // }

	//});

	$('.menu li').each(function(){
		$(this).click(function(){
			$('.menu li').removeClass(" menuclick");
			$(this).addClass(" menuclick");

			var thisTit = $(this).attr("menuno");
			$(this).attr("viewed","true");
			
			if(thisTit != null){
				var thisOffsetTop = $("#" + thisTit).offset().top - 80;
				$('body,html').animate({
					//scrollTop:	pgBoxTop
					scrollTop:	thisOffsetTop
				},200);
			}
			closeAppMenu();
		});
	});

	$('.bbhover').each(function(){
		var thisEle = $(this).find(".hr1");
		var state = "";
		$(this).hover(
			function(){
				//thisEle.css({"background":"#fff"});
				thisEle.animate({
					opacity:'1'
				},400);
			},
			function(){
				//thisEle.css({"opacity":"0","background":"unset"});
				thisEle.animate({
					opacity:'0'
				},400);
			}
		);

		$(this).click(function(){
			//menu動作
			$('.bbhover').removeClass(" bbclick");
			$(this).addClass(" bbclick");
			$('.bbhover .hr1').css({"width":"100%","opacity":"0"});
			thisEle.css({"width":"100%","opacity":"1"});

			//顯示內文
			// console.log($(this));
			var thisNo = $(this).attr("cnt");
			var thisBlock = $("#serv" + thisNo);
			$(".serv").hide();
			$("#serv" + thisNo).show();
			$("#serv" + thisNo).addClass(" servmove");
			$("#servLeft").attr("no",thisNo);
			$("#servRight").attr("no",thisNo);			

			// $("#serv" + thisNo).animate({
			// 	opacity:'1',
			// 	top:"0"
			// },800);
			// var strItemLeftHtml = '';	
			// strItemLeftHtml += '<div class="arrowBox">';
			// strItemLeftHtml += '<i class="fas fa-arrow-circle-left" onclick="prevServ('+ thisNo +')" style="font-size:36px"></i>';
			// strItemLeftHtml += '<i class="fas fa-arrow-circle-right" onclick="nextServ('+ thisNo +')" style="font-size:36px"></i>';
			// strItemLeftHtml += '</div>';
			// $(".em .container").append(strItemLeftHtml);
		});
		
	});

	$(".calmenu li").each(function(){
		$(this).click(function(){
			// console.log($(this));
			$('.calmenu li').removeClass(" active");
			$(this).addClass(" active");	
			var thisNo = $(this).attr("no");	
			var thisEle = $("#tb" + thisNo);
			$('.cal table').css({"display":"none"});
			if(thisNo != null){
				thisEle.fadeTo(400,1);
			}
		});
	});



	//----------------------------------------
	

	  
  //index.html 上方隱藏主選單
  $(".menu_open").on("click", function(){
	  //alert("msg");
        $(".menu_main").animate({
			left:'5px',
			opacity:'1'
		});
  });
  $(".btn_hide").on("click", function(){
        $(".menu_main").animate({
			left:'-220px',
			opacity:'1'
		});
  });
  
	
	
});
function goTop(){
	$('.menu li').removeClass(" menuclick");
	$('body,html').animate({
		scrollTop:	0
	},400);
}
function animateUnderLine(eleName,speed){
	// eleName.animate({
	// 	width:'100px',
	// 	opacity:'1'
	// },speed);
}
function animateUnderLineClear(eleName,speed){
	eleName.animate({
		width:'0%',
		opacity:'0'
	},speed);
}

function nextSection(){	
	var thisNo = parseInt($(".calmenu li.active").attr("no"));
		thisNo = thisNo + 1;
		SectionFn(thisNo);
}
function prevSection(){
	var thisNo = parseInt($(".calmenu li.active").attr("no"));
		thisNo = thisNo - 1;
		SectionFn(thisNo);
	// var total = $(".calmenu li").length;
	// if(thisNo != null){
	// 	$(".calmenu li").each(function(){
	// 		if($(this).attr("no") == thisNo.toString()){	
	// 			//alert(thisNo);			
	// 			$(".calmenu li").css({"display":"none"});
	// 			$('.calmenu li').removeClass(" active");
	// 			$(this).addClass(" active");	
	// 			$(this).fadeTo(400,1);
	// 			$('.cal table').css({"display":"none"});
	// 			var thisEle = $("#tb" + thisNo);
	// 			thisEle.fadeTo(400,1);
	// 		}
	// 	});
	// }
}
function SectionFn(thisNo){
	var total = $(".calmenu li").length;
	if(thisNo != null){
		$(".calmenu li").each(function(){
			if($(this).attr("no") == thisNo.toString()){	
				//alert(thisNo);			
				$(".calmenu li").css({"display":"none"});
				$('.calmenu li').removeClass(" active");
				$(this).addClass(" active");	
				$(this).fadeTo(400,1);
				$('.cal table').css({"display":"none"});
				var thisEle = $("#tb" + thisNo);
				thisEle.fadeTo(400,1);
			}
		});
	}
}

function openAppMenu(){
	$(".menuOpen").hide();
	$(".menuClose").show();
	$(".menuGrp").slideDown();
	// $(".menuGrp").animate({
	// 	"left":"0%"
	// },400);
	//$("body").append("<div class='mask'></div>");
}
function closeAppMenu(){
	$(".menuOpen").show();
	$(".menuClose").hide();
	$(".menuGrp").slideUp();
	// $(".menuGrp").animate({
	// 	"left":"-100%"
	// },400);
	// $(".mask").animate({
	// 	"left":"-100%"
	// },400);
	// //$(".mask").remove();
}


function prevServ(){	
	var thisNo = $("#servLeft").attr("no");	
	$(".serv").removeClass(" servmove");
	$(".serv").removeClass(" servmoveLeft");
	$(".serv").removeClass(" servmoveRight");
	if(thisNo != null){
		thisNo = parseInt(thisNo) - 1;		
		$('.bbhover').each(function(){
			if($(this).attr("cnt") == thisNo){	
				$('.bbhover').removeClass(" bbclick");		
				$(this).addClass(" bbclick");
			}
		});
		$(".container .serv").each(function(){
			if($(this).attr("id") == "serv"+thisNo){
				$(".serv").hide();
				$("#serv" + thisNo).show();
				$("#serv" + thisNo).addClass(" servmoveLeft");
				$("#servRight").attr("no",thisNo);
				$("#servLeft").attr("no",thisNo);
			}
		});
	}
}
function nextServ(){
	var thisNo = $("#servRight").attr("no");
	$(".serv").removeClass(" servmove");
	$(".serv").removeClass(" servmoveLeft");
	$(".em .serv").removeClass(" servmoveRight");
	if(thisNo != null){
		thisNo = parseInt(thisNo) + 1;	
		$('.bbhover').each(function(){
			if($(this).attr("cnt") == thisNo){	
				$('.bbhover').removeClass(" bbclick");		
				$(this).addClass(" bbclick");
			}
		});
		$(".container .serv").each(function(){
			if($(this).attr("id") == "serv"+thisNo){
				$(".serv").hide();
				$("#serv" + thisNo).show();
				$(".em #serv" + thisNo).addClass(" servmoveRight");
				$("#servRight").attr("no",thisNo);
				$("#servLeft").attr("no",thisNo);	
			}
		});
	}
}
// function bbClick(){
// 	// $(this).click(function(){
// 	// 	var thisEle = $(this).find(".hr");
// 	// 	alert(thisEle);
// 	// 	$('.bbhover').removeClass(" bbclick");
// 	// 	$(this).addClass(" bbclick");
// 	// 	thisEle.css({"width":"100% !important","opacity":"1 !important"});
// 	// });
// }

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
	// console.log("index_energic--",$("#index_energic").offset().top);
	// console.log("index_success--",$("#index_success").offset().top);
	// console.log("index_teamwork--",$("#index_teamwork").offset().top);
	
	var offsetBelieve = $("#index_believe").offset().top;
	var offsetEnergic = $("#index_energic").offset().top;
	var offsetSuccess = $("#index_success").offset().top;
	var offsetTeamwork = $("#index_teamwork").offset().top;	
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
