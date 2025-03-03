let timeoutId;

function startTimer(){
    setTimeout(() => Window.alert("Hello"), 3000);
    timeoutId = setTimeout(() => window.alert ("Hello", 3000));
    console.log("STARTED");


}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log("CLEARED");
    
}
