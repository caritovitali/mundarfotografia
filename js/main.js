
      // self executing function here
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          document.getElementById("navbar").style.padding = "0px 0px";
          document.getElementById("navbar").style.backgroundColor = "#3e6481";
          document.getElementById("logo").style.width = "45px";
        } else {
          document.getElementById("navbar").style.padding = "0px 0px";
          document.getElementById("navbar").style.backgroundColor = "#3e64816b";
          document.getElementById("logo").style.width = "70px";
        }
      }