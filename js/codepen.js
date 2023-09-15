$(document).ready(function () {
    $(".upload-area").click(function () {
        $('#upload-input').trigger('click');
    });

    $('#upload-input').change(event => {
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
                    $(".upload-img").append(html);
                }
                reader.readAsDataURL(files[i]);
            }

            $('.upload-info-value').text(filesAmount);
            $('.upload-img').css('padding', "20px");
        }
    });

    $('.upload-img').on('click', '.remove-btn', function () {
        $(this).parent().remove();
        updateFileCount();
    });

    function updateFileCount() {
        let uploadedImages = $('.upload-img .uploaded-img').length;
        $('.upload-info-value').text(uploadedImages);
    }
});
