const display = document.querySelector('#display');

const appendOnDisplay = (input) =>{
    display.value += input;
}

const clearDisplay = () =>{
    display.value = "";
}

const clearOne = () =>{
    const value = display.value;
    const valArray = value.split('');
    valArray.splice(valArray.length-1,1).join();
    display.value = valArray.join("");
}

const calculate = () =>{
    try{
        display.value = eval(display.value);
    }catch(err){
        display.value = "Error";
    }
}