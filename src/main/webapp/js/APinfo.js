$(function () {
    $("#sidebar").load("./sidebar.html");
/*    $('#apinfo').DataTable({
        'paging'      : false,
        'lengthChange': true,
        'searching'   : false,
        'ordering'    : true,
        'info'        : true,
        'autoWidth'   : false
    });*/
/*    var tbody=window.document.getElementById("result");
    tbody.innerHTML =         "<tr>"+
        "<td>"+1+"</td>"+
        "<td>"+"asddfvfg"+"</td>"+
        "</tr>";*/
    $.ajax({
        type: "post",
        url: "/APInfo/list",
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            for(var i in data) {
                var j = parseInt(i) + 1;
                $("#result").append(
                    "<tr >"+
                    "<td>"+j+"</td>"+
                    "<td>"+data[i].ap_name+"</td>"+
                    "<td>"+data[i].mac+"</td>"+
                    "<td>"+data[i].lat+"</td>"+
                    "<td>"+data[i].lng+"</td>"+
                    "<td>"+data[i].radius+"</td>"+
                    "<td>"+data[i].addr+"</td>"+
                    "<td>"+data[i].distance+"</td>"+
                    "<td>"+data[i].max_num+"</td>"+
                    "<td>" +
                    "<button type='button' class='btn btn-xs btn-primary' data-toggle='modal' data-target='#editAP' onclick='queryAp("+data[i].ap_id+")'>编辑</button>&nbsp;&nbsp;&nbsp;" +
                    "<button type='button' class='btn btn-xs btn-default' data-toggle='modal' data-target='#deleteAP' onclick='queryDAp("+data[i].ap_id+")'>删除</button></td>"+
                    "</tr>"
                )
            }
        }
    });


});
function deleteAP() {
    var ap_id ={"ap_id" : $("#apidd").val()};
    $.ajax({
        type: "post",
        url: "/APInfo/delete",
        datatype: "json",
        data: JSON.stringify(ap_id),
        contentType: "application/json; charset=utf-8",
        success: function () {
            window.location.reload();
        }
    });
}
function queryAp(obj) {
    var ap_id ={"ap_id" : obj.valueOf()}
    $.ajax({
        type: "post",
        url: "/APInfo/query",
        datatype: "json",
        data: JSON.stringify(ap_id),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $("#apide").val(data.ap_id);
            $("#apnamee").val(data.ap_name);
            $("#mace").val(data.mac);
            $("#late").val(data.lat);
            $("#lnge").val(data.lng);
            $("#radiuse").val(data.radius);
            $("#addre").val(data.addr);
            $("#distancee").val(data.distance);
            $("#max_nume").val(data.max_num);

        }
    });
}
function queryDAp(obj) {
    var ap_id ={"ap_id" : obj.valueOf()}
    $.ajax({
        type: "post",
        url: "/APInfo/query",
        datatype: "json",
        data: JSON.stringify(ap_id),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $("#apidd").val(data.ap_id);
            $("#apnamed").val(data.ap_name);
            $("#macd").val(data.mac);
            $("#latd").val(data.lat);
            $("#lngd").val(data.lng);
            $("#radiusd").val(data.radius);
            $("#addrd").val(data.addr);
            $("#distanced").val(data.distance);
            $("#max_numd").val(data.max_num);

        }
    });
}
function addAP() {
    var apInfo = {
        "ap_id": $("#apid").val(),
        "ap_name": $("#apname").val(),
        "mac": $("#mac").val(),
        "lat": $("#lat").val(),
        "lng": $("#lng").val(),
        "radius": $("#radius").val(),
        "addr": $("#addr").val(),
        "distance": $("#distance").val(),
        "max_num": $("#max_num").val()
    };
    $.ajax({
        type: "post",
        url: "/APInfo/add",
        datatype: "json",
        data: JSON.stringify(apInfo),
        contentType: "application/json; charset=utf-8",
        success: function () {
            window.location.reload();
        }
    });
}

function editAp() {
    var apInfo = {
        "ap_id": $("#apide").val(),
        "ap_name": $("#apnamee").val(),
        "mac": $("#mace").val(),
        "lat": $("#late").val(),
        "lng": $("#lnge").val(),
        "radius": $("#radiuse").val(),
        "addr": $("#addre").val(),
        "distance": $("#distancee").val(),
        "max_num": $("#max_nume").val()
    };
    $.ajax({
        type: "post",
        url: "/APInfo/update",
        datatype: "json",
        data: JSON.stringify(apInfo),
        contentType: "application/json; charset=utf-8",
        success: function () {
            window.location.reload();
        }
    });
}