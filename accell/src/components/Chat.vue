<template>
  <div class="chatMain">
    <h1>Connect With a Tutor</h1>
    <div class="chats">
      <div class="videoChat">
        <h2>Video Chat</h2>
        <div class="chatBox1"></div>
      </div>
      <div class="textChat">
        <h2>Chat</h2>
        <div class="chatBox">
          <div class="computerMessages">
            <ul v-for="message in computerMessages" :key="message">
              <li>{{message}}</li>
            </ul>
          </div>
          <div class="userMessages">
            <ul v-for="message in userMessages" :key="message">
              <li>{{message}}</li>
            </ul>
          </div>
        </div>
        <input
          v-model="userText"
          type="text"
          placeholder="Enter A Message and Hit Enter to Submit"
          @keypress.enter="submitMessage()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data() {
    return {
      counter: 1,
      userText: "",
      userMessages: [],
      computerMessages: [],
      computerRandomMessages: [
        "Hello how are you ?",
        "Amazing to hear, how can I help you today?",
        "Okay that sounds good we can start now!",
        "Happy to help :) ",
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.computerMessages.push(this.computerRandomMessages[0]);
    }, 2000);
  },
  methods: {
    submitMessage() {
      this.userMessages.push(this.userText);
      this.addComputerMessage();
      this.userText = "";
    },
    addComputerMessage() {
      setTimeout(() => {
        this.computerMessages.push(this.computerRandomMessages[this.counter]);
        this.counter++;
      }, 3000);
    },
  },
};
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
h1 {
  margin-top: 2em;
}
.chatMain {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7f6fa;
  padding: 1em;
  height: 100vh;
  width: 100vw;
}
.chats {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #bce5f2;
  height: 80%;
  width: 90%;
  padding: 2em;
  border-radius: 1em;
  margin-top: 2em;
}

.videoChat {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2082a2;
  height: 70%;
  width: 40%;
  margin: 1em;
  border-radius: 2em;
  overflow: hidden;
}
.textChat {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2082a2;
  height: 70%;
  width: 50%;
  margin: 1em;
  border-radius: 2em;
}
.chatBox {
  height: 80%;
  width: 80%;
  background-color: white;
  border-radius: 2em;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.chatBox1 {
  height: 70%;
  width: 80%;
  border-radius: 2em;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: white;

}
.computerMessages {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.computerMessages li {
  margin: 0.1em;
  background-color: lightgrey;
  padding: 0.5em;
  font-size: 14px;
  border-radius: 2em;
}
.userMessages li {
  background-color: #bce5f2;
  padding: 0.5em;
  font-size: 14px;
  border-radius: 2em;
}

.userMessages {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin: 1em;
}
li {
  list-style-type: none;
}
@media only screen and (max-width: 800px){
  .videoChat{
    display: none;
  }
  .textChat{
    width: 100vw;
    margin-bottom: 30%;
  }
  .chats{
  width: 100vw;
  padding: 0;
  margin: 0;
  }
  h1{
    margin: 0;
  }
  h2{
    margin: .2em;
  }
  .chatBox{
    width: 95%;
  }
  li{
    width: 100%;
    margin: .4em;
  }
  ul{
    margin: .4em;
    padding: 0;
  }
  .computerMessages{
    width: 50%;
  }
}
</style>