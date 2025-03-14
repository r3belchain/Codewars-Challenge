function newAvg(arr, newavg) {
  // your code
  let currentTotal = 0;
  for(let i = 0; i < arr.length; i++) {
    currentTotal += arr[i];
  }
  let newDonation = Math.ceil(newavg * (arr.length + 1) - currentTotal);

  if(newDonation <= 0) {
   throw new Error("Expected New Average is too low");
  }
  return newDonation;
}


console.log(newAvg([14, 30, 5, 7, 9, 11, 16], 90));