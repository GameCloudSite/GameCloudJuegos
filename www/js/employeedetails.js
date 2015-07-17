$('#detailsPage').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'getemployee.php?id='+id, displayEmployee);
});

function displayEmployee(data) {
	var employee = data.item;
	console.log(employee);
	$('#employeePic').attr('src', '' + employee.imagen1);
	$('#fullName').text(employee.titulo_esp);
	$('#employeeTitle').text(employee.seccion_esp);
	$('#city').text(employee.fecha);
	console.log(employee.desarrollador);
	
if (employee.id>0) {
		$('#actionList').append('<li><h3>Titulo del Juego:</h3>' +
				'<p>' + employee.titulo_esp + '</p></a></li>');
	}
	if (employee.seccion_esp) {
		$('#actionList').append('<li><h3>Genero:</h3>' +
				'<p>' + employee.seccion_esp + '</p></li>');
	}
	if (employee.desarrollador) {
		$('#actionList').append('<li><h3>Desarrollado por:</h3>' +
				'<p>' + employee.desarrollador + '</p></a></li>');
	}
	if (employee.fecha) {
		$('#actionList').append('<li><h3>Fecha de salida:</h3>' +
				'<p>' + employee.fecha + '</p></a></li>');
		$('#actionList').append('<li><a href="' + employee.video + '"><h3>Jugar</h3>' +
				'</a></li>');
	}

	$('#actionList').listview('refresh');
	
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
