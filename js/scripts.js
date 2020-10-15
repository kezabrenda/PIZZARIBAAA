$(document).ready(function () {
    $('.ZZAsummary').hide();
    $('.info').hide();
    
    $("#checkout-form").submit(function(event){
        event.preventDefault();

        function getZZAsizePrice() {
            var choosenSize = document.getElementById("ZZAsize").value;
            var priceSize = 0;
            if (choosenSize == "1") {
                priceSize = 1500;
            }
            else if (choosenSize == "2") {
                priceSize = 2500;
            }
            else {
                priceSize = 3500;
            }
            return priceSize;
        }
        
        function getZZACrustPrice() {
            var choosenCrust = document.getElementById("ZZAcrust").value;
            var priceCrust = 0;
            if (choosenCrust == "1") {
                    priceCrust = 2000;
            }
            else if (choosenCrust == "2") {
                priceCrust = 1000;
            }
            else {
                priceCrust = 1500;
            }
            return priceCrust;
        }

        function getZZAnumber() {
            var choosenNumber = document.getElementById("ZZAnbr").value;
            return choosenNumber;
        }
    
        /* Toppings */
        function toppingOne() {
            var topping1 = 0;
            var addTopping1 = document.getElementById("topping1");
            if (addTopping1.checked === true) {
                topping1 = 200;
            }
            return topping1;
        }
        function toppingTwo() {
            var topping2 = 0;
            var addTopping2 = document.getElementById("topping2");
            if (addTopping2.checked ===true) {
                topping2 = 300;
            }
            return topping2;
        }
        function toppingThree() {
            var topping3 = 0;
            var addTopping3 = document.getElementById("topping3");
            if (addTopping3.checked === true) {
                topping3 = 500;
            }
            return topping3;
        }
        function toppingFour() {
            var topping4 = 0;
            var addTopping4 = document.getElementById("topping4");
            if (addTopping4.checked === true) {
                topping1 = 200;
            }
            return topping4;
        }
        function toppingFive() {
            var topping5 = 0;
            var addTopping5 = document.getElementById("topping5");
            if (addTopping5.checked === true) {
                topping5 = 1000;
            }
            return topping5;
        }
        function toppingSix() {
            var topping6 = 0;
            var addTopping6 = document.getElementById("topping6");
            if (addTopping6.checked === true) {
                topping6 = 200;
            }
            return topping6;
        }
        function toppingSeven() {
            var topping7 = 0;
            var addTopping7 = document.getElementById("topping7");
            if (addTopping7.checked === true) {
                topping7 = 1000;
            }
            return topping7;
        }
        function toppingEight() {
            var topping8 = 0;
            var addTopping8 = document.getElementById("topping8");
            if (addTopping8.checked === true) {
                topping8 = 1000;
            }
            return topping8;
        }
        function toppingNine() {
            var topping9 = 0;
            var addTopping9 = document.getElementById("topping9");
            if (addTopping9.checked === true) {
                topping9 = 1500;
            }
            return topping9;
        }
        function toppingTen() {
            var topping10 = 0;
            var addTopping10 = document.getElementById("topping10");
            if (addTopping10.checked === true) {
                topping10 = 1500;
            }
            return topping10;
        }
       
        function toppings() {
            var toppingTotal = toppingOne() + toppingTwo() + toppingThree() + toppingFour() + toppingFive() + toppingSix() + toppingSeven() + toppingEight() + toppingNine() + toppingTen();
            return toppingTotal;
        }
        function calculateTotalPrice() {
            var totalZZAPrice = (getZZAsizePrice() + getZZACrustPrice() + toppings()) * (getZZAnumber());
            console.log(getZZAnumber());
            return totalZZAPrice;
        }


        /* */
        $('.ZZAsummary').slideDown(2000);
        $('.info').slideDown(2000);
        $('#ZZAry').slideDown();
        $('.deliver').show(2000);
        $('.pickUp').show(2000);

        $('#ZZAry').text(" ");
        $("#ZZAry").append("<br>" + "<p> Pizza Size :  " + getZZAsizePrice()
        + "<br>" + " Pizza Crust :     " + getZZACrustPrice()
        + "<br>" + "Choosen Toppings :     " + toppings()
        + "<br>" + " Number of Pizzas :    " + getZZAnumber()
        + "<br>" + "Total Price :  " + calculateTotalPrice()
        + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');

     });   
   
    
    /* */
$(document).ready(function (){
    $('#deliver').submit (function(event) {
        event.preventDefault();

        function Delivery(location) {
            this.location = location;
    }
    function view(){
        dPrice = calculateTotalPrice() * 0.2;
        return this.location + " for the delivery price of " + dPrice;
    }
    Delivery.prototype.view = view;
    var deliver1 = prompt("please enter your location"," ");
    document.getElementById("deli").innerHTML = alert(deliver1.view);  
    });
    /* */
});

$("#pickUp").submit(function(event) {
    event.preventDefault();
    alert("Your order of " + getZZAnumber() + " pizzas has been received.Your total payable amount is " + totalZZAPrice);
});


}); 