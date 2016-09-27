(function ($) {

  $('.js-form').submit(function () {
    var form = this;
    
    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        $("#myModal").modal();
      },
      error: function (err) {
        console.log(err);
        
      }
    });

    return false;
  });

 
})(jQuery);
