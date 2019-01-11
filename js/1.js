// $( ".burger" ).click(function() {
//   $( ".menu" ).toggle();
// });


//Burger click

var menu = $(".menu")[0];

$( ".burger" ).click(function() 
{
  if( $( ".menu" )[0].classList.contains('menu--active') ) {
    $( ".menu" )[0].classList.remove('menu--active');
    TweenLite.to(menu, 0.2, {opacity:0, visibility:"hidden"}); 
    $( ".menuLine" ).css("opacity","1");
    $( ".menuLine" ).css("visibility","visible");
  }
  else
  {
    $( ".menu" )[0].classList.add('menu--active');
    TweenLite.to(menu, 0.2, {opacity:1, visibility:"visible"});
    $( ".menuLine" ).css("opacity","1");
    $( ".menuLine" ).css("visibility","visible");
  }
   
});


//Menu items anchors


$( ".menuItem:nth-child(1)" ).click(function(){
  var block = $(".nothing")[0];
  block.scrollIntoView(true);
  $( ".menu" )[0].classList.remove('menu--active');
    TweenLite.to($( ".menuLine" ), 1, {opacity:0});
    TweenLite.to($( ".menuLine" ), 0.1, {visibility:"hidden",delay:1});
    TweenLite.to(menu, 0.5, {opacity:0, visibility:"hidden", delay:1});
});

$( ".menuItem:nth-child(2)" ).click(function(){
  var block = $(".nothing")[1];
  block.scrollIntoView(true);
  $( ".menu" )[0].classList.remove('menu--active');
  TweenLite.to($( ".menuLine" ), 1, {opacity:0});
  TweenLite.to($( ".menuLine" ), 0.1, {visibility:"hidden",delay:1});
  TweenLite.to(menu, 0.5, {opacity:0, visibility:"hidden", delay:1});
});

$( ".menuItem:nth-child(3)" ).click(function(){
  var block = $(".nothing")[2];
  block.scrollIntoView(true);
  $( ".menu" )[0].classList.remove('menu--active');
  TweenLite.to($( ".menuLine" ), 1, {opacity:0});
  TweenLite.to($( ".menuLine" ), 0.1, {visibility:"hidden",delay:1});
  TweenLite.to(menu, 0.5, {opacity:0, visibility:"hidden", delay:1});
});

//Tour Hover

$( ".tourWrap:nth-child(1)" ).hover(function(){
  $(".sectionHeader").css("color", "white");
  $(".tourBack").attr("src", "images/tours/rheine1.jpg");
  $(".tourBack").css("opacity", "1");
  $(".tourWrap").css("color", "white");
  $(".tourWrap").css("border-bottom", "1px solid white");},
  
  function(){
    $(".sectionHeader").css("color", "black");
    $(".tourBack").css("opacity", "0");
    $(".tourWrap").css("color", "black");
    $(".tourWrap").css("border-bottom", "1px solid black");}
);

$( ".tourWrap:nth-child(2)" ).hover(function(){
  $(".sectionHeader").css("color", "white");
  $(".tourBack").attr("src", "images/tours/hasselt.jpg");
  $(".tourBack").css("opacity", "1");
  $(".tourWrap").css("color", "white");
  $(".tourWrap").css("border-bottom", "1px solid white");},
  
  function(){
    $(".sectionHeader").css("color", "black");
    $(".tourBack").css("opacity", "0");
    $(".tourWrap").css("color", "black");
    $(".tourWrap").css("border-bottom", "1px solid black");}
);

$( ".tourWrap:nth-child(3)" ).hover(function(){
  $(".sectionHeader").css("color", "white");
  $(".tourBack").attr("src", "images/tours/utrecht.jpg");
  $(".tourBack").css("opacity", "1");
  $(".tourWrap").css("color", "white");
  $(".tourWrap").css("border-bottom", "1px solid white");},
  
  function(){
    $(".sectionHeader").css("color", "black");
    $(".tourBack").css("opacity", "0");
    $(".tourWrap").css("color", "black");
    $(".tourWrap").css("border-bottom", "1px solid black");}
);