
      // self executing function here
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("navbar").style.padding = "0px 0px";
          document.getElementById("navbar").style.backgroundColor = "#254a66";
          document.getElementById("logo").style.width = "50px";
        } else {
          document.getElementById("navbar").style.padding = "20px 10px";
          document.getElementById("navbar").style.backgroundColor = "#00000033";
          document.getElementById("logo").style.width = "70px";
        }
      }