function outcome() {
  let num1 = Number(document.getElementById("num-one").value);
  let num2 = Number(document.getElementById("num-two").value);
  let total = 0;

  let add = document.getElementById("box1");
  let subtract = document.getElementById("box2");
  let multiply = document.getElementById("box3");

  if (add.checked) {
    total = num1 + num2;
  } else if (subtract.checked) {
    total = num1 - num2;
  } else if (multiply.checked) {
    total = num1 * num2;
  } else {
    total = num1 / num2;
  }
  document.getElementById("resultArea").innerHTML = "Result: " + String(total);
}
