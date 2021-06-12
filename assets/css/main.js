

<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>;
$(document).ready(function() {
    $('#btn-next').click(function(event){
        var slide_sau = $('.active').next();
        $('.active').addClass('bien-mat-ben-trai');
        slide_sau.addClass('active').addClass('di-vao-ben-phai');
    });
});