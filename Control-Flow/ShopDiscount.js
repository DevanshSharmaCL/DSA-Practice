function shopDiscount(prize) {
  if (prize > 0 && prize <= 5000) {
    console.log("no discount");
  } else if (prize >= 5001 && prize <= 7000) {
    let dis = 5;
    let final = prize - (prize * dis) / 100;
    console.log(final);
  } else if (prize >= 7001 && prize <= 9000) {
    let dis = 10;
    let final = prize - (prize * dis) / 100;
    console.log(final);
  } else if (prize >= 9000) {
    let dis = 20;
    let final = prize - (prize * dis) / 100;
    console.log(final);
  }
}

shopDiscount(6000)