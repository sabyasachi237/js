var currentStep = 1;
var totalSteps = 11;

$(document).ready(function () {
  $(".next-step").click(function () {
    if (validateFields(currentStep)) {
      if (currentStep < totalSteps) {
        $("#step" + currentStep).hide();
        currentStep++;
        $("#step" + currentStep).show();
        updateStepCounter();
      }
    } else {
      // Display an error message or take other action
      alert("Please fill out all the required fields before proceeding.");
    }
  });

  $(".prev-step").click(function () {
    if (currentStep > 1) {
      $("#step" + currentStep).hide();
      currentStep--;
      $("#step" + currentStep).show();
      updateStepCounter();
    }
  });

  function updateStepCounter() {
    $("#step-counter").text("Step " + currentStep + " of " + totalSteps);
  }

  function validateFields(step) {
    if (step === 2) {
      // Validate fields on Step 2
      var requiredFields = $("#step2 input[required]");
      for (var i = 0; i < requiredFields.length; i++) {
        if (requiredFields[i].value.trim() === "") {
          return false;
        }
      }
    }
    // Add additional validation for other steps as needed
    return true;
  }
});

$(".datepicker").pickadate({
  formatSubmit: "yyyy/mm/dd",
  hiddenName: true,
});
   
        // JavaScript to handle image upload and display
        const imageInput = document.getElementById('image-input');
        const imageContainer = document.getElementById('image-container');
        const loader = document.getElementById('loader');

        imageInput.addEventListener('change', handleImageUpload);

        function handleImageUpload(event) {
            const files = event.target.files;

            for (const file of files) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const image = new Image();
                    image.src = e.target.result;
                    image.classList.add('uploaded-image');
                    imageContainer.appendChild(image);
                };

                reader.readAsDataURL(file);
            }

            // Show loader while uploading
            loader.style.display = 'block';

            // Simulate an upload delay (you can replace this with actual upload code)
            setTimeout(() => {
                loader.style.display = 'none';
            }, 2000); // Change the delay as needed
        }
            // Function to handle image upload and display for Step 5
function handleImageUploadStep5(event) {
  const files = event.target.files;
  const imageContainer = document.getElementById('image-container-step5');
  const loader = document.getElementById('loader-step5');

  for (const file of files) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const image = new Image();
      image.src = e.target.result;
      image.classList.add('uploaded-image-step5');
      imageContainer.appendChild(image);
      simulateUpload(loader); // Simulate the upload after adding each image
    };

    reader.readAsDataURL(file);
  }
}

// Simulate an upload delay (you can replace this with actual upload code)
function simulateUpload(loader) {
  loader.style.display = 'block';
  setTimeout(() => {
    loader.style.display = 'none';
  }, 2000); // Change the delay as needed
}

// Attach the file input change event listener for Step 5
const fileInputStep5 = document.getElementById('image-input-step5');

fileInputStep5.addEventListener('change', function (event) {
  handleImageUploadStep5(event);
});
var signaturePad = new SignaturePad(document.getElementById('signature-canvas'));

function openSignaturePopup() {
document.getElementById('signature-popup').style.display = 'block';
}

function closeSignaturePopup() {
document.getElementById('signature-popup').style.display = 'none';
}

// Handle Clear button click
document.getElementById('cancel-button').addEventListener('click', function () {
signaturePad.clear();
});

// Handle form submission
document.getElementById('done-button').addEventListener('click', function () {
// Get the signature data as a base64-encoded PNG image
var signatureData = signaturePad.toDataURL();

// Set the value of the hidden input to the signature data
document.getElementById('signature-data').value = signatureData;

// Navigate to Step 8
document.getElementById('step8').style.display = 'none';
document.getElementById('step9').style.display = 'block';
});
var signaturePad1 = new SignaturePad(document.getElementById('signature-canvas1'));

function openSignaturePopup1() {
document.getElementById('signature-popup1').style.display = 'block';
}

function closeSignaturePopup1() {
document.getElementById('signature-popup1').style.display = 'none';
}

// Handle Clear button click
document.getElementById('cancel-button1').addEventListener('click', function () {
signaturePad.clear();
});

// Handle form submission
document.getElementById('done-button1').addEventListener('click', function () {
// Get the signature data as a base64-encoded PNG image
var signatureData1 = signaturePad1.toDataURL();

// Set the value of the hidden input to the signature data
document.getElementById('signature-data1').value = signatureData1;

// Navigate to Step 9
document.getElementById('step9').style.display = 'none';
document.getElementById('step10').style.display = 'block';
});