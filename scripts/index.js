// Stores an annonymous function inside the budgetController variable
var budgetController = ( function() {

    // Private Variables trapped inside our annonymous function that has been Immediatly Invoked
    var x = 23;

    // Private function trapped inside our annonymous function that has been immediatly invoked
    var add = function(a) {
        return x + a;
    }

    // Public object returned from our IIFE that gives us access to our publicTest method
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
}());

var UIController = (function() {

    // Some code

}());


// Main function that will tied to both of our modular functions (UIController, budgetController)
var controller = (function(budgetCtrl, UICtrl) {

    // Private variable trapped inside our IIFE
    var z = budgetCtrl.publicTest(5)

    // Public object returned from our closure giving us access to our anotherPublic method
    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

    // IIFE that accepts two other IIFE. This ties both IIFE's together giving us access to both private and public variables and methods
}(budgetController, UIController));