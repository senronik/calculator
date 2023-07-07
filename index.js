
var disp=document.getElementById('display');
var buttons=document.querySelectorAll('.btn');
// const math = require('mathjs');
 for(items of buttons){
    items.addEventListener('click',(e)=>{
        const btnText=e.target.value;
        // console.log(btnText);
        disp.value+=btnText;
    })
}
var radio='false';
function convert(){
    radio=radio!='false'?'false':'true';
}

function calculate(){
    try {
        
        var expression=disp.value;
        if(radio=='true'){
            const regex1=/sin\(/g;
            const regex2=/cos\(/g;
            const regex3=/tan\(/g;
            expression = expression.replace(regex1, 'sin('+Math.PI/ 180+'*');
            expression = expression.replace(regex2, 'cos('+Math.PI/ 180+'*');
            expression = expression.replace(regex3, 'tan('+Math.PI/ 180+'*');

            // if(regex1.test(expression)){
            //     expression = expression.replace(regex1, 'sin('+Math.PI/ 180+'*');
            //     console.log('first')
            // }else if(regex2.test(expression)){
            //     expression = expression.replace(regex2, 'cos('+Math.PI/ 180+'*');
            //     console.log('sec')
            // }
            // else{
            //     expression = expression.replace(regex3, 'tan('+Math.PI/ 180+'*');
            //     console.log('third')
            // }
            
            var result=math.evaluate(expression);
            console.log(result);
            disp.value=result;
        }else{
          const result=math.evaluate(expression);
          console.log(result)
          disp.value=result;
        }
        
    } catch (error) {
        disp.value=error;
    }
}
function clearAll(){
    disp.value='';
}
function goToback(){
    disp.value=disp.value.slice(0,disp.value.length-1);
}
function inverseFun(){
    var sin=document.getElementById('sin');
    var cos=document.getElementById('cos');
    var tan=document.getElementById('tan');
    var insert=document.getElementById('insert');
    // console.log(sin.value);
    // console.log(cos.value);
    // console.log(tan.value);
    if (sin.value=='sin(') {
        document.getElementById('sin').innerHTML='sin<sup>-1<sup/>';
        document.getElementById('cos').innerHTML='cos<sup>-1<sup/>';
        document.getElementById('tan').innerHTML='tan<sup>-1<sup/>';
        sin.value= sin.value!='sin('?'sin(':'asin(';
        cos.value= cos.value!='cos('?'cos(':'acos(';
        tan.value= tan.value!='tan('?'tan(':'atan(';
    }else{
        
        document.getElementById('sin').innerHTML='sin';
        document.getElementById('cos').innerHTML='cos';
        document.getElementById('tan').innerHTML='tan';

        sin.value= (sin.value!='sin(')?'sin(':'asin(';
        cos.value= cos.value!='cos('?'cos(':'acos(';
        tan.value= tan.value!='tan('?'tan(':'atan(';
    }
    if(insert.value=='e')
    {
        document.getElementById('insert').innerHTML='In';
        insert.value=insert.value!='e'?'e':'log(';
    }else{
        
        document.getElementById('insert').innerHTML='e';
        insert.value=insert.value!='e'?'e':'log(';
    }
    // console.log(sin.value);
    // console.log(cos.value);
    // console.log(tan.value);
    // debugger;
}

  