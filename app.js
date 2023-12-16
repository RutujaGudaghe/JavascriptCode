var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input")
var textArea= document.querySelector("textarea");
var outputDiv=document.querySelector("#output");
/*outputDiv.innerText="rutuja is smart"*/
function clickEventHandler(){
    
    outputDiv.innerText="Input isnrnrn"+ txtInput.value;
}
console.log(outputDiv.value)
btnTranslate.addEventListener("click", clickEventHandler);
