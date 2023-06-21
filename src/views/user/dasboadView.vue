<template>
  <div>
    <div>dashboard view</div>
    <button @click="goToDetail">Goto Detail</button>
  </div>
</template>

<script>
export default {
  name: "dashboard-view", 
  methods: {
    goToDetail() {
      this.$router.push({
        name: "user-detail",
        params: {
          id: 1,
        },
        query: {
          fname: "lap",
        },
      });
      // window.location.href = "/user/1"
    },
  },
};
</script>

<style></style>
