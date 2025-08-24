const app = Vue.createApp({
    data() {
        return {
            index: 0,
            selectedAnswer: '',
            correctAnswer: 0,
            wrongAnswer: 0,
            count: 3,
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
        showResults() {
            this.index++
            
        },
        
    }
})

app.mount('#app')