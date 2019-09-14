var app = new Vue({
    el: '#app',
    data: {
      messages: [
        "Hello World!",
        "Apa Khabar",
        "Khabar Baik"
      ],
      newMessage:"",
    },
    methods:{
        enterNewMessage: function() {
            alert(this.newMessage);

        }
    },
  })
 