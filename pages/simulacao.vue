<template>
  <div class="sm:grid sm:grid-cols-2 md:grid-cols-3 py-8">
    <div class="md:col-span-2">
      <form
        class="bg-secondary2-30 p-8 simulacao-bg"
        id="simulacao"
        @submit.prevent="submit"
      >
        <h1 class="text-3xl font-title font-semibold text-secodary2">
          Suas Escolhas
        </h1>

        <Label>Escolha o plano</Label>
        <ul class="flex flex-wrap gap-4">
          <li>
            <input
              type="radio"
              class="hidden"
              id="plano-personalizado"
              value="personalizado"
              v-model="plano"
              v-on:click="getPreview"
              required
            />
            <label
              for="plano-personalizado"
              class="bg-secondary3 text-secondary1 text-sm font-body px-8 py-4 inline-block"
              >Personalizado
            </label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="plano-simples"
              value="simples"
              v-model="plano"
              v-on:click="getPreview"
            />
            <label
              for="plano-simples"
              class="bg-secondary3 text-secondary1 text-sm font-body px-8 py-4 inline-block"
              >Simples</label
            >
          </li>
        </ul>
        <div v-if="errors.includes('Selecione um plano')">
          <p class="mt-2 text-pink text-sm font-body">Selecione um plano</p>
        </div>

        <Label>Escolha o estilo do local</Label>
        <ul class="flex flex-wrap">
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb1"
              name="cb1"
              value="cb1"
              v-model="estilo"
              v-on:click="getPreview"
            />
            <label for="cb1"><img src="local-1.png" /></label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb2"
              value="cb2"
              v-model="estilo"
              v-on:click="getPreview"
            />
            <label for="cb2"><img src="local-2.png" /></label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb3"
              value="cb3"
              v-model="estilo"
              v-on:click="getPreview"
            />
            <label for="cb3"><img src="local-3.png" /></label>
          </li>
        </ul>
        <div v-if="errors.includes('Selecione um estilo')">
          <p class="mt-2 text-pink text-sm font-body">Selecione um estilo</p>
        </div>

        <Label>Escolha as flores</Label>
        <ul class="flex flex-wrap">
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb4"
              value="cb4"
              v-model="flores"
              v-on:click="getPreview"
            />
            <label for="cb4"><img src="flores-1.png" /></label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb5"
              value="cb5"
              v-model="flores"
              v-on:click="getPreview"
            />
            <label for="cb5"><img src="flores-2.png" /></label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb6"
              value="cb6"
              v-model="flores"
              v-on:click="getPreview"
            />
            <label for="cb6"><img src="flores-3.png" /></label>
          </li>
        </ul>
        <div v-if="errors.includes('Selecione um buquê')">
          <p class="mt-2 text-pink text-sm font-body">Selecione um buquê</p>
        </div>

        <Label>Escolha estilo da comida</Label>
        <ul class="flex flex-wrap">
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb7"
              value="cb7"
              v-model="comida"
              v-on:click="getPreview"
            />
            <label for="cb7"><img src="comida-1.png" /></label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb8"
              value="cb8"
              v-model="comida"
              v-on:click="getPreview"
            />
            <label for="cb8"><img src="comida-2.png" /></label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb9"
              value="cb9"
              v-model="comida"
              v-on:click="getPreview"
            />
            <label for="cb9"><img src="comida-3.png" /></label>
          </li>
        </ul>

        <Label>Escolha o bolo de casamento</Label>
        <ul class="flex flex-wrap">
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb10"
              value="cb10"
              v-model="bolo"
              v-on:click="getPreview"
            />
            <label for="cb10"><img src="bolo-1.png" /></label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb11"
              value="cb11"
              v-model="bolo"
              v-on:click="getPreview"
            />
            <label for="cb11"><img src="bolo-2.png" /></label>
          </li>
          <li>
            <input
              type="radio"
              class="hidden"
              id="cb12"
              value="cb12"
              v-model="bolo"
              v-on:click="getPreview"
            />
            <label for="cb12"><img src="bolo-3.png" /></label>
          </li>
        </ul>

        <div class="py-8">
          <button
            type="submit"
            class="py-4 px-8 border-2 border-primary3 text-primary3 font-body block ml-auto"
          >
            Finalizar
          </button>
        </div>
      </form>
    </div>

    <div v-if="estilo !== null">
      <div class="top-8 right-8 sm:top-0 fixed w-1/2 sm:relative">
        <div
          class="bg-secondary1 shadow-2xl sm:shadow-md sm:bg-secondary2-30 p-2 sm:p-8 place-self-start sm:fixed sm:w-1/3"
        >
          <h1 class="font-title text-xl sm:text-2xl font-semibold">Preview</h1>
          <div v-if="loading" class="flex justify-center p-16">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
          <div v-else-if="preview" class="py-4 sm:py-8 max-h-full">
            <img :src="preview" alt="preview da foto de casamento" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      errors: [],
      preview: '',
      plano: this.$route.query.plano || '',
      estilo: null,
      flores: null,
      comida: '',
      bolo: '',
      loading: false,
    }
  },
  methods: {
    submit() {
      if (this.plano && this.estilo) {
        if (this.plano === 'personalizado') {
          const designersFake = [
            {
              name: 'Ana',
              photo: 'perfil/ana.png',
              motto:
                'Podemos ter nossas diferenças, mas nada é mais importante que a família ',
              projetos: ['1.png', '2.png', '3.png', '4.png', '5.png'],
            },
            {
              name: 'José',
              photo: 'perfil/jose.png',
              motto: 'São nos pequenos detalhes que o aconchego acontece',
              projetos: ['6.png', '7.png', '8.png', '9.png', '10.png'],
            },
            {
              name: 'Raquel',
              photo: 'perfil/raquel.png',
              motto:
                'O amor não tem cor nem cheiro, o único jeito de saber do que se trata é sentindo',
              projetos: ['11.png', '12.png', '13.png', '14.png', '15.png'],
            },
          ]
          localStorage.setItem('designers', JSON.stringify(designersFake))
        }
        if (this.plano === 'simples') {
          const designersFake = [
            {
              name: 'Ana',
              photo: 'perfil/ana.png',
              motto:
                'Podemos ter nossas diferenças, mas nada é mais importante que a família ',
              projetos: ['1.png', '2.png', '3.png', '4.png', '5.png'],
            },
          ]
          localStorage.setItem('designers', JSON.stringify(designersFake))
        }
        this.$router.push('finalizacao')
        return true
      }

      this.errors = []

      if (!this.plano) {
        this.errors.push('Selecione um plano')
      }
      if (!this.estilo) {
        this.errors.push('Selecione um estilo')
      }
      if (!this.flores) {
        this.errors.push('Selecione um buquê')
      }
    },
    async getPreview() {
      this.loading = true

      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
          this.preview = 'preview/' + Math.floor(Math.random() * 7 + 1) + '.png'
        }, 1000)
      })
      this.loading = false
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

label[for^='plano']::before {
  content: '';
  display: inline-block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 2px solid #885e4b;
  box-shadow: 0 0 0 1px #e5ddd5;
  background: #885e4b;
  margin-right: 10px;
}

:checked + label[for^='plano']::before {
  border: 2px solid #ceb9a5;
  box-shadow: 0 0 0 1px #e5ddd5;
  background: #e5ddd5;
}

:checked + label[for^='plano'] {
  background: #ceb9a5;
}

label[for^='cb'] {
  border: 3px solid #e5ddd5;
  padding: 10px;
  display: block;
  position: relative;
  margin: 10px;
  cursor: pointer;
}

label img {
  width: 100px;
  height: 130px;
  object-fit: cover;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

:checked + label {
  border-color: #934c47;
}

:checked + label img {
  transform: scale(0.9);
  z-index: -1;
}
</style>
