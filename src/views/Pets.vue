<template>
  <div>
    <h4>Selection pets for you</h4>
    <div v-for="(item, index) in mergePets" :key="index">
      <b-card
        img-src="https://placekitten.com/200/200"
        img-alt="Card image"
        img-left class="mb-3"
      >
        <b-card-text class="text-left">
          <b>Name</b>: {{ item.name }}<br><br>
          <b>Age</b>: {{ item.age }}<br><br>
          <b>Color</b>: {{ item.color }}
        </b-card-text>
      </b-card>
    </div>
    <b-button
      class="my-5"
      variant="primary"
      block
    >
      Adopt dog pets.
    </b-button>

    <b-button
      class="my-5"
      variant="primary"
      block
      @click="showTable = !showTable"
    >
      View all pets table
    </b-button>
    <PetTable v-show="showTable" :pets="pets"/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import PetTable from '@/components/PetTable.vue'

export default {
  data () {
    return {
      showTable: false
    }
  },
  components: {
    PetTable
  },
  props: {
    names: Array
  },
  computed: {
    ...mapState([
      'cats', 'dogs'
    ]),
    mergePets () {
      const pets = this.cats.concat(this.dogs)
      const result = pets.filter((item) => {
        for (const i in this.names) {
          if (item.name === this.names[i]) return true
        }
      })

      return result
    },
    pets () {
      return [...this.cats, ...this.dogs]
    }
  }
}
</script>
<style></style>
