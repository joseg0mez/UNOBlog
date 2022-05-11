<template>
  <div class="post-view" v-if="currentBlog">
    <div class="container quillWrapper">
      <h2>{{ this.currentBlog[0].blogTitle }}</h2>
      <h4>Posted on: {{ new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", { dateStyle: "long" }) }}</h4>
      <img :src="this.currentBlog[0].blogCoverPhoto" alt="" />
      <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
      <br>
      <router-link class="link" :to="{ name: 'Blogs' }">Back</router-link>
    </div>
    
    <br>
  </div>
</template>

<script>
export default {
  name: "ViewBlog",
  data() {
    return {
      currentBlog: null,
    };
  },
  async mounted() {
    this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
      return post.blogID === this.$route.params.blogid;
    });
  },
};
</script>

<style lang="scss">
.post-view {
  h4 {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 24px;
  }
}

</style>

<style scoped>

.link{
  width: 75px;
  color: white;
  background: #303030;
  padding: 10px;
  border-radius: 100%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
  outline: 0;
  border: 0;
}
</style>
