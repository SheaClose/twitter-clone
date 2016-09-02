$(document).ready(function () {
  $('.tweet-compose').on('focus', function() {
    $(this).css('height', '5em');
    $('#char-count').css('visibility', 'visible');
    $('#tweet-submit').css('visibility', 'visible');
  });

  // $('.tweet-compose').on('blur', function() {
  //   $(this).css('height', '2.5em');
  //   // $('#char-count').css('visibility', 'hidden');
  //   // $('#tweet-submit').css('visibility', 'hidden');
  // });

  $('.tweet-compose').on('keyup keydown', function () {
    var str = $(this).val();
    var strLength = str.length;
    $('#char-count').text(140 - strLength);
      if(strLength > 129) {
        $('#char-count').css('color', 'red');
      }
      else {
        $('#char-count').css('color', "#999");
      }
      if (strLength > 140 || strLength === 0) {
        $("#tweet-submit").attr("disabled","disabled");
      }
      else {
        $("#tweet-submit").removeAttr("disabled","disabled");
      }
  });

  $("#tweet-submit").on('click', function() {
    var tweetstr = $('.tweet-compose').val()
      $('#stream').prepend(tweetstr);
      console.log(tweetstr);
    });




});
