(()=> {
    const mainHeader = document.getElementById("main-header");
    const subHeader = document.getElementById("sub-header");
    const listItems = document.querySelectorAll("li");

    document.getElementById("button1").addEventListener("click",  ()=> {
        mainHeader.innerHTML = "JavaScript is Cool";
    });

    document.getElementById("button2").addEventListener("click",  ()=> {
        subHeader.style.color = "blue";
    });

    document.getElementById("button3").addEventListener("click",  ()=> {
        listItems.forEach((item, index) => {
            if (index % 2 === 0) {
                item.style.color = "grey";
            }
        });
    });

    document.getElementById("button4").addEventListener("click", () => {
        const firstSubParagraph = document.querySelector(".sub-paragraph");
        if (firstSubParagraph) {
            firstSubParagraph.textContent = "Mission Accomplished!";
        }
    });
})();


