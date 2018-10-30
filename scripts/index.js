// Budget Controller
var budgetController = ( function() {

   
    
}());

// UI Controller
var UIController = (function() {
 
    // Some code

}());

// Global App Controller
// Main function that will tied to both of our modular functions (UIController, budgetController)
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {

        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the new item to the User Interface

        // 4. Calculate the budget

        // 5. Display the budget on the User Interface

        console.log('It works');

    }


    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    // The event parameter exists for all event listerners. We did not create it.
    // event.which is to test for older browsers which do not have the keyCode property
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {

            ctrlAddItem();
            
        }
    })
  
}(budgetController, UIController));
