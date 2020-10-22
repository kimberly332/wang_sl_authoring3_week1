(() => {
    // start with a Fetch all
    fetch('./DataSet.json')
        .then(res => res.json()) // parse the JSON (translate) back to plain JS
        .then(data => {
            // this is our data (DataSet.json)
            // converted to a plain JavaScript object
            handleDataSet(data);
        })
    .catch((error) => console.log(error));

    // select our user elements and load the content
    function handleDataSet(data) {
        let userSection = document.querySelector('.user-section'),
            userTemplate = document.querySelector('#user-template').content;

        debugger;
        
        for (let user in data) {  
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector(".user").children;

             currentUserText[1].src = `images/${data[user].avatar}.jpg`;
             currentUserText[1].textContent = data[user].name;
             currentUserText[2].textContent = data[user].role;
             currentUserText[3].textContent = data[user].nickname;
 
            // add this new user to the view
             userSection.appendChild(currentUser);
         }

         console.log(data);
    }
})();