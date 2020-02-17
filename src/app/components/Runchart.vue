<style scoped lang="scss">
  @import '../scss/runchart.scss';


  h1,h2,h3 {
    color: #fff;
  }
  .carousel-container {
    width: 90%;
    //max-width: 80%;
    margin: 30px auto;
  }

  .VueCarousel-inner {
    flex-basis: 100% !important;
  }

  .slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>

<template>
  <main class="runchart-main-view">
    <section class="runchart-details">

    </section>

  <section class="runchart-buttons">
    <section class="button-list">
      <agile :as-nav-for="[$refs.slides]" :options="options1" :ref="buttons">
        <!-- <div class="runchart-button" v-for="button in buttons" :key="button">
          {{ button.title }}
        </div> -->
        <div class="runchart-button">
          <h3>1</h3>
        </div>
        <div class="runchart-button">
          <h3>2</h3>
        </div>
        <div class="runchart-button">
          <h3>3</h3>
        </div>
        <div class="runchart-button">
          <h3>4</h3>
        </div>
        <div class="runchart-button">
          <h3>5</h3>
        </div>
        <div class="runchart-button">
          <h3>6</h3>
        </div>
        <div class="runchart-button">
          <h3>7</h3>
        </div>
        <div class="runchart-button">
          <h3>8</h3>
        </div>
      </agile>
    </section>
  </section>

  <section class="carousel-container">
    <agile :options="options2" :ref="slides">
      <!-- <div class="slide" v-for="slide in slides" :key="slide">
        {{ slide.title }}
      </div> -->
      <div class="slide">
        <h3>slide 1</h3>
      </div>
      <div class="slide">
        <h3>slide 2</h3>
      </div>
      <div class="slide">
        <h3>slide 3</h3>
      </div>
      <div class="slide">
        <h3>slide 4</h3>
      </div>
      <div class="slide">
        <h3>slide 5</h3>
      </div>
      <div class="slide">
        <h3>slide 6</h3>
      </div>
      <div class="slide">
        <h3>slide 7</h3>
      </div>
      <div class="slide">
        <h3>slide 8</h3>
      </div>
    </agile>
  </section>

    <!-- <section class="runchart-buttons">
      <section class="button-list">
        <carousel  perPage="4" :paginationEnabled="false" :navigationEnabled="true" :scrollPerPage="false">
          <slide class="runchart-button" v-for="button in buttons" :key="button">
            {{ button.title }}
          </slide>
        </carousel>
      </section>
    </section>
    <section class="carousel-container">
      <carousel perPage="1" :paginationEnabled="false" :scrollPerPage="false">
        <slide class="example-slide">Test</slide>
        <slide class="example-slide">Slide 2</slide>
        <slide class="example-slide">Slide 3</slide>
      </carousel>
    </section> -->
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
         options1: {
           dots: false,
           slidesToShow: 4,
         },

         options2: {
           dots: false,
           navButtons: false
         },

         buttons: [
           { title: '1' },
           { title: '2' },
           { title: '3' },
           { title: '4' },
           { title: '5' },
           { title: '6' },
           { title: '7' },
           { title: '8' }
         ],
         slides: [
           { title: 'One' },
           { title: 'Two' },
           { title: 'Three' },
           { title: 'Four' },
           { title: 'Five' },
           { title: 'Six' },
           { title: 'Seven' },
           { title: 'Eight' }
         ],
       }
    }
  }
</script>
