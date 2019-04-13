// // console.log(process.argv)
// const operations = require('./Operations/index');
// const params = process.argv.slice(2);

// const currentOperationIndex=params.findIndex(item=>item.startsWith('--'))

// const currentOperationName=params.splice(currentOperationIndex,1).map(e=>e.substring(2))[0];

// const operands=params.map(e=>Number(e));
// let func = operations[currentOperationName];
// const validation = require('./Operations/Validation');
// if(validation(currentOperationName,...operands)) 
// console.log(func(...operands));

// else{
//     console.log("can't complete these operation")
// }

const operations = require('./Operations/index');
const yargs = require('yargs');

//ha3ml filter bl array aly ha3mlo aly feh add w sub wh hagat de 3ahsn lw fe haga undefined mydrabsh

let { add } = yargs.array('add').argv;
let { sub } = yargs.array('sub').argv;
let { div } = yargs.array('div').argv;
let { mod } = yargs.array('mod').argv;
let { mul } = yargs.array('mul').argv;
// console.log(add);
// if (add === undefined)
console.log("add : ", operations.add(...add));
console.log("sub : ", operations.sub(...sub));
console.log("div : ", operations.div(...div));
console.log("mul : ", operations.mul(...mul));
console.log("mod : ", operations.mod(...mod));
