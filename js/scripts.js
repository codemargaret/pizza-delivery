//back end
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
    var userToppings =[];
    var userPizzas = [];
    var userSize = $('input[name=size]:checked').val();
    $('input[name=topping]:checked').each(function() {
      var userTopping = $(this).val();
      userToppings.push(userTopping);
    });
    var myPizza = new Pizza (userSize, userToppings);
    $('ul#userPizzas').append("<li><span>" + myPizza.size + "  with " + myPizza.toppings + "</span></li>");
    $('#pizzaCost').text(myPizza.cost());
    $('#order').show();
  });
});
