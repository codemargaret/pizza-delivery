//back end
  //constructors
function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
}
  //methods
Pizza.prototype.cost = function() {

}

//front end
$(document).ready(function() {
  $('#choosePizza').submit(function(event) {
    event.preventDefault;
    var userSize = $('input[name=size]:checked').val();
    $('input[name=topping]:checked').each(function() {
      var userTopping = $(this).val();
      alert(userTopping);
    });
  });
});
