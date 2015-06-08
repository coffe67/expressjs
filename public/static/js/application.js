// jQuery init
$(function(){

  $.post("/menu", function(data){
    $.each(data, function(index){
      $(".menu").append('<li><a href="' + data[index].url + '">' + data[index].name + '</a></li>');
    })
  });
  
  $("form").on("submit", function(e){
    e.preventDefault()

    $.ajax({
      url: "/login",
      type: "POST",
      data: $("form").serialize(),
      error: function(error){
        console.log(error);
      },
      success: function(info){
        window.location.href = "/home"
      }
    })
  })


});