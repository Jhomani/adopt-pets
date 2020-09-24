<template>
  <div>
    <div style="overflow: auto">
      <h3 class="text-left">Cats For Adoption</h3>
      <b-table
        ref="selectableTable"
        striped
        selectable
        hover
        :items="cats"
        @row-selected="onRowSelected"
      >
      </b-table>
    </div>
    <b-alert
      class="mt-4"
      :show="showAlert"
      variant="success"
    >
      Only can adopt 2 pets
    </b-alert>
  </div>
</template>
<script>

export default {
  data () {
    return {
      selected: [],
      showAlert: false
    }
  },
  methods: {
    onRowSelected (items) {
      this.selected = items
    },
    removeRow (name) {
      switch (name) {
        case 'Fish':
          this.$refs.selectableTable.unselectRow(0)
          break
        case 'Henry':
          this.$refs.selectableTable.unselectRow(1)
          break
        case 'Roger':
          this.$refs.selectableTable.unselectRow(2)
          break
        case 'Kitkat':
          this.$refs.selectableTable.unselectRow(3)
          break
      }
    }
  },
  mounted () {
    const rows = localStorage.rowSelect

    this.$refs.selectableTable.selectRow(+rows[1])
    this.$refs.selectableTable.selectRow(+rows[0])
  },
  computed: {
    cats () {
      return this.$store.state.cats
    }
  },
  watch: {
    selected: {
      inmediate: true,
      handler () {
        if (this.selected.length === 3) {
          this.showAlert = true

          this.removeRow(this.selected[1].name)

          setTimeout(() => {
            this.showAlert = false
          }, 3000)
        }
      }
    }
  },
  destroyed () {
    localStorage.selected = ''
    localStorage.rowSelect = ''

    this.selected.forEach((item, index) => {
      for (let i = 0; i < this.cats.length; i++) {
        if (this.cats[i].name === item.name) {
          localStorage.rowSelect += i
        }
      }

      if (index === 0) {
        localStorage.selected = item.name
        return
      }

      localStorage.selected += ',' + item.name
    })
  }
}
</script>

<style>
tbody > tr > td {
  white-space: nowrap;
}
</style>
