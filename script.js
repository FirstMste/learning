Clicked.addEventListener("click", addList );
Red.addEventListener("click", red);
Green.addEventListener("click", green);
Blue.addEventListener("click", blue);
Reset.addEventListener("click", reset);


function reset() {
    var backing = document.getElementById("backing");

    backing.style.background = "black"


}


function red(){
    var backing = document.getElementById("backing");

   backing.style.background = "red"

}
function green(){
    var backing = document.getElementById("backing");

   backing.style.background = "green"

}
function blue(){
    var backing = document.getElementById("backing");

   backing.style.background = "blue"

}

function addList(){
    var user = document.getElementById("user").value, 
    listNode =  document.getElementById("list"), 
    listli = document.createElement("LI"), 
    txtNode = document.createTextNode(user),
    btnCr = document.createElement("BUTTON"),
    btnTxt = document.createTextNode("delete");

    listli.appendChild(txtNode);
    listNode.appendChild(listli);
    btnCr.appendChild(btnTxt);
}