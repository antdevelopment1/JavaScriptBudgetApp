// Budget Controller
var budgetController = ( function() {

   
    
}());

// UI Controller
var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
 
    return {
        getinput: function() {

            return {
                
                type: document.querySelector(DOMStrings.inputType).value, // Will be either income or expense
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value

            }
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    };

}());

// Global App Controller
// Main function that will tied to both of our modular functions (UIController, budgetController)
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        // The event parameter exists for all event listerners. We did not create it.
        // event.which is to test for older browsers which do not have the keyCode property
        document.addEventListener('keypress', function(event) {

            if (event.keyCode === 13 || event.which === 13) {
    
                ctrlAddItem();
                
            }
        })    
    };

    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);
        // 2. Add the item to the budget controller

        // 3. Add the new item to the User Interface

        // 4. Calculate the budget

        // 5. Display the budget on the User Interface

    }

    return {
        init: function() {
            console.log('Application has started.');
            setupEventListeners();
        }
    };
    
}(budgetController, UIController));
