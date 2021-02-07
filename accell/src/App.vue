<template>
  <div id="app">
    <div id="nav">
      <div id="nav-left">
        <router-link to="/">Home</router-link>
      </div>
      <div id="nav-right">
        <router-link to="/login">SignUp</router-link>
        <router-link to="/map">Map</router-link>
        <router-link to="/chat">Chat</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
body {
  margin: 0;
}
#nav {
  padding: 30px;
  background-color: #92d4ea;
  display: flex;
  align-items: center;
  width: 100vw;
  margin: 0;
}
#nav-right {
  width: 80vw;
  display: flex;
  justify-content: flex-end;
  margin: 0;
}
#nav-left {
  display: flex;
  align-items: center;
}
#nav a {
  font-weight: bold;
  color: #061b22;
  font-size: 2em;
  margin: 0 0.6em;
  text-decoration: none;
}
#nav a:hover {
  color: #1f82a2;
  text-decoration: underline;
}
#nav a.router-link-exact-active {
  color: #1f82a2;
  text-decoration: underline;
}

@media only screen and (max-width: 600px) {
  #nav a {
    font-size: 20px;
  }
}
</style>
