"use strict";

$(function(){

    var myTestData = initData();

    $("#wrapper").append(tmpl('myTest', myTestData));
    // $("#wrapper").innerHTML = "<h1>test</h1>";

    $('#check_result').on('click', function(e){
        e.preventDefault();
        if ($('input:checked').length < myTestData.questions.length) {
            $('#required').show();

            return false;
        }
        showModal(myTestData);
    });

    $('#continue').on('click', function(){
        $('#required').hide();
    });
});


function initData() {

        var myTestData = localStorage.getItem('myTest');
    
        if (myTestData != undefined) {
            myTestData = JSON.parse(myTestData);
        } else {
            var myTestData = {
            questions: [
                {
                    title: "Вопрос №1",
                    name: "radio_1",
                    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
                    correctAnswer: 1
                },
                {
                    title: "Вопрос №2",
                    name: "radio_2",
                    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
                    correctAnswer: 1
                },
                {
                    title: "Вопрос №3",
                    name: "radio_3",
                    answers: ["Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3"],
                    correctAnswer: 1
                },
                ]
            };

            localStorage.setItem('myTest', JSON.stringify(myTestData));
        }

        return myTestData;
    };

function showModal(data) {
    var $result = 0;
    var $answer = $('input:checked');

    var $modal = $('<div class="modal"></div>');

    for (var i = 0; i < data.questions.length; i++) {
        var selected = $($answer[i]).data('answerNumber');
        var correct = data.questions[i].correctAnswer;

        if ($($answer[i]).data('answerNumber') == data.questions[i].correctAnswer) {
            $result++;
            $modal.append('<p class="correct">' + (i+1) + '. Ответ верный</p>');
        } else {
            $modal.append('<p class="incorrect">' + (i+1) + '. Ответ неверный</p>');
        }
    }    

    if ($result == data.questions.length) {
        $modal.append('<p class="result_modal">Тест успешно завершен!</p>');
    } else {
        $modal.append('<p class="result_modal">Попробуйте еще раз!</p>');
    }

    $modal.append('<button id="restart">Пройти заново</button>');
    $('#wrapper').append($modal);

    $('#restart').on('click', function (e) {
        e.preventDefault();
        $('input').attr('checked', false);
        $modal.remove();
    });
}
