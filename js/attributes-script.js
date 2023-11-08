(()=> {
    const profilePic = document.querySelector("#profile-pic");
    setTimeout(() => {
        profilePic.setAttribute("src","./img/man.jpg")
    },2000);

    const profileName = document.querySelector("#profile-name");
    setTimeout(() => {
        profileName.innerHTML = "Ian Jesenko";
    },4000);

    const profileDesc = document.querySelector("#profile-desc");
    setTimeout(() => {
        profileDesc.classList.add("new-description-class")
    },6000);

    let toggleBackground = false;
    const profileCard = document.querySelector("#profile-card");

    setInterval(function () {
        if (toggleBackground) {
            profileCard.classList.remove("new-background-class");
        } else {
            profileCard.classList.add("new-background-class");
        }
        toggleBackground = !toggleBackground;
    }, 2000);
})();