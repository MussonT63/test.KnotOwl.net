<!-- hide script from old browsers
function PopulateListForDistrictAwardOfMeritAlumni() {
  let ol = document.getElementById('DistrictAwardOfMeritAlumni');
  let li;
  for (let i = 0; i < DistrictAwardOfMeritAlumni.length; i++) { // for each data line
    li = document.createElement('li');
    li.innerHTML = DistrictAwardOfMeritAlumni[i];
    ol.appendChild(li);
  }
}
PopulateListForDistrictAwardOfMeritAlumni();
// end hiding script from old browsers -->

