<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap>
      <v-flex xs12 sm6 v-for="card in cards" v-bind:key="card.id" class="inline-card">
        <v-card>
          <v-card-title primary-title>
            <v-layout align-center justify-center column fill-height>
              <v-flex xs12 class="headline" style="margin-bottom: 10px">{{ card.title }}</v-flex>
              <v-flex xs12>
                <v-icon large style="font-size: 60px">{{ card.icon }}</v-icon>
              </v-flex>
            </v-layout>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-on:click="$router.push({ name: card.route })" flat color="orange">{{ card.buttonText }}&nbsp;
              <v-icon large>arrow_forward</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      cards: [
        {
          id: 0,
          icon: 'money_off',
          title: 'Register your expenses',
          buttonText: 'Add new entries',
          route: 'add-expense',
        },
        {
          id: 1,
          icon: 'insert_chart',
          title: 'See your expenses in beautiful charts',
          buttonText: 'Visualize dashboards',
          route: 'dashboards',
        },
        {
          id: 2,
          icon: 'list_alt',
          title: 'Manage your registered data',
          buttonText: 'Check my tables',
          route: 'tables',
        },
      ],
    };
  },
};
</script>

<style scoped>
.inline-card {
  padding: 15px;
}
.inline-card > div {
  height: 100%;
}
</style>
