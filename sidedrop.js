function TestsFunction() {
    var T = document.getElementById("TestsDiv"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}


// $(document).ready(function(){
//     $("#accordion .card .card-link").click(function(){

//         if($(this).find("i.fa").hasClass("fa-minus"))
//         {
//             $(this).find("i.fa").removeClass("fa-minus");
//             $(this).find("i.fa").addClass("fa-plus");
//         }
//         else if($(this).find("i.fa").hasClass("fa-minus"))
//         {
//             $(this).find("i.fa").removeClass("fa-plus");
//             $(this).find("i.fa").addClass("fa-minus");
//         }
//     });
// });
