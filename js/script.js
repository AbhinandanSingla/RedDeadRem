$(document).ready(function () {
    gsap.set('.mobileNav', {
        xPercent: -100
    })
    $("#close").click(function () {
        // $('.mobileNav').hide();
        gsap.to('.mobileNav', {
            xPercent: -100
        })
    });

    $(".mobileSvg").click(function () {
        gsap.to('.mobileNav', {
            xPercent: 0
        })
    });
});