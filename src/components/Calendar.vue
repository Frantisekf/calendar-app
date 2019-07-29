<template>
  <div class="calendar">

    <div class="calendar-header">
      <span class="prev" @click="subtractMonth"><</span>
      <h1>{{month + ' - ' + year}}</h1>
      <span class="next" @click="addMonth">></span>
    </div>
    <ul class="weekdays">
      <li  v-for="day in days">
        {{day}}
      </li>
    </ul>

    <ul class="dates">
      <li v-for="blank in firstDayOfMonth">&nbsp;</li>
      <li class="date"  v-for="date in daysInMonth" v-on:click="updateDate(date); updateMonth(month)"
          :class="{'current-day': date == initialDate && month == initialMonth && year == initialYear}"
          >
        <calendar-day  :day="date" :month="month" ></calendar-day>
      </li>
    </ul>
  </div>
</template>

<script>
  import moment from 'moment';
  import CalendarDay from './CalendarDay.vue';


  export default {
    name: 'Calendar',
    components: { CalendarDay },
    data() {
      return {
        today: moment(),
        dateContext: moment(),
        days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        selectedDate: {},
        selectedMonth: '',
      };
    },
    computed: {
      year() {
        const t = this;
        return t.dateContext.format('Y');
      },
      month() {
        const t = this;
        return t.dateContext.format('MMMM');
      },
      daysInMonth() {
        const t = this;
        return t.dateContext.daysInMonth();
      },
      currentDate() {
        const t = this;
        return t.dateContext.get('date');
      },
      firstDayOfMonth() {
        const t = this;
        const firstDay = moment(t.dateContext)
          .subtract((t.currentDate - 1), 'days');
        return firstDay.weekday();
      },
      initialDate() {
        const t = this;
        // commit today date to store so it can be accessed by other components
        this.$store.commit('setCurrentDay', t.today.get('date'));
        return t.today.get('date');
      },
      initialMonth() {
        const t = this;
        this.selectedMonth = t.today.format('MMMM');
        this.$store.commit('setCurrentMonth', t.today.format('MMMM'));
        return t.today.format('MMMM');
      },
      initialYear() {
        const t = this;
        return t.today.format('Y');
      },
    },
    methods: {
      addMonth() {
        const t = this;
        t.dateContext = moment(t.dateContext)
          .add(1, 'month');
        this.selectedMonth = t;
      },
      subtractMonth() {
        const t = this;
        t.dateContext = moment(t.dateContext)
          .subtract(1, 'month');
        this.selectedMonth = t;
      },

      updateDate(selectedItem) {
        this.$store.commit('setCurrentDay', selectedItem);
      },
      updateMonth(selectedItem) {
        this.$store.commit('setCurrentMonth', selectedItem);
      },
    },

  };
</script>

<style scoped lang="scss">
  .calendar {

  }

  .calendar-header {
    font-size: 20px;
    font-weight: bold;
    color: black;
    padding: 45px 25px;
    width: 100%;
    background-color: #4BFFA5;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction:row;
    flex: 4;


    .prev {
      float: left;
      padding-top: 10px;
      text-decoration:none;
    }


    .next {
      float: right;
      padding-top: 10px;
    }

    ul {
      margin: 0;
      padding: 0;
      text-decoration:none;


      li {
        color: black;
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
        text-decoration: none;
      }
    }
  }

  .weekdays {
    margin: 0;
    padding: 10px 0;
    background-color: #4BFFA5;
    font-weight: bold;

    li {
      display: inline-block;
      width: 13.6%;
      color: black;
      text-align: center;
    }
  }

  .dates {
    padding: 10px 0;
    background: #4BFFA5;
    margin: 0;

    li {
      list-style-type: none;
      display: inline-block;
      width: 13.6%;
      text-align: center;
      margin-bottom: 5px;
      font-size: 12px;
      color: #777;
    }
  }

  .current-day {
    color: white;

    border: 2px solid black;
  }

  .date {
    &:hover {
      border: 1px solid black;

    }

    &.focus {
      border: 1px solid black;
    }
  }

</style>
