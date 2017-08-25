//back end
//variables
var userToppings =[];
// var totalOrder = '';
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

// function findTotal () {
//   for (i = 0; i <= userPizzas.length; i++) {
//     var totalOrder = userPizzas += userPizzas[i];
//   }
// }

//front end
$(document).ready(function() {
  $('#choosePizza').submit(function(event) {
    event.preventDefault();
    var userPizzas = [];
//get user input
    var userSize = $('input[name=size]:checked').val();
    $('input[name=topping]:checked').each(function() {
      var userTopping = $(this).val();
      userToppings.push(userTopping);
    });
//use user input to make new pizza
    var myPizza = new Pizza (userSize, userToppings);
    userPizzas.push(parseInt(myPizza.cost()));
//show order summary
    $('ul#userPizzas').append("<li class='clickable'><span>My " + myPizza.size + " pizza</span></li>");
    $('#pizzaCost').text(myPizza.cost());
    $('#order').show();
    $('#choosePizza').hide();
//see pizza details
    $('.clickable').last().click(function() {
      $('#show-order').show();
      $('.onePizza').text('Size - ' + myPizza.size + ', Cost - $' + (myPizza.cost()) + '.00');
    });
//add another pizza
    $('#morePizza').click(function() {
      $('#order').hide();
      $('#show-order').hide();
      $('#choosePizza').show();
      $('#choosePizza')[0].reset();
      alert(userPizzas);
      alert(totalOrder);
    });
//hide pizza details
    $('#hidePizza').click(function() {
      $('#show-order').hide();
      $('.onePizzaSize').text("");
      $('.onePizzaToppings').text("");
      $('.onePizzaCost').text("");
    });
  });
});
