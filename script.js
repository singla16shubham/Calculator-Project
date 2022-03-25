var buttons=document.getElementsByClassName("button");
// console.log(buttons.length);
var display=document.getElementById("display");
var op1=0;
var op2=null;
var operator=null;
function calculate()
     { 
        var value=this.getAttribute('data-value');
       
         if(value=='+'||value=='-'||value=='*'||value=='/'||value=='%')
        {    if(display.textContent=='')
        {
            alert("You have not entered any no. Please First Enter a no.");
            return;
        }
            op1=parseFloat(display.textContent);

            operator=value;
            display.innerText="";
        }
        else if(value=="AC")
        { 
            op1=0;
            op2=null;
            operator=null;
            display.innerText="";
        }
        else if(value=='=')
        { 
           if(display.textContent=="")
           {display.innerText="Error";
               return;

           }
           op2=parseFloat(display.textContent);
      
           
           if(operator=='/'&&op2=='0')
           {
               display.innerText="Error";
               return;
           }
        //    alert(op1);
        //    alert(op2);
           var ans=eval(op1+" "+operator+" "+op2);
           
           display.innerText=ans;
        }
        else if(value=="+-")
        { op1=parseFloat(display.textContent);
         if(op1!='0')
        {  
            //display.innerText+=0-op1;
            op1=0-op1;
          //  alert(op1);
            display.innerText=op1;
        }
             
        }
       
        else{
            display.innerText+=value;
        }
    }
for(var i=0;i<buttons.length;i++)
{  
    buttons[i].addEventListener('click',calculate);
}