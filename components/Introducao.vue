<template>
  <div class="py-16 lg:py-10 lg:grid lg:grid-cols-5 lg:gap-5">
    <div class="col-span-3 self-center">
      <img src="intro-img.png" class="object-cover" />
    </div>
    <div class="col-span-2 py-10">
      <div class="text-center lg:text-left">
        <h1 class="text-2xl text-primary3 relative inline-block intro-title">
          Realizando sonhos desde 2020
        </h1>
      </div>
      <div class="p-4 sm:p-8">
        <div class="intro-p">
          <p class="text-black inline-block">
            Já ajudamos mais de 2.000 sonhos a serem realizados. Com o nosso
            time expecializado em casamento rústico e personalizado, criamos
            mais que casamentos, realizamos sonhos.
          </p>
        </div>
      </div>
      <div class="text-right p-4 sm:p-8">
        <a
          class="inline-block border-2 border-primary2 p-2 px-3 text-primary2 shadow-md"
          >Veja Mais</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-title::before {
  content: '';
  display: block;
  position: absolute;
  height: 90%;
  width: 100%;
  background: rgba(147, 76, 71, 0.1);
  transform: rotate(2deg);
  border-radius: 20% 25% 20% 24%;
  padding: 10px 3px 3px 10px;
}

.intro-p {
  border: 15px solid transparent;
  padding: 15px;
  border-image: url('static/intro-p.png') 30 stretch;
}
@media (min-width: 460px) {
  .intro-title::before {
    padding: 0;
    bottom: -0.25rem;
    left: -0.5rem;
    height: 1rem;
    width: 100%;
    border-radius: 4px;
    transform: rotate(0deg);
  }
  .intro-p {
    border: 40px solid transparent;
    padding: 15px;
    border-image: url('static/intro-p.png') 30 stretch;
  }
}
</style>
