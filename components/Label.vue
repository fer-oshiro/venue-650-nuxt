<template>
  <h2 class="pt-16 pb-4 flex simulacao-label font-body font-bold"><slot /></h2>
</template>

<style scoped>
.simulacao-label::before {
  content: '';
  display: inline-block;
  height: 20px;
  width: 3px;
  background: #885e4b;
  margin-right: 5px;
  align-self: center;
}
</style>
