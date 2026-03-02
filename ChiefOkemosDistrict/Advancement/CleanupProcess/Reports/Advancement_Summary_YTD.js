<!-- hide script from old browsers

let table = document.getElementById('AdvSum');
let row, cell;
for ( let i = 0; i < YTD.length; i++ ) { // for each value in the data file
	if ( i == 0 ) {					// first json data element = date for "YTD"
		let th=document.createElement('th');
		th.innerHTML = YTD[i];
		table.children[0].children[i].insertBefore(th, table.children[0].children[i].children[0]);
	} else if ( i == 1 || i == 11 || i == 23 ) {	// <th> for "YTD" json data elements
		th=document.createElement('th');
		th.innerHTML = YTD[i];
		table.children[0].children[i].insertBefore(th, table.children[0].children[i].children[0]);
	} else if ( i >= 2 && i <= 9 || i >= 11 && i <= 21 || i >= 23 && i <=28 ) { // All the json data elements
		row = table.children[0].children[i];
		cell = document.createElement('td');
		cell.innerHTML = YTD[i];
		row.appendChild(cell);
		row.insertBefore(cell, row.children[0]);
	} else if ( i == 10 || i == 22 ) {		// A blank row to separate sections
	}
}

// end hiding script from old browsers -->
