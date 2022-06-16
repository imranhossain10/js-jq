// vanila javascript 
let overme = document.getElementById('overme');
let main = document.getElementById('main');
overme.addEventListener('mouseover',(e)=>{
    overme.parentElement.parentElement.parentElement.classList.add('d-none');
    main.classList.add('d-block');
    main.classList.remove('d-none');
});

// jquery 
$(document).ready(()=>{
    $(".btn").click(()=>{
       let targert =  $('.btn').parent().parent().prev();
       $('.btn').addClass("d-none")
       targert.slideDown();
       targert.addClass("d-block");
       targert.removeClass("d-none");
    //    $("#div2").fadeIn("slow");
    //    $("#div3").fadeIn(3000);
        console.log(targert);
    });
})