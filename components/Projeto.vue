<template>
  <div
    class="py-16 lg:py-10 lg:grid lg:grid-cols-5 lg:gap-8 bg-secondary3 projeto"
    id="projeto"
  >
    <div class="col-span-2 self-center mb-16 lg:mb-0">
      <h1
        class="mb-16 p-8 text-3xl font-title font-semibold text-secondary1 projeto-title inline-block"
      >
        Nosso Projeto
      </h1>
      <div class="projeto-p">
        <p class="text-secondary1 inline-block">
          Temos parcerias com alguns dos principais locais para a realização de
          casamento. Suas paisagens e seu encanto são indescritiveis, todos que
          conheceram e realizaram seus sonhos nesses lugares garantem que não há
          local melhor.
        </p>
      </div>
      <div class="text-right py-4 sm:py-8">
        <a
          class="inline-block border-2 border-secondary1 p-2 px-3 text-secondary1 shadow-md"
          >Veja Mais</a
        >
      </div>
    </div>
    <div class="col-span-3 self-center">
      <Carrossel />
    </div>
  </div>
</template>

<style>
.projeto {
  box-shadow: 40px 0 0px 0px #885e4b, -40px 0px 0px 0px #885e4b;
}

.projeto-title {
  background-image: url('static/projeto-h.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.projeto-p {
  border: 15px solid transparent;
  padding: 15px;
  border-image: url('static/projeto-p.png') 30 stretch;
}

@media (min-width: 460px) {
  .projeto-p {
    border: 20px solid transparent;
    padding: 15px;
    border-image: url('static/projeto-p.png') 30 stretch;
  }
}
</style>
