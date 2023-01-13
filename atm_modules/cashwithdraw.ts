
import inquirer from "inquirer";
import chalk from "chalk";

async function otherAmount(balance:number){

const otherAmt= await inquirer.prompt([{
    name:"otherAmount",
    type:"number",
    message:"Please Enter your Amount"
}]);
if(otherAmt.otherAmount<balance){
    balance-=otherAmt.otherAmount;
}
else{
    console.log(chalk.red("You have insufficient balance"));
    balance = await otherAmount(balance);
    
}
return balance;
}
async function cashwithdraw(balance:number){
const answer = await inquirer.prompt([{
    name:"amount",
    type:"list",
    choices:["500","1000","2000","5000","10000","Other Amount"],
    message:"Please Select Your Amount"

}]);


switch(answer.amount){
    case "500":
        if(balance > Number(answer.amount)){
            balance-=500;
            console.log(chalk.yellow(`Your balance is ${balance}`));
        break;
        }
        else {
            console.log(chalk.red("You have insufficient balance"));    
        } 
        
    case "1000":
        if(balance > Number(answer.amount)){
            balance-=1000;
            console.log(chalk.yellow(`Your balance is ${balance}`));
        break;
        }
        else {
            console.log(chalk.red("You have insufficient balance"));  
        } 
    case "2000":
        if(balance > Number(answer.amount)){
            balance-=2000;
            console.log(chalk.yellow(`Your balance is ${balance}`));
        break;
        }
        else {
            console.log(chalk.red("You have insufficient balance"));   
        } 
        
    case "5000":
        if(balance > Number(answer.amount)){
            balance-=5000;
        console.log(chalk.yellow(`Your balance is ${balance}`));
        break;
        }
        else {
            console.log(chalk.red("You have insufficient balance"));   
        } 
        
    case "10000":
        if(balance > Number(answer.amount)){
            balance-=10000;
            console.log(chalk.yellow(`Your balance is ${balance}`));
        break;
        }
        else {
    console.log('You have insufficient balance')    
        } 
            
    case "Other Amount":
            balance = await otherAmount(balance);
            console.log(chalk.yellow(`Your balance is ${balance}`));
            break;     
}
return balance;

}




export default cashwithdraw;