function renderCard(){$("#skeletonBox .employer-logo").html('<img class="lazy" src="assets/images/sample-logo.jpg" data-src="assets/images/employer-logo-1.jpg" alt="Sample Logo"/>'),$("#skeletonBox .employer-action").html('<button type="button" class="btn btn-new waves-effect">New</button>'),$("#skeletonBox .card-title").text("Hexagone Technologies Private Li..."),$("#skeletonBox .emp-name").text("Information Technology"),$("#skeletonBox .emp-address").text("Indra Nagar, LBS Marg, Bangalore... "),$("#skeletonBox .web-link").text("www.hexagone.com"),$("#skeletonBox .posting").text("Job Postings : 100  |  Hirings : 50 (50%)"),$("#skeletonBox .open").text("Open : 50 (50%)  |  On-Hold : 20 (50%)"),$("#skeletonBox .closed").text("Closed : 10 (50%)"),$("#skeletonBox .publish-date").html("<span>Activated on:</span> Aug 16, 2019"),$("#skeletonBox span.skeleton-box").remove()}function recruiterRenderCard(){$(".recuiters-list .rating").html('<span class="fas fa-star"></span><span class ="fas fa-star"> </span> <span class="fas fa-star"> </span> <span class ="fas fa-star-half-alt"> </span> <span class ="far fa-star"> </span>'),$(".recuiters-list").find(".activated-recruiter .employer-action").html('<button type="button" class="btn btn-activated waves-effect">Activated</button>'),$(".recuiters-list").find(".deactivated-recruiter .employer-action").html('<button type="button" class="btn btn-deactivated waves-effect">Deactivated</button>'),$(".recuiters-list").find(".new-recruiter .employer-action").html('<button type="button" class="btn btn-new waves-effect">New</button>'),$(".recuiters-list .recruiter-name").html("<b>TalentSteen</b> (Premium Recruiter)"),$(".recuiters-list .recruiter-address").text("Bangalore, Karnataka, India"),$(".recuiters-list .company-type").text("Information Technology, Banking & Finance"),$(".recuiters-list").find(".deactivated-recruiter .pp, .activated-recruiter .pp").html("Projects : <b>100</b> | Placements : <b>10 (50%)</b>"),$(".recuiters-list").find(".deactivated-recruiter .rp, .activated-recruiter .rp").html("Rewards (USD) : <b>200,000</b> | Points : <b>20,000"),$(".recuiters-list").find(".new-recruiter .pp").html("Santhosh Kurichianil : <b>+91 9854433432</b>"),$(".recuiters-list").find(".new-recruiter .rp").html('LinkeIn : <a href="#" class="blue-text"><b>https://www.linkedin.com/sant...</b></a>'),$(".recuiters-list .publish-date").html("<span>Activated on:</span> Aug 16, 2019"),$(".recuiters-list span.skeleton-box").remove()}!function(i){i(".lazy").Lazy(),i("#sidebar").mCustomScrollbar({theme:"minimal-dark"}),i("#notification").mCustomScrollbar({theme:"minimal-dark"}),i(".rollover-list").mCustomScrollbar({theme:"minimal-dark"}),i(".recent-activities").mCustomScrollbar({theme:"minimal-dark"}),i(".modal-body-scroll").mCustomScrollbar({theme:"minimal-dark"}),i(".candidate-wrapper").mCustomScrollbar({theme:"minimal-dark"}),tinymce.init({selector:".job-description",height:200,menubar:!1,toolbar:"undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | fontsizeselect fontselect",content_css:["//www.tinymce.com/css/codepen.min.css","//fonts.googleapis.com/css?family=Indie+Flower"],font_formats:"Arial Black=arial black,avant garde;Indie Flower=indie flower, cursive;Times New Roman=times new roman,times;"}),i("#dismiss, .overlay").on("click",function(){i("#sidebar").removeClass("active"),i(".overlay").removeClass("active")}),i("#sidebarCollapse").on("click",function(){i("#sidebar").addClass("active"),i(".overlay").addClass("active"),i(".collapse.in").toggleClass("in"),i("a[aria-expanded=true]").attr("aria-expanded","false")}),i(".dropdown-menu").click(function(e){e.stopPropagation()}),i(window).scroll(function(e){100<i(document).scrollTop()?i(".scroll-btn").fadeIn(400):i(".scroll-btn").fadeOut(400)}),i(".scroll-btn").on("click",function(e){e.preventDefault(),i("html, body").animate({scrollTop:0},800,function(){i(".scroll-btn").fadeOut(400)})}),i(".filter-tabs").on("click","li > a",function(e){e.preventDefault();var t=i(this).attr("href");i(".filter-content").find(">div").hide(),i(".filter-content").find(t).show(),i(".filter-tabs > li").removeClass("active"),i(this).parent("li").addClass("active")}),i('[data-toggle="pophover"]').popover({html:!0}),i(".inline-email .alert-list").on("click",function(e){i(this).next(".email-box").slideToggle(),i(this).parent().toggleClass("open")}),i(".email-box > .email").on("click",function(e){i(this).parent(".email-box").find(".msg-box").slideToggle(),i(this).toggleClass("active")}),i("#calendar").fullCalendar({height:650,eventLongPressDelay:1e3,header:{left:"month,agendaWeek",center:"prev, title, next",right:"today"},navLinks:!0,selectable:!0,selectHelper:!0,select:function(e,t){i("#interviewScheduled").modal("show")},editable:!0,eventLimit:!0}),i("#starts-at, #ends-at").datetimepicker(),i("#save-event").on("click",function(){var e=i("#title").val();if(e){var t={title:e,start:i("#starts-at").val(),end:i("#ends-at").val()};i("#calendar").fullCalendar("renderEvent",t,!0)}i("#calendar").fullCalendar("unselect"),i("#interviewScheduled").modal("hide")}),i("#dashboardCalendar").fullCalendar({aspectRatio:3,header:{left:"month",center:"prev, title, next",right:"today"},navLinks:!0,selectable:!0,selectHelper:!0,select:function(e,t){i(".rollover").show()},editable:!0,eventLimit:!0}),i(".rollover-header").on("click",".close",function(e){i(".rollover").hide()}),i(".forgot-Password").on("click",function(e){e.preventDefault(),i(".forgot-block").slideToggle()}),i(".testimonials-slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:1,dots:!0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:815,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),i(".invoice-card-slider").slick({infinite:!1,slidesToShow:4,slidesToScroll:4,dots:!1,arrows:!0,responsive:[{breakpoint:815,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),i("#multiple-checkboxes").multiselect({enableFiltering:!1,numberDisplayed:2,onChange:function(e,t){3<=i("#multiple-checkboxes option:selected").length?i("#multiple-checkboxes option").filter(function(){return!i(this).is(":selected")}).each(function(){var e=i('input[value="'+i(this).val()+'"]');e.prop("disabled",!0),e.parent("li").addClass("disabled")}):i("#multiple-checkboxes option").each(function(){var e=i('input[value="'+i(this).val()+'"]');e.prop("disabled",!1),e.parent("li").addClass("disabled")})}}),i(".view-more-less").on("click",function(e){e.preventDefault(),i(".job-history").toggle(),i(this).toggleClass("less"),i(this).text(function(e,t){return"view more"===t?"view less":"view more"})})}(jQuery),setTimeout(function(){renderCard(),recruiterRenderCard()},3e3);