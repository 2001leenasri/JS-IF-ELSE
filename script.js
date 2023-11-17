function num() {
    const a = document.getElementById('txt3').value; 
    if (a>1){
        document.getElementById("ans2").innerHTML = "a value is" +a
    } 
}

function val() {
const number = document.getElementById('txt').value; 
let type;

if (number==2||number==4||number==6||number==8||number==10||number==12||number==14||number==16||number==18||number==20)
{
  type = "It is a even number";
}
 else {
  type = "It is a odd number";
}

document.getElementById("ans").innerHTML = type;
}

function get() {
    const  a= document.getElementById('txt1').value; 
    const  b= document.getElementById('txt2').value; 
   
    let greeting;
    if (a>b) {
      greeting = "A is Greater";
}  
    else if (b>a) {
      greeting = "B is Greater";
} 
    else {
      greeting = "Great";
}
    document.getElementById("ans1").innerHTML = greeting;
}


 



 