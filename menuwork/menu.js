<!-- hide script from old browsers
document.write( '<nav class="navbar">' )
document.write( '  <div> <!-- Favicon site logo -->' )
document.write( '    <a href="/" class="nav-branding"><img alt="Wood Badge Owl" width=35 src="./WoodBadgeOwl.svg"></a>' )
document.write( '  </div>' )
document.write( '  <div> <!-- Section title -->' )
document.write( '    <h2 id="siteTitle">KnotOwl</h2>' )
document.write( '    <script type="text/javascript" src="./title.js"></script>' )
document.write( '  </div>' )
document.write('   <div> <!-- Hamburger button using semantic HTML -->' )
document.write('     <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false"><span class="bar">&nbsp;</span> <span class="bar">&nbsp;</span> <span class="bar">&nbsp;</span></button>' )
document.write('     <!-- Menu -->' )
document.write('     <ul class="nav-menu" id="nav-menu">' )
document.write('       <li class="nav-item"> <a class="nav-link" href="/">Home</a> </li>' )
document.write('       <li class="nav-item" onclick="mySubMenu(1)">Advancement' )
document.write('         <ul id="sub-menu-1" class="sub-menu">' )
document.write('           <li class=sub-item> <a class="nav-link" href="/Adv/Eagle/">Eagle</a> </li>' )
document.write('           <li class=sub-item> <a class="nav-link" href="/Adv/Venturing/">Venturing</a> </li>' )
document.write('           <li class=sub-item> <a class="nav-link" href="/Adv/MBCinfo/">MBC Info</a> </li>' )
document.write('         </ul>' )
document.write('       </li>' )
document.write('     </ul>' )
document.write('   </div>' )
/*
 */
document.write( '</nav>' )

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

