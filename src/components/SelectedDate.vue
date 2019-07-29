<template>
  <div class="selected-date--wrapper">
    <span class="selected-date__number">
      {{ selectedDate }}
    </span>
    <span class="selected-date__month">
      {{ selectedMonth }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'SelectedDate',
    props: {
      selectedDate: Number,
      selectedMonth: String,
    },
  };
</script>

<style scoped lang="scss">
  .selected-date--wrapper {
    max-width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    background-color: white;
  }

  .selected-date__number {
    font-size: 72px
  }

  .selected-date__month {
    text-transform: uppercase;
    color: black;
  }

</style>
