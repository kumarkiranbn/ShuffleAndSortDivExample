// Listener for Dom Load
document.addEventListener("DOMContentLoaded", function(event) {
    
    // Get the conatiner object and children for sort / shuffle
    const parent = document.getElementById("item-lists");
    const items = parent.children;

    function shuffleNodes() {
        // Create a fragment to append the shuffled elements
        const frag = document.createDocumentFragment();
        while (items.length) {
            // Select one random child element and move it into the fragment
            frag.appendChild(items[Math.floor(Math.random() * items.length)]);
        }
        // Append to parent container
        parent.appendChild(frag);
    }

    function sortNodes() {
        // Create an empty item array to push items
        const itemsArr = [];
        for (let i in items) {
            if (items[i].nodeType == 1) { // get rid of the whitespace text nodes
                itemsArr.push(items[i]);
            }
        }
    
        // Sort the array items
        itemsArr.sort(function(a, b) {
            return a.innerHTML == b.innerHTML ? 0 : (a.innerHTML > b.innerHTML ? 1 : -1);
        });
    
        // Loop the array and append it to parent DOM
        for (let i = 0; i < itemsArr.length; ++i) {
            parent.appendChild(itemsArr[i]);
        } 
    }

    // Added event Listener for Shuffle and Sort buttons
    document.getElementById("btn-shuffle").addEventListener("click", shuffleNodes); 
    document.getElementById("btn-sort").addEventListener("click", sortNodes); 
});

