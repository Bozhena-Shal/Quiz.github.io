const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 3,
            quizFinished: false,
            questions: [
                {
                    question: "Как расшифровывается аббревиатура СНО?",
                    answers: {a: 'Студенческое Ночное Общество', b: 'Студенческое Научное Общество', c: 'Студенты Нашедшие Ответы'},
                    correctAnswer: 'b'
                },
                {
                    question: "Что делают в СНО?",
                    answers: {a: 'Что-то', b: 'Играют в классики', c: 'Студенты Нашедшие Ответы'},
                    correctAnswer: 'b'
                },
                {
                    question: "Кто может вступить в СНО?",
                    answers: {a: 'Студенческое Ночное Общество', b: 'Студенческое Научное Общество', c: 'Студенты Нашедшие Ответы'},
                    correctAnswer: 'c'
                }
                
            ]
        }
    },
    methods: {
        answered(e) {
          this.selectedAnswer = e.target.value
          if(this.selectedAnswer === this.questions[this.index].correctAnswer)
            this.correctAnswer++
        else
            this.wrongAnswer++
        },
        nextQuestion() {
            this.index++
            this.selectedAnswer = ''
        },
        celebrate() {
            confetti({
                particleCount: 200,
                spread: 200,
                origin: { y: 0.6 },
                colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
            });
        },
        finishQuiz() {
            this.quizFinished = true;
            this.celebrate();
            this.index++
        }
    }
})

app.mount('#app')

