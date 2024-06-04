document.addEventListener('DOMContentLoaded', function() {
    // Генерация случайного числа a и числа b для атрибута картинки
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);

    // Установка значения атрибута data-b картинки
    let numberImage = document.getElementById('numberImage');
    numberImage.setAttribute('data-b', b);

    // Установка значения для числа a в задании
    let challengeElement = document.getElementById('challenge');
    challengeElement.textContent = `Что будет ${a} + ?`;

    // Таймер на 3 секунды
    let timeLeft = 3;
    let timerElement = document.getElementById('timer');
    timerElement.textContent = timeLeft;

    let timer = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('submitBtn').disabled = true;
            timerElement.textContent = "Время вышло!!!";
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
            messageElement.textContent = "Вот это да ты что крутой что ли ?";
        } else {
            messageElement.textContent = "Дааа, считать ты явно не умеешь, лучше не мешай котику!!!";
        }

        // Блокируем дальнейший ввод и отправку формы
        document.getElementById('submitBtn').disabled = true;
    });
});
