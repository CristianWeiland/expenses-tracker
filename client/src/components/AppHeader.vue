<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <router-link v-bind:to="{ name: 'home' }">
        <span>Expenses Tracker</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      flat
      href=""
      v-on:click="gotoUserForm()">
      <!-- TODO: Get name from store -->
      <span class="mr-2">Cristian Weiland</span>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    gotoUserForm() {
      this.$router.push({ name: 'user-form' });
    },
  },
};
</script>
