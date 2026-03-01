<!-- hide script from old browsers
// https://www.mediacollege.com/internet/javascript/image/daily.html
function ImageArray (n) {
	this.length = n;
	for (var i =1; i <= n; i++) {
		this[i] = ' '
	}
}
image = new ImageArray(12);
	image[0]  = 'm01jan.svg'; image[1]  = 'm02feb.svg'; image[2]  = 'm03mar.svg';
	image[3]  = 'm04apr.svg'; image[4]  = 'm05may.svg'; image[5]  = 'm06jun.svg';
	image[6]  = 'm07jul.svg'; image[7]  = 'm08aug.svg'; image[8]  = 'm09sep.svg';
	image[9]  = 'm10oct.svg'; image[10] = 'm11nov.svg'; image[11] = 'm12dec.svg';
var currentdate = new Date();
var imagenumber = currentdate.getMonth();
document.write('<table> <tr> <th> <a href="/ChiefOkemosDistrict/Calendar">');
document.write('<img alt="Month" width="50" style="padding: 5px;" src="/ChiefOkemosDistrict/Calendar/svg/' + image[imagenumber] + '">');
document.write('</a> </th> <th> <h2><a href="/ChiefOkemosDistrict/Calendar">Chief Okemos District<br> Calendar of Events</a></h2> </th> <th> <a href="/ChiefOkemosDistrict/Calendar">');
document.write('<img alt="Month" width="50" style="padding: 5px;" src="/ChiefOkemosDistrict/Calendar/svg/' + image[imagenumber] + '">');
document.write('</a> </th> </tr> </table>');
// end hiding script from old browsers -->
