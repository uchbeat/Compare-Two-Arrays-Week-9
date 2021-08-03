function diffArray (array1, array2) {
    var a = [];
    var diff = [];
    for (var i = 0; i < array1.length; i++) {
      a[array1[i]] = true;    
    }
    for (var i = 0; i <array2.length; i++) {
      if (a[array2[i]]) {
        delete a[array2[i]];
      } else {
        a[array2[i]] = true;
      }
    }
    for (var k in a){
      diff.push(k);    
    }
    return diff;
  }
  console.log(diffArray(["grass", "dirt", "pink wool", "dead shrub"],  ["grass", "dirt", "dead shrub"]));
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));