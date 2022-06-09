<template>
  <li
    class="py-2 px-4 bg-secondary2 border-b-2 border-secondary1 hover:bg-secondary3 hover:text-secondary2 md:bg-secondary1 md:px-0 md:hover:border-secondary2 md:hover:bg-secondary1 md:hover:text-secondary3"
  >
    <NuxtLink :to="{ path: '/', hash: link }"><slot /></NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
  },
}
</script>
