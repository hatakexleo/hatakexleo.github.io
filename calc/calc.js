function addToInput(value){
    document.getElementById("input").value+=value;
}

function calculate(){
    try{
    var result=eval(document.getElementById("input").value);
    document.getElementById("input").value=result;
    }
    catch(error){
        document.getElementById("input").value='Error'; 
    }
}

function clearInput(){
    var result=''
    document.getElementById("input").value=result;
}

function clearLatest(){
    var result=document.getElementById("input").value
    document.getElementById("input").value=result.substring(0,result.length-1);
}