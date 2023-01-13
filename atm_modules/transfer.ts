
import inquirer from "inquirer";
import chalk from "chalk";
async function transfer(balance:number) {
    const answer = await inquirer.prompt([{
        name:"accountNumber",
        type:"number",
        message:"Enter account number"
    },
{
name:"amount",
type:"number",
message:"Enter your amount"
}]);
if(balance >answer.amount)
{
    balance-=answer.amount;
}
else {
    console.log(chalk.red("You have insufficient balance"));
}


return balance;
    
}

export default transfer;