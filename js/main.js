$(document).ready(function () {

    console.log('Что происходит с кэшированием?');

    var menuNameText = $('.menu-button-block__menu-name').text();

    var isMenuActive = false;

    $('.menu-btn, .menu-button-block__menu-name').on('click', function (event) {
        event.preventDefault();
        $('.menu-btn').toggleClass('is-open');
        if ($('.menu-btn').hasClass('is-open')) {
            openMenu();
        }
        else {
            closeMenu();
        }
    });

    closeMenuOnBodyClick();

    function openMenu() {
        isMenuActive = true;
        $(".menu-btn, .menu-button-block, .nav, .menu-button-block__menu-name")
            .addClass('is-active');
        $(".menu-button-block__menu-name")
            .text("закрыть");
    }

    function closeMenu() {

        $(".nav")
            .removeClass('is-active');
        setTimeout(function () {
            $(".menu-btn, .menu-button-block, .menu-button-block__menu-name")
                .removeClass('is-active');
        }, 500);
        $(".menu-button-block__menu-name")
            .text(menuNameText)
    }

    function closeMenuOnBodyClick() {
        $(document).click(function (event) {
            if (!$(event.target).closest('.nav').length && !$(event.target).closest('.menu-button-block').length) {
                closeMenu();
                $('.menu-btn').removeClass('is-open');
            }
        });
    }

    $(".scroll-to-bottom").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });

    $('.search').find('.search__input').on('focus', function(){
            $(this).addClass('is-active');
            $(this).next('.search__submit').addClass('is-active');
    });


    $('.search').find('.search__input').bind('keyup paste change', function () {
        var isEmpty = true;
        if (isEmpty = true && $.trim(this.value) === "") {
            isEmpty = false;
        }
        else {
            isEmpty = true;
        }
        showHideSubmit(isEmpty, $(this).next('.search__submit'));
    });

    $('.search__input').on('blur', function(){
        $(this).removeClass('is-active');
        $(this).next('.search__submit').removeClass('is-active');
    });

    function showHideSubmit(variable, obj) {
        if (variable == true) {
            obj.removeAttr('disabled')
        }
        else {
            obj.attr('disabled', true)
        }
    };
});

