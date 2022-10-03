function test() {  
    return function() {  
       console.log("Higher-Order Function");  
    }  
 }  
 const callFunc = test(); //for invoking the anonymous function  
 callFunc(); 