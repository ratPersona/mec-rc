<style scoped lang="scss">
  @import '../scss/runchart.scss';
</style>

<template>
  <main class="runchart-main-view">
    <section class="runchart-details">

    </section>
    <section class="runchart-buttons">
      <button class="left-arrow"><svg class="icon"><use href="src/assets/images/svgs.svg/#arrow"></use></svg></button>
      <ul class="button-list">
        <li class="runchart-button" v-for="button in buttons" :key="button">
          {{ button.title }}
        </li>
      </ul>
      <button class="right-arrow"><svg class="icon"><use href="#arrow"></use></svg></button>
    </section>
    <section class="runchart-slide">
      <div class="left attr-details">
      </div>
      <div class="right attr-interaction">

      </div>
    </section>
  </main>
</template>


<script>
  export default {
    name: 'Runchart',
    props: {
      msg: String
    },
     data: function () {
       return {
         buttons: [
           { title: 'Attr' },
           { title: 'Standard' },
           { title: 'Attr' },
           { title: 'Standard' }
         ]
       }
    }
  }
</script>
