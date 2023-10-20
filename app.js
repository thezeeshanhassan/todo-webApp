let addbtn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");



addbtn.addEventListener("click", function () {
    if (input.value != "") {
        let item = document.createElement("li");


        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete"
        delBtn.classList.add("delete");

        item.innerText = input.value;
        item.appendChild(delBtn);
        ul.appendChild(item);
        input.value = "";
    }

})


ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let parent = event.target.parentElement;
        parent.remove();
    }
})
