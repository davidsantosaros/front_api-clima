$(document).ready(function () {

    var resumen = $('#resumen');
    var sensacion = $('#sensacion');
    var probabilidad = $('#probabilidad');
    var humedad = $('#humedad');
    var imagen = $('.img-responsive');
    var escondido = $('#escondido');
    
    var url = 'https://api.darksky.net/forecast/';
    var key = '528e7da7e6c9cef357bbbf0004d1932f';
    var cors = 'https://cors-anywhere.herokuapp.com/';
    var coords = {
        scl: '-33.4377968,-70.6504451',
        ccp: '-36.8270169,-73.0503189'
    }
    
    var queryParams = ['exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto'];
    
    var image = {
        'clear-day': 'https://icons.wxug.com(i/c/v4(clear.svg)',
        'rain': 'https://icons/.wxung.com/i/c/v4.rain.svg'
    }
    
    $('#select').on('change', function () {
       
        $.ajax({
            url: cors + url + key + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
             method: 'GET'
        }).then(function (data) {
    
            resumen.text(parseInt(data.currently.temperature) + 'º' + data.currently.summary)
            sensacion.text(data.currently.apparentTemperature + 'º');
            probabilidad.text(data.currently.precipProbability * 100 + '%');
            humedad.text(data.currently.humidity * 100 + '%');
            imagen.attr('src', image[data.currently.icon]);
            escondido.removeAttr('hidden');
            }); 
        })
    });