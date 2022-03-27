console.log("content script is running");

// let per = document.getElementsByTagName('p');
// let msg = document.getElementById('userinput');
// var x = 0;
// for (elt of per) {
//     elt.innerHTML = msg;
    
// }
chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, send) {
    console.log(message.txt);

    let paragraph = document.getElementsByTagName('p');
    for(elt of paragraph)
    {
        elt.innerHTML = message.txt;
    }
    
}



// let userinput = select('#userinput');

// userinput.input(changedText);


// function changedText(){
//     chrome.tabs.getCurrent(gotTab);

//     function gotTab(tab){
//         let message = userinput.value();
//         let 
//     }
// }