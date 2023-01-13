import users from "./users.js";
import inquirer from "inquirer";
import mainScreen from './mainScreen.js';
async function login() {
    const answer = await inquirer.prompt([{
            name: "accountNumber",
            type: "number",
            message: "Please add your account number"
        },
        {
            name: "pin",
            type: "password",
            message: "Enter your pin code"
        }]);
    let user = users.find(x => x.accountNumber == answer.accountNumber && x.pinCode == answer.pin);
    if (typeof user != "undefined") {
        console.log(`Welcome ${user.name}`);
        mainScreen(user.balance);
    }
    else {
        console.log("You entered invalid pin or acc number");
    }
}
export default login;
