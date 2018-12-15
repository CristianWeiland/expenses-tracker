<template>
  <div>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-data-table
          v-bind:headers="columns"
          v-bind:items="expenses"
          class="elevation-1">
          <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td>{{ props.item.category }}</td>
            <td>{{ props.item.value }}</td>
            <td>{{ props.item.completed ? 'Yeah' : 'Nope' }}</td>
            <td>{{ props.item.completed_at }}</td>
            <td>{{ props.item.due_date }}</td>
          </template>
        </v-data-table>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import moment from 'moment';

import { getExpenses } from '@/services/expenses';

export default {
  name: 'Tables',
  data() {
    return {
      expenses: [],
      columns: [
        { text: 'ID', align: 'left', value: 'id' },
        { text: 'Category', value: 'category' },
        { text: 'Value', value: 'value' },
        { text: 'Paid', value: 'completed' },
        { text: 'Paid at', value: 'completed_at' },
        { text: 'Expected Payment Date', value: 'due_date' },
      ],
    };
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      getExpenses().then(res => {
        this.expenses = res.data.map(row => Object.assign(row,
          {
            value: `R$ ${row.value}`,
            due_date: row.due_date ? moment(row.due_date).format('YYYY-MM-DD') : '',
            completed_at: row.completed_at ? moment(row.completed_at).format('YYYY-MM-DD') : '',
          }));
      });
    },
  },
};
</script>
