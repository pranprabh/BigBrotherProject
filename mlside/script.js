const stateNames = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const stateAbbreviations = [
 'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
 'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
 'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
 'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
 'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
];

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                var allText = allText.replace(/\'/gi, "\"");
                

                for (var i = 0; i < stateNames.length; i++) {
                	allText = allText.replace(stateNames[i], stateAbbreviations[i]);
                }

                var mapData = JSON.parse(allText)

                console.log(mapData)
                plotOnMap(mapData)
            }
        }
    }
    rawFile.send(null);
}

readTextFile('state_need_pairs.txt')

function plotOnMap(data) {
        // Instantiate the map
        Highcharts.mapChart('container', {

            chart: {
                map: 'countries/us/us-all',
                borderWidth: 1
            },

            title: {
                text: 'Resource allocation per state for Bigs'
            },

            exporting: {
                sourceWidth: 600,
                sourceHeight: 500
            },

            legend: {
                layout: 'horizontal',
                borderWidth: 0,
                backgroundColor: 'rgba(255,255,255,0.85)',
                floating: true,
                verticalAlign: 'top',
                y: 25
            },

            mapNavigation: {
                enabled: true
            },

            colorAxis: {
                min: 1,
                type: 'logarithmic',
                minColor: '#ffffff',
                maxColor: '#8B0000',
                stops: [
                    [0, '#ffffff'],
                    [0.67, '#ffcccb'],
                    [1, '#8B0000']
                ]
            },

            series: [{
                animation: {
                    duration: 1000
                },
                data: data,
                joinBy: ['postal-code', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    format: '{point.code}'
                },
                name: 'Resource allocaiton',
                tooltip: {
                    pointFormat: '{point.code}: {point.value}'
                }
            }]
        });
}

