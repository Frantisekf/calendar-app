import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selectedDay: {
      currentDay: '',
      currentMonth: '',
      events: [],
      newEvent: '',
    },
  },
  getters: {
    getSelectedDay: state => state.selectedDay.currentDay,
    getSelectedMonth: state => state.selectedDay.currentMonth,
    getEvents: state => state.selectedDay.events,
  },

  mutations: {
    setCurrentDay(state, currentDay) {
      state.selectedDay.currentDay = currentDay;
      state.selectedDay.events = [];
    },
    setCurrentMonth(state, currentMonth) {
      state.selectedDay.currentMonth = currentMonth;
    },
    addEvent(state) {
      state.selectedDay.events.push({ body: state.newEvent });
    },
    removeEvent(state, event) {
      const { events } = state.selectedDay;
      events.splice(events.indexOf(event), 1);
    },
  },
  actions: {
    async setCurrentDay(context, payload) {
      context.commit('setCurrentDay', payload);
    },

    async setCurrentMonth(context, payload) {
      context.commit('setCurrentMonth', payload);
    },
    async addEvent(context, payload) {
      context.commit('addEvent', payload);
    },
    async removeEvent(context, payload) {
      context.commit('removeEvent', payload);
    },
  },
});
