<template>
  <div class="event-list__wrapper">
    <div class="container">
      <section class="panel">
        <input v-model="newEvent" @keyup.enter="addEvent" placeholder="Create a new event"
               autofocus class="text-input">
      </section>

      <section class="list">
        <ul class="list-item">
          <li v-for="task in events" @click="removeEvent">
            {{ task.text }}
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventList',
  data() {
    return {
      newEvent: '',

    };
  },

  props: {
    events: Array,
  },


  methods: {
    addEvent() {
      const event = this.newEvent.trim();
      this.$store.commit('addEvent', event);
      if (event) {
        this.events.push({
          text: event,
        });
        this.newEvent = '';
      }
    },

    removeEvent(event) {
      const index = this.events.indexOf(event);
      this.events.splice(index, 1);
      this.$store.commit('removeEvent', event);
    },
  },


};


</script>

<style scoped lang="scss">
  .event-list__wrapper {
    width: 100%;
    height: auto;
    background: white;
    overflow: auto;

  }

  /* Relevant resets */

  ul, li {
    margin: 0;
    padding: 0;
    border: 0;
  }

  /* Global Styles */
  .container {
    width: 70%;
    margin: 1em auto 3em;
    border: 1px solid #efefef;
  }

  .panel, li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    border: 2px solid black;
    background-color: white;
  }

  .text-input {
    border: 1px solid #dedede;
    padding-left: 10px;
    width: 100%;
    height: 35px;
    color: #555;
    outline: none;
  }

  .list li {
    background-color: white;
    border: 2px solid black;

  }

  .list li button {
    background-color: transparent;
    border: 1px solid white;
    color: #ddd;
    visibility: hidden;
  }

  .list li:hover > button {
    visibility: visible;
  }

  .list label {
    padding-right: 10px;
    display: inline-block;
    width: 70%;
    color: #fcfcfc;
    z-index: 2;
  }

  @media screen and (max-width: 768px) {
    .container {
      width: 90%;
      max-width: 90%;
    }

    .text-input, .list label {
      width: 60%;
      font-size: 14px;
    }
  }

</style>
