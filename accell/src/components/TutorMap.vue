<template>
  <div class="mapMain">
    <h1 class="text">Find your nearby tutor and learning locations</h1>
    <div id="shape"></div>
    <div class="shape2"></div>
    <p class="size">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20829.292873308532!2d-123.00149565636904!3d49.263859465617564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867731c5bf3bf3%3A0x951f96e79fcf6ce1!2sKumon%20Math%20%26%20Reading%20Centre!5e0!3m2!1sen!2sca!4v1612637225311!5m2!1sen!2sca"
        width="600"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </p>
    <label for="file">Ratings from professionals</label>
    <progress class="progress" value="70" max="100">
      <p>70%</p>
    </progress>
    <button class="locate" @click="getLocation()">Get your location</button>
    <button class="locate2">
      <a
        href="https://www.google.com/maps/dir//49.2677786,-123.0034297/@49.267779,-123.00343,13z?hl=en"
      >Get Directions</a>
    </button>

    <p id="demo"></p>
  </div>
</template>
<script>
export default {
  name: "TutorMap",
  methods: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.mapMain {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e7f6fa;
  height: 100vh;
  width: 100vw;
  padding: 2em;
}
button {
  width: 30%;
}
@media only screen and (max-width: 400px) {
  button {
    width: 80%;
  }
}
</style>