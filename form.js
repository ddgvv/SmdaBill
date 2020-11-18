var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function inWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
    return str;
}

function myFunction() {
  var x = parseInt(document.getElementById("amt").value);
  var y = parseInt(document.getElementById("famt").value);
  console.log(inWords(x+y));
  var lblValue = document.getElementById("riw");
  lblValue.value= inWords(x+y);
}

function myCalculate() {
  var x = parseInt(document.getElementById("amt").value);
  console.log(inWords(x));
  var lblValue = document.getElementById("riw");
  lblValue.value= inWords(x);
}
function myExtraSubmit() {
	var amt = parseInt(document.getElementById("amt").value);
	var fduty = document.getElementById("fduty").value;
	var famt = parseInt(document.getElementById("famt").value);

	setDefaultValues();

	document.getElementById('sfduty').innerHTML = fduty;
	document.getElementById('sfamt').innerHTML = famt;
	document.getElementById('sgamt').innerHTML = amt + famt;
}

function mySubmit() {
	setDefaultValues();
  
}

function setDefaultValues(){
	var billno = document.getElementById("billno").value;
	var date = document.getElementById("date").value;
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	var duty = document.getElementById("duty").value;
	var amt = document.getElementById("amt").value;
	var riw = document.getElementById("riw").value;

	document.getElementById('sbillno').innerHTML = billno;
	document.getElementById('sdate').innerHTML = date;
	document.getElementById('sname').innerHTML = name;
	document.getElementById('saddress').innerHTML = address+', Puducherry-605009';
	document.getElementById('sduty').innerHTML = duty;
	document.getElementById('samt').innerHTML = amt;
	document.getElementById('sgamt').innerHTML = amt;
	document.getElementById('sriw').innerHTML = riw;
	
	setDateRange();

}

function setDateRange(){
	var dateRange = document.getElementById("dateRange").value;
	var dateR = new Date(dateRange);
	var y = dateR.getFullYear();
	var m = dateR.getMonth();
	var firstDay = new Date(y, m, 1);
	var lastDay = new Date(y, m + 1, 0);
	var firstDayString = firstDay.getDate()  + "-" + (firstDay.getMonth()+1) + "-" + firstDay.getFullYear();
	var lastDayString = lastDay.getDate()  + "-" + (lastDay.getMonth()+1) + "-" + lastDay.getFullYear();
	document.getElementById('smonth').innerHTML = monthNames[dateR.getMonth()] + '-' + firstDay.getFullYear(); 
	document.getElementById('sdateRange').innerHTML = firstDayString + ' to ' + lastDayString + ') 12 Hours duty';
}

function Export() {
	html2canvas(document.getElementById('tblCustomers'), {
		onrendered: function (canvas) {
			var data = canvas.toDataURL();
			var docDefinition = {
				content: [{
					image: data,
					width: 500
				}]
			};
			pdfMake.createPdf(docDefinition).download("Table.pdf");
		}
	});
}
