<template>
  <main>
    <User />
    <Calendar />
    <TaskPane />
    <DetailPane />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </main>
</template>

<script>
import User from './components/User';
import Calendar from './components/Calendar';
import TaskPane from './components/TaskPane';
import DetailPane from './components/DetailPane';

export default {
  name: 'App',
  components: {
    User,
    Calendar,
    TaskPane,
    DetailPane
  }
}
</script>

<style lang="scss">
  @import "App";
  main {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-template-rows: 2fr 3fr;
    column-gap: $margin;
    row-gap: $margin;
    height: 100%;
  }
</style>
