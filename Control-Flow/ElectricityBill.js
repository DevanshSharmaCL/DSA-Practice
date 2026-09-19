function ElectricityBill(unit) {
  if (unit <= 100) {
    let bill = unit * 4.2;
    console.log(bill);
  }else if (unit<=200){
    let bill = (100*4.2)+((unit-100)*6)
    console.log(bill)
  }else if (unit <= 400){
    let bill = (100*4.2)+(100*6)+((unit-200)*8)
    console.log(bill)
  }else if (unit>400){
    let bill = (100*4.2)+(100*6)+(200*8)+((unit-400)*13)
    console.log(bill)
  }
}
ElectricityBill(700);
