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

// Add an event listener to the "Submit" button
document.getElementById('continue-button').addEventListener('click', function () {
  // Perform any necessary validation here before proceeding to Step 11

  // Assuming validation is successful, you can submit the form or navigate to "Step 11" here
  // For example, you can submit the form using JavaScript:
  document.getElementById('step10-form').submit();

  // Or if you want to navigate to "Step 11" without submitting the form, you can use:
  document.getElementById('step10').style.display = 'none';
  document.getElementById('step11').style.display = 'block';
});
