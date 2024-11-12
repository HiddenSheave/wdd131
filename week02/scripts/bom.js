const input = document.querySelector("#favchap");
const button  = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener("click", function(){
    if (input.value.trim() !== '') {
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    
    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        input.focus();
    });
    
    li.textContent = input.value;
    li.append(deleteButton);
    list.appendChild(li);
    input.value = "";
    input.focus();
    }
});