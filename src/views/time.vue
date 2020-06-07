<template>
  <div>
    <a-date-picker @change="onChange"/>
    <br/>
    <a-month-picker placeholder="Select month" @change="onChange"/>
    <br/>
    <a-range-picker @change="onChange"/>
    <br/>
    <a-week-picker placeholder="Select week" @change="onChange"/>
  </div>
</template>

<script>
  export default {
    name: "time",
    methods: {
      onChange(date, dateString) {
        console.log(date, dateString);
      },
    },
  }
</script>

<style scoped>

</style>

<script>
</script>
