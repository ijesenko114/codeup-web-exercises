(()=> {
    // const mainHeader = document.getElementById("main-header");
    // const subHeader = document.getElementById("sub-header");
    // const listItems = document.querySelectorAll("li");
    //
    // document.getElementById("button1").addEventListener("click",  (e)=> {
    //     mainHeader.innerHTML = "JavaScript is Cool";
    // });
    //
    // document.getElementById("button2").addEventListener("click",  (e)=> {
    //     subHeader.style.color = "blue";
    // });
    //
    // document.getElementById("button3").addEventListener("click",  (e)=> {
    //     listItems.forEach((item, index) => {
    //         if (index % 2 === 0) {
    //             item.style.color = "grey";
    //         }
    //     });
    // });
    //
    // document.getElementById("button4").addEventListener("click", (e) => {
    //     const firstSubParagraph = document.querySelector(".sub-paragraph");
    //     if (firstSubParagraph) {
    //         firstSubParagraph.textContent = "Mission Accomplished!";
    //     }
    // });

    const h1 = document.querySelector("#main-header");
    h1.addEventListener("click" , (e) => {
        h1.style.backgroundColor = "red"
    });

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(paragraph => {
        paragraph.addEventListener("dblclick", (e) => {
            paragraph.style.fontSize = "18px";
        });
    });


    const li = document.querySelectorAll("li");
    li.forEach(li => {
        li.addEventListener("mouseenter" , (e) => {
            li.style.color = "red"
        });
    });



})();

