// Build the chart
Highcharts.chart('container1', {
    credits: {
        // enabaled: false
        text: ' سیدرضا حسینی ',
        href: 'https://instagram.com/coder.135',
        position: {

            align: 'left',
            x: 10
        },
        style: {
            fontFamily: "WYekan",
            fontSize: '14px',
            color: 'black'
        }
    },
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'نمودار دایره ای برنامه روزانه',
        style: {
            fontFamily: "WYekan"
        },

    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        borderRadius: '20',
        shared: true,
        animation: false,
        backgroundColor: 'gray',
        borderColor: '#f6f6',
        borderRadius: '20',
        followPointer: true,
        style: {
            fontFamily: "WYekan",
            color: '#ffffff'
        }
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Value',
        style: {
            fontFamily: "WYekan"
        },
        colorByPoint: true,
        data: [{
            name: 'خواب',
            y: 30,

        }, {
            name: 'برنامه نویسی',
            y: 30,
            color: 'yellow'
        }, {
            name: 'تفریح ',
            y: 20
        }, {
            name: 'مطالعه',
            y: 15
        }, {
            name: 'عبادت',
            y: 5
        }]
    }]
});




Highcharts.chart('container2', {
    style: {
        fontFamily: "WYekan"
    },
    chart: {
        type: 'column',
        zoomType: 'xy'
    },
    credits: {
        // enabaled: false
        text: ' سیدرضا حسینی ',
        href: 'https://instagram.com/coder.135',
        position: {

            align: 'left',
            x: 10
        },
        style: {
            fontFamily: "WYekan",
            fontSize: '14px',
            color: 'black'
        }
    },
    title: {
        text: 'نمودار سطح برنامه نویسی من',
        style: {
            fontFamily: "WYekan"
        }
    },
    tooltip: {


        formatter() {

            // let s = `<strong>X is: </strong> ${this.x}`;
            // this.points.forEach(function(point) {
            //     s += `<br> Y is : ${point.y}`;
            // });
            // return s;
            return ` ${ this.x } : ${this.y}% `;
        },
        shared: true,
        animation: false,
        backgroundColor: '#333333',
        borderColor: '#f6f6',
        borderRadius: '20',
        followPointer: true,
        style: {
            color: '#ffffff'
        }


    },
    yAxis: {

        title: {
            text: 'درصد مهارت',
            style: {
                fontFamily: "WYekan",
            }
        }

    },
    // colors: ['#E4D6A7', '#E9B44C', '#9B2915', "#50A2A7"],
    xAxis: {

        categories: ["HTML5", "CSS3", "Javascript", "Bootstrap", "NodeJs", "ExpressJs", "MongoDB", "Git", "JQuery", "EJS"]
    },
    series: [{
        name: 'مهارت های من',
        data: [{
                name: 'HTML5',
                y: 60,
                color: '#f38181',
            }, {
                name: 'CSS3',
                y: 50,
                color: '#E9B44C'
            }, {
                name: 'Javascript',
                y: 50,
                color: '#903749'
            },
            {
                name: 'Bootstrap',
                y: 65,
                color: '#a6e3e9'
            },
            {
                name: 'NodeJs',
                y: 65,
                color: '#ff9999'
            },
            {
                name: 'ExpressJs',
                y: 55,
                color: '#d4a5a5'
            },

            {
                name: 'MongoDB',
                y: 70,
                color: '#2b2e4a'
            },
            {
                name: 'Git',
                y: 40,
                color: '#8785a2'
            },
            {
                name: 'JQuery',
                y: 40,
                color: '#e0f9b5'
            }, {
                name: 'EJS',
                y: 60,
                color: '#323232'
            },
        ]
    }],
});


Highcharts.chart('container5', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ' نمودار هفتگی ساعت مطالعه  ',
        style: {
            fontFamily: "WYekan",
        }
    },

    xAxis: {
        categories: [
            'شنبه',
            'یکشنبه',
            'دوشنبه',
            'سه شنبه',
            'چهارشنبه',
            'پنج شنبه',
            'جمعه'
        ],
        style: {
            fontFamily: "WYekan",
        }
    },
    yAxis: {
        title: {
            text: ' ساعت مطالعه',
            style: {
                fontFamily: "WYekan",
            }
        }
    },
    tooltip: {
        formatter() {

            // let s = `<strong>X is: </strong> ${this.x}`;
            // this.points.forEach(function(point) {
            //     s += `<br> Y is : ${point.y}`;
            // });
            // return s;
            return ` ${ this.x } : ${this.y} ساعت `;
        },
        backgroundColor: '#333333',
        borderColor: '#f6f6',
        borderRadius: '20',
        followPointer: true,
        style: {
            fontFamily: "WYekan",
            color: '#ffffff'
        }
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.3
        }
    },
    series: [{
        name: 'برنامه نویسی',
        data: [5, 6, 10, 5, 7, 8, 3],
        style: {
            fontFamily: "WYekan"
        },
        color: '#8785a2'

    }, {
        name: 'مطالعه آزاد',
        data: [1, 2, 0, 1, 1, 1, 4],
        style: {
            fontFamily: "WYekan",
        },
        color: '#ff9999'
    }]
});