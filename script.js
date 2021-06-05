Clicked.addEventListener("click", addList );
Clicked.addEventListener("click", clearInput)


function addList(){
    var user = document.getElementById("user").value, 
    listNode =  document.getElementById("list"), 
    listli = document.createElement("LI"), 
    txtNode = document.createTextNode(user);

    listli.appendChild(txtNode);
    listNode.appendChild(listli);
}

function clearInput() {
    
    
}
    



    
