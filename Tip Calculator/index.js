function formatMoney(value) {
  value = value.toFixed(2);
  return "$ " + value;
}

function update() {
  const billValue = Number(document.getElementById("yourBill").value);
  const tipPercent = document.getElementById("tipInput").value;
  const split = document.getElementById("splitInput").value;
  const splitValue = document.getElementById("splitValue");
  // calculando a gorjeta e dividindo pela quantidade de pessoas
  const tipValue = billValue * (tipPercent / 100);
  const totalValue = billValue + tipValue;
  const eachValue = totalValue / split;
  //   exibindo a porcentagem no html
  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  //   exibindo o valor da gorjeta no html
  document.getElementById("tipValue").innerHTML = formatMoney(tipValue);
  //   exibindo o valor total no html
  document.getElementById("totalWithTip").innerHTML = formatMoney(totalValue);
  //   exibindo o valor de cada pessoa no html
  if (splitValue === 1) {
    splitValue.innerHTML = split + " Person";
  } else {
    splitValue.innerHTML = split + " People";
  }

  document.getElementById("billEach").innerHTML = formatMoney(eachValue);
}
