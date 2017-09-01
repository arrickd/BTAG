// JavaScript Document


var cells10 = document.getElementsByClassName("cells");
var cardArray = new Array(52);

function deal20() {

        document.getElementById('table1').style.display="table";
        document.getElementById('table2').style.display="none";
        document.getElementById('table3').style.display="none";
        deal20.array=[];
        
	for (var i = 0; i < 52; i++) {

		cardArray[i] = "<img src='Cards/" + (i + 1) + ".png'>";

	}
        
	var count = 52;
	for (var j = 0; j < cells10.length; j++) {


		var rand = Math.floor(Math.random()* count) ;
		cells10[j].innerHTML = cardArray[rand];
                deal20.array.push(cardArray[rand]);
		cardArray.splice(rand, 1);
		count-=1;
                

		rand = Math.floor(Math.random()*count);
		cells10[j].innerHTML+=cardArray[rand];
                deal20.array.push(cardArray[rand]);
		cardArray.splice(rand,1);
		count-=1;
                
	}


}

 deal20.array=[];



var cells2 = document.getElementsByClassName('cells2');
rowFinder.finalCell=[];



function ready() {

    for(var p=0;p<cells2.length;p++){

        rowFinder.finalCell.push("_");

    }
        if (deal20.array[0]===undefined){return;}
        
        
	document.getElementById('table1').style.display="none";
        document.getElementById('table2').style.display="table";
       
        var arrayCheck= [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
        var count1=20; 
        
        for(var i=0;i<cells2.length/2;i++){
           
           var rand=Math.floor(Math.random()*count1);
           
           var firstCard=deal20.array[rand];
           
           if (rand%2===0){
               var secondCard=deal20.array[rand+1];
               deal20.array.splice(rand,2);
               
           }else{
               var secondCard=deal20.array[rand-1];
               deal20.array.splice(rand-1,2);     
           }
           
           rand=Math.floor(Math.random()*count1);
           count1-=2;
           var check = arrayCheck[rand];
           
           if(check===0){
               cells2[0].innerHTML=firstCard;
               cells2[2].innerHTML=secondCard;
               rowFinder.finalCell[0]=firstCard;
               rowFinder.finalCell[2]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(0),1);
               arrayCheck.splice(arrayCheck.indexOf(2),1);
           }
           
           if(check===1){
               cells2[1].innerHTML=firstCard;
               cells2[7].innerHTML=secondCard;
               rowFinder.finalCell[1]=firstCard;
               rowFinder.finalCell[7]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(1),1);
               arrayCheck.splice(arrayCheck.indexOf(7),1);
           }
           
           if(check===2){
               cells2[2].innerHTML=firstCard;
               cells2[0].innerHTML=secondCard;
               rowFinder.finalCell[2]=firstCard;
               rowFinder.finalCell[0]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(2),1);
               arrayCheck.splice(arrayCheck.indexOf(0),1);
           }
           
           if(check===3){
               cells2[3].innerHTML=firstCard;
               cells2[11].innerHTML=secondCard;
               rowFinder.finalCell[3]=firstCard;
               rowFinder.finalCell[11]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(3),1);
               arrayCheck.splice(arrayCheck.indexOf(11),1);
           }
           
           if(check===4){
               cells2[4].innerHTML=firstCard;
               cells2[19].innerHTML=secondCard;
               rowFinder.finalCell[4]=firstCard;
               rowFinder.finalCell[19]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(4),1);
               arrayCheck.splice(arrayCheck.indexOf(19),1);
           }
           
           if(check===5){
               cells2[5].innerHTML=firstCard;
               cells2[12].innerHTML=secondCard;
               rowFinder.finalCell[5]=firstCard;
               rowFinder.finalCell[12]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(5),1);
               arrayCheck.splice(arrayCheck.indexOf(12),1);
           }
           
           if(check===6){
               cells2[6].innerHTML=firstCard;
               cells2[9].innerHTML=secondCard;
               rowFinder.finalCell[6]=firstCard;
               rowFinder.finalCell[9]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(6),1);
               arrayCheck.splice(arrayCheck.indexOf(9),1);
           }
           
           if(check===7){
               cells2[7].innerHTML=firstCard;
               cells2[1].innerHTML=secondCard;
               rowFinder.finalCell[7]=firstCard;
               rowFinder.finalCell[1]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(7),1);
               arrayCheck.splice(arrayCheck.indexOf(1),1);
           }
           
           if(check===8){
               cells2[8].innerHTML=firstCard;
               cells2[15].innerHTML=secondCard;
               rowFinder.finalCell[8]=firstCard;
               rowFinder.finalCell[15]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(8),1);
               arrayCheck.splice(arrayCheck.indexOf(15),1);
           }
           
           if(check===9){
               cells2[9].innerHTML=firstCard;
               cells2[6].innerHTML=secondCard;
               rowFinder.finalCell[9]=firstCard;
               rowFinder.finalCell[6]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(9),1);
               arrayCheck.splice(arrayCheck.indexOf(6),1);
           }
           
           if(check===10){
               cells2[10].innerHTML=firstCard;
               cells2[13].innerHTML=secondCard;
               rowFinder.finalCell[10]=firstCard;
               rowFinder.finalCell[13]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(10),1);
               arrayCheck.splice(arrayCheck.indexOf(13),1);
           }
           
           if(check===11){
               cells2[11].innerHTML=firstCard;
               cells2[3].innerHTML=secondCard;
               rowFinder.finalCell[11]=firstCard;
               rowFinder.finalCell[3]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(11),1);
               arrayCheck.splice(arrayCheck.indexOf(3),1);
           }
           
           if(check===12){
               cells2[12].innerHTML=firstCard;
               cells2[5].innerHTML=secondCard;
               rowFinder.finalCell[12]=firstCard;
               rowFinder.finalCell[5]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(12),1);
               arrayCheck.splice(arrayCheck.indexOf(5),1);
           }
           
           if(check===13){
               cells2[13].innerHTML=firstCard;
               cells2[10].innerHTML=secondCard;
               rowFinder.finalCell[13]=firstCard;
               rowFinder.finalCell[10]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(13),1);
               arrayCheck.splice(arrayCheck.indexOf(10),1);
           }
           
           if(check===14){
               cells2[14].innerHTML=firstCard;
               cells2[18].innerHTML=secondCard;
               rowFinder.finalCell[14]=firstCard;
               rowFinder.finalCell[18]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(14),1);
               arrayCheck.splice(arrayCheck.indexOf(18),1);
           }
           
           if(check===15){
               cells2[15].innerHTML=firstCard;
               cells2[8].innerHTML=secondCard;
               rowFinder.finalCell[15]=firstCard;
               rowFinder.finalCell[8]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(15),1);
               arrayCheck.splice(arrayCheck.indexOf(8),1);
           }
           
           if(check===16){
               cells2[16].innerHTML=firstCard;
               cells2[17].innerHTML=secondCard;
               rowFinder.finalCell[16]=firstCard;
               rowFinder.finalCell[17]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(16),1);
               arrayCheck.splice(arrayCheck.indexOf(17),1);
           }
           
           if(check===17){
               cells2[17].innerHTML=firstCard;
               cells2[16].innerHTML=secondCard;
               rowFinder.finalCell[17]=firstCard;
               rowFinder.finalCell[16]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(17),1);
               arrayCheck.splice(arrayCheck.indexOf(16),1);
           }
           
           if(check===18){
               cells2[18].innerHTML=firstCard;
               cells2[14].innerHTML=secondCard;
               rowFinder.finalCell[18]=firstCard;
               rowFinder.finalCell[14]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(18),1);
               arrayCheck.splice(arrayCheck.indexOf(14),1);
           }
           
           if(check===19){
               cells2[19].innerHTML=firstCard;
               cells2[4].innerHTML=secondCard;
               rowFinder.finalCell[19]=firstCard;
               rowFinder.finalCell[4]=secondCard;
               arrayCheck.splice(arrayCheck.indexOf(19),1);
               arrayCheck.splice(arrayCheck.indexOf(4),1);
           }
             
        
        }
      
     
}

