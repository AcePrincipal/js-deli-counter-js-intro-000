function takeANumber(arr, name) {
  arr.push(name);

  return `Welcome, ${name}. You are number ${arr.length} in line.`;
}
function nowServing(arr) {
  return arr.shift();
}