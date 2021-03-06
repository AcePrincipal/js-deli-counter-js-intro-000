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
    return `The line is currently: ${1}. ${arr[0]}.`
  } else {
    var line = `The line is currently: ${1}. ${arr[0]}, `;
    for(var i = 1; i < arr.length; i++) {
      if(i === arr.length - 1){
        line = line + `${i+1}. ${arr[i]}`;
      } else {
        line = line + `${i+1}. ${arr[i]}, `
      }
    }

    return line;
  }
}
