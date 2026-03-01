<!-- hide script from old browsers
  let table = document.getElementById('AdvSum');
  let row, cell;
  for (let i = 0; i < YTD.length; i++) { // for each data line
    if (i == 0) { // fierst row
      let th=document.createElement('th');
      th.innerHTML = YTD[i];
      table.children[0].children[i].insertBefore(th, table.children[0].children[i].children[0]);
    } else if (i == 1) { // second row YTD for Cub Scouts
      th=document.createElement('th');
      th.innerHTML = YTD[i];
      table.children[0].children[i].insertBefore(th, table.children[0].children[i].children[0]);
    } else if (i < 10) { // all the cub rows
      row = table.children[0].children[i];
      cell = document.createElement('td');
      cell.innerHTML = YTD[i];
      row.appendChild(cell);
      row.insertBefore(cell, row.children[0]);
    } else if (i == 10) { // this makes the row not have a blank cell
    } else if (i == 11) { // YTD for Scouts BSA
      th=document.createElement('th');
      th.innerHTML = YTD[i];
      table.children[0].children[i].insertBefore(th, table.children[0].children[i].children[0]);
    } else { // all the rest of the data
      row = table.children[0].children[i];
      cell = document.createElement('td');
      cell.innerHTML = YTD[i];
      row.appendChild(cell);
      row.insertBefore(cell, row.children[0]);
    }
  }
// end hiding script from old browsers -->
