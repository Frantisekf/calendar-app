<template>
    <div class="calendar-day--wrapper">
      <span class="day">
        {{day}}
      </span>
    </div>
</template>

<script>
  export default {
    name: 'CalendarDay',
    props: {
      day: Number,
      month: String,
      events: Array,
    },
  };
</script>

<style scoped lang="scss">

  .day {
    color: black;
    height: auto;
    font-size: 14px;
  }

</style>
