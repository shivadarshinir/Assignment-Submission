function submitForm() {
  // Get the form values
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = document.querySelectorAll('input[name="gender"]:checked');
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // Check if all fields are filled
  if (!firstName || !lastName || !dob || !country || gender.length === 0 || !profession || !email || !mobile) {
    alert("Please fill in all required fields.");
    return;
  }

  // Build the popup content
  let popupContent = "";
  popupContent += `<p><strong>First Name:</strong> ${firstName}</p>`;
  popupContent += `<p><strong>Last Name:</strong> ${lastName}</p>`;
  popupContent += `<p><strong>Date of Birth:</strong> ${dob}</p>`;
  popupContent += `<p><strong>Country:</strong> ${country}</p>`;
  popupContent += "<p><strong>Gender:</strong>";
  gender.forEach(g => {
    popupContent += ` ${g.value}`;
  });
  popupContent += "</p>";
  popupContent += `<p><strong>Profession:</strong> ${profession}</p>`;
  popupContent += `<p><strong>Email:</strong> ${email}</p>`;
  popupContent += `<p><strong>Mobile Number:</strong> ${mobile}</p>`;

  // Display the popup with submitted data
  document.getElementById("popup-data").innerHTML = popupContent;
  document.getElementById("popup").style.display = "block";
}

function resetForm() {
  document.getElementById("surveyForm").reset();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  resetForm();
}
