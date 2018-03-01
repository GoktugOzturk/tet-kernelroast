/*
 Author: Genio - Yüce Özkan
 Author URL: http://www.genio.com.tr/
 */
$(document).ready(function() {

    var isWebkit = 'WebkitAppearance' in document.documentElement.style;
    var html = $(document).find("html");
    var body = $(document).find("body");
    if(isWebkit){html.addClass("webkit");}
    html.addClass("dom-ready");


    /*input mask & valid*/
    $(document).on("keypress paste",".numeric",function (e) {
        var key = e.keyCode || e.which;
        var keyArray = [37,38,39,40,8,46];
        if(jQuery.inArray(key,keyArray) > 0) {
            return true;
        }
        else
        {
            var code = e.charCode || e.keyCode;
            if (String.fromCharCode(code).match(/[^0-9]/g)) return false;
        }
    });
    $(document).on("keypress paste",".alphabetical",function (e) {
        var key = e.keyCode || e.which;
        var keyArray = [37,38,39,40,8,46];
        if(jQuery.inArray(key,keyArray) > 0) {
            return true;
        }
        else
        {
            var code = e.charCode || e.keyCode;
            if (String.fromCharCode(code).match(/[^a-zA-ZığüşöçİĞÜŞÖÇ ]/g)) return false;
        }
    });
    $(document).on("keypress paste",".alphanumeric",function (e) {
        var key = e.keyCode || e.which;
        var keyArray = [37,38,39,40,8,46];
        if(jQuery.inArray(key,keyArray) > 0) {
            return true;
        }
        else
        {
            var code = e.charCode || e.keyCode;
            if (String.fromCharCode(code).match(/[^a-zA-Z0-9]/g)) return false;
        }
    });
    $(document).on("keypress paste",".email",function (e) {
        var key = e.keyCode || e.which;
        var keyArray = [37,38,39,40,8,46];
        if(jQuery.inArray(key,keyArray) > 0) {
            return true;
        }
        else
        {
            var code = e.charCode || e.keyCode;
            if (String.fromCharCode(code).match(/[^a-zA-Z0-9-_@]/g)) return false;
        }

    });

    $(window).resize(function(){

        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        mobileDetect();

    }).trigger("resize");



    var wrapper = $(document);
    init(wrapper);

    $(window).load(function(){

    });
    $(window).scroll(function(){

    }).trigger("scroll");

    function mobileDetect(){
        var html = $(document).find("html");
        var md = new MobileDetect(window.navigator.userAgent);
        html.removeClass("mobile phone tablet");
        if(md.mobile())
        {
            html.addClass("mobile");
        }
        if(md.phone())
        {
            html.addClass("phone");
        }
        if(md.tablet())
        {
            html.addClass("tablet");
        }

        if(html.hasClass("mobile")){
        }
        else
        {
        }
    }

    $(document).on("click",".scroll-to-top",function(e){
        e.preventDefault();
        $(document).find("html,body").animate({
            scrollTop:0
        },500);
    });
    $(document).on("click",".nav-trigger",function(e){
        e.preventDefault();
        html.toggleClass("menu-open");
        html.toggleClass("menu-open-steps");
    });
    $(document).on("click",".close-nav",function(e){
        e.preventDefault();
        html.removeClass("menu-open-steps");
        html.removeClass("menu-open");
    });

    $(document).on("click",".nav-content ul li a",function(e){
        var parent = $(this).parents("li");
        if(parent.find("ul").length > 0)
        {
            if(parent.find("ul").is(":visible"))
            {
                parent.find("ul").slideUp();
                parent.removeClass("active");
                e.preventDefault();
            }
            else
            {
                parent.find("ul").slideDown();
                parent.addClass("active");
                e.preventDefault();
            }
        }
    });

    $(document).on("click",".change-grid a",function(e){
        e.preventDefault();
        $(document).find(".category-list").removeClass("col-2");
        if($(this).hasClass("col-2"))
        {
            $(document).find(".category-list").addClass("col-2");
        }
    });

    $(document).on("click",".gallery-pager ul li a",function(e){
        e.preventDefault();
        var image = $(this).attr("data-image");
        $(document).find(".gallery-viewer img").css({
            "visibility":"hidden"
        });

        var tmpImg = new Image() ;
        tmpImg.src = image;
        tmpImg.onload = function() {

            $(document).find(".gallery-viewer img").css({
                "visibility":"visible"
            }).attr("src",image);

        };

    });

    $(document).on("click",".toggle-address",function(e){

        e.preventDefault();
        var searchPlaces = $(document).find("#search-place");
        var addressManual = $(document).find("#address-manual");

        searchPlaces.slideToggle();
        addressManual.slideToggle();

    });

    $(document).on("click",function(e){
        var clickedOnMiniBasket = false;
        if($(e.target).hasClass("mini-basket"))
        {
            clickedOnMiniBasket = true;
        }
        if($(e.target).parents(".mini-basket").length > 0)
        {
            clickedOnMiniBasket = true;
        }

        var clickedOnMyAccount = false;
        if($(e.target).hasClass("mini-account"))
        {
            clickedOnMyAccount = true;
        }
        if($(e.target).parents(".mini-account").length > 0)
        {
            clickedOnMyAccount = true;
        }

        var clickedOnMenu = false;
        if($(e.target).hasClass("nav-menu"))
        {
            clickedOnMenu = true;
        }
        if($(e.target).parents(".nav-menu").length > 0)
        {
            clickedOnMenu = true;
        }

        if(!clickedOnMiniBasket)
        {
            if(html.hasClass("basket-open"))
            {
                e.preventDefault();
                html.removeClass("account-open");
                html.removeClass("menu-open");
                html.removeClass("basket-open");
                e.stopPropagation();
            }
        }
        if(!clickedOnMyAccount)
        {
            if(html.hasClass("account-open"))
            {
                e.preventDefault();
                html.removeClass("account-open");
                html.removeClass("menu-open");
                html.removeClass("basket-open");
                e.stopPropagation();
            }
        }
        if(!clickedOnMenu)
        {
            if(html.hasClass("menu-open"))
            {
                e.preventDefault();
                html.removeClass("account-open");
                html.removeClass("menu-open");
                html.removeClass("basket-open");
                e.stopPropagation();
            }
        }
    });
    $(document).on("click",".user-panel .my-cart > a",function(e){
        e.preventDefault();
        html.removeClass("account-open");
        html.removeClass("menu-open");

        html.toggleClass("basket-open");
        e.stopPropagation();
    });
    $(document).on("click",".user-panel .my-account > a",function(e){
        e.preventDefault();
        html.removeClass("basket-open");
        html.removeClass("menu-open");

        html.toggleClass("account-open");
        e.stopPropagation();
    });
    $(document).on("click",".menu-trigger > a",function(e){
        e.preventDefault();
        html.removeClass("basket-open");
        html.removeClass("account-open");

        html.toggleClass("menu-open");
        e.stopPropagation();
    });

    $(".product-rates").each(function(){
        var rating = $(this).attr("data-rating");
        var item = $(this);
        item.rateYo({
            rating: parseFloat(rating),
            halfStar: true,
            readOnly: true,
            normalFill: "#cbcbcb",
            ratedFill: "#e64a30",
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-rule="evenodd" d="M25.172 9.309c0-.468-.842-.526-1.19-.526l-8.13.029-2.525-7.576C13.21.914 12.978.3 12.572.3c-.407 0-.64.614-.755.936L9.32 8.812l-8.159-.03C.813 8.783 0 8.841 0 9.31c0 .351.436.702.697.878l6.59 4.68-2.525 7.575a2.024 2.024 0 0 0-.146.702c0 .293.146.556.436.556.348 0 .668-.205.929-.41l6.59-4.65 6.591 4.65c.262.176.581.41.93.41.319 0 .406-.293.406-.585 0-.234-.03-.468-.116-.673l-2.497-7.575 6.59-4.68c.262-.176.697-.527.697-.878z"/></svg>',
            starWidth: "12px"
        });
    });
    $(".product-rates-large").each(function(){
        var rating = $(this).attr("data-rating");
        var item = $(this);
        item.rateYo({
            rating: parseFloat(rating),
            halfStar: true,
            readOnly: true,
            normalFill: "#cbcbcb",
            ratedFill: "#e64a30",
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-rule="evenodd" d="M25.172 9.309c0-.468-.842-.526-1.19-.526l-8.13.029-2.525-7.576C13.21.914 12.978.3 12.572.3c-.407 0-.64.614-.755.936L9.32 8.812l-8.159-.03C.813 8.783 0 8.841 0 9.31c0 .351.436.702.697.878l6.59 4.68-2.525 7.575a2.024 2.024 0 0 0-.146.702c0 .293.146.556.436.556.348 0 .668-.205.929-.41l6.59-4.65 6.591 4.65c.262.176.581.41.93.41.319 0 .406-.293.406-.585 0-.234-.03-.468-.116-.673l-2.497-7.575 6.59-4.68c.262-.176.697-.527.697-.878z"/></svg>',
            starWidth: "16px"
        });
    });
    $(".product-rates-xlarge").each(function(){
        var rating = $(this).attr("data-rating");
        var item = $(this);
        item.rateYo({
            rating: parseFloat(rating),
            halfStar: true,
            readOnly: true,
            normalFill: "#cbcbcb",
            ratedFill: "#e64a30",
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-rule="evenodd" d="M25.172 9.309c0-.468-.842-.526-1.19-.526l-8.13.029-2.525-7.576C13.21.914 12.978.3 12.572.3c-.407 0-.64.614-.755.936L9.32 8.812l-8.159-.03C.813 8.783 0 8.841 0 9.31c0 .351.436.702.697.878l6.59 4.68-2.525 7.575a2.024 2.024 0 0 0-.146.702c0 .293.146.556.436.556.348 0 .668-.205.929-.41l6.59-4.65 6.591 4.65c.262.176.581.41.93.41.319 0 .406-.293.406-.585 0-.234-.03-.468-.116-.673l-2.497-7.575 6.59-4.68c.262-.176.697-.527.697-.878z"/></svg>',
            starWidth: "24px"
        });
    });
    $(".product-review-rates").each(function(){
        var rating = $(this).attr("data-rating");
        var item = $(this);
        item.rateYo({
            rating: parseFloat(rating),
            halfStar: true,
            readOnly: true,
            normalFill: "#cbcbcb",
            ratedFill: "#e64a30",
            starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="24" viewBox="0 0 26 24"><path fill-rule="evenodd" d="M25.172 9.309c0-.468-.842-.526-1.19-.526l-8.13.029-2.525-7.576C13.21.914 12.978.3 12.572.3c-.407 0-.64.614-.755.936L9.32 8.812l-8.159-.03C.813 8.783 0 8.841 0 9.31c0 .351.436.702.697.878l6.59 4.68-2.525 7.575a2.024 2.024 0 0 0-.146.702c0 .293.146.556.436.556.348 0 .668-.205.929-.41l6.59-4.65 6.591 4.65c.262.176.581.41.93.41.319 0 .406-.293.406-.585 0-.234-.03-.468-.116-.673l-2.497-7.575 6.59-4.68c.262-.176.697-.527.697-.878z"/></svg>',
            starWidth: "16px"
        });
    });

    $(document).on("inputFileChanged",function(e,data){

        var files =  data.files;
        $(data).parents(".custom-file").find(".custom-file-result-text").text(files[0].name);


        /*var mediafilename = "";

        for (var i = 0; i < files.length; i++) {
            mediafilename = files[i].name;
        }*/

    });


});//ready
