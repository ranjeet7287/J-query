function fetchRandomDogImage()
{
    var xhrrequest=new XMLHttpRequest();
    xhrrequest.onload=function()
    {
        // console.log(xhrrequest.response);
        var responseJson=JSON.parse(xhrrequest.response);
        var imageurl=responseJson.message;
        $('#dog-image').attr('src',imageurl);
    };
    xhrrequest.onerror=()=>{
        console.log("request failed");
    };
    xhrrequest.open('get','https://dog.ceo/api/breeds/image/random',true); //true-->ASYNCOHRONUS
    xhrrequest.send();

    // jQuery
    // $.ajax({
    //     url:'https://dog.ceo/api/breeds/image/random',
    //     method:'GET',
    //     success:function(data){{
    //     var imageurl=data.message;
    //     $('#dog-image').attr('src',imageurl);
    //     }},
    // }).fail(()=>{
    //     console.log('error');
    // });

    // $.get('https://dog.ceo/api/breeds/image/random',
    // function(data){
    //     var imageurl=data.message;
    //     $('#dog-image').attr('src',imageurl);
    // }).fail(function(xhr,textStatus,errorThrown){
    //     console.log('Request Failed')
    // })
}
$('#fetch').click(fetchRandomDogImage);