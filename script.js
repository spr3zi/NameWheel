var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);

}