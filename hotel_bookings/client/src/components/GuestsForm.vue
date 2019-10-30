<template lang="html">
  <form id="guests-form" v-on:submit="handleSubmit">
    <h2>Add a Guest</h2>
    <div class="">
      <label for="name" v-model="name">Name:</label>
      <input type="text" id="name" v-model="name" required>
    </div>

    <div class="">
      <label for="email">Email Address:</label>
      <input type="text" id="email" v-model="email" required>
    </div>

    <!-- <div class="">
      <label for="checked_in">Checked In:</label>
      <select class="" name="checked_in" id="checked_in" v-model="checked_in">
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div> -->
    <input type="submit" value="save" id="save">
  </form>
</template>

<script>
import { eventBus } from "../main.js";
import GuestService from "../services/GuestService";

export default {
  name: "guests-form",
  data(){
    return {
      name: "",
      email: "",
      checked_in: false
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        checked_in: this.checked_in
      };

      GuestService.postGuest(payload)
      .then(guest => {
        eventBus.$emit("guest-added", guest);
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
