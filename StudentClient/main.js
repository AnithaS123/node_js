

$.get("http://localhost:3000/students", function(data, status){

  var tr;
        for (var i = 0; i < data.students.length; i++) {
            tr = $('<tr/>');
            tr.append("<td>" + data.students[i].id + "</td>");
            tr.append("<td>" + data.students[i].name + "</td>");
            tr.append("<td>" + data.students[i].subject + "</td>");
            tr.append("<td>" + data.students[i].class + "</td>");
            $('#tblstudent').append(tr);
        }

});