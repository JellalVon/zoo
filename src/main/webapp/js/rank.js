$(function () {
    $("#sidebar").load("./sidebar.html");
    $('#dateMonth').datepicker({
        language:"zh-CN",
        format: 'yyyy-mm',
        startDate:new Date("2013-01"),
        endDate: new Date("2018-03"),
        autoclose: true,
        startView:1,
        minViewMode: 1
    });
    var month = {
        "month" : "2018-03"
    };
    $.ajax({
        type: "post",
        url: "/rank/month",
        data: JSON.stringify(month),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            for (var i in data) {
                var j = parseInt(i) + 1;
                $('#rankList').append(
                "<li class='vitem J_li_toggle_date opened_data'>"+
                    "<div class='infoBox top"+j+"'>"+
                    "<div class='score_box'>"+
                    "<span class='desc-score'>"+data[i].score+"</span>"+
                    "</div>"+
                    "<div class='top_num'>"+ j +"</div>"+
                    "<div class='mv_info'>"+
                    "<div class='mv_info_head_img_container J_add_convenient_container'>"+
                    "<a href='javascript:detail("+j+")' target='_blank' class='img video-bo-img'>"+
                    "<img src='"+data[i].apInfo.img+"' alt='"+data[i].apInfo.ap_name+"'/>"+
                    "<div class='bo-mask'>"+
                    "<i class='bo-icon'></i>"+
                    "</div>"+
                    "</a>"+
                    "</div>"+
                    "<div class='info'>"+
                    "<div style='height: 20%'></div>"+
                    "<p><span class='special'>"+data[i].apInfo.ap_name+"</span></p>"+
                    "<div class='data_enter'>"+
                    "<a href='javascript:detail("+j+")' name='data' class='data_a opened J_toggle_data' id='display"+j+"'>数据详情</a>"+
                    "</div> </div> </div> </div>"+
                    "<div class='dataBox datas' style='display: none' id='boxTest"+j+"'>"+
                    "<div class='dataBox_inner' >"+
                    "<div class='cape'></div>"+
                    "<div class='data_title'>数据详情 </div>"+
                    "<ul>"+
                    "<li> <span >总人数</span> <strong>"+data[i].num+"&nbsp;人</strong> </li>"+
                    "<li> <span >总人次</span> <strong>"+data[i].times+"&nbsp;人次</strong> </li>"+
                    "<li> <span >停留总时间</span> <strong>"+data[i].total+"&nbsp;分钟</strong> </li>"+
                    "<li> <span >人均停留时间</span> <strong>"+Math.round(data[i].avg)+"&nbsp;分钟</strong> </li>"+
                    "<li> <span >平均每天人数</span> <strong>"+Math.round(data[i].num/data[i].days)+"&nbsp;人</strong> </li>"+
                    "<li> <span >平均每天人次</span> <strong>"+Math.round(data[i].times/data[i].days)+"&nbsp;人</strong> </li>"+
                    "<li> <span >平均每天停留总时间</span> <strong>"+Math.round(data[i].total/data[i].days)+"&nbsp;分钟</strong> </li>"+
                    "</ul>"+
                    "</div> </div> </li>"
                );
            }
        }
    });

    $.ajax({
        type: "post",
        url: "/rank/top",
        data: JSON.stringify(month),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $('#top').append(
                "<li class='rankli clearfix'>" +
                "<a class='ranklink'target='_blank'>" +
                "<img width='164' height='90' alt='' src='"+data[0].apInfo.img+"'>" +
                "<span class='content-mask'></span>" +
                "<p class='r-title'>"+data[0].apInfo.ap_name+"</p>" +
                "<span class='shift-bo'></span>" +
                "</a>" +
                "<div class='rank-infos'>" +
                "<p class='play_num'><span class='ico_medal_ico1'></span> 总人数 ：</p>" +
                "<p class='c_993'>"+data[0].num+"&nbsp;人</p>" +
                "</div>" +
                "</li>"
            );

            $('#top').append(
                "<li class='rankli clearfix'>" +
                "<a class='ranklink'target='_blank'>" +
                "<img width='164' height='90' alt='' src='"+data[1].apInfo.img+"'>" +
                "<span class='content-mask'></span>" +
                "<p class='r-title'>"+data[1].apInfo.ap_name+"</p>" +
                "<span class='shift-bo'></span>" +
                "</a>" +
                "<div class='rank-infos'>" +
                "<p class='play_num'><span class='ico_medal_ico1'></span> 总人次 ：</p>" +
                "<p class='c_993'>"+data[1].times+"&nbsp;人次</p>" +
                "</div>" +
                "</li>"
            );

            $('#top').append(
                "<li class='rankli clearfix'>" +
                "<a class='ranklink'target='_blank'>" +
                "<img width='164' height='90' alt='' src='"+data[2].apInfo.img+"'>" +
                "<span class='content-mask'></span>" +
                "<p class='r-title'>"+data[2].apInfo.ap_name+"</p>" +
                "<span class='shift-bo'></span>" +
                "</a>" +
                "<div class='rank-infos'>" +
                "<p class='play_num'><span class='ico_medal_ico1'></span> 停留总时间 ：</p>" +
                "<p class='c_993'>"+data[2].total+"&nbsp;分钟</p>" +
                "</div>" +
                "</li>"
            );

            $('#top').append(
                "<li class='rankli clearfix'>" +
                "<a class='ranklink'target='_blank'>" +
                "<img width='164' height='90' alt='' src='"+data[3].apInfo.img+"'>" +
                "<span class='content-mask'></span>" +
                "<p class='r-title'>"+data[3].apInfo.ap_name+"</p>" +
                "<span class='shift-bo'></span>" +
                "</a>" +
                "<div class='rank-infos'>" +
                "<p class='play_num'><span class='ico_medal_ico1'></span> 人均停留时间 ：</p>" +
                "<p class='c_993'>"+Math.round(data[3].avg)+"&nbsp;分钟</p>" +
                "</div>" +
                "</li>"
            );
        }
    });
});

