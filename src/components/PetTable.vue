<template>
  <div>
    <div style="overflow: auto">
      <b-table
        ref="selectableTable"
        striped
        selectable
        hover
        :items="pets"
      >
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pets: Array
  }
}
</script>
