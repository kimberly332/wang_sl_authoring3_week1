// import your packages here
import Team from "./modules/DataModule.js";

(() => {
    // stub * just a place for non-component-specific stuff
    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content; // grab the content inside the template

    debugger;

    // select our user elements and load the content
    function handleDataSet(data) {
        let currentUser = userTemplate.cloneNode(true),
            currentUserText = currentUser.querySelector(".user").children;
    }

    for (let user in Team) {
        currentUserText[1].textContent = Team[user].name;
        currentUserText[2].textContent = Team[user].role;
        currentUserText[3].textContent = Team[user].nickname;

        userSection.appendChild(currentUser);
    }
})();