<template lang="html">
  <div id="guestsGrid">
    <div class="" v-for="guest in guests">
      <h2>{{ guest.name}}</h2>
      <p>Email Address: {{ guest.email}}</p>
      <!-- <p>Checked In: {{ guest.checked_in}}</p> -->

      <form method="put" v-on:submit="handleUpdate(guest._id)">
        <label for="checked_in">Check In: {{ guest.checked_in}}</label>
        <input type="submit" id="save" value="Check In">
      </form>

      <button v-on:click="handleDelete(guest._id)" type="button" name="button">Delete Guest</button>

    </div>
  </div>
</template>

<script>
import {eventBus} from "../main.js";
import GuestService from "../services/GuestService"

export default {
  name: "guests-grid",
  props: ["guests"],
  methods: {
    handleDelete(id){
      GuestService.deleteGuest(id)
      .then(response => eventBus.$emit("guest-deleted", id));
    },
    handleUpdate(event){
      // event.preventDefault();

      // const payload = {
      //   checked_in: true
      // };

      GuestService.updateGuest()
      .then(guest => {
        eventBus.$emit("guest-updated");
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
