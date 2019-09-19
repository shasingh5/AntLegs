(function ($) {
    // window.onload = function () {
    //     $('.skeleton-box').fadeOut(500, function () {
    //         $('.skeleton-box').remove();
    //     });
    // }


    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });



    $(window).scroll(function (event) {
        var scrollTop = $(document).scrollTop();
        if (scrollTop > 100) {
            $(".scroll-btn").fadeIn(400);
        } else {
            $(".scroll-btn").fadeOut(400);
        }
    });

    $(".scroll-btn").on('click', function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 800, function () {
            $(".scroll-btn").fadeOut(400);
        });
    });

    

})(jQuery);

function renderCard() {
    $('#skeletonBox .employer-logo').html('<img src="assets/images/sample-logo.jpg" alt="Microsoft">');
    $('#skeletonBox .employer-action').html('<button type="button" class="btn btn-new waves-effect">New</button>');
    $('#skeletonBox .card-title').text("Hexagone Technologies Private Li...");
    $('#skeletonBox .emp-name').text("Information Technology");
    $('#skeletonBox .emp-address').text("Indra Nagar, LBS Marg, Bangalore... ");
    $('#skeletonBox .web-link').text("www.hexagone.com");
    $('#skeletonBox .posting').text("Job Postings : 100  |  Hirings : 50 (50%)");
    $('#skeletonBox .open').text("Open : 50 (50%)  |  On-Hold : 20 (50%)");
    $('#skeletonBox .closed').text("Closed : 10 (50%)");
    $('#skeletonBox .publish-date').html("<span>Activated on:</span> Aug 16, 2019");
    $('#skeletonBox span.skeleton-box').remove();
}

setTimeout(function () {
    renderCard();
}, 5000);
