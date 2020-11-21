<template>
  <div id="app2">
    <index></index>
  </div>
</template>

<script>
import Index from "@/components/Index";


export default {
  name: 'App2',
  components: {
    Index,
  }
}
</script>

<style>
#app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
