$(document).ready(function () {
  $(".bxslider").bxSlider({
    pager: false,
  });
  $(".bxslider_team").bxSlider({});
  $(".flexslider").flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 200,
    itemMargin: 25,
    touch: true,
  });
  $(".accordion").accordion({
    defaultOpen: "",
  });
  $(function () {
    let filterList = {
      init: function () {
        $(".workportfolio").mixitup({
          targetSelector: ".portfolio",
          filterSelector: ".filter",
          effects: ["fade"],
          easing: "snap",
        });
      },
    };
    filterList.init();
  });
  $(".primary-nav-trigger").on("click", function () {
    $(".menu-icon").toggleClass("is-clicked");
    $(".primary-nav").toggleClass("is-visible");
    $("body").toggleClass("overflow-hidden");
  });
  $(".primary-nav").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
      $(".primary-nav-trigger").click();
    $("body,html").animate({ scrollTop: (top - $(".topheader").height()) }, 1000);
  });

  let headerHeight = $(".topheader").height();
  $(window).on("scroll", { previousTop: 0 }, function () {
    let currentTop = $(window).scrollTop();
    if ((currentTop < this.previousTop)) {
      if (!(currentTop > 0) && $(".topheader").hasClass("is-fixed")) {
        $(".topheader").removeClass("is-fixed");
      }
    } else {
      if (currentTop > headerHeight && !$(".topheader").hasClass("is-fixed")) {
        $(".topheader").addClass("is-fixed");
      }
    }
    this.previousTop = currentTop;
  });
});
