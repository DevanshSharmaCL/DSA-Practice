function LeapYear(year) {
  const Checker =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? "leap year"
      : "no leap year";
      console.log(Checker)
}

LeapYear(1800);
