import inquirer from "inquirer";
import cashwithdraw from "./cashwithdraw.js";
import cashDeposit from "./cashDeposit.js";
import transfer from "./transfer.js";
import Utility from "./utilityBills.js";
import chalk from "chalk";
async function anotherTransaction() {
    const OTrans = await inquirer.prompt([{
            name: "otherTrans",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want another transaction ?"
        }]);
    return OTrans.otherTrans;
}
async function mainScreen(balance) {
    do {
        const options = await inquirer.prompt([{
                name: "menu",
                type: "list",
                choices: ['Balance Inquiry', 'Cash Widthdrawl', 'Cash Deposit', 'Transfer', 'Utility Bill', 'Exit'],
                message: "Please Enter your Transaction Type"
            }]);
        switch (options.menu) {
            case "Balance Inquiry":
                console.log(chalk.yellow(`Your current balance is: ${balance}`));
                break;
            case "Cash Widthdrawl":
                balance = await cashwithdraw(balance);
                //console.log(chalk.green(`Your transaction is successful new balnace is ${balance}`));
                break;
            case "Cash Deposit":
                balance = await cashDeposit(balance);
                //console.log(`Your transaction is successful new balnace is ${balance}`);
                break;
            case "Transfer":
                balance = await transfer(balance);
                //console.log(`Your transaction is successful new balnace is ${balance}`);
                break;
            case "Utility Bill":
                balance = await Utility(balance);
                break;
            case "Exit":
                anothertran = "No";
                break;
        }
        if (options.menu !== "Exit") {
            console.log(chalk.green(`Your transaction is successful new balnace is ${balance}`));
            var anothertran = await anotherTransaction();
        }
        if (anothertran == "No") {
            console.log("Thank you for using our services");
        }
    } while (anothertran != "No");
}
export default mainScreen;
