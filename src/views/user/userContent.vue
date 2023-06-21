<template>
  <div>{{ content }}</div>
</template>

<script>
export default {
  name: "userContent",
  data(){
    return {
      content: "content user"
    }
  },
  methods: {
    getMessage(value){
      this.content = value
    }
  }
};
</script>

<style></style>
