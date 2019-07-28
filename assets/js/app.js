$('#begin').on('click', function(){
    game.start();
});
$(document).on('click', "#finish", function(){
    game.done();
});

var questions =[{
    ques:'what class is the U.S.S Enterprise NCC-1701 lead by James Tiberius Kirk',
    answer: ['celestial', 'Constitution', 'Galaxy'],
    correctChoice: 'Constitution'
}, {
    ques:'who is the doctor of the NCC-1701',
    answer: ["Leonard Hortatio McCoy", "Worf son of Mogh", "Beaverly Crusher"],
    correctChoice: 'Leonard Hortatio McCoy'
},
];

var game = {
    correct: 0,
    wrong: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter <= 0){
            console.log
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown, 1000);
        $('#two').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#begin').remove();
        for(var i = 0; i < questions.length; i++){
            $('#two').append('<h2>' + questions[i].ques +'</h2');
            for(var j = 0; j < questions[i].answer.length; j++){
                $('#two').append("<input type='radio' name= 'ques-"+i+"' value='" +questions[i].answer[j]+ "'>" +questions[i].answer[j]);
            }
        }
        $('#two').append('<br><button id="finish">done</button>')
    },
    done: function(){
        $.each($('input[name="ques-0"]:checked'),function() {
            if($(this).val() == questions[0].correctChoice) {
              game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($('input[name="ques-1"]:checked'),function() {
            if($(this).val() == questions[1].correctChoice) {
              game.correct++;
            } else {
                game.wrong++;
            }
        });
      this.result();
    },
    result: function(){
        clearInterval(timer)
        $('#two h2').remove();
        $('#two').html('<hr>Complete</h2>');
        $('#two').append("<h3>Correct answers!: "+this.correct+"</h3>");
        $('#two').append("<h3>Correct answers!: "+this.wrong+"</h3>");
        $('#two').append('<h3>unanswerd: ' +(questions.length-(this.wrong+this.correct))+'</h3>')
    }
    
}
