<script setup lang="ts">
const beforeEnter = (element: HTMLElement) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = "0px";
    }

    element.style.display = "";
  });
};

const enter = (element: HTMLElement) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`;
    });
  });
};

const afterEnter = (element: HTMLElement) => {
  element.style.height = "";
};

const beforeLeave = (element: HTMLElement) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = `${element.offsetHeight}px`;
    }
  });
};

const leave = (element: HTMLElement) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = "0px";
    });
  });
};

const afterLeave = (element: HTMLElement) => {
  element.style.height = "";
};
</script>

<template>
  <transition
    enter-active-class="enter-active"
    leave-active-class="leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <slot />
  </transition>
</template>

<style scoped>
.enter-active,
.leave-active {
  overflow: hidden;
  /*transition: height 0.4s linear;*/
  transition: height 0.3s ease-in-out;
}
</style>
