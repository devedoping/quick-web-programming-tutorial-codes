var loadMore = true;
$(function () {

    $('.portfolio-filter').click(function (e) {
        e.preventDefault();
        var type = this.getAttribute('data-type');
        if(type == 'all') {
            showAllPortfolioBoxes();
        } else {
            hideAllPortfolioBoxes();
            displayPortfolioBoxes(type);
        }
        hideAllActiveFilters();
        this.classList.add('active');
    });

    $('#green-btn').click(function () {
        if(loadMore) {
            $('.portfolio-box.hidden').fadeIn();
            $('#green-btn').text('Hide More Projects');
        } else {
            $('.portfolio-box.hidden').hide();
            $('#green-btn').text('Load More Projects');
        }
        loadMore = !loadMore;
    });

    $("#header-list a").click(function (){
        $('#header-list a.active').removeClass('active');
        $(this).addClass('active');
        var target = $(this).attr('href');
        console.log('$('+target+').offset().top')
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    $(window).scroll(function () {
        if($(this).scrollTop() >= 68) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

    $('#my-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            url: "https://reqres123.in/api/users",
            type: "POST",
            data: {
                name: $('#input-name').val(),
                email: $('#input-email').val(),
                job: $('#input-message').val()
            },
            success: function(response){
                console.log(response);
            },
            error: function (e) {
                console.log('error', e)
            }
        });
    });

});

function hideAllPortfolioBoxes() {
    var portfolioBoxes = document.getElementsByClassName('portfolio-box');
    for(var i = 0; i < portfolioBoxes.length; i++) {
        portfolioBoxes[i].style.display = 'none';
    }
}

function showAllPortfolioBoxes() {
    var portfolioBoxes = document.getElementsByClassName('portfolio-box');
    for(var i = 0; i < portfolioBoxes.length; i++) {
        portfolioBoxes[i].style.display = 'block';
    }
}

function hideAllActiveFilters() {
    var portfolioFilters = document.getElementsByClassName('portfolio-filter');
    for(var i = 0; i < portfolioFilters.length; i++) {
        if(portfolioFilters[i].classList.contains('active')) {
            portfolioFilters[i].classList.remove('active');
        }
    }
}

function displayPortfolioBoxes(filter) {
    var portfolioWeb = document.getElementsByClassName('portfolio-box-'+filter);
    for(var i = 0; i < portfolioWeb.length; i++) {
        portfolioWeb[i].style.display = 'block';
    }
}

function toggleMenu(x) {
    x.classList.toggle("change");
    $('#mobile-menu').toggle();
}
