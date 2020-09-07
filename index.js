function takeANumber(arr, name) {
  arr.push(name);

  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}
function nowServing(arr) {
  if(arr.length === 0) {
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${arr.shift()}.`;
}
function currentLine(arr) {
  if(arr.length === 0) {
    return "The line is currently empty.";
  } else if(arr.length === 1){
    return `The line is currently: ${i}. ${arr[i]}`
  }
}