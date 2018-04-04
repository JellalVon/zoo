$(function () {
    $("#sidebar").load("./sidebar.html");
    $.ajax({
        type: "post",
        url: "/APInfo/list",
        datatype: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            for (var i in data) {
                $("#ap_ids").append(
                    "<option value='" + data[i].ap_id + "'>" + data[i].ap_name + "</option>"
                )
            }
        }
    });
    //Initialize Select2 Elements
    $('.select2').select2()
    //Date picker
    $('#start').datepicker({
        language: "zh-CN",
        format: 'yyyy-mm-dd',
        autoclose: true,
        startDate: new Date("2013-01-01"),
        endDate: new Date()
    });
    //Date picker
    $('#end').datepicker({
        language: "zh-CN",
        format: 'yyyy-mm-dd',
        autoclose: true,
        startDate: new Date("2013-01-01"),
        endDate: new Date()
    });
});
/*
    var avgContainer = document.getElementById('avg');
    var resizeAvgContainer = function () {
        avgContainer.style.width = window.innerWidth*0.4 +'px';
        avgContainer.style.height = window.innerHeight*0.8 +'px';
    };
    resizeAvgContainer();
    var avgChart = echarts.init(avgContainer);
    var avgOption = {
        backgroundColor: '#04243E',
        tooltip: {
            show: true
        },
        legend: {
            show: true
        },
        toolbox: {
            show: true
        },
        series: seriesObj
    };
    avgChart.setOption(avgOption);
});*/

function doSearch() {
    var apAndTime = {
        "ap_ids" : $("#ap_ids").val().toString(),
        "start" : $("#start").val(),
        "end" : $("#end").val()
    };
    $.ajax({
        type: "post",
        url: "/rank/query",
        datatype: "json",
        data: JSON.stringify(apAndTime),
        contentType: "application/json; charset=utf-8",
        success: function (resultData) {
            var numDate = [];
            for (var i in resultData) {
                numDate.push({
                    'name' : resultData[i].apName,
                    'value' : resultData[i].num
                })
            }
            var numRich = {
                white: {
                    color: '#ddd',
                    align: 'center',
                    padding: [5, 0]
                }
            };
            var numPlaceHolderStyle = {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            };
            var numData = [];
            var numLen = numDate[0].value.toString().length;
            for (var i = 0; i < numDate.length; i++) {
                numData.push({
                    value: numDate[i].value,
                    name: numDate[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 30,
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#7777eb'
                            }, {
                                offset: 1,
                                color: '#70ffac'
                            }]),
                            shadowColor: 'rgba(142, 152, 241, 0.6)'
                        }
                    }
                }, {
                    value: 4*(Math.pow(10,numLen-2)),
                    name: '',
                    itemStyle: numPlaceHolderStyle
                });
            }
            var numSeriesObj = [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: [195, 200],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#ddd',
                            formatter: function(params) {
                                var percent = 0;
                                var total = 0;
                                for (var i = 0; i < numDate.length; i++) {
                                    total += numDate[i].value;
                                }
                                percent = ((params.value / total) * 100).toFixed(0);
                                if(params.name !== '') {
                                    return params.name + '\n{white|' + '占比' + percent + '%}';
                                }else {
                                    return '';
                                }
                            },
                            rich: numRich
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: numData
            }];
            var numContainer = document.getElementById('num');
            var resizeNumContainer = function () {
                numContainer.style.width = window.innerWidth*0.45 +'px';
                numContainer.style.height = window.innerHeight*0.8 +'px';
            };
            resizeNumContainer();
            var numChart = echarts.init(numContainer);
            var numOption = {
                backgroundColor: '#04243E',
                tooltip: {
                    show: true
                },
                legend: {
                    show: true
                },
                toolbox: {
                    show: true
                },
                series: numSeriesObj
            };
            numChart.setOption(numOption);



            var avgDate = [];
            for (var i in resultData) {
                avgDate.push({
                    'name' : resultData[i].apName,
                    'value' : resultData[i].avg
                })
            }
            var avgRich = {
                white: {
                    color: '#ddd',
                    align: 'center',
                    padding: [5, 0]
                }
            };
            var avgPlaceHolderStyle = {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            };
            var avgData = [];
            var avgLen = avgDate[0].value.toString().length;
            for (var i = 0; i < avgDate.length; i++) {
                avgData.push({
                    value: avgDate[i].value,
                    name: avgDate[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 30,
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#90eb76'
                            }, {
                                offset: 1,
                                color: '#ffc750'
                            }]),
                            shadowColor: 'rgba(142, 152, 241, 0.6)'
                        }
                    }
                }, {
                    value: 4*(Math.pow(10,avgLen-2)),
                    name: '',
                    itemStyle: avgPlaceHolderStyle
                });
            }
            var avgSeriesObj = [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: [195, 200],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#ddd',
                            formatter: function(params) {
                                var percent = 0;
                                var total = 0;
                                for (var i = 0; i < avgDate.length; i++) {
                                    total += avgDate[i].value;
                                }
                                percent = ((params.value / total) * 100).toFixed(0);
                                if(params.name !== '') {
                                    return params.name + '\n{white|' + '占比' + percent + '%}';
                                }else {
                                    return '';
                                }
                            },
                            rich: avgRich
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: avgData
            }];
            var avgContainer = document.getElementById('avg');
            var resizeAvgContainer = function () {
                avgContainer.style.width = window.innerWidth*0.45 +'px';
                avgContainer.style.height = window.innerHeight*0.8 +'px';
            };
            resizeAvgContainer();
            var avgChart = echarts.init(avgContainer);
            var avgOption = {
                backgroundColor: '#04243E',
                tooltip: {
                    show: true
                },
                legend: {
                    show: true
                },
                toolbox: {
                    show: true
                },
                series: avgSeriesObj
            };
            avgChart.setOption(avgOption);



            var timesDate = [];
            for (var i in resultData) {
                timesDate.push({
                    'name' : resultData[i].apName,
                    'value' : resultData[i].times
                })
            }
            var timesRich = {
                white: {
                    color: '#ddd',
                    align: 'center',
                    padding: [5, 0]
                }
            };
            var timesPlaceHolderStyle = {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            };
            var timesData = [];
            var timesLen = timesDate[0].value.toString().length;
            for (var i = 0; i < timesDate.length; i++) {
                timesData.push({
                    value: timesDate[i].value,
                    name: timesDate[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 30,
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#eb855c'
                            }, {
                                offset: 1,
                                color: '#fcb7ff'
                            }]),
                            shadowColor: 'rgba(142, 152, 241, 0.6)'
                        }
                    }
                }, {
                    value: 4*(Math.pow(10,timesLen-2)),
                    name: '',
                    itemStyle: timesPlaceHolderStyle
                });
            }
            var timesSeriesObj = [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: [195, 200],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#ddd',
                            formatter: function(params) {
                                var percent = 0;
                                var total = 0;
                                for (var i = 0; i < timesDate.length; i++) {
                                    total += timesDate[i].value;
                                }
                                percent = ((params.value / total) * 100).toFixed(0);
                                if(params.name !== '') {
                                    return params.name + '\n{white|' + '占比' + percent + '%}';
                                }else {
                                    return '';
                                }
                            },
                            rich: timesRich
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: timesData
            }];
            var timesContainer = document.getElementById('times');
            var resizeTimesContainer = function () {
                timesContainer.style.width = window.innerWidth*0.45 +'px';
                timesContainer.style.height = window.innerHeight*0.8 +'px';
            };
            resizeTimesContainer();
            var timesChart = echarts.init(timesContainer);
            var timesOption = {
                backgroundColor: '#04243E',
                tooltip: {
                    show: true
                },
                legend: {
                    show: true
                },
                toolbox: {
                    show: true
                },
                series: timesSeriesObj
            };
            timesChart.setOption(timesOption);



            var totalDate = [];
            for (var i in resultData) {
                totalDate.push({
                    'name' : resultData[i].apName,
                    'value' : resultData[i].total
                })
            }
            var totalRich = {
                white: {
                    color: '#ddd',
                    align: 'center',
                    padding: [5, 0]
                }
            };
            var totalPlaceHolderStyle = {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            };
            var totalData = [];
            var totalLen = totalDate[0].value.toString().length;
            for (var i = 0; i < totalDate.length; i++) {
                totalData.push({
                    value: totalDate[i].value,
                    name: totalDate[i].name,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            shadowBlur: 30,
                            borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#ebbc75'
                            }, {
                                offset: 1,
                                color: '#a0a0ff'
                            }]),
                            shadowColor: 'rgba(142, 152, 241, 0.6)'
                        }
                    }
                }, {
                    value: 4*(Math.pow(10,totalLen-2)),
                    name: '',
                    itemStyle: totalPlaceHolderStyle
                });
            }
            var totalSeriesObj = [{
                name: '',
                type: 'pie',
                clockWise: false,
                radius: [195, 200],
                hoverAnimation: false,
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#ddd',
                            formatter: function(params) {
                                var percent = 0;
                                var total = 0;
                                for (var i = 0; i < totalDate.length; i++) {
                                    total += totalDate[i].value;
                                }
                                percent = ((params.value / total) * 100).toFixed(0);
                                if(params.name !== '') {
                                    return params.name + '\n{white|' + '占比' + percent + '%}';
                                }else {
                                    return '';
                                }
                            },
                            rich: totalRich
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
                data: totalData
            }];
            var totalContainer = document.getElementById('total');
            var resizeTotalContainer = function () {
                totalContainer.style.width = window.innerWidth*0.45 +'px';
                totalContainer.style.height = window.innerHeight*0.8 +'px';
            };
            resizeTotalContainer();
            var totalChart = echarts.init(totalContainer);
            var totalOption = {
                backgroundColor: '#04243E',
                tooltip: {
                    show: true
                },
                legend: {
                    show: true
                },
                toolbox: {
                    show: true
                },
                series: totalSeriesObj
            };
            totalChart.setOption(totalOption);
        }
    });
};