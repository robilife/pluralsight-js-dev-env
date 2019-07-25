import "./index.css";
import numeral from "numeral";

const courseValue = numeral(100).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awsome course!`); // eslint-disable-line no-console