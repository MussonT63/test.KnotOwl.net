<!-- hide script from old browsers
  let table = document.getElementById('MBCtable');
  let row, cell;

  for (let i = 0; i < MBCs.length; i++) { // for each data line
    row = document.createElement('tr'); // create a row

    // create a fn cell and add it to the row
    cell = document.createElement('td');
    cell.innerHTML = MBCs[i][0];
    row.appendChild(cell);

    // create a ln cell and add it to the row
    cell = document.createElement('td');
    cell.innerHTML = MBCs[i][1];
    row.appendChild(cell);

    // create a MBCs cell and add it to the row
    cell = document.createElement('td');
    let content = "";
      // grab all the rest and put it into "content" to put in the cell
      for (let j = 2; j < MBCs[i].length; j++) {
        content = content.concat(" ", MBCs[i][j]);
      }
    cell.innerHTML = content;
    row.appendChild(cell);

    // add the row to the table
    table.appendChild(row);
  }
// end hiding script from old browsers -->
