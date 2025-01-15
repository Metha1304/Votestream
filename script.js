count=0;
v1=0;
v2=0;
v3=0;
total=0;
let decrease=document.getElementById("Decreasebtn");
let increase=document.getElementById("Increasebtn");
let reset=document.getElementById("reset");

document.getElementById("Decreasebtn").onclick=function(){
         count=count+1;
         document.getElementById("num").textContent=count;
         v1=v1+1;
        document.getElementById("in").textContent=v1;
        window.alert("Thanks for voting party 1")

}
document.getElementById("Increasebtn").onclick=function(){
    count=count+1;
    document.getElementById("num").textContent=count;
    v2=v2+1;
    document.getElementById("in1").textContent=v2;
    window.alert("Thanks for voting party 2")
    
}
document.getElementById("reset").onclick=function(){
    count=count+1;
    document.getElementById("num").textContent=count;
    v3=v3+1;
    document.getElementById("in2").textContent=v3;

    window.alert("Thanks for voting NOTA")
}
