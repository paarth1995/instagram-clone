<template>
  <div class="phone-body">
    <div v-if="step === 1" class="feed" v-dragscroll.y>
      <InstagramPost v-for="post in posts"
        :post="post"
        :key="posts.indexOf(post)" />
    </div>
    <div v-if="step === 2">
      <div class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"></div>
      <div class="filter-container" v-dragscroll.x>
        <FilterType v-for="(filter,index) in filters"
          :filter="filter"
          :image="image"
          :key="index" 
          @click.native="getUserSelectedFilter(filter)"/>
      </div>
    </div>
    <div v-if="step === 3">
      <div class="selected-image"
        :class="selectedFilter"
        :style="{ backgroundImage: 'url(' + image + ')' }"></div>
      <div class="caption-container">
        <textarea class="caption-input"
          placeholder="Write a caption..."
          type="text"
          v-model="writeCaption">
        </textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InstagramPost from "./InstagramPost";
import FilterType from "./FilterType";

export default {
  name: "PhoneBody",
  props: {
    step: Number,
    posts: Array,
    filters: Array,
    image: String,
    selectedFilter: String
  },
  components: {
     InstagramPost,
     FilterType
  },
  methods: {
    getUserSelectedFilter(item) {
      this.$store.commit('setSelectedFilter', item.name);
    }
  },
  computed: {
    ...mapGetters({
      getFilters: 'getFilters',
      getStep: 'getStep',
      getCaption: 'getCaption'
    }),
    writeCaption: {
      get() {
        return this.getCaption;
      },
      set(val) {
        return this.$store.commit('setCaption', val)
      }
    }
  }
};
</script>

<style src="../styles/phone-body.css">
</style>
