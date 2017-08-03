$(function() {
  var mainWrapperHeight = parseInt($('#article-main-wrapper').css('height'));
  $('#article-book-review').css('height', mainWrapperHeight * 0.9);
  $('#article-book-review-below').css('height', mainWrapperHeight * 0.1);
});
