<template>
  <div class='homeContainer'>
    <img :src="image" alt="">
    <div>
    <h1>We Connect You With Local Tutors</h1>
    <h3>Finding the right tutor can be hard work, we take care of that for you, so you can accellerate your learning!</h3>
    <button @click="goToSignUp()">Sign Up!</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return {
      image: require('@/assets/nature.png')
    }
  },
  methods: {
    goToSignUp(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.homeContainer{
  display: flex;
  align-items: center;
}
img{
  height: 80vh;
  width: 60%;
  margin: 1em;
}
h3{
  font-weight: 100;
  margin: 1em;
}
h1{
  margin: 1em;
}

@media only screen and (max-width: 400px) {
  img {
    width: 40%;
  }
}
</style>