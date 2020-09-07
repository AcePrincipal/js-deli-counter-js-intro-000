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
