<!-- by Trevor and Tim Musson -->
<!-- URL = host/path/?name=unit -->
<!-- class="unit eagle" to highlight, ie space delimited-->

window.onload = function() {
  // get the parameters of the current URL
  let params = new URLSearchParams(document.location.search);
  let name = params.get('name');
  // get a HTMLCollection of elements that have the matching class name
  let tags = document.getElementsByClassName(name);
  for (var i = 0; i < tags.length; i++) {
    if (tags[i].tagName == "LI") {
      tags[i].style.background = "#00ff00";
    } else if (tags[i].tagName == "DETAILS") {
      tags[i].removeAttribute("open");
    }
  }
}
