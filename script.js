document.addEventListener('DOMContentLoaded', function() {
    // Получение значений a и b из атрибута data-b
    let a = 44; // Предполагается, что число a уже известно
    let b = parseInt(document.getElementById('numberImage').getAttribute('data-b'));

    // Отображение числа a и знака вопроса в задании
    let challengeElement = document.getElementById('challenge');
    challengeElement.textContent = `What is ${a} + ?`;

    // Таймер на 3 секунды
    let timeLeft = 3;
    let timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;

    let timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('submitBtn').disabled = true;
            timerElement.textContent = "Time's up!";
        } else {
            timerElement.textContent = timeLeft;
        }
        timeLeft -= 1;
    }, 1000);

    // Обработчик отправки формы
    let form = document.getElementById('puzzleForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Получение ответа пользователя
        let answer = parseInt(document.getElementById('answer').value);

        // Проверка правильности ответа и вывод сообщения
        let messageElement = document.getElementById('message');
        if (answer === a + b) {
            messageElement.textContent = "You guessed it! Well done!";
        } else {
            messageElement.textContent = "Incorrect answer!";
        }

        // Блокируем дальнейший ввод и отправку формы
        document.getElementById('submitBtn').disabled = true;
    });
});
