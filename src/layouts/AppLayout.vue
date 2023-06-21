<template>
  <div>
    <div>{{ $route.meta.layout }}</div>
    <component :is="layout">
      <slot />
    </component>
  </div>
</template>

<script>
const defaultLayout = "AppLayoutDefault";
export default {
  name: "AppLayout",
  computed: {
    layout() {
      const layout = this.$route.meta.layout || defaultLayout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
  data(){
    return {

    }
  },
  methods: {

  },
  created(){
    
  }

};
</script>
