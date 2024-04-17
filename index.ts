#!/bin/usr/env node

import inquirer from "inquirer";
const currency:any={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    PKR:280
}
let answer=await inquirer.prompt([{
    
    name:"from",
    message:"enter from currency",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR"]
},
{
    name:"to",
    message:"enter to currency",
    type:"list",
    choices:["USD","EUR","GBP","INR","PKR"]
},
{
    name:"amount",
    message:"enter amount",
    type:"number"
}


])
let fromamount=currency[answer.from]; //exchange rate
let toamount=currency[answer.to];
let amount=answer.amount;
let baseAmount=amount/fromamount; //base currency is USD
let convertedAmount=baseAmount*toamount;
console.log(convertedAmount);

