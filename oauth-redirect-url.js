// Load Function
window.loadInt = setInterval(loadFunc, 100);

function loadFunc() {
  var x = document.getElementById("button-ydAztZSX3U_btn");
  if (x === undefined || x === null) {} else {
    document.getElementById("button-ydAztZSX3U_btn").addEventListener('click', copyCode);
    authcodeFunc();
    clearInterval(loadInt);
  }
}

// Get Authorization Code
function authcodeFunc() {
  window.url = window.location.href;
  window.code = url.split("code=")[1];
  document.getElementById("sub-heading-_9WWOhxpa1").children[0].children[0].children[0].innerText = code;
}

// Copy Code Function
function copyCode() {
  navigator.clipboard.writeText(code);
}
