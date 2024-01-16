// function noClearScreen() {
//     document.getElementById("all").value !== "";
// }

const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('all1');
  const secondNameInput = document.getElementById('all2');
  const thirdNameInput = document.getElementById('all3');
  const fourNameInput = document.getElementById('all4');
  const fiveNameInput = document.getElementById('all5');
  const sixNameInput = document.getElementById('all6');
  const sevenNameInput = document.getElementById('all7');

  // Send value to server
  const a = firstNameInput.value;
  alert(secondNameInput.value);
  alert(thirdNameInput.value);
  alert(fourNameInput.value);
  alert(fiveNameInput.value);
  alert(sixNameInput.value);
  alert(sevenNameInput.value);
  let text = `Welcome ${a}`;

  // 👇️ clear input field
  firstNameInput.value = '';
  secondNameInput.value ='';
  thirdNameInput ='';
  fourNameInput ='';
  fiveNameInput ='';
  sixNameInput ='';
  sevenNameInput ='';
});
