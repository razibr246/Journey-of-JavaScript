function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  let index = arr.findIndex(function(element) {
    return element >= num;
  });

  return index === -1 ? arr.length : index;
}
