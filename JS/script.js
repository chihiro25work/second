"use strict";
// ハンバーガーメニュー
const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".gnav");

toggle.addEventListener("click", () => {
    nav.style.display = nav.style.display === "block" ? "none" : "block";
});

// トップに戻るアイコン
$(function () {
    var pagetop = $("#page-top");
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $("body, html").animate({ scrollTop: 0 }, 500);
        return false;
    });
});

// KV スライドショー
$(function () {
    $(".slideshow-fade li").css({ position: "relative", overflow: "hidden" });
    $(".slideshow-fade li").hide().css({ position: "absolute", top: 0, left: 0 });
    $(".slideshow-fade li:first").addClass("fade").show();
    setInterval(function () {
        var $active = $(".slideshow-fade li.fade");
        var $next = $active.next("li").length ? $active.next("li") : $(".slideshow-fade li:first");
        $active.fadeOut(1500).removeClass("fade");
        $next.fadeIn(1500).addClass("fade");
    }, 3500);
});
