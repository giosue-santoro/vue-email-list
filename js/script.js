new Vue({

  el: '#app',

  data: {
    list: []
  },

  mounted() {
      
    const self = this;

    for (var x = 0; x < 10; x++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(function(re) {
          self.list.push(re.data.response)
      })
    }

  }
})

Vue.config.devtools = true;