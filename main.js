(function ($) {

  $('.js-form').submit(function () {
    var form = this;
    
    $.ajax({
      type: $(this).attr('method'),
      url: $(this).attr('action'),
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        console.log(data);
      },
      error: function (err) {
        console.log(err);
        
      }
    });

    return false;
  });

 
})(jQuery);
