<template>
  <form v-on:submit='upload'>
    <div class="form-group">
      <textarea class="form-control" placeholder="Questions" rows="4" cols="50" v-model="questionInput"></textarea>
    </div>
    <div class="form-group">
      <textarea class="form-control" placeholder="Answers" rows="4" cols="50" v-model="answerInput"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Upload data</button>
  </form>
</template>
<script>
  import {db} from '../firebase-connect'

  export default {
    data: () => ({
      questions: {},
      questionInput: '',
      answerInput: ''
    }),

    firebase: {
      questions: {
        source: db.ref('questions'),
        // Optional, allows you to handle any errors.
        cancelCallback (err) {
          console.error(err)
        }
      },
      answers: {
        source: db.ref('answers'),
        // Optional, allows you to handle any errors.
        cancelCallback (err) {
          console.error(err)
        }
      }
    },
    methods: {
      upload () {
        const questionData = this.questionInput.split('\n')
        for (let i = 0; i < questionData.length; i++) {
          this.$firebaseRefs.questions.push({
            text: questionData[i]
          })
        }
        const answerData = this.answerInput.split('\n')
        for (let i = 0; i < answerData.length; i++) {
          this.$firebaseRefs.answers.push({
            text: answerData[i]
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
