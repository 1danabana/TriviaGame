$('#begin').on('click', function(){
    for(var i = 0; i < questions.length; i++){
        $('two').append('<h2>' + questions[i].q +'</h2');
    }
    console.log('ban')
})
var questions =[{
    q:'what',
    a:['a', 'b', 'c'],
    ca: 'a'
}, {
    q:'who',
    a:['a', 'b', 'c'],
    ca: 'c'
},
]