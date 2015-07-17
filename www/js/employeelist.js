var serviceURL = "http://www.gamecloud.com.ar/services/";

var employees;

$('#employeeListPage').bind('pageinit', function(event) {
	getEmployeeList();
});

function getEmployeeList() {
	$.getJSON(serviceURL + 'getemployees.php', function(data) {
		$('#employeeList li').remove();
		employees = data.items;
		$.each(employees, function(index, employee) {
			$('#employeeList').append('<li><a href="employeedetails.html?id=' + employee.id + '">' +
					'<img src="' + employee.imagen1 + '"/>' +
					//modificiar los datos de first name y last name
					'<h4>' + employee.titulo_esp + '</h4>' +
					'<p>' + employee.seccion_esp + '</p>' +
					'</a></li>');
		});
		$('#employeeList').listview('refresh');
	});
}