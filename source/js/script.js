$(document).ready(function() {
    $(".icon-search").on("click", function (e) {
        e.stopPropagation();
        $(".search-input").css({width: "200px", opacity: "1", "z-index": "1"});
    });
    
    $(".search-close").on("click", function (e) {
        e.stopPropagation();
        $(".search-input").css({width: "0", opacity: "0",  "z-index": "-1"});
    })
});
