<link rel="shortcut icon" href="images/logo.ico"><!-- 開發用 -->
<script type="text/javascript" src="js/jquery.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<script src="js/common1.js"></script>    
<link rel="stylesheet" href="css/common.css">
<style type="text/css">
    body,html{overflow-x: hidden;}
    .backAdmin{background:#1b1b1b;color:#fff;display:block;height:100vh;width:100vw;}
    .backAdmin h1,.backAdmin div,.backAdmin a{font-family:'Microsoft JhengHei',arial;}
    .backAdmin .adminNav{width:100%;height:100vh;background:#1b1b1b;}
    .backAdmin .adminContainer{background:#fff;color:#000;border-radius:5px;width:100%;height:100vh;}
    .backAdmin .adminContainer .container{}
    .backAdmin .listMenu .list-group-item{padding-left:15px;}
    .col-admin{flex: 0 0 10%; max-width: 10%;padding:0;}
    .col-container{flex: 0 0 90%; max-width: 90%;padding:0;}
    .adminHead .d-flex div{margin:0 1rem;}
    a.a3{color:#fff;}
    .backAdmin .modal-dialog{max-width:90%;}
</style>
<script>
    // alert($(location).attr('href'))
    $(document).ready(function() {
        // $("#openUrl").click(function() {
        //     alert("test")
        //     console.log(thisUrl);
        //     $(window).localStorage.setItem('a','123456');
        // });
        var thisPageUrl = $(location).attr('href');
        $(".appNav a").each(function(){
            $(this).click(function(){
                console.log($(this));
                // $('.calmenu li').removeClass(" active");
                // $(this).addClass(" active");	
                // var thisNo = $(this).attr("no");	
                // var thisEle = $("#tb" + thisNo);
                // $('.cal table').css({"display":"none"});
                // if(thisNo != null){
                //     thisEle.fadeTo(400,1);
                // }
            });
        });
    })
</script>
