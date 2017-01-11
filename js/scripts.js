
$(document).ready(function(){
  $("form").submit(function(){
    var firstname = $("#fn").val();
    var middlename = $("#mi").val();
    var lastname = $("#ln").val();
    var phone = $("#ph").val();
    var email = $("#email").val();
    var address1 = $("#adr").val();
    var address2 = $("#adr2").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zipcode = $("#zipcode").val();

    $('.firstname').text(firstname);
    $('.address').text(address1);
    $('.address2').text(address2);
    $('.city').text(city);
    $('.state').text(state);
    $('.middlename').text(middlename);
    $('.lastname').text(lastname);
    $('.phone').text(phone);
    $('.zip').text(zipcode);
    $('.email').text(email);

    $("form").slideUp();
    $(".confirm").slideDown();
    event.preventDefault();
  });
  $("#confirm").click(function(){
    $(".confirm").slideUp();
    $(".receipt").slideDown();
  });
  $("#incorrect").click(function(){
    $(".confirm").slideUp();
    $("form").slideDown();
  });
});
