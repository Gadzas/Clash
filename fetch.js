tag=1
num=1


token='Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ4YjZlZDAxLTEzZTItNGI0Zi1iZDc1LWVjN2FlN2Q3NmUzMCIsImlhdCI6MTcyOTcwNzM5Niwic3ViIjoiZGV2ZWxvcGVyLzM4ZDM5YTUyLWY4NjEtYjZhZC0xNTJkLTg4YWVmMWRjNDU5YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0NS43OS4yMTguNzkiXSwidHlwZSI6ImNsaWVudCJ9XX0.q8Oqm3HAqP2aaABogI1K21cotHbz3fkicWeGqER9FOvZElbTcbYLHjra3bcQhG31G--cerHWMJO9HUkeEcx_uw'
tags2=['%23RC2C0Y2YG', '%23V9VPGJ8CC','%23CPRGLYJYP']
butt=document.getElementById('ok')
butt.onclick = function() {
		var tags = document.getElementById('input').value;
console.log(tags);
adres4=`https://proxy.royaleapi.dev/v1/players/${tags}`;
		fec(tags)
};

adres1='https://proxy.royaleapi.dev/v1/players/%23V9VPGJ8CC'
adres2='https://proxy.royaleapi.dev/v1/cards/'
adres3=`https://proxy.royaleapi.dev/v1/players/${tags[tag]}/upcomingchests`



function fec(){
arra=['champion','legendary','epic','rare','common']
fetch(adres4, {
		method: 'GET',
		headers: {'authorization':token
},
	})
		.then(response => response.json())
		.then(response =>knob(response))
		.catch(err => console.error(err,222));
}
		
function f1(response) {
    const filter=response.cards 
    const filter1=filter.sort((a, b)=>a.elixirCost - b.elixirCost)     
    
    
    appen(filter1,0,0,0)
//f2(response)

}

function f2(response) {
const filter2=response.cards.filter(d => d.rarity ==arra[num])
    summ=0
    for(i=1;i<response.cards.length;i++){
    summ=response.cards[i].count+summ
    }
    appen(0,filter2,0,1)
    //console.log(response)   
    
}

function f3(response){
let obj=response.cards

let sortedByKey = obj.sort((a, b)=>a.level-b.level)
console.log(JSON.stringify(sortedByKey))


    appen(0,0,sortedByKey,2)    

}
const mega0=datas.list[1]
mega=JSON.stringify(mega0.column2)

//console.log(mega)
 