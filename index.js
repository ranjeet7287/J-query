// var para=document.getElementById('para1');
// para.innerHTML="Process";

// $("#para1").html('welcome');


// $('p').css('color','red');
// $('p').css('fontSize','50px');

$("body").css("background-color", "red");

// $('body').css({
//     backgroundcolor
// });
$('p').css({
    fontSize:"50px",
    color:"green",

});

$('div').css({
    height:"100px",
    width:"100px",
    background:"black",
});

// $('div').click(()=>{
//     alert("Belive within you and can do anything in this reality");
// });

// $('div').on('click',()=>{

//     alert("process");
// });
$('a').on('click',(event)=>{
    event.preventDefault();
    alert("process");
});
$('div').on('click',()=>{
    var element=$(this);
    element.width(element.width() + 100+px)
});

/* 
    function $(query) 
    {
        document.querySelector(query);
    }
*/