function renderCard(){$("#skeletonBox .employer-logo").html('<img src="assets/images/sample-logo.jpg" alt="Microsoft">'),$("#skeletonBox .employer-action").html('<button type="button" class="btn btn-new waves-effect">New</button>'),$("#skeletonBox .card-title").text("Hexagone Technologies Private Li..."),$("#skeletonBox .emp-name").text("Information Technology"),$("#skeletonBox .emp-address").text("Indra Nagar, LBS Marg, Bangalore... "),$("#skeletonBox .web-link").text("www.hexagone.com"),$("#skeletonBox .posting").text("Job Postings : 100  |  Hirings : 50 (50%)"),$("#skeletonBox .open").text("Open : 50 (50%)  |  On-Hold : 20 (50%)"),$("#skeletonBox .closed").text("Closed : 10 (50%)"),$("#skeletonBox .publish-date").html("<span>Activated on:</span> Aug 16, 2019"),$("#skeletonBox span.skeleton-box").remove()}function recruiterRenderCard(){$(".recuiters-list .rating").html('<span class="fas fa-star"></span><span class ="fas fa-star"> </span> <span class="fas fa-star"> </span> <span class ="fas fa-star-half-alt"> </span> <span class ="far fa-star"> </span>'),$(".recuiters-list").find(".activated-recruiter .employer-action").html('<button type="button" class="btn btn-activated waves-effect">Activated</button>'),$(".recuiters-list").find(".deactivated-recruiter .employer-action").html('<button type="button" class="btn btn-deactivated waves-effect">Deactivated</button>'),$(".recuiters-list").find(".new-recruiter .employer-action").html('<button type="button" class="btn btn-new waves-effect">New</button>'),$(".recuiters-list .recruiter-name").html("<b>TalentSteen</b> (Premium Recruiter)"),$(".recuiters-list .recruiter-address").text("Bangalore, Karnataka, India"),$(".recuiters-list .company-type").text("Information Technology, Banking & Finance"),$(".recuiters-list").find(".deactivated-recruiter .pp, .activated-recruiter .pp").html("Projects : <b>100</b> | Placements : <b>10 (50%)</b>"),$(".recuiters-list").find(".deactivated-recruiter .rp, .activated-recruiter .rp").html("Rewards (USD) : <b>200,000</b> | Points : <b>20,000"),$(".recuiters-list").find(".new-recruiter .pp").html("Santhosh Kurichianil : <b>+91 9854433432</b>"),$(".recuiters-list").find(".new-recruiter .rp").html('LinkeIn : <a href="#" class="blue-text"><b>https://www.linkedin.com/sant...</b></a>'),$(".recuiters-list .publish-date").html("<span>Activated on:</span> Aug 16, 2019"),$(".recuiters-list span.skeleton-box").remove()}!function(a){a("#sidebar").mCustomScrollbar({theme:"minimal"}),a("#notification").mCustomScrollbar({theme:"minimal-dark"}),a("#dismiss, .overlay").on("click",function(){a("#sidebar").removeClass("active"),a(".overlay").removeClass("active")}),a("#sidebarCollapse").on("click",function(){a("#sidebar").addClass("active"),a(".overlay").addClass("active"),a(".collapse.in").toggleClass("in"),a("a[aria-expanded=true]").attr("aria-expanded","false")}),a(".dropdown-menu").click(function(e){e.stopPropagation()}),a(window).scroll(function(e){100<a(document).scrollTop()?a(".scroll-btn").fadeIn(400):a(".scroll-btn").fadeOut(400)}),a(".scroll-btn").on("click",function(e){e.preventDefault(),a("html, body").animate({scrollTop:0},800,function(){a(".scroll-btn").fadeOut(400)})}),a(".filter-tabs").on("click","li > a",function(e){e.preventDefault();var t=a(this).attr("href");a(".filter-content").find(">div").hide(),a(".filter-content").find(t).show(),a(".filter-tabs > li").removeClass("active"),a(this).parent("li").addClass("active")}),a('[data-toggle="pophover"]').popover({html:!0}),a(".inline-email .alert-list").on("click",function(e){a(this).next(".email-box").slideToggle(),a(this).parent().toggleClass("open")}),a(".email-box > .email").on("click",function(e){a(this).parent(".email-box").find(".msg-box").slideToggle(),a(this).toggleClass("active")})}(jQuery),setTimeout(function(){renderCard(),recruiterRenderCard()},3e3);