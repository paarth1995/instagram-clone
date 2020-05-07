<template>
  <div id="app">
    <div class="app-phone">
      <div class="phone-header">
        <img src="https://pngimage.net/wp-content/uploads/2018/06/instagram-font-png-1.png" />
        <a class="cancel-cta"
           v-if="getStep === 2 || getStep === 3" 
           @click="goToHome">
            Cancel
        </a>
        <a class="next-cta"
           v-if="getStep === 2"
          @click="incrementStep">
            Next
        </a>
        <a class="next-cta"
           v-if="getStep === 3"
           @click="shareAndGoHome">
            Share
        </a>
      </div>
      <phone-body
        :step="getStep"
        :posts="getPosts"
        :filters="getFilters"
        :image="getImage"
        :selectedFilter="getSelectedFilter"
        v-model="getCaption"
      />
      <div class="phone-footer">
       <div class="home-cta" @click="goToHome">
        <i class="fas fa-home fa-lg"></i>
       </div>
       <div class="upload-cta">
          <input type="file"
            name="file"
            id="file"
            class="inputfile"
            @change="uploadImage"
            :disabled="getStep !== 1"
          />
          <label for="file">
            <i class="far fa-plus-square fa-lg"></i>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex';
import PhoneBody from "./components/PhoneBody";

export default {
  name: "App",
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters({
      getPosts: 'getPosts',
      getFilters: 'getFilters',
      getStep: 'getStep',
      getImage: 'getImage',
      getSelectedFilter: 'getSelectedFilter',
      getCaption: 'getCaption'
    })
  },
  methods: {
    ...mapMutations({
      uploadImage: 'uploadImage',
      goToHome: 'goToHome',
      sharePost: 'sharePost',
      incrementStep: 'incrementStep'
    }),
    shareAndGoHome() {
      this.sharePost();
      this.goToHome();
    }
  },
  components: {
    "phone-body": PhoneBody
  }
};
</script>

<style src="./styles/app.css">

</style>
