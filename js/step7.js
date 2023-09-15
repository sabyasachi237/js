$(document).ready(function () {
    $(".upload-area-a-2").click(function () {
        $('#upload-input-a-2').trigger('click');
    });

    $('#upload-input-a-2').change(event => {
        if (event.target.files) {
            let files = event.target.files;
            let filesAmount = files.length;

            for (let i = 0; i < filesAmount; i++) {
                let reader = new FileReader();
                reader.onload = function (event) {
                    let html = `
                        <div class="uploaded-img">
                            <img src="${event.target.result}">
                            <button type="button" class="remove-btn">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    `;
                    $(".upload-img-a-2").append(html);
                }
                reader.readAsDataURL(files[i]);
            }

            $('.upload-info-value-a-2').text(filesAmount);
            $('.upload-img-a-2').css('padding', "20px");
        }
    });

    $('.upload-img-a-2').on('click', '.remove-btn', function () {
        $(this).parent().remove();
        updateFileCount();
    });

    function updateFileCount() {
        let uploadedImages = $('.upload-img-a-2 .uploaded-img').length;
        $('.upload-info-value-a-2').text(uploadedImages);
    }
});
