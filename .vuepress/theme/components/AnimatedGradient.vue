<template>
  <div :style="animatedGradient"></div>
</template>

<script>
export default {
  props: {
    colors: { default: () => ["#6cb540", "#23A6D5", "#23D5AB"] },
    time: { default: "25s" },
    degree: { default: "120deg" },
    progress: { default: 100 }
  },
  computed: {
    animatedGradient() {
      const [first, second] = this.colors;
      let colors = [...this.colors, first, second];
      return `
                animation: movingGradient ${this.time} linear infinite;
                background-size: ${colors.length * 100}% 100%;
                background-image: linear-gradient(${this.degree}, ${colors.join(
        ", "
      )});
                width: ${this.progress}%;
                transition: width .3s linear;
            `;
    }
  }
};
</script>

<style>
@keyframes movingGradient {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}
</style>