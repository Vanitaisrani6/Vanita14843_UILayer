//  $(document).ready(function(){
// alert("hello Vanita");

//  });


 $(document).ready(function(){
    // document.write("jquery called");
    //tag name
    $("h1").html("<i style='color:red'> jquery called</i>");
    $("h2").text("<i> jquery called</i>");

    //id name
    $("#myh1").click(function()
    {
        $("#myh1").hide();
    });

    $(".myh2").click(function()
    {
        $("#myh1").hide();
    });
})