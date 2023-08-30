function myCreate(){
    var text1= document.getElementById('text1').value;
    var text2= document.getElementById('text2').value;
    var text3= document.getElementById('text3').value;
    var text4= document.getElementById('text4').value;
    var text5= document.getElementById('text5').value;
    var text6= document.getElementById('text6').value;

    var table = document.getElementById('myTable');
    var row = table.insertRow(1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = text1;
    cell2.innerHTML = text2;
    cell3.innerHTML = text3;
    cell4.innerHTML = text4;
    cell5.innerHTML = text5;
    cell6.innerHTML = text6;
}