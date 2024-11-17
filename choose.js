function knob (response) {

Object.keys(response.cards).forEach(key=>
    {
    //console.log(response.cards[key].rarity)
    switch(response.cards[key].rarity){
         case "common":
             response.cards[key].level+=0
                                
             break;
         case "rare":
             response.cards[key].level+=2
             
             break;
         case "epic":
             response.cards[key].level+=5
             break;
         case "legendary":
             response.cards[key].level+=8
             break;
         case "champion":
             response.cards[key].level+=10
             break;
         default:;
         }     
         
                                    
    }
    );  
    
document.getElementById('f1').addEventListener('click', function () {
choose(0,response)
})

document.getElementById('f2').addEventListener('click', function () {
choose(1,response)
})

document.getElementById('f3').addEventListener('click', function () {
choose(2,response)
})

const container2 = document.getElementById('player');
const div2 = document.createElement('div');
otvet=JSON.stringify(response.name)
div2.innerHTML=`<div>Player name: ${otvet};other</div>`
container2.appendChild(div2)
}
;
function choose (num1,response) {


    console.log(7778)              
   switch(num1){
         case 0: 
             
             f1(response)
             break;
         case 1: 
             
             f2(response)
             break;
         case 2:
             
             f3(response)
             break;
         
      default: ;    
      
       } 
}

   



