//back end
//variables
var userToppings =[];
// var userPizzas = [];
// var totalOrder = [];
//constructors
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.basePrice = 17;
}
//methods
Pizza.prototype.cost = function() {
  if (this.size === "small") {
    var mySizePrice = this.basePrice - 5;
  } else if (this.size === "medium") {
    var mySizePrice = this.basePrice - 2;
  } else if (this.size === "large") {
    var mySizePrice = this.basePrice;
  }

  if (this.toppings.length === 0) {
    var myFinalPrice = mySizePrice
  } else if (this.toppings.length === 1) {
    var myFinalPrice = mySizePrice + 1;
  } else if (this.toppings.length === 2) {
    var myFinalPrice = mySizePrice + 2;
  } else if (this.toppings.length === 3) {
    var myFinalPrice = mySizePrice + 3;
  } else if (this.toppings.length === 4) {
    var myFinalPrice = mySizePrice + 4;
  }
  return myFinalPrice;
}

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
    // userPizzas.push(parseInt(myPizza.cost()));
//show order summary
    $('ul#userPizzas').append("<li><span>" + myPizza.size + " with " + myPizza.toppings + " " + (myPizza.cost()) +  "</span></li>");
    $('#order').show();
    $('#choosePizza').hide();
//see pizza details
    // $('.clickable').last().click(function() {
    //   $('#show-order').show();
    //   $('.onePizza').text('Size - ' + myPizza.size + ', Cost - $' + (myPizza.cost()));
    // });
//add another pizza
    $('#morePizza').click(function() {
      userToppings.splice(0,userToppings.length)
      $('#order').hide();
      $('#show-order').hide();
      $('#show-total').hide();
      $('#choosePizza').show();
      $('#choosePizza')[0].reset();
    });
//place order message
      $('#placeOrder').click(function() {
        alert('Your order has been placed!');
      });
//hide pizza details
    // $('#hidePizza').click(function() {
    //   $('#show-order').hide();
    //   $('.onePizzaSize').text("");
    //   $('.onePizzaToppings').text("");
    //   $('.onePizzaCost').text("");
    // });
//show order totalOrder
    // $('#seeTotal').click(function() {
    //   $('#show-total').show();
    //   $('#pizzaCost').text(userPizzas);
    // });
  });
});
