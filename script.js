let main_text=document.querySelector(".main_text");
let output=document.querySelector(".output");
let audio=new Audio("N56BNFY-click.mp3");
output.style.display="none";

document.addEventListener("keydown",(e)=>{
    output.style.display="block";
    main_text.innerText="your pressed key is: "+e.key;
    output.innerText="keycode is: "+e.keyCode;
    // output.classList.add="text";
    audio.play();
    

 

})
