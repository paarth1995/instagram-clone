<template>
  <div class="filter-type">
    <p>{{filter.name}}</p>
    <div class="img"
      :class="filter.name"
      :style="{ backgroundImage: 'url(' + image + ')' }">
    </div> 
  </div>
</template>

<script>

export default {
  name: "FilterType",
  props: {
    filter: Object,
    image: String
  },
};
</script>

<style src="../styles/filter-type.css">

</style>