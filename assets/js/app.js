$('#begin').on('click', function(){
    for(var i = 0; i < questions.length; i++){
        $('#two').append('<h2>' + questions[i].ques +'</h2');
        for(var j = 0; j > questions[i].ans.length; j++);{
            $('#two').append("<input type='radio' name= 'q-"+i+"' value= '" +questions[i].ans[j]+ "'>" +questions[i].ans[j])
        }
    }
    console.log('ban')
})
var questions =[{
    ques:'what',
    ans:['calimari', 'b', 'c'],
    correct: 'a'
}, {
    ques:'who',
    ans:['a', 'b', 'c'],
    correct: 'c'
},
];