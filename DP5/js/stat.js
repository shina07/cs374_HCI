$(document).ready(function() {
    $('.panel').css("height", (window.screen.height).toString()+"px")
    $('.n_up').on("click", function() {
        $.scrollify.previous()
    })
    $('.n_down').on("click", function() {
        $.scrollify.next()  
    })
    loadData()
})

/* kinds of chart
    1. completion / incompletion - pie
    2. ratio of each part to total number plan - pie
    3. summury for each day - bar
*/
/*-----------------------------------------------------------+
| dateLength = Number of dates                               |
| completed = number of completed worktous for all days      |
| uncompleted = number of uncompleted worktous for all days  |
+-----------------------------------------------------------*/

function loadData() {
    completed = 0, uncompleted = 0;
    recentDays = new Array()

    var userRef = database.ref("PLANS/" + link_userId)
    userRef.once('value').then(function(userData) {
        plans = userData.val()
        if (plans!=null)
        {
            dateLength = Object.keys(plans).length    
        }
        else
        {
            dateLength = 0
        }

        // 1
        for (var key in plans) {
            var dateRef = database.ref("PLANS/" + link_userId + "/" + key)
            dateRef.once('value').then(function(dateData) {
                if (dateData.val()["completed"] == true)
                    completed++;
                else
                    uncompleted++;
            })
        }

        // 2
        for (var key in plans) {
            var dateRef = database.ref("PLANS/" + link_userId + "/" + key)
            dateRef.once('value').then(function(dateData) {
                
            })
        }

        // 3
    })
}

$(function () {
    $.scrollify({
        section : ".panel",
        easing: "easeOutExpo",
        scrollSpeed: 1000,
        scrollbars: true,
        setHeights: false,
        overflowScroll: false,
        updateHash: true,
        touchScroll: true,
        before:function(index, sections) {
            switch (index)
            {
            case 0:
                Highcharts.chart('container1', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Fruit Consumption'
                    },
                    xAxis: {
                        categories: ['Apples', 'Bananas', 'Oranges']
                    },
                    yAxis: {
                        title: {
                            text: 'Fruit eaten'
                        }
                    },
                    series: [{
                        name: 'Jane',
                        data: [1, 0, 4]
                    }, {
                        name: 'John',
                        data: [5, 7, 3]
                    }]
                });
                break;
            case 1:
                Highcharts.chart('container2', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: 'Completion / Incompletion'
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                                style: {
                                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Done',
                        colorByPoint: true,
                        data: [{
                            name: 'Complete',
                            y: 80
                        }, {
                            name: 'Incomplete',
                            y: 20
                        }]
                    }]
                });
                break;
            case 2:
                Highcharts.chart('container3', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Stacked bar chart'
                    },
                    xAxis: {
                        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Total fruit consumption'
                        }
                    },
                    legend: {
                        reversed: true
                    },
                    plotOptions: {
                        series: {
                            stacking: 'normal'
                        }
                    },
                    series: [{
                        name: 'John',
                        data: [5, 3, 4, 7, 2]
                    }, {
                        name: 'Jane',
                        data: [2, 2, 3, 2, 1]
                    }, {
                        name: 'Joe',
                        data: [3, 4, 4, 2, 5]
                    }]
                });
                break;    
            }
        }
    })
});
