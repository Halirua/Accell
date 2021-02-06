<template>
  <div class="main">
    <form @submit.prevent="">
      <h1>Sign Up and Accellerate your learning!</h1>
      <label for="name">Name</label>
      <input type="text" id="name" />
      <br />
      <label for="email">Email</label>
      <input type="email" />
      <br />
      <label for="password">Password</label>
      <input type="password" />
      <div id="outer">
        <div class="inner">
          <button type="submit">Sign In</button>
        </div>
        <div class="inner">
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SignUpForm",
};
</script>

<style >
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

input {
  margin: 1em;
  width: 80%;
  height: 2em;
}
label {
  font-size: 1.2em;
}

form {
  background-color: #d9f0f8;
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 1em;
  border-radius: 1em;
  margin-top: 10%;
}
#outer {
  width: 100%;
  text-align: center;
}
.inner {
  width: 50%;
  display: inline-block;
}
button{
  margin: 1em;
  width: 70%;
  height: 2em;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 1em;
   background-color:#92D4EA ;
}
button:hover{
  cursor: pointer;
  background-color: #2082A2;
  color:#d9f0f8
 
}
</style>