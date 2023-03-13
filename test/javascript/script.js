let inpot_butn =document.getElementById("sho");


let num1 =document.getElementById("num1");
let num2 =document.getElementById("num2");
let num3 =document.getElementById("num3");
let num4 =document.getElementById("num4");
let num5 =document.getElementById("num5");
let num6 =document.getElementById("num6");
let num7 =document.getElementById("num7");
let num8 =document.getElementById("num8");
let num9 =document.getElementById("num9");
let numz =document.getElementById("numz");
let numc =document.getElementById("numc");

let xx =document.getElementById("xx");

num1.addEventListener("click",()=>{ 
    inpot_butn.value +=num1.value +"";
} );
num2.addEventListener("click",()=>{ 
    inpot_butn.value +=num2.value +"";
} );
num3.addEventListener("click",()=>{ 
    inpot_butn.value +=num3.value +"";
} );
num4.addEventListener("click",()=>{ 
    inpot_butn.value +=num4.value +"";
} );
num5.addEventListener("click",()=>{ 
    inpot_butn.value +=num5.value +"";
} );
num6.addEventListener("click",()=>{ 
    inpot_butn.value +=num6.value +"";
} );
num7.addEventListener("click",()=>{ 
    inpot_butn.value +=num7.value +"";
} );
num8.addEventListener("click",()=>{ 
    inpot_butn.value +=num8.value +"";
} );
num9.addEventListener("click",()=>{ 
    inpot_butn.value +=num9.value +"";
} );
numz.addEventListener("click",()=>{ 
    inpot_butn.value +=numz.value +"";
} );
numc.addEventListener("click",()=>{ 
    inpot_butn.value ="";
} );



xx.addEventListener("click",()=>{ 
    let clennn=inpot_butn.value;
    if(clennn ==""){
        console.log("فارغ");
    }else{
        fun();
    }
} );

function fun (){
    let clen=inpot_butn.value;
    let aray=clen.split("");
    console.log(aray);
    let clenn=aray.pop();
    console.log(clenn);
    let string=aray.join("");
    console.log(string);
    inpot_butn.value=string;
}


var video = document.getElementById("myVideo");
video.onended = function() {
  window.location.href = "index.html";
};