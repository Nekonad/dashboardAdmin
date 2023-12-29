fetch("https://658bf4e1859b3491d3f52760.mockapi.io/api/product/get")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    var table = document.getElementById("table");

    data.forEach((element) => {
      var row = table.insertRow(table.rows.length);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      cell1.innerHTML = element.id;
      cell2.innerHTML = element.barcode;
      cell3.innerHTML = element.product_name;
      cell4.innerHTML = element.price;
      cell5.innerHTML = element.qty;
      cell6 = innerHTML = element.action;
      // cell6.innerHTML = "<a href='#'>button</a>";
    });
  })
  .catch((error) => {
    console.error(error);
  });
