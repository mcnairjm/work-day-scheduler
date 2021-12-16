var date = $('#current-date')
var editText = null;
var tasks = {}
var editItem = '';

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
    $('#one-pm').addClass('present')
    else if( hour > 13)
    $('#one-pm').addClass('past')

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


$('.saveBtn').click(function() {
   var nineAM = document.getElementById('nine-am').value;
   localStorage.setItem('tasks9AM', nineAM)
   var tenAM = document.getElementById('ten-am').value;
   localStorage.setItem('tasks10AM', tenAM);
   var elevenAM = document.getElementById('eleven-am').value;
   localStorage.setItem('tasks11AM', elevenAM);
   var twelvePM = document.getElementById('twelve-pm').value;
   localStorage.setItem('tasks12PM', twelvePM);
   var onePM = document.getElementById('one-pm').value;
   localStorage.setItem('tasks1PM', onePM);
   var twoPM = document.getElementById('two-pm').value;
   localStorage.setItem('tasks2PM', twoPM);
   var threePM = document.getElementById('three-pm').value;
   localStorage.setItem('tasks3PM', threePM);
   var fourPM = document.getElementById('four-pm').value;
   localStorage.setItem('tasks4PM', fourPM);
   var fivePM = document.getElementById('five-pm').value;
   localStorage.setItem('tasks5PM', fivePM);

})

$(document).ready(function(){
    var savedNineAM = localStorage.getItem('tasks9AM');
    $('#nine-am').val(savedNineAM);
    var savedTenAM = localStorage.getItem('tasks10AM');
    $('#ten-am').val(savedTenAM);
    var savedElevenAM = localStorage.getItem('tasks11AM');
    $('#eleven-am').val(savedElevenAM);
    var savedTwelvePM = localStorage.getItem('tasks12PM');
    $('#twelve-pm').val(savedTwelvePM);
    var savedOnePM = localStorage.getItem('tasks1PM');
    $('#one-pm').val(savedOnePM);
    var savedTwoPM = localStorage.getItem('tasks2PM');
    $('#two-pm').val(savedTwoPM);
    var savedThreePM = localStorage.getItem('tasks3PM');
    $('#three-pm').val(savedThreePM);
    var savedFourPM = localStorage.getItem('tasks4PM');
    $('#four-pm').val(savedFourPM);
    var savedFivePM = localStorage.getItem('tasks5PM');
    $('#five-pm').val(savedFivePM);
    
})

$('#reset-btn').click(function() {
    $('#nine-am').val('');
    $('#ten-am').val('');
    $('#eleven-am').val('');
    $('#twelve-pm').val('');
    $('#one-pm').val('');
    $('#two-pm').val('');
    $('#three-pm').val('');
    $('#four-pm').val('');
    $('#five-pm').val('');
    localStorage.clear();
})







classChange();