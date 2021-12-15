var date = $('#current-date')

var todayDate = new Date();
//console.log(date)\
var hour = todayDate.getHours();
console.log(hour)

var today = moment().format('LLL')
console.log(today)

var update = function() {
    $('#current-date').html(moment().format('MMMM Do YYYY, h:mm:ss a'))
}
setInterval(update, 1000)

var classChange = function(){
    var date = new Date();
    //console.log(date)\
    var hour = date.getHours();
    console.log(hour)

    if(hour < 9)
    $('#nine-am').addClass('future')
    else if(hour === 9)
    $('#nine-am').addClass('present')
    else if( hour > 9)
    $('#nine-am').addClass('past')
    
    if(hour < 10)
    $('#ten-am').addClass('future')
    else if(hour === 10)
    $('#ten-am').addClass('present')
    else if( hour > 10)
    $('#ten-am').addClass('past')

    if(hour < 11)
    $('#eleven-am').addClass('future')
    else if(hour === 11)
    $('#eleven-am').addClass('present')
    else if( hour > 11)
    $('#eleven-am').addClass('past')

    if(hour < 12)
    $('#twelve-pm').addClass('future')
    else if(hour === 12)
    $('#twelve-pm').addClass('present')
    else if( hour > 12)
    $('#twelve-pm').addClass('past')

    if(hour < 13)
    $('#one-pm').addClass('future')
    else if(hour === 13)
    $('#one-am').addClass('present')
    else if( hour > 13)
    $('#one-am').addClass('past')

    if(hour < 14)
    $('#two-pm').addClass('future')
    else if(hour === 14)
    $('#two-pm').addClass('present')
    else if( hour > 14)
    $('#two-pm').addClass('past')

    if(hour < 15)
    $('#three-pm').addClass('future')
    else if(hour === 15)
    $('#three-pm').addClass('present')
    else if( hour > 15)
    $('#three-pm').addClass('past')

    if(hour < 16)
    $('#four-pm').addClass('future')
    else if(hour === 16)
    $('#four-pm').addClass('present')
    else if( hour > 16)
    $('#four-pm').addClass('past')

    if(hour < 17)
    $('#five-pm').addClass('future')
    else if(hour === 17)
    $('#five-pm').addClass('present')
    else if( hour > 17)
    $('#five-pm').addClass('past')
}


classChange();