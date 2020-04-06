<template>
  <section id="user-pane">
    <figure>
      <img src="https://via.placeholder.com/150">
    </figure>
    <h3>{{username}}</h3>
  </section>
</template>

<script>
export default {
  name: 'User',
  data: function() {
    return {
      username: 'username goes here',
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../styles/variables";

  #user-pane {
    background-color: rgb(255, 213, 213);
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: auto auto;
    row-gap: $margin;
    justify-items: center;
    align-items: center;
      figure, h3 {
        grid-column: 2/3;
      }
      figure {
        width: 100%;
      }
      figure img {
        border-radius: 50%;
      }
  }
</style>
