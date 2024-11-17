
text='-webkit-background-clip: text; -webkit-text-fill-color: transparent;'
function appen(filter1,filter2, sortedByKey,num){
const container = document.getElementById('container');
container.innerHTML = ``
    

      parameter=[filter1,filter2, sortedByKey]

      parameter[num].forEach(item => {
      const div = document.createElement('div');
      
      switch(item.rarity){
         case 'champion': 
             color= "linear-gradient(1deg,red, gold, red)";
             plus=10
             gold=datas2.list[item.level].column6; column=datas.list[item.level].column6;
             inne(color);
             break;      
         case 'legendary':
             
             color= "linear-gradient(-10deg, #06DC9C, violet)";
             plus=9;
             gold=datas2.list[item.level].column5; column=datas.list[item.level].column5;
             inne(color);
             break;
         case 'epic':            
             color= "#C213C9";
             plus=6
             gold=datas2.list[item.level].column4; column=datas.list[item.level].column4;
             inne(color);
             break;
         case 'rare':
             color= "#FF8C00";
             plus=2;
             gold=datas2.list[item.level].column3; column=datas.list[item.level].column3;
             inne(color);
             break;
         case 'common':
             color= "white";
             plus=-1;
             gold=datas2.list[item.level].column2; column=datas.list[item.level].column2;
             inne(color);
             break;
      default: ;    
      
       }
       
      function inne(color){
      
      div.innerHTML = `<div id='a'><p  id='p1'> ${item.elixirCost}</p><img src='${item.iconUrls.medium}'><p style='background:${color};${text}' id='p2'>${item.count}/${column}<p>${gold}</p></p> level ${item.level}</div><div>${item.name}</div>`;
      container.appendChild(div);
      //console.log(item.rarity,color)
      }
      
      
      
    });
       
      
     
      
      
     
}

           
