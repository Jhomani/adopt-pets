<template>
  <div>
    <div style="overflow: auto">
      <h3 class="text-left">Dogs For Adoption</h3>
      <b-table
        ref="selectableTable"
        striped
        selectable
        hover
        select-mode="single"
        :items="dogs"
        @row-selected="onRowSelected"
      >
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      selected: []
    }
  },
  methods: {
    onRowSelected (items) {
      this.selected = items
    }
  },
  watch: {
    selected () {
      localStorage.selectedDog = ''
      localStorage.rowSelectDog = ''

      if (this.selected.length === 0) return

      for (let i = 0; i < this.dogs.length; i++) {
        if (this.dogs[i].name === this.selected[0].name) {
          localStorage.rowSelectDog = i
        }
      }

      localStorage.selectedDog = this.selected[0].name || ' '
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  },
  mounted () {
    const rows = localStorage.rowSelectDog

    if (rows) {
      this.$refs.selectableTable.selectRow(+rows)
    } else {
      this.$refs.selectableTable.clearSelected()
    }
  }
}
</script>

<style>
tbody > tr > td {
  white-space: nowrap;
}
</style>
