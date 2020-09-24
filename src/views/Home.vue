<template>
  <div class="home-view-container">
    <h1>Adopt one best friend</h1>
    ( {{ animalsCount  }} ) ( {{ getAllCats.length }} )<br>
    <button @click="toggleShowForm" class="btn btn-primary my-4">Add New Pet</button>

    <b-form @submit="onSubmit" class="text-left mx-auto" v-show="showForm" style="max-width:600px">
      <b-form-group
        id="input-group-1"
        label="Pet Name"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          type="text"
          required
          placeholder="Enter Name Pet"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet age:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.age"
          required
          placeholder="Enter pet age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.color"
          required
          placeholder="Enter pet age"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pets:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.species"
          :options="species"
          required
        ></b-form-select>
      </b-form-group>

      <b-button class="d-block mx-auto my-5" type="submit" variant="success">Submit New Pet</b-button>
    </b-form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      showForm: true,
      form: {
        age: '',
        name: '',
        color: '',
        species: null
      },
      species: [{ text: 'Select one', value: null }, 'cats', 'dogs']
    }
  },
  computed: {
    ...mapGetters([
      'animalsCount', 'getAllCats'
    ])
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    onSubmit (env) {
      env.preventDefault()

      const { age, name, color, species } = this.form

      const payload = {
        species,
        pet: {
          name,
          age,
          color
        }
      }

      this.addPet(payload)

      this.form = {
        age: '',
        name: '',
        color: '',
        species: null
      }
    },
    toggleShowForm () {
      this.showForm = !this.showForm
    }
  }
}
</script>
<style>
</style>
