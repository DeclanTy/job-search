<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: ["text", "type"],

  computed: {
    buttonClass() {
      return {
        primary: this.type == "primary",
        secondary: this.type == "secondary",
      };
    },
  },
};
</script>
<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}
.primary {
  @apply text-white
      bg-brand-blue-1
      hover:shadow-blue;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>