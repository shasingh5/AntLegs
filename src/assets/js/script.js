(function ($) {

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

//input highlight without required attr
window.addEventListener('load', function () {
    var inp = document.querySelectorAll('.group input');
    var sel = document.querySelectorAll('.group select');
    var textArea = document.querySelectorAll('.group textarea');
    for (var i = 0; i < inp.length; i++) {
        inp[i].addEventListener('change', function () {
            this.setAttribute('value', this.value);
        })
    }
    for (var i = 0; i < sel.length; i++) {
        sel[i].addEventListener('change', function () {
            this.setAttribute("value", this.value);
        })
    }
    for (var i = 0; i < textArea.length; i++) {
        textArea[i].addEventListener('change', function () {
            this.setAttribute("value", this.value);
        })
    }
})