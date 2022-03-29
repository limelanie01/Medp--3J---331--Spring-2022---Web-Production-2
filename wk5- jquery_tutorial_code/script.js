// DOM EVENTS:
// Good to wrap your jQuery script in a
// DOM load event - this means the html is fully loaded

$(function() {
  // accessing an element and CSS quickly
  $("body").css("background", "Red");
  // getting an element's CSS
  let color = $("body").css('color')
  //getting every instance of a class and changing its css
  $(".change-me").css('border', '1px solid red')
  // change multiple selectors at once
  $(".welcome, blockquote, #explanation").css('text-decoration', 'underline')
  //
  //change CSS with an object
  $("#change-box").css({
    "border": "1px solid blue",
    "background-color": "cyan",
    "border-radius": "15px"
  })

  //add easier click functions
  $("#click-me").click(function() {
    $("#result").text("You clicked me!")
  })


  //Simple animations on click and doubleclick
  $('.box').click(function() {
    $(this).slideUp()
  })

  $('.box').dblclick(function() {
    $(this).hide()
  })
  //get text
  console.log($("#img-caption").text())
  //get HTML
  console.log($("#img-caption").html())
    $("#change-image").attr( {src: 'img/cat_wearing_sunglasses.jpg' } )

    $("#img-caption").text('A Cat Wearing Sunglasses')
  // append adds to the end of the element
  $("#appending-animals").append("<li>Cat</li>")
  //prepend adds to the beginning
  $("#image-container").prepend('<h4>My Cool Image</h4>')
  // before adds before the element starts
  $("#change-image").before('<p>He is A Good Boy</p>')
  //after adds after the element ends
  $("#change-image").after('<p>And Everyone Loves Him</p>')
  //remove deletes the element
  $("#change-image").remove()

  // empty clears it of all content
  $("#img-caption").empty()

  // easily add a class
  $("#circle").addClass('circle')


  // create an element:
  // we can pass it any HTML attributes as an object
let img = $("<img />",
  {
    src: 'img/landscape.jpg',
    id: 'landscape-image'
  }
)

img.appendTo(".create-image")
$("#landscape-image").click(function() {
  $(this).addClass("grayscale")
})

})