button.count=[];
function button(num){
    
    button.count.push(num);
    if(button.count.length===2){
        rowFinder();
    button.count.splice(0,2);    
    }
    
}




var cells3 = document.getElementsByClassName('cells3');
function rowFinder(){
    
    
    
    if ((button.count[0]===1&&button.count[1]===1)){
               cells3[0].innerHTML=rowFinder.finalCell[0];
               cells3[1].innerHTML=rowFinder.finalCell[2];
               //alert(cells3[0]);
               //alert(rowFinder.finalCell[0]);
    }
    if ((button.count[0]===1&&button.count[1]===2)|(button.count[0]===2&&button.count[1]===1)){
               cells3[0].innerHTML=rowFinder.finalCell[1];
               cells3[1].innerHTML=rowFinder.finalCell[7];
    }
    if ((button.count[0]===1&&button.count[1]===3)|(button.count[0]===3&&button.count[1]===1)){
               cells3[0].innerHTML=rowFinder.finalCell[3];
               cells3[1].innerHTML=rowFinder.finalCell[11];
    }
    if ((button.count[0]===1&&button.count[1]===4)|(button.count[0]===4&&button.count[1]===1)){
               cells3[0].innerHTML=rowFinder.finalCell[4];
               cells3[1].innerHTML=rowFinder.finalCell[19];
    }
    if ((button.count[0]===2&&button.count[1]===3)|(button.count[0]===3&&button.count[1]===2)){
               cells3[0].innerHTML=rowFinder.finalCell[5];
               cells3[1].innerHTML=rowFinder.finalCell[12];
    }
    if ((button.count[0]===2&&button.count[1]===2)){
               cells3[0].innerHTML=rowFinder.finalCell[6];
               cells3[1].innerHTML=rowFinder.finalCell[9];
    }
    if ((button.count[0]===2&&button.count[1]===4)|(button.count[0]===4&&button.count[1]===2)){
               cells3[0].innerHTML=rowFinder.finalCell[8];
               cells3[1].innerHTML=rowFinder.finalCell[15];
    }
    if ((button.count[0]===3&&button.count[1]===3)){
               cells3[0].innerHTML=rowFinder.finalCell[10];
               cells3[1].innerHTML=rowFinder.finalCell[13];
    }
    if ((button.count[0]===3&&button.count[1]===4)|(button.count[0]===4&&button.count[1]===3)){
               cells3[0].innerHTML=rowFinder.finalCell[14];
               cells3[1].innerHTML=rowFinder.finalCell[18];
    }
    if ((button.count[0]===4&&button.count[1]===4)){
               cells3[0].innerHTML=rowFinder.finalCell[16];
               cells3[1].innerHTML=rowFinder.finalCell[17];
    }
    
    document.getElementById('table1').style.display="none";
    document.getElementById('table2').style.display="none";
    document.getElementById('table3').style.display="table";
    
    
}



	
	
	
	
	

