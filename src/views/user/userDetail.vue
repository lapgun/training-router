<template>
  <div>
    <div ref="userDetail">user detail</div>
    <div>{{ $route.params.id }}</div>
    <div>{{ $route.query.fname ?? "" }}</div>
    <userContent ref="userContent"></userContent>
    <button ref="userButton" @click="handleClick">Click</button>
  </div>
</template>

<script>
// import { layoutMixins } from "@/mixins";
import userContent from './userContent.vue';
export default {
  name: "user-detail",
  // mixins: [layoutMixins],
  components: {
    userContent
  },
  data() {
    return {
      message: "message external",
      user: 2,
    };
  },

  mounted() {
    this.$refs.userContent.getMessage('content parent')
    console.log(this.$refs.userContent.content);
    this.$refs.userButton.click()
  },
  methods: {
    handleClick(){
      alert('confirm popup')
    }
  }
};
</script>

<style></style>
