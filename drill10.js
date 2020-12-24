// What Am I?
function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
      return false;
    }
    for (let i = 2; i < n; ++i) {
      if (n % i == 0) return false;
    }
    return true;
  }

  //0(n)
  // the time complexity is dependent on would be linear as it depends on the value of n