<template>
  <div class="home">
    <div class="columns is-desktop">
      <div class="column">
        <div class="even-pane__wrapper">
          <SelectedDate :selected-date=getSelectedDay
                        :selected-month=getSelectedMonth></SelectedDate>
          <event-list :events="getEvents"></event-list>
        </div>
      </div>
      <div class="column">
        <calendar></calendar>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Calendar from '../components/Calendar.vue';
  import SelectedDate from '../components/SelectedDate.vue';
  import EventList from '../components/EventList';


  export default {
    name: 'home',
    components: {
      EventList,
      SelectedDate,
      Calendar,
    },
    computed: {
      getSelectedDay() {
        return this.$store.getters.getSelectedDay;
      },
      getSelectedMonth() {
        return this.$store.getters.getSelectedMonth;
      },
      getEvents() {
        return this.$store.getters.getEvents;
      },
    },
  };
</script>

<style lang="scss">
  .home {
    max-width: 1200px;
    margin: auto;
  }

  .even-pane__wrapper {
    border: 4px solid black;
  }
</style>
