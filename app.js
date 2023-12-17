var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input")
/*var textArea= document.querySelector("textarea");*/
var outputDiv=document.querySelector("#output");
/*outputDiv.innerText="rutuja is smart"*/

var serverURL= "https://api.funtranslations.com/translate/minion.json"
 function urlTranslate(text){
    return serverURL + "?" +"text="+text;
 }
 function errorHandler(error){
console.log("error occured", error);
}
function clickEventHandler(){
    
    inputText=txtInput.value;
    fetch(urlTranslate(inputText))
    .then(response => response.json())
    .then(json => { var translatedText=json.contents.translated;
                   outputDiv.innerText=translatedText;
    })
    .catch(errorHandler)

}
/*console.log(outputDiv.value)*/
btnTranslate.addEventListener("click", clickEventHandler);
