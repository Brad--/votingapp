'use strict';
(function () {
    var optionButton = document.querySelector("#add-option");
    var createButton = document.querySelector("#submit");
    var options = document.querySelector("#options");
    var opt = 3;
    
    optionButton.addEventListener('click', function(){
        var i = document.createElement("input");
        i.placeholder = "Option " + opt;
        i.id = "opt" + opt;
        i.className = "form-control";
        options.appendChild(i);
        opt = opt + 1;
    }, false);
    
    createButton.addEventListener('click', function(){
        // handle the creation of the poll
    }, false);
    
})();