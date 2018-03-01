function fitHeight(firstItem, secondItem) {
    if ($(window).innerWidth() > 767) {
        var firstItemH = $(firstItem).outerHeight();
        var secondItemH = $(secondItem).outerHeight();
        if (firstItemH > secondItemH) {
            $(secondItem).css("min-height", firstItemH + "px");
        } else {
            $(firstItem).css("min-height", secondItemH + "px");
        }
    } else {
        $(firstItem).css("min-height", "auto");
        $(secondItem).css("min-height", "auto");
    }
}
$(function () {
    $(window).on('oasis.resize', function () {
        $("#menu-hover").height($("body").innerHeight());
    });
    if ($(window).innerWidth() > 767) {
        $('.dropdown-opener').hover(function () {
            $('#menu-hover').addClass("active");
        }, function () {
            $('#menu-hover').removeClass("active");
        });
    }
    $('#filter-btn').on('click', function () {
        var itemHeight = $(this).closest(".filter-content").find(".fix-height-container-wb").find(".fix-height-wb").height();
        $(this).closest(".filter-content").find(".fix-height-container-wb").height(itemHeight);
        $(this).fadeOut(450);
    });
});
var navbar, navbaroffset, initMobile = false;
function initMobileMenu() {
    initMobile = true;
    if (typeof $.fn.mmenu != "undefined") {
        $("#main-menu").mmenu({"navbar": {"title": "Menü"}}, {clone: true});
        $("#user-menu").mmenu({"navbar": {"title": "Kullanıcı"}}, {clone: true});
        $("#filter-wrapper").mmenu({"navbar": {"title": "Filtreler"}}, {clone: true});
    }
}
$(function () {
    /* fixed Navbar */
    navbar = $("#navigation");
    if (navbar.length > 0) {
        navbaroffset = navbar.offset().top;
    }
    $(window).on('scroll resize', function () {
        if ($(window).scrollTop() > navbaroffset) {
            navbar.addClass('navbar-fixed-top');
            if ($(window).innerWidth() > 767) {
                navbar.find('.nav-logo').addClass('active');
            }
        } else {
            navbar.removeClass('navbar-fixed-top');
            if ($(window).innerWidth() > 767) {
                navbar.find('.nav-logo').removeClass('active');
            }
        }
        if (initMobile == false && $(window).innerWidth() < 1000) {
            initMobileMenu();
        }
    });
    if ($(window).innerWidth() < 1000) {
        /* Mobile Collapse */
        $("#home-tab-1").find("li").removeClass("active");
        $("#one-cikanlar-collapse").removeClass("in");
        /* # Mobile Collapse #*/
        initMobileMenu();
        /* Mobile Nav Buttons Offset Fix */
        var mobileMenu = $("#mobile-menu-buttons").clone();
        document.body.prepend(mobileMenu[0]);
        /* # Mobile Nav Buttons Offset Fix # */
        $('.tab-image-block-nav').each(function () {
            $(this).find("li:eq(0)").insertAfter($(this).find("li:eq(3)"));
        });
    }
    $('.btn-24-close').click(function () {
      $('.product-last-24-views').addClass('hidden');
    })
});
