import Vue from 'vue'
import Vuex from 'vuex'
import posts from '../data/posts'
import filters from '../data/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts,
    filters,
    step:1,
    image:'',
    selectedFilter: '',
    caption: ''
  },
  getters : {
    getPosts: state => state.posts,
    getFilters: state => state.filters,
    getStep: state => state.step,
    getImage: state => state.image,
    getSelectedFilter: state => state.selectedFilter,
    getCaption: state => state.caption
  },
  mutations: {
    uploadImage(state, evt) {
      const files = evt.target.files;
      if (!files.length) return;

      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = evt => {
        state.image = evt.target.result;
        state.step = 2;
      };

      // To enable reuploading of same files in Chrome
      document.querySelector("#file").value = "";
    },
    setCaption(state, payload) {
      state.caption = payload;
    },
    goToHome(state) {
      state.step = 1
      state.image = ''
      state.selectedFilter = ''
      state.caption = ''
    },
    sharePost(state) {
      const post = {
        username: "Double A",
        userImage:
          "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/vue_lg_bg.png",
        postImage: state.image,
        likes: 0,
        caption: state.caption,
        filter: state.selectedFilter
      };
      state.posts.unshift(post);
    },
    incrementStep(state) {
      state.step++
    },
    setSelectedFilter(state, payload) {
      state.selectedFilter = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