function detail(obj) {
    var name = "#boxTest"+obj;
    var name2 = "#display"+obj;
    if($(name).css("display")==="none"){
        $(name).removeClass();
        $(name).addClass('dataBox datas li_opened');
        $(name).show();
        $(name2).text("收起详情");
    }else{
        $(name).removeClass();
        $(name).addClass('dataBox datas');
        $(name).hide();
        $(name2).text("数据详情");
    }
};

function monthSearch() {
    var month = {
        "month" : $('#dateMonth').val()
    };
    $('#rankList').empty();
    $.ajax({
        type: "post",
        url: "/rank/month",
        data: JSON.stringify(month),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            for (var i in data) {
                var j = parseInt(i) + 1;
                $('#rankList').append(
                    "<li class='vitem J_li_toggle_date opened_data'>"+
                    "<div class='infoBox top"+j+"'>"+
                    "<div class='score_box'>"+
                    "<span class='desc-score'>"+data[i].score+"</span>"+
                    "</div>"+
                    "<div class='top_num'>"+ j +"</div>"+
                    "<div class='mv_info'>"+
                    "<div class='mv_info_head_img_container J_add_convenient_container'>"+
                    "<a href='javascript:detail("+j+")' target='_blank' class='img video-bo-img'>"+
                    "<img src='"+data[i].apInfo.img+"' alt='"+data[i].apInfo.ap_name+"'/>"+
                    "<div class='bo-mask'>"+
                    "<i class='bo-icon'></i>"+
                    "</div>"+
                    "</a>"+
                    "</div>"+
                    "<div class='info'>"+
                    "<div style='height: 20%'></div>"+
                    "<p><span class='special'>"+data[i].apInfo.ap_name+"</span></p>"+
                    "<div class='data_enter'>"+
                    "<a href='javascript:detail("+j+")' name='data' class='data_a opened J_toggle_data' id='display"+j+"'>数据详情</a>"+
                    "</div> </div> </div> </div>"+
                    "<div class='dataBox datas' style='display: none' id='boxTest"+j+"'>"+
                    "<div class='dataBox_inner' >"+
                    "<div class='cape'></div>"+
                    "<div class='data_title'>数据详情 </div>"+
                    "<ul>"+
                    "<li> <span >总人数</span> <strong>"+data[i].num+"&nbsp;人</strong> </li>"+
                    "<li> <span >总人次</span> <strong>"+data[i].times+"&nbsp;人次</strong> </li>"+
                    "<li> <span >停留总时间</span> <strong>"+data[i].total+"&nbsp;分钟</strong> </li>"+
                    "<li> <span >人均停留时间</span> <strong>"+Math.round(data[i].avg)+"&nbsp;分钟</strong> </li>"+
                    "<li> <span >平均每天人数</span> <strong>"+Math.round(data[i].num/data[i].days)+"&nbsp;人</strong> </li>"+
                    "<li> <span >平均每天人次</span> <strong>"+Math.round(data[i].times/data[i].days)+"&nbsp;人</strong> </li>"+
                    "<li> <span >平均每天停留总时间</span> <strong>"+Math.round(data[i].total/data[i].days)+"&nbsp;分钟</strong> </li>"+
                    "</ul>"+
                    "</div> </div> </li>"
                );
            }
        }
    });

    $('#top').empty();
    $.ajax({
        type: "post",
        url: "/rank/top",
        data: JSON.stringify(month),
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $('#top').append(
                "<li class='rankli clearfix'>" +
                "<a class='ranklink'target='_blank'>" +
                "<img width='164' height='90' alt='' src='"+data[0].apInfo.img+"'>" +
                "<span class='content-mask'></span>" +
                "<p class='r-title'>"+data[0].apInfo.ap_name+"</p>" +
                "<span class='shift-bo'></span>" +
                "</a>" +
                "<div class='rank-infos'>" +
                "<p class='play_num'><span class='ico_medal_ico1'></span> 总人数 ：</p>" +
                "<p class='c_993'>"+data[0].num+"&nbsp;人</p>" +
                "</div>" +
                "</li>"
            );

            $('#top').append(
                "<li class='rankli clearfix'>" +
                "<a class='ranklink'target='_blank'>" +
                "<img width='164' height='90' alt='' src='"+data[1].apInfo.img+"'>" +
                "<span class='content-mask'></span>" +
                "<p class='r-title'>"+data[1].apInfo.ap_name+"</p>" +
                "<span class='shift-bo'></span>" +
                "</a>" +
                "<div class='rank-infos'>" +
                "<p class='play_num'><span class='ico_medal_ico1'></span> 总人次 ：</p>" +
                "<p class='c_993'>"+data[1].times+"&nbsp;人次</p>" +
                "</div>" +
                "</li>"
            );

            $('#top').append(
                "<li class='rankli clearfix'>" +
                "<a class='ranklink'target='_blank'>" +
                "<img width='164' height='90' alt='' src='"+data[2].apInfo.img+"'>" +
                "<span class='content-mask'></span>" +
                "<p class='r-title'>"+data[2].apInfo.ap_name+"</p>" +
                "<span class='shift-bo'></span>" +
                "</a>" +
                "<div class='rank-infos'>" +
                "<p class='play_num'><span class='ico_medal_ico1'></span> 停留总时间 ：</p>" +
                "<p class='c_993'>"+data[2].total+"&nbsp;分钟</p>" +
                "</div>" +
                "</li>"
            );

            $('#top').append(
                "<li class='rankli clearfix'>" +
                "<a class='ranklink'target='_blank'>" +
                "<img width='164' height='90' alt='' src='"+data[3].apInfo.img+"'>" +
                "<span class='content-mask'></span>" +
                "<p class='r-title'>"+data[3].apInfo.ap_name+"</p>" +
                "<span class='shift-bo'></span>" +
                "</a>" +
                "<div class='rank-infos'>" +
                "<p class='play_num'><span class='ico_medal_ico1'></span> 人均停留时间 ：</p>" +
                "<p class='c_993'>"+Math.round(data[3].avg)+"&nbsp;分钟</p>" +
                "</div>" +
                "</li>"
            );
        }
    });
}