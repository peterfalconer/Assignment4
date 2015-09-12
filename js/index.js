$(document).ready(function() {
    $(".readmore").click(slideoutPF);
    $(".hide").click(slideinPF);
    $(".learnmore").click(slideoutMore);

    function slideoutPF(e){
        e.preventDefault();
        $(".readmore").hide();
        $("#show-this-on-click").slideDown(400);
        $(".readless").show();
    };

    function slideinPF(e) {
        e.preventDefault();
        $(".hide").slideUp(10);
        $(".readmore").show();
    }

    function slideoutMore(e) {
        e.preventDefault();
        $(".learnmore").hide();
        $("#learnmoretext").slideDown(5000);
    }
});