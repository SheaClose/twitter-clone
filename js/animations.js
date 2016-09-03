$(document).ready(function () {
// var i = 0;
// while (i = 0) {
//   function () {
//     $('.tweet-actions').hide();
//   }
// }
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
      $('#stream').prepend(
'<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg" />' +
'<strong class="fullname">Shea Close</strong><span class="username">@Shea_Close</span>'+
'<p class="tweet-text">'+tweetstr+'</p><div class="tweet-actions"><ul>'+
'<li><span class="icon action-reply"></span> Reply</li><li>'+
'<span class="icon action-retweet">' +
'</span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li>'+
'<li><span class="icon action-more"></span> More</li> </ul> </div> <div class="stats"> '+
'<div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div>'+
'<div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div>'+
'<div class="users-interact"><div><img src="img/alagoon.jpg" />'+
'<img src="img/vklimenko.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div>'+
'</div><div class="reply"><img class="avatar" src="img/alagoon.jpg" />'+
'<textarea class="tweet-compose" placeholder="Reply to  @mybff"/>' +
'</textarea></div></div></div>');
    });


    $('.content').mouseenter(function() {
      $('.tweet-actions', this).slideDown();
     });
     $('.content').mouseleave(function() {
       $('.tweet-actions', this).slideUp();
    });

    $('.tweet').on('click', function() {
      $('.stats', this).slideDown(true);
     });
    //  $('.content').mouseleave(function() {
    //    $('.tweet-actions', this).toggle(false);
    // });
      // $(document).on('mouseenter', '.tweet', function(e) {
    //    $(e.target).find('.tweet-actions').slideDown('fast');
    //  });
    //  $(document).on('mouseleave', '.tweet', function(e) {
    //    $(e.target).find('.tweet-actions').slideUp('fast');
    //  });


});
