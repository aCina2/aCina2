var float_btn = $("#float-btn");
        var scrollTop = 0;
        //Function Scroll function 
        window.onscroll = function () {
            scrollTop = window.scrollY;
            var btnArrow = $(".btnArrow");
            if (scrollTop > 100) {
                float_btn.fadeIn();
            } else if (scrollTop < 100) {

                float_btn.fadeOut();
            }
           
        }
            $("#float-btn").click(function () {
                var top = 0;

                let myTime = setInterval(function () {

                    window.scrollBy(0, top--);
                    if (scrollTop == 0) {
                        clearInterval(myTime);
                        top = 0;
                    }
                    //console.log(top);

                }, 10);
            }); 