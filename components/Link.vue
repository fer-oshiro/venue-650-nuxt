<template>
  <li class="border-b-2 border-secondary1 hover:border-secondary2 py-2">
    <NuxtLink :to="{ name: link }"><slot /></NuxtLink>
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
