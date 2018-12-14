
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 lg6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>New Expense</v-toolbar-title>
          </v-toolbar>

          <v-card-text>
            <v-form v-model="valid">
              <v-text-field
                v-bind:disabled="saving"
                prepend-icon="attach_money"
                name="value"
                label="Value"
                type="text"
                mask="###.###.###.###,##"
                v-model="data.value">
              </v-text-field>

              <v-select
                v-bind:disabled="saving"
                id="category"
                prepend-icon="category"
                v-bind:items="categories"
                v-model="data.category"
                label="Category">
              </v-select>

              <v-switch
                v-bind:disabled="saving"
                label="Paid"
                v-model="data.paid">
              </v-switch>

              <v-menu
                ref="menu"
                v-bind:disabled="saving"
                v-bind:close-on-content-click="false"
                v-model="menu"
                v-bind:nudge-right="40"
                v-bind:return-value.sync="data.date"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px">
                <v-text-field
                  slot="activator"
                  v-bind:disabled="saving"
                  v-model="data.date"
                  v-bind:label="`${data.paid ? 'Paid at' : 'Expected date'}`"
                  prepend-icon="event"
                  readonly>
                </v-text-field>
                <v-date-picker v-model="data.date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" v-on:click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" v-on:click="$refs.menu.save(data.date)">OK</v-btn>
                </v-date-picker>
              </v-menu>

              <v-textarea
                v-bind:disabled="saving"
                rows="2"
                name="decription"
                label="Description"
                v-model="data.description"
                hint="A small description to allow you to identify what you spent money on"
              ></v-textarea>
            </v-form>
          </v-card-text>

          <!-- TODO: Remover essa div / v-for -->
          <!--
          <div v-for="(elem, idx) in data" v-bind:key="idx">
            {{idx}}: {{elem}} <br>
          </div>
          -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn v-bind:disabled="saving" color="primary" v-on:click="validateBeforeSubmit()">Save</v-btn>
            <v-btn v-bind:disabled="saving" color="primary" v-on:click="get()">Get</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { saveExpense } from '@/services/expenses';

export default {
  name: 'AddExpense',
  data() {
    return {
      data: {
        value: '10.00',
        category: 'Food',
        paid: true,
        date: '10-01-2018',
        description: 'Test description',
      },
      valid: false,
      menu: false,
      saving: false,
      categories: [
        'Food', 'Gasoline', 'Presents', 'Hobbies'
      ],
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.saving = true;
      this.submit();
    },
    submit() {
      console.log('Submitting...');
      console.log(this.data);

      saveExpense(this.data).then((res) => {
        this.saving = false;
        console.log('res');
        console.log(res);
        this.$notify({
          type: 'success',
          title: 'Success!',
          text: 'Expense saved successfully',
        });
      }).catch((err) => {
        this.saving = false;
        this.$notify({
          type: 'error',
          title: 'Error!',
          text: 'Unable to save expense. Try again later',
        });
        console.log('error');
        console.log(err);
      });
    },
  },
};
</script>
