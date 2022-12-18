//detecting button press
var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninerhtml=this.innerHTML;
      makeSound(buttoninerhtml);
      buttonAnmation(buttoninerhtml);
    });
}
//detecting key boardpress
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnmation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio=new Audio('sounds/crash.mp3');
             audio.play();
            break;
        case "a":
                var kick=new Audio('sounds/kick-bass.mp3');
                 kick.play();
                break;
         case "s":
                    var snare=new Audio('sounds/snare.mp3');
                     snare.play();
                    break;   
        case "d":
                        var tom_1=new Audio('sounds/tom-1.mp3');
                         tom_1.play();
                        break;   
        case "j":
                            var tom_2=new Audio('sounds/tom-2.mp3');
                             tom_2.play();
                            break;
         case "k":
            var tom_3=new Audio('sounds/tom-3.mp3');
            tom_3.play();
            break;
        case "l":
            var tom_4=new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;                       
        default:console.log(buttoninerhtml);
            break;
       }
}

function buttonAnmation(currentKey){
      var active=document.querySelector("."+currentKey);
      active.classList.add("pressed");
      setTimeout(function(){
        active.classList.remove("pressed");},100);
      }
