<template>
  <v-app>
    <app-header></app-header>
    <notifications/>

    <v-content>
      <!-- <Home/> -->
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader';

export default {
  name: 'App',
  components: {
    AppHeader
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: inherit;
}

.vue-notification {
  padding: 10px;
  margin: 0 5px 5px;
 
  font-size: 12px;
 
  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #187FE7;
 
  &.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }
 
  &.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }
 
  &.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
}
</style>
