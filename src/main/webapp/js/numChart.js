$(function () {
    $("#sidebar").load("./sidebar.html");
    $.ajax({
        type: "post",
        url: "/APInfo/list",
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            for (var i in data) {
                $("#ap_id").append(
                    "<option value='"+data[i].ap_id+"'>"+data[i].ap_name+"</option>"
                )
            }
        }
    });
});

function doSearch() {
    var apAndTime = {
        "ap_ids" : $("#ap_id").val().toString(),
        "start" : $("#start").val(),
        "end" : $("#end").val()
    };
    console.log(apAndTime);
    $.ajax({
        type: "post",
        url: "/rank/query",
        datatype: "json",
        data: JSON.stringify(apAndTime),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
        }
    });

}