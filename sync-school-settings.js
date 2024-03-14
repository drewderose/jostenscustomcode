// Page Parameters
window.getPageParameter = function getPageParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true :
        decodeURIComponent(sParameterName[1]);
    }
  }
}

// Load Function
window.loadInterval = setInterval(loadFunc, 100);

function loadFunc() {
  var a = document.getElementsByClassName('btn btn-dark button-element')[0];
  if (a === undefined || a === null) {} {
    // Check for Params
    window.locationid = getPageParameter('location_id');
    if (locationid === "" || locationid === undefined) {
      window.lidv = false;
    } else {
      window.lidv = true;
    }
    window.contactid = getPageParameter('contact_id');
    if (contactid === "" || contactid === undefined) {
      window.cidv = false;
    } else {
      window.cidv = true;
    }
    window.userphone = getPageParameter('user_phone');
    if (userphone === "" || userphone === undefined) {
      window.pidv = false;
    } else {
      window.pidv = true;
    }
    // Location ID or Contact ID Missing
    if (lidv === false || cidv === false) {
      alert("ERROR CODE 301: Please contact support.");
      document.getElementsByClassName("col-12")[2].style.display = "none";
    }
    // User Phone Missing
    if (lidv === true && cidv === true && pidv === false) {
      alert("ERROR CODE 201: You will NOT be notified about the status of this submission.");
      document.getElementById("4VnDd3UjXSNaugruH3k2").value = locationid;
      document.getElementById("4VnDd3UjXSNaugruH3k2").dispatchEvent(new Event("input", {
        bubbles: true
      }));
      document.getElementById("HSacSfvzoJoCUeDQX1cT").value = contactid;
      document.getElementById("HSacSfvzoJoCUeDQX1cT").dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }
    // All Params Present
    if (lidv === true && cidv === true && pidv === true) {
      document.getElementById("4VnDd3UjXSNaugruH3k2").value = locationid;
      document.getElementById("4VnDd3UjXSNaugruH3k2").dispatchEvent(new Event("input", {
        bubbles: true
      }));
      document.getElementById("HSacSfvzoJoCUeDQX1cT").value = contactid;
      document.getElementById("HSacSfvzoJoCUeDQX1cT").dispatchEvent(new Event("input", {
        bubbles: true
      }));
      document.getElementById("rty6ckbPMktzvsYSAW1M").value = userphone;
      document.getElementById("rty6ckbPMktzvsYSAW1M").dispatchEvent(new Event("input", {
        bubbles: true
      }));
    }
    // School Name
    window.schoolname = getPageParameter('school_name');
    if (schoolname === "" || schoolname === undefined) {
      document.getElementsByTagName("p")[2].style = "font-weight:bold";
      document.getElementsByTagName("p")[2].innerText = "No school found.";
    } else {
      document.getElementsByTagName("p")[2].style = "font-weight:bold";
      var school = schoolname.replace("+", " ");
      document.getElementsByTagName("p")[2].innerText = school;
    }
    // Finish
    clearInterval(loadInterval);
  }
}