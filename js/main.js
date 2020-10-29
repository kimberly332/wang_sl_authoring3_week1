import {fetchData} from "./modules/DataMiner.js";

(() => {
    // select our user elements and load the content
    function handleDataSet(data) {
        console.log('loaded');

        function popErrorBox(message) {
            alert ("Something has gone horribly, horribly wrong");
        }

        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        debugger;
        
        for (let user in data) {  
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector(".user").children;

             currentUserText[1].src = `images/${data[user].avatar}`;
             currentUserText[2].textContent = data[user].name;
             currentUserText[3].textContent = data[user].role;
             currentUserText[4].textContent = data[user].nickname;
 
            // add this new user to the view
             userSection.appendChild(currentUser);
         }

         console.log(data);
    }

    fetchData("./includes/functions.php").then(data => handleDataSet(data)).catch(err => { console.log(err)
        popErrorBox(err);});
})();