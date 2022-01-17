export const adder = () => {
  let sum = 0;
  return (num = 0) => {
    sum += num;
    return sum;
  };
}
