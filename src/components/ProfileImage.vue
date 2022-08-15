<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://images.generated.photos/zQ0hBGUJIrKhFLAupgQS2DCvznVa81enAlKA0xN_aEI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODUwMDk3LmpwZw.jpg",
    };
  },
};
</script>