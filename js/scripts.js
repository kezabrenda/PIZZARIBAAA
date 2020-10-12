$(function () {
    $('.ZZAsummary').hide();
    $('.info').hide();
    
    $("#checkout").click(function(){

        function getZZAsizePrice() {
            var choosenSize = document.getElementById("ZZAsize").value;
            return parseInt(choosenSize);
        }
        
        function getZZACrustPrice() {
            var choosenCrust = document.getElementById("ZZAcrust").value;
            return parseInt(choosenCrust);
        }
        function getZZAnumber() {
            var choosenNumber = document.getElementById("ZZAnbr").value;
            return parseInt(choosenNumber);
        }
    
        /* Toppings */
        function toppingOne() {
            var topping1 = 0;
            var addTopping1 = document.getElementById("topping1");
            if (addTopping1.checked === true) {
                topping1 = 200;
            }
            return parseInt(topping1);
        }
        function toppingTwo() {
            var topping2 = 0;
            var addTopping2 = document.getElementById("topping2");
            if (addTopping2.checked === true) {
                topping2 = 300;
            }
            return parseInt(topping2);
        }
        function toppingThree() {
            var topping3 = 0;
            var addTopping3 = document.getElementById("topping3");
            if (addTopping3.checked === true) {
                topping3 = 500;
            }
            return parseInt(topping3);
        }
        function toppingFour() {
            var topping4 = 0;
            var addTopping4 = document.getElementById("topping4");
            if (addTopping4.checked === true) {
                topping1 = 200;
            }
            return parseInt(topping4);
        }
        function toppingFive() {
            var topping5 = 0;
            var addTopping5 = document.getElementById("topping5");
            if (addTopping5.checked === true) {
                topping5 = 1000;
            }
            return parseInt(topping5);
        }
        function toppingSix() {
            var topping6 = 0;
            var addTopping6 = document.getElementById("topping6");
            if (addTopping6.checked === true) {
                topping6 = 200;
            }
            return parseInt(topping6);
        }
        function toppingSeven() {
            var topping7 = 0;
            var addTopping7 = document.getElementById("topping7");
            if (addTopping7.checked === true) {
                topping7 = 1000;
            }
            return parseInt(topping7);
        }
        function toppingEight() {
            var topping8 = 0;
            var addTopping8 = document.getElementById("topping8");
            if (addTopping8.checked === true) {
                topping8 = 1000;
            }
            return parseInt(topping8);
        }
        function toppingNine() {
            var topping9 = 0;
            var addTopping9 = document.getElementById("topping9");
            if (addTopping9.checked === true) {
                topping9 = 1500;
            }
            return parseInt(topping9);
        }
        function toppingTen() {
            var topping10 = 0;
            var addTopping10 = document.getElementById("topping10");
            if (addTopping10.checked === true) {
                topping10 = 1500;
            }
            return parseInt(topping10);
        }
        function toppingEleven() {
            var topping11 = 0;
            var addTopping11 = document.getElementById("topping11");
            if (addTopping11.checked === true) {
                topping11 = 1500;
            }
            return parseInt(topping11);
        }
        function toppingTwelve() {
            var topping12 = 0;
            var addTopping12 = document.getElementById("topping12");
            if (addTopping12.checked === true) {
                topping12 = 2000;
            }
            return parseInt(topping12);
        }
    
        function toppings() {
            var toppingTotal = toppingOne + toppingTwo + toppingThree + toppingFour + toppingFive + toppingSix + toppingSeven + toppingEight + toppingNine + toppingTen + toppingEleven + toppingTwelve;
            return parseInt(toppingTotal);
        }
       /* */
    
        
        function calculateTotalPrice() {
            var totalZZAPrice = (getZZAsizePrice() + getZZACrustPrice() + toppings()) * (getZZAnumber());
            
                console.log(totalZZAPrice);
            alert("Your order of " + getZZAnumber() + " pizzas has been received.Your total payable amount is " + totalZZAPrice);
        
        }

        /* */
        $('.ZZAsummary').slideDown(2000);
        $('.info').slideDown(2000);
        $('#ZZAry').slideDown();
        $('.deliver').show(2000);
        $('.pickUp').show(2000);



        function createListItem(text) {
            var li = document.createElement('ZZAry');
            li.textContent = text;
            return li;
        }

        function appendChildren (parent,children) {
            children.forEach(function(child) {
                parent.appendChild(child);
            });
        }

        var myList = document.getElementById('ZZAry');
        var items = [
            createListItem('Pizza Size : ' + getZZAsizePrice),
            createListItem(''),
            createListItem(''),
            createListItem(''),
            createListItem(''),
            createListItem('')
        ];

        appendChildren(myList,items);

      /*  items.forEach(function (li) {
            myList.appendChild(li);
        });

        $('#ZZAry').text(" ");
        $("#ZZAry").append("<br>" + "Pizza Size : " + getZZAsizePrice
        + "<br>" + " Pizza Crust :     " + getZZACrustPrice
        + "<br>" + "Choosen Toppings :     " + toppings
        + "<br>" + " Number of Pizzas :    " + getZZAnumber
        + "<br>" + "Total Price :  " + calculateTotalPrice
        + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');*/


    });

    /* */
    function Delivery(location,) {
        this.location = location;
    }
    function view(){
        dPrice = calculateTotalPrice * 0.2;
        return this.location + " for the delivery price of " + dPrice;
    }
    Delivery.prototype.view = view;
    var deliver1 = prompt("please enter your location","");
    document.getElementById("deli").innerHTML = alert(deliver1.view);
    /* */

});