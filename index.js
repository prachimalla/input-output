// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
var arr1 = "john".split('');
var arr2 = arr1.reverse();
console.log(arr2)
var arr3 = "jones".split('');
arr2.push(arr3);
console.log(arr2,arr1)
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
