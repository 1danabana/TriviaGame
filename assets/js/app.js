$('#begin').on('click', function(){
    $('#begin').remove();
    for(var i = 0; i < questions.length; i++){
        $('#two').append('<h2>' + questions[i].ques +'</h2');
        for(var j = 0; j < questions[i].answer.length; j++){
            $('#two').append("<input type='radio' name= 'ques-"+i+"' value='" +questions[i].answer[j]+ "'>" +questions[i].answer[j]);
        }
    }
   
})
var questions =[{
    ques:'what',
    answer: ['calimari', 'b', 'c'],
    correct: 'b '
}, {
    ques:'who',
    answer: ["a", "b", "c"],
    correct: 'c'
},
];
console.log(questions.ans)