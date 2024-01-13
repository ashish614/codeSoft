
$(".card").on("click",function (){
    $(".details").addClass("active");
});
$(".close-details").on("click",function(){
    $(".details").removeClass("active")
});

$(".menu-bar").on("click",function(){
    $(".sidebar").addClass("active")
});

$(".logo").on("click",function(){
    $(".sidebar").removeClass("active")
});

function jobApply(){
    document.getElementsByClassName(".btn-apply").jobApply();
}
