<template>
  <div class="orcamento-bg" id="orcamento">
    <h1
      class="mt-32 mb-8 py-8 text-center text-4xl sm:text-6xl font-title font-semibold text-primary3 relative orcamento-title"
    >
      Orçamento
    </h1>
    <div
      class="py-8 grid font-title gap-8 items-center justify-center md:flex md:flex-row-reverse px-8"
    >
      <div
        class="bg-secondary3 text-secondary1 p-8 shadow-lg flex-1 relative z-10"
      >
        <div class="text-center">
          <h1
            class="font-logo text-3xl md:text-5xl align-center p-8 relative inline-block orcamento-subtitle"
          >
            Personalizado
          </h1>
        </div>
        <ul class="px-8 pt-8 pb-16 md:text-xl list-disc space-y-3">
          <li>Escolha a sua designer</li>
          <li>Escolha o local dos casmento</li>
          <li>Casamento personalizado</li>
          <li>Sem limite de convidados</li>
        </ul>
        <div class="text-right">
          <a
            href="/simulacao?plano=personalizado"
            class="border-2 border-secondary1 px-5 py-3 inline-block font-body"
            >Simule Orçamento</a
          >
        </div>
      </div>

      <div class="bg-secondary2 p-8 shadow-md flex-1">
        <h1 class="font-logo text-2xl md:text-4xl text-center p-8">Simples</h1>
        <ul class="px-8 pb-8 md:text-xl list-disc space-y-2">
          <li>Consulta com uma das nossas designers</li>
          <li>3 estilos principais</li>
          <li>Até 50 convidados</li>
        </ul>
        <div class="text-right">
          <a
            href="/simulacao?plano=simples"
            class="border-2 border-primary3 text-primary3 px-5 py-3 inline-block font-body"
            >Simule Orçamento</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.orcamento-bg {
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.orcamento-bg::before {
  content: '';
  display: block;
  height: 400px;
  width: 400px;
  position: absolute;
  top: -150px;
  left: -110px;
  background-image: url('static/orcamento-bg.png');
  background-repeat: no-repeat;
  background-size: 400px;
}

.orcamento-bg::after {
  content: '';
  display: block;
  height: 400px;
  width: 400px;
  position: absolute;
  top: 150px;
  right: -150px;
  background-image: url('static/orcamento-bg-2.png');
  background-repeat: no-repeat;
  background-size: 300px;
}
.orcamento-title {
  background-image: url('static/orcamento-h.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.orcamento-subtitle::after {
  content: '';
  display: block;
  position: absolute;
  height: 2px;
  width: 80%;
  background: #c39f97;
  left: -0.25rem;
}

@media (max-width: 950px) {
  .orcamento-bg::before,
  .orcamento-bg::after {
    background-image: none;
  }
}
</style>
