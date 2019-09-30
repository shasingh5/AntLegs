(function ($) {
    // window.onload = function () {
    //     $('.skeleton-box').fadeOut(500, function () {
    //         $('.skeleton-box').remove();
    //     });
    // }

    // Lazy Loading initialization
    $('.lazy').Lazy();

    $("#sidebar").mCustomScrollbar({
        theme: "minimal-dark"
    });

    $("#notification").mCustomScrollbar({
        theme: "minimal-dark"
    });

    $(".rollover-list").mCustomScrollbar({
        theme: "minimal-dark"
    });

    $(".recent-activities").mCustomScrollbar({
        theme: "minimal-dark"
    });
 
    $(".modal-body").mCustomScrollbar({
        theme: "minimal-dark"
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

    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
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

    $('.filter-tabs').on('click', 'li > a', function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        $('.filter-content').find('>div').hide();
        $('.filter-content').find(id).show();
        $('.filter-tabs > li').removeClass('active');
        $(this).parent('li').addClass('active');
    });

    $('[data-toggle="pophover"]').popover({
        html: true,
        //trigger: "hover"
    });


    $(".inline-email .alert-list").on("click", function (event) {
        $(this).next(".email-box").slideToggle();
        $(this).parent().toggleClass("open");
    });

    $(".email-box > .email").on("click", function (event) {
        $(this).parent(".email-box").find(".msg-box").slideToggle();
        $(this).toggleClass("active");
    });

    //Please read document from https://fullcalendar.io/docs
    //interveiw full calendar
    $('#calendar').fullCalendar({
        aspectRatio: 2,
        header: {
            left: 'month,agendaWeek',
            center: 'prev, title, next',
            right: 'today'
        },
        //defaultDate: '2019-09-29',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
            // Display the modal.
            // You could fill in the start and end fields based on the parameters
            $('#interviewScheduled').modal('show');

        },
        // eventClick: function (event, element) {
        //     // Display the modal and set the values to the event values.
        //     $('#interviewScheduled').modal('show');
        //     $('#interviewScheduled').find('#title').val(event.title);
        //     $('#interviewScheduled').find('#starts-at').val(event.start);
        //     $('#interviewScheduled').find('#ends-at').val(event.end);

        // },
        editable: true,
        eventLimit: true // allow "more" link when too many events

    });

    // Bind the dates to datetimepicker.
    // You should pass the options you need
    $("#starts-at, #ends-at").datetimepicker();

    // Whenever the user clicks on the "save" button om the dialog
    $('#save-event').on('click', function () {
        var title = $('#title').val();
        if (title) {
            var eventData = {
                title: title,
                start: $('#starts-at').val(),
                end: $('#ends-at').val()
            };
            $('#calendar').fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $('#calendar').fullCalendar('unselect');

        // Clear modal inputs
        // $('.modal').find('input').val('');

        // hide modal
        $('#interviewScheduled').modal('hide');
    });

    //dashboard small calendar
    $('#dashboardCalendar').fullCalendar({
        aspectRatio: 3,
        header: {
            left: 'month',
            center: 'prev, title, next',
            right: 'today'
        },
        //defaultDate: '2019-09-29',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        select: function (start, end) {
            // Display the modal.
            // You could fill in the start and end fields based on the parameters
            $('.rollover').show();

        },
        // eventClick: function (event, element) {
        //     // Display the modal and set the values to the event values.
        //     $('#interviewScheduled').modal('show');
        //     $('#interviewScheduled').find('#title').val(event.title);
        //     $('#interviewScheduled').find('#starts-at').val(event.start);
        //     $('#interviewScheduled').find('#ends-at').val(event.end);

        // },
        editable: true,
        eventLimit: true // allow "more" link when too many events

    });
    
    $(".rollover-header").on("click", ".close", function (event) {
        $('.rollover').hide();
    });

})(jQuery);

function renderCard() {
    $('#skeletonBox .employer-logo').html('<img class="lazy" src="assets/images/sample-logo.jpg" data-src="assets/images/employer-logo-1.jpg" alt="Sample Logo"/>');
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

function recruiterRenderCard() {
    var starHtml = '<span class="fas fa-star"></span><span class ="fas fa-star"> </span> <span class="fas fa-star"> </span> <span class ="fas fa-star-half-alt"> </span> <span class ="far fa-star"> </span>';

    $('.recuiters-list .rating').html(starHtml);

    $(".recuiters-list").find(".activated-recruiter .employer-action").html('<button type="button" class="btn btn-activated waves-effect">Activated</button>');
    $(".recuiters-list").find(".deactivated-recruiter .employer-action").html('<button type="button" class="btn btn-deactivated waves-effect">Deactivated</button>');
    $(".recuiters-list").find(".new-recruiter .employer-action").html('<button type="button" class="btn btn-new waves-effect">New</button>');

    $('.recuiters-list .recruiter-name').html("<b>TalentSteen</b> (Premium Recruiter)");
    $('.recuiters-list .recruiter-address').text("Bangalore, Karnataka, India");
    $('.recuiters-list .company-type').text("Information Technology, Banking & Finance");

    $(".recuiters-list").find('.deactivated-recruiter .pp, .activated-recruiter .pp').html("Projects : <b>100</b> | Placements : <b>10 (50%)</b>");
    $(".recuiters-list").find('.deactivated-recruiter .rp, .activated-recruiter .rp').html("Rewards (USD) : <b>200,000</b> | Points : <b>20,000");

    $(".recuiters-list").find('.new-recruiter .pp').html("Santhosh Kurichianil : <b>+91 9854433432</b>");
    $(".recuiters-list").find('.new-recruiter .rp').html('LinkeIn : <a href="#" class="blue-text"><b>https://www.linkedin.com/sant...</b></a>');

    $('.recuiters-list .publish-date').html("<span>Activated on:</span> Aug 16, 2019");

    $('.recuiters-list span.skeleton-box').remove();
}

setTimeout(function () {
    renderCard();
    recruiterRenderCard();
}, 3000);