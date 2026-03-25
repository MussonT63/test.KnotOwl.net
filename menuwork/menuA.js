<!-- hide script from old browsers
document.write('<nav class="navbar">')
document.write('  <div> <a href="/" class="nav-branding"><img alt="Wood Badge Owl" width="35" src="./WoodBadgeOwl.svg"></a> </div>') // Favicon site logo
document.write('  <div> <h2 id="siteTitle">KnotOwl</h2> </div>') // Section title
document.write('  <div>') // Hamburger button using semantic HTML
document.write('    <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">')
document.write('      <span class="bar">&nbsp;</span>')
document.write('      <span class="bar">&nbsp;</span>')
document.write('      <span class="bar">&nbsp;</span>')
document.write('    </button>') // Button
document.write('    <ul class="nav-menu" id="nav-menu">') // Menu Start
document.write('      <li class="nav-item"> <a class="nav-link" href="/">Home</a> </li>')
document.write('      <li class="nav-item" onclick="mySubMenu(1)">Advancement')
document.write('        <ul id="sub-menu-1" class="sub-menu">')
document.write('          <li class=sub-item> <a class="nav-link" href="/Adv/Eagle/">Eagle</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/Adv/Venturing/">Venturing</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/Adv/MBCinfo/">MBC Info</a> </li>')
document.write('        </ul>')
document.write('      </li>')
document.write('      <li class="nav-item" onclick="mySubMenu(2)">Chief Okemos')
document.write('        <ul id="sub-menu-2" class="sub-menu">')
document.write('          <li class=sub-item> <a class="nav-link" href="/COD/Reports/">Reports</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/COD/Laurels/">Laurels</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/COD/Calendar/">Calendar</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/COD/FAQ/">FAQ</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/COD/Misc/">Misc</a> </li>')
document.write('        </ul>')
document.write('      </li>')
document.write('      <li class="nav-item" onclick="mySubMenu(3)">KnotMasters')
document.write('        <ul id="sub-menu-3" class="sub-menu">')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/">KnotMasters</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/1-Apprentice_White.html">Apprentice</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/2-Knotter_Yellow.html">Knotter</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/3-Hitcher_Red.html">Hitcher</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/4-Master_Blue.html">Master</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/5-Owl_Green.html">Owl</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/L-Lasher_Overhand_in_ends.html">Lasher</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/M-Maker_Overhand_in_bight.html">Maker</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/0-Rules.html">Rules</a> </li>')
document.write('          <li class=sub-item> <a class="nav-link" href="/KnotMasters/Z-Definitions.html">Definitions</a> </li>')
document.write('        </ul>')
document.write('      </li>')
document.write('      <li class="nav-item"> <a class="nav-link" href="/about.html">About</a> </li>')
document.write('    </ul>') // Menu End
document.write('  </div>')
document.write( '</nav>')

const multiLineString = `
<pre>This is the first line in the code.
This is the second line.
It preserves line breaks in the string value.
</pre>`;
document.write(multiLineString);

/*
 */

// Trying to pull in context specific string for title - Not working as of 2026/03/23
document.write('   <script type="text/javascript" src="./title.js"></script>')
// end hiding script from old browsers -->

// Sub Menu bits
function mySubMenu(i) {
  let subMenu = document.getElementById(`sub-menu-${i}`);
  subMenu.style.display = subMenu.style.display == "block" ? "none" : "block";
}

// Hamburger Menu bits
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on both the hamburger and the menu
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');

  // Toggle the aria-expanded attribute for accessibility
  const isExpanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !isExpanded);
});

