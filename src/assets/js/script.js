(function ($) {
    // window.onload = function () {
    //     $('.skeleton-box').fadeOut(500, function () {
    //         $('.skeleton-box').remove();
    //     });
    // }


    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $("#notification").mCustomScrollbar({
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

    $('.dropdown-menu').click(function(e) {
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

    $('.filter-tabs').on('click', 'li > a', function(event){  
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

    
    $(".inline-email .alert-list").on("click", function(event){                
        $(this).next(".email-box").slideToggle();
        $(this).parent().toggleClass("open");            
    });

    $(".email-box > .email").on("click", function(event){
        $(this).parent(".email-box").find(".msg-box").slideToggle();
        $(this).toggleClass("active");
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
