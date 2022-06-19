<template>
  <div class="py-8">
    <div class="p-8 bg-secondary2-100">
      <h1 class="text-3xl font-title font-semibold text-primary3">
        Designers com base no seu perfil
      </h1>
      <ul class="flex flex-wrap py-8">
        <li
          v-for="designer in designers"
          :key="designer.name"
          class="finalizacao-input"
        >
          <input
            type="radio"
            class="hidden"
            :id="designer.name"
            :value="designer.name"
            v-model="desginerChosen"
            v-on:click="changeProject(designer.name)"
          />
          <label :for="designer.name"
            ><img :src="designer.photo" :alt="designer.name"
          /></label>
        </li>
      </ul>

      <p class="pb-8 text-pink text-sm font-body">{{ error }}</p>

      <h1 class="text-3xl font-title font-semibold text-primary3">
        Projetos anteriores
      </h1>

      <div class="grid md:grid-cols-2 gap-4 content-center">
        <ul class="flex flex-wrap sm:flex-nowrap py-8 gap-2">
          <li
            v-for="projeto in projetos"
            :key="projeto"
            class="finalizacao-input"
          >
            <img :src="'/profile/' + projeto" :alt="projeto" />
          </li>
        </ul>
        <div class="finalizacao-motto-border" v-if="motto">
          <div class="bg-secondary3 p-4 finalizacao-motto-bg">
            <p class="text-secondary1 font-title p-8 text-xl">
              {{ '“' + motto + '”' }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 p-8 bg-secondary2-100">
      <h1 class="text-3xl font-title font-semibold text-primary3">
        Marque uma conversa
      </h1>
      <form
        @submit.prevent="onSumbmit"
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8"
      >
        <div>
          <label class="font-title text-primary3" for="nome">Nome</label>
          <input
            type="text"
            name="nome"
            required
            class="block w-full bg-secondary1 border border-secondary1 w-full py-2 px-3 shadow-sm focus:outline-none focus:border-primary3 focus:ring-primary3 focus:ring-3 sm:text-sm"
          />
        </div>

        <div>
          <label class="font-title text-primary3" for="email">Email</label>
          <input
            type="email"
            name="email"
            required
            class="block w-full bg-secondary1 border border-secondary1 w-full py-2 px-3 shadow-sm focus:outline-none focus:border-primary3 focus:ring-primary3 focus:ring-3 sm:text-sm"
          />
        </div>

        <div>
          <label class="font-title text-primary3" for="data">Data</label>
          <input
            type="date"
            name="data"
            :min="minDateText"
            :max="maxDateText"
            :value="minDateText"
            class="block w-full bg-secondary1 border border-secondary1 w-full py-2 px-3 shadow-sm focus:outline-none focus:border-primary3 focus:ring-primary3 focus:ring-3 sm:text-sm"
          />
        </div>

        <div>
          <label class="font-title text-primary3" for="horario">Horário</label>
          <input
            type="time"
            name="horario"
            min="10:00"
            max="16:00"
            required
            class="block w-full bg-secondary1 border border-secondary1 w-full py-2 px-3 shadow-sm focus:outline-none focus:border-primary3 focus:ring-primary3 focus:ring-3 sm:text-sm"
          />
        </div>

        <div class="sm:col-span-2">
          <label class="font-title text-primary3" for="menssagem"
            >Menssagem</label
          >
          <textarea
            type="text"
            name="menssagem"
            required
            class="block w-full bg-secondary1 border border-secondary1 w-full py-2 px-3 shadow-sm focus:outline-none focus:border-primary3 focus:ring-primary3 focus:ring-3 sm:text-sm"
            rows="10"
          ></textarea>
        </div>

        <button
          type="submit"
          class="sm:col-span-2 bg-primary3 text-secondary1 mt-8 px-8 py-4 block text-body justify-self-end"
        >
          Marcar uma conversa
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    let designers
    if (process.client) {
      const designerJson = localStorage.getItem('designers')
      designers = JSON.parse(designerJson)
      if (designers === null) this.$router.go(-1)
      // localStorage.clear()
    }

    function getAddDaysToDate(num) {
      const date = new Date()
      date.setDate(date.getDate() + num)
      return date
    }

    function getDateString(dateNum) {
      const date = new Date(dateNum).toISOString().slice(0, 10)

      return date
    }

    const minDate = getAddDaysToDate(7)
    const minDateText = getDateString(minDate)

    const maxDate = getAddDaysToDate(68)
    const maxDateText = getDateString(maxDate)

    return {
      designers,
      projetos: [],
      motto: '',
      desginerChosen: '',
      minDateText,
      maxDateText,
      error: '',
    }
  },
  methods: {
    changeProject(desginerChosenName) {
      const designerInfo = this.designers.find(
        (value) => value.name === desginerChosenName
      )

      this.projetos = designerInfo?.projetos
      this.motto = designerInfo?.motto
    },
    onSumbmit(event) {
      event.preventDefault()

      if (!this.desginerChosen) {
        this.error = 'Por favor, escolha um designer'
      }
      console.log(event)
    },
  },
}
</script>

<style>
@media (min-width: 640px) {
  .simulacao-bg {
    box-shadow: 100px 0 0 0 rgba(206, 185, 165, 0.5);
  }
}

label {
  cursor: pointer;
}

.finalizacao-input label {
  border: 3px solid #e5ddd5;
  padding: 10px;
  display: block;
  position: relative;
  margin: 10px;
  cursor: pointer;
}

.finalizacao-input label img {
  width: 100px;
  height: 130px;
  object-fit: cover;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

.finalizacao-input :checked + label {
  border-color: #934c47;
}

.finalizacao-input :checked + label img {
  transform: scale(0.9);
  z-index: -1;
}

.finalizacao-motto-border {
  border: 20px solid transparent;
  padding: 15px;
  border-image: url('static/orcamento-finalizacao-motto.png') 45 stretch;
}
</style>
