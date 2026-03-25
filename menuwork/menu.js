const multiLineMenu = `
<nav class="navbar">
  <div> <a href="/" class="nav-branding"><img alt="Wood Badge Owl" width="35" src="./WoodBadgeOwl.svg"></a> </div><!-- Favicon site logo -->
  <div> <h2 id="siteTitle">KnotOwl</h2> </div><!-- Section title -->
  <div><!-- Hamburger button using semantic HTML -->
    <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
      <span class="bar">&nbsp;</span>
      <span class="bar">&nbsp;</span>
      <span class="bar">&nbsp;</span>
    </button><!-- Button -->
    <ul class="nav-menu" id="nav-menu"><!-- Menu Start -->
      <li class="nav-item"> <a class="nav-link" href="/">Home</a> </li>

      <li class="nav-item" onclick="mySubMenu(0)">testing
        <ul id="sub-menu-0" class="sub-menu">
          <li class=sub-item> <a class="nav-link" href="one/">one</a> </li>
          <li class=sub-item> <a class="nav-link" href="two/">two</a> </li>
        </ul>
      </li>

      <li class="nav-item" onclick="mySubMenu(1)">Advancement
        <ul id="sub-menu-1" class="sub-menu">
          <li class=sub-item> <a class="nav-link" href="/Adv/Eagle/">Eagle</a> </li>
          <li class=sub-item> <a class="nav-link" href="/Adv/Venturing/">Venturing</a> </li>
          <li class=sub-item> <a class="nav-link" href="/Adv/MBCinfo/">MBC Info</a> </li>
        </ul>
      </li>
      <li class="nav-item" onclick="mySubMenu(2)">Chief Okemos
        <ul id="sub-menu-2" class="sub-menu">
          <li class=sub-item> <a class="nav-link" href="/COD/Reports/">Reports</a> </li>
          <li class=sub-item> <a class="nav-link" href="/COD/Laurels/">Laurels</a> </li>
          <li class=sub-item> <a class="nav-link" href="/COD/Calendar/">Calendar</a> </li>
          <li class=sub-item> <a class="nav-link" href="/COD/FAQ/">FAQ</a> </li>
          <li class=sub-item> <a class="nav-link" href="/COD/Misc/">Misc</a> </li>
        </ul>
      </li>
      <li class="nav-item" onclick="mySubMenu(3)">KnotMasters
        <ul id="sub-menu-3" class="sub-menu">
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/">KnotMasters</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/1-Apprentice_White.html">Apprentice</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/2-Knotter_Yellow.html">Knotter</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/3-Hitcher_Red.html">Hitcher</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/4-Master_Blue.html">Master</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/5-Owl_Green.html">Owl</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/L-Lasher_Overhand_in_ends.html">Lasher</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/M-Maker_Overhand_in_bight.html">Maker</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/0-Rules.html">Rules</a> </li>
          <li class=sub-item> <a class="nav-link" href="/KnotMasters/Z-Definitions.html">Definitions</a> </li>
        </ul>
      </li>
      <li class="nav-item"> <a class="nav-link" href="/about.html">About</a> </li>
    </ul><!-- Menu End -->
  </div>
</nav>
`;
document.write(multiLineMenu);

// Trying to pull in context specific string for title - Not working as of 2026/03/23
document.write('   <script type="text/javascript" src="./title.js"></script>')

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

