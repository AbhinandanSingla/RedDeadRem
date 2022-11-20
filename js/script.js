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
    $('.verify').click(function () {
        let ver = gsap.timeline();
        localStorage.setItem('age', 'true')
        ver.to('.slide_bg', {
            duration: 4,
            scale: 2,
            xPercent: -150,
            ease: "power1.inOut",

        })
        ver.to('.login', {
            xPercent: -150,
            ease: "power1.in",

        }, '-=1')

    })
    if (localStorage.getItem('age') === 'true') {
        gsap.set('.login', {
            xPercent: 100
        })
    }
});

$(document).ready(function () {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let qntYears = 20;
    let selectYear = $("#year");
    let selectMonth = $("#month");
    let selectDay = $("#day");

    var currentYear = new Date(2004, 2, 2).getFullYear();
    for (var y = 0; y < qntYears; y++) {
        var yearElem = document.createElement("option");
        yearElem.value = currentYear
        yearElem.textContent = currentYear;
        selectYear.append(yearElem);
        currentYear--;
    }

    for (var m = 0; m < 12; m++) {
        let month = monthNames[m];
        let monthElem = document.createElement("option");
        monthElem.value = m;
        monthElem.textContent = month;
        selectMonth.append(monthElem);
    }

    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDate();

    selectYear.val(year);
    selectYear.on("change", AdjustDays);
    selectMonth.val(month);
    selectMonth.on("change", AdjustDays);
    AdjustDays();
    selectDay.val(day)

    function AdjustDays() {
        var year = selectYear.val();
        var month = parseInt(selectMonth.val()) + 1;
        selectDay.empty();
        //get the last day, so the number of days in that month
        var days = new Date(year, month, 0).getDate();
        //lets create the days of that month
        for (var d = 1; d <= days; d++) {
            var dayElem = document.createElement("option");
            dayElem.value = d;
            dayElem.textContent = d;
            selectDay.append(dayElem);
        }
    }

    selectYear[0][0].setAttribute('selected', '')
});

