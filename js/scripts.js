//back end
  //constructors
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
  //methods
Pizza.prototype.cost = function() {
  if (this.size === "small") {
    return 12;
  } else if (this.size === "medium") {
    return 15;
  } else if (this.size === "large") {
    return 17;
  }
}

//front end
$(document).ready(function() {
  $('#choosePizza').submit(function(event) {
    event.preventDefault;
    var userToppings =[];
    var userSize = $('input[name=size]:checked').val();
    $('input[name=topping]:checked').each(function() {
      var userTopping = $(this).val();
      userToppings.push(userTopping);
    });
  var myPizza = new Pizza (userSize, userToppings);
  alert(myPizza.cost());
  });
});
