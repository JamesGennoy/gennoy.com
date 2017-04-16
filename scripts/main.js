(function(d) {
  var displayElement = d.querySelector('.days-married');

  var weddingDay = new Date('June 12, 2004');
  var today = new Date();

  var diff = today.getTime() - weddingDay.getTime();
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (displayElement) {
    displayElement.innerHTML = days.toLocaleString();
  }
})(document);
