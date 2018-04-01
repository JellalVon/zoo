$(function () {
    $("#sidebar").load("./sidebar.html");
    //Date picker
    $('#birth').datepicker({
        language:"zh-CN",
        format: 'yyyy-mm-dd',
        autoclose: true,
    });
    $('#birthe').datepicker({
        language:"zh-CN",
        format: 'yyyy-mm-dd',
        autoclose: true,
    });
    $('#birthd').datepicker({
        language:"zh-CN",
        format: 'yyyy-mm-dd',
        autoclose: true,
    });

    $.ajax({
        type: "post",
        url: "/staff/list",
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            for(var i in data) {
                var j = parseInt(i) + 1;
                $("#staffList").append(
                    "<tr >"+
                    "<td>"+j+"</td>"+
                    "<td>"+data[i].name+"</td>"+
                    "<td>"+data[i].title+"</td>"+
                    "<td>"+data[i].sex+"</td>"+
                    "<td>"+data[i].tel+"</td>"+
                    "<td>"+data[i].birth+"</td>"+
                    "<td>"+data[i].staff_mac+"</td>"+
                    "<td>" +
                    "<button type='button' class='btn btn-xs btn-primary' data-toggle='modal' data-target='#editStaff' onclick='queryStaff("+data[i].id+")'>编辑</button>&nbsp;&nbsp;&nbsp;" +
                    "<button type='button' class='btn btn-xs btn-default' data-toggle='modal' data-target='#deleteStaff' onclick='queryDStaff("+data[i].id+")'>删除</button></td>"+
                    "</tr>"
                )
            }
        }
    });
});

function deleteStaff() {
    var id ={"id" : $("#idd").val()};
    $.ajax({
        type: "post",
        url: "/staff/delete",
        datatype: "json",
        data: JSON.stringify(id),
        contentType: "application/json; charset=utf-8",
        success: function () {
            window.location.reload();
        }
    });
}
function queryStaff(obj) {
    var id ={"id" : obj.valueOf()}
    $.ajax({
        type: "post",
        url: "/staff/query",
        datatype: "json",
        data: JSON.stringify(id),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $("#ide").val(data.id);
            $("#namee").val(data.name);
            $("#titlee").val(data.title);
            $("#sexe").val(data.sex);
            $("#tele").val(data.tel);
            $("#birthe").val(data.birth);
            $("#mace").val(data.staff_mac);
        }
    });
}
function queryDStaff(obj) {
    var id ={"id" : obj.valueOf()}
    $.ajax({
        type: "post",
        url: "/staff/query",
        datatype: "json",
        data: JSON.stringify(id),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $("#idd").val(data.id);
            $("#named").val(data.name);
            $("#titled").val(data.title);
            $("#sexd").val(data.sex);
            $("#teld").val(data.tel);
            $("#birthd").val(data.birth);
            $("#macd").val(data.staff_mac);
        }
    });
}
function addStaff() {
    var staff = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "title": $("#title").val(),
        "sex": $("#sex").val(),
        "tel": $("#tel").val(),
        "birth": $("#birth").val(),
        "staff_mac": $("#mac").val()
    };
    $.ajax({
        type: "post",
        url: "/staff/add",
        datatype: "json",
        data: JSON.stringify(staff),
        contentType: "application/json; charset=utf-8",
        success: function () {
            window.location.reload();
        }
    });
}

function editStaff() {
    var staff = {
        "id": $("#ide").val(),
        "name": $("#namee").val(),
        "title": $("#titlee").val(),
        "sex": $("#sexe").val(),
        "tel": $("#tele").val(),
        "birth": $("#birthe").val(),
        "staff_mac": $("#mace").val()
    };
    $.ajax({
        type: "post",
        url: "/staff/update",
        datatype: "json",
        data: JSON.stringify(staff),
        contentType: "application/json; charset=utf-8",
        success: function () {
            window.location.reload();
        }
    });
}

