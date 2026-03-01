<!-- hide script from old browsers
function PopulateListForSilverBeaverAlumni() {
  let ol = document.getElementById('SilverBeaverAlumni');
  let li;
  for (let i = 0; i < SilverBeaverAlumni.length; i++) { // for each data line
    li = document.createElement('li');
    li.innerHTML = SilverBeaverAlumni[i];
    ol.appendChild(li);
  }
}
PopulateListForSilverBeaverAlumni();
// end hiding script from old browsers -->

