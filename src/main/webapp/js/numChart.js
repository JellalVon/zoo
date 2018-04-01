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
    //Initialize Select2 Elements
    $('.select2').select2()
    //Date picker
    $('#start').datepicker({
        language:"zh-CN",
        format: 'yyyy-mm-dd',
        autoclose: true,
        startDate: new Date("2013-01-01")
    });
    //Date picker
    $('#end').datepicker({
        language:"zh-CN",
        format: 'yyyy-mm-dd',
        autoclose: true
    });
});

function doSearch() {
    var apAndTime = {
        "ap_id" : $("#ap_id").val(),
        "start" : $("#start").val(),
        "end" : $("#end").val()
    };
    console.log(apAndTime);
    $.ajax({
        type: "post",
        url: "/rank/queryOne",
        datatype: "json",
        data: JSON.stringify(apAndTime),
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            console.log(data);
            var time = [];
            var numData =[];
            var totalData = [];
            var timesData = [];
            var avgData = [];
            for (var i in data) {
                time.push(data[i].release_date);
                numData.push(data[i].num_pre);
                totalData.push(data[i].total_time);
                timesData.push(data[i].times_pre);
                avgData.push(data[i].avg_time);
            }
            var numAndAvgContainer = document.getElementById('numAndAvg');
            var resizeNumAndAvgContainer = function () {
                numAndAvgContainer.style.width = window.innerWidth*0.82 +'px';
                numAndAvgContainer.style.height = window.innerHeight*0.9 +'px';
            };
            resizeNumAndAvgContainer();
            var myChartF = echarts.init(numAndAvgContainer);
            var optionF = {
                color: ['#16abfe','#ff7070'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data: ['人数', '平均停留时间']
                },
                xAxis: [{
                    type: 'category',
                    data: time,
                    axisPointer: {
                        type: 'shadow'
                    }
                }],
                yAxis: [

                    {
                        type: 'value',
                        name: '人数',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }, {
                        type: 'value',
                        name: '平均停留时间',
                        axisLabel: {
                            formatter: '{value} min'
                        }
                    }
                ],
                series: [{
                    name: '人数',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: numData
                },

                    {
                        name: '平均停留时间',
                        type: 'line',
                        yAxisIndex: 1,
                        smooth: true,
                        data: avgData
                    }
                ]
            };
            myChartF.setOption(optionF);

            var timesAndTotalContainer = document.getElementById('timesAndTotal');
            var resizeTimesAndTotalContainer = function () {
                timesAndTotalContainer.style.width = window.innerWidth*0.82 +'px';
                timesAndTotalContainer.style.height = window.innerHeight*0.9 +'px';
            };
            resizeTimesAndTotalContainer();
            var myChartS = echarts.init(timesAndTotalContainer);
            var optionS = {
                color: ['#16abfe','#ff7070'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        crossStyle: {
                            color: '#999'
                        }
                    }
                },
                legend: {
                    data: ['人次', '停留总时间']
                },
                xAxis: [{
                    type: 'category',
                    data: time,
                    axisPointer: {
                        type: 'shadow'
                    }
                }],
                yAxis: [

                    {
                        type: 'value',
                        name: '人次',
                        axisLabel: {
                            formatter: '{value}'
                        }
                    }, {
                        type: 'value',
                        name: '停留总时间',
                        axisLabel: {
                            formatter: '{value} min'
                        }
                    }
                ],
                series: [{
                    name: '人次',
                    type: 'bar',
                    yAxisIndex: 0,
                    data: timesData
                },

                    {
                        name: '停留总时间',
                        type: 'line',
                        yAxisIndex: 1,
                        smooth: true,
                        data: totalData
                    }
                ]
            };
            myChartS.setOption(optionS);
        }
    });

}