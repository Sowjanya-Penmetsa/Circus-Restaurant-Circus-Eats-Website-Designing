$(function () {

  var goToCartIcon = function ($addTocartBtn) {
    var $cartIcon = $(".my-cart-icon");
    var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({ "position": "fixed", "z-index": "999" });
    $addTocartBtn.prepend($image);
    var position = $cartIcon.position();
    $image.animate({
      top: position.top,
      left: position.left
    }, 500, "linear", function () {
      $image.remove();
    });
  }

  $('.my-cart-btn').myCart({
    currencySymbol: 'Kr.',
    showCheckoutModal: true,
    numberOfDecimals: 2,
    
    clickOnAddToCart: function ($addTocart) {
      goToCartIcon($addTocart);
    },
    
    checkoutCart: function (products, totalPrice, totalQuantity) {
      var checkoutString = "Your order has been placed\n" + "Total Price: " + totalPrice + "\nTotal Quantity: " + totalQuantity;
      
      console.log(checkoutString);
      alert(checkoutString);
      console.log("checking out", products, totalPrice, totalQuantity);
    }

  });

});