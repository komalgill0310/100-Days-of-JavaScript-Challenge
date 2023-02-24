function whichIsLarger(f, g) {
  const fReturn = f();
  const gReturn = g();
  if (fReturn > gReturn) return "f";
  if (gReturn > fReturn) return "g";
  return "neither";
}

// Problem link: https://edabit.com/challenge/o7TwicAHWuMkjbDqQ
