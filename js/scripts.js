//back end
//variables
var userToppings =[];

//constructors
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.basePrice = 17;
}
//methods
Pizza.prototype.cost = function() {
  var mySizePrice = this.basePrice;
  if (this.size === "small") {
    mySizePrice = this.basePrice - 5;
  } else if (this.size === "medium") {
    mySizePrice = this.basePrice - 2;
  } else if (this.size === "large") {
    mySizePrice = this.basePrice;
  }

  if (this.toppings.length === 0) {
    var myFinalPrice = mySizePrice;
  } else if (this.toppings.length === 1) {
    myFinalPrice = mySizePrice + 1;
  } else if (this.toppings.length === 2) {
    myFinalPrice = mySizePrice + 2;
  } else if (this.toppings.length === 3) {
    myFinalPrice = mySizePrice + 3;
  } else if (this.toppings.length === 4) {
    myFinalPrice = mySizePrice + 4;
  }
  return myFinalPrice;
};

//front end
$(document).ready(function() {
  $('#choosePizza').submit(function(event) {
    event.preventDefault();
//get user input
    var userSize = $('input[name=size]:checked').val();
    $('input[name=topping]:checked').each(function() {
      var userTopping = $(this).val();
      userToppings.push(userTopping);
    });
//use user input to make new pizza
    var myPizza = new Pizza (userSize, userToppings);
//show order summary
    $('ul#userPizzas').append("<li><span>" + myPizza.size + " with " + myPizza.toppings + " $" + (myPizza.cost()) +  "</span></li>");
    $('#order').show();
    $('#choosePizza').hide();
//add another pizza
    $('#morePizza').click(function() {
      userToppings.splice(0,userToppings.length);
      $('#order').hide();
      $('#choosePizza').show();
      $('#choosePizza')[0].reset();
      $('#orderMessage').hide();
    });
//place order message
    $('#placeOrder').click(function() {
      $('#orderMessage').text('Your order has been placed!');
      $('#orderMessage').show();
    });
  });
});
