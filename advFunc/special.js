function specialMix(...data) {
    // Your Code Here
   
    let sum = 0;
    let allStrings = false;

   for (let i = 0; i < arguments.length; i++) {
       
        if (/[0-9]/.test(arguments[i])){ 
            sum += parseInt(arguments[i])
            allStrings = true
        
        }  
        
                
   }
   if (allStrings == false) {
    sum = `all is wrong`
}
   return sum
   
  }
  
  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings