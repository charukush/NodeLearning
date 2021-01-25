var http = require('http');
var weather = {
    host: 'api.openweathermap.org',
    path: '/data/2.5/weather?q=20170&appid=1d5413cd2b2e600f5920fa7cb1df95fb'
};
callback = function(response){
    var str = '';
    response.on('data', function(chuck){
        str +=chuck;
    });

    response.on('end', function(){
       // console.log(str);
        var apiresponse = JSON.parse(str);
        console.log(apiresponse.weather[0].main);
    }
    
    );
}
http.request(weather, callback).end();