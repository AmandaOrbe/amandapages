//= require jquery
//= require bootstrap
//= require_tree .


// var galleryImage = $(".gallery").find("img").first();


//     var images = [
//     "images/image1.jpg",
//     "images/image2.jpg",
//     "images/image3.jpg",
//     ];

// var i = 0

//     setInterval(function(){
//       i = (i + 1) % images.length;
//       galleryImage.fadeOut(function(){
//         $(this).attr("src", images[i]);
//         $(this).fadeIn();
//       });



$(function() {


  // show gallery

  var galleryImage = $(".slick").find("img").first();
  var images = $(".gallery").find("img");
  console.log($(".numerito"));


  var i = 0


  $('.slick').on('click', function(){
      i = (i + 1) % images.length;
      galleryImage.fadeOut(function(){
        var lula = $(".image-show").attr("src");
        console.log(lula);
        $(".image-show").attr("src", images[i].src);
        $(".image-show").fadeIn();
        $(".legend").find("span").text(i+1);
        console.log(i+1);
      });
      console.log(i);
    });

// navbar growing

  $('.navbar a').on('click', function(){
      $('.navbar a.active').removeClass('active', 800);
      $(this).addClass('active', 800);

  });

// show lightbox

$('.puntodeapoyo').click(function(e){
    e.preventDefault();
    $('body').css("overflow", "hidden");
    $(".lightbox").fadeIn(1000);
    $("#code").load($(this).children("a").prop("href"));
    console.log($(this).children("a").prop("href"));
  });


// hide lightbox


  $('.btn-cancel, .lightbox').on('click', function(e){
      $(".lightbox").fadeOut(1000);
      $('body').css("overflow", "initial");
      });
  $( '.no-fade' ).click(function( event ) {
        console.log("namaste")
      event.stopPropagation();
  });


});
