$('#begin').on('click', function(){
    for(var i = 0; i < questions.length; i++){
        $('#two').append('<h2>' + questions[i].q +'</h2');
        for(var x = 0; x >questions[i].a.length; x++);{
            $('#two')
        }
    }
    console.log('ban')
})
var questions =[{
    q:'what',
    a:['a', 'b', 'c'],
    correct: 'a'
}, {
    q:'who',
    a:['a', 'b', 'c'],
    correct: 'c'
},
]