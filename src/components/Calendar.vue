<template>
  <div>

  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Calendar',
  data() {
    return {
      today: moment(),
      dateContext: moment(),
      days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    };
  },
};
</script>

<style scoped>

</style>
