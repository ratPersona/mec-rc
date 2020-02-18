<style scoped lang="scss">
  @import '../scss/runchart.scss';
</style>

<template>
  <main class="runchart-main-view">
    <article class="runchart-details">
      <div class="details-top flex-container">
        <div class="flex"><h1>Run Chart #:</h1> <span>R163830</span></div>
        <div class="flex"><h2>Run Chart Revision:</h2> <span>1</span></div>
      </div>
      <div class="details-middle">
        <ul class="flex-container">
          <li class="flex" v-for="value in runchartData" :key="value">
            {{ runchartData.value }}
          </li>
        </ul>
      </div>
      <div class="details-bottom"></div>
    </article>

    <section class="runchart-buttons">
      <section class="button-list">
        <hooper group="group1" :settings="hooperSettings">
          <hooper-navigation slot="hooper-addons"></hooper-navigation>

          <slide class="runchart-button">1</slide>
          <slide class="runchart-button">2</slide>
          <slide class="runchart-button">3</slide>
          <slide class="runchart-button">4</slide>
          <slide class="runchart-button">5</slide>
          <slide class="runchart-button">6</slide>
          <slide class="runchart-button">7</slide>
          <slide class="runchart-button">8</slide>

          <hooper-progress slot="hooper-addons"></hooper-progress>
        </hooper>
      </section>
    </section>

    <section class="carousel-container">
      <hooper group="group1" :settings="hooperSettings2">
        <slide class="slide">
          <div class="left attr-details">
            left 1
          </div>
          <div class="right attr-interaction">
            right 1
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 2
          </div>
          <div class="right attr-interaction">
            right 2
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 3
          </div>
          <div class="right attr-interaction">
            right 3
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 4
          </div>
          <div class="right attr-interaction">
            right 4
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 5
          </div>
          <div class="right attr-interaction">
            right 5
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 6
          </div>
          <div class="right attr-interaction">
            right 6
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 7
          </div>
          <div class="right attr-interaction">
            right 7
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 8
          </div>
          <div class="right attr-interaction">
            right 8
          </div>
        </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </section>
  </main>
</template>


<script>
//TODO: HOOPER WINS! NOTES - Vue Carousel works but no native "asNavFor", Vue Agile is deprecated, Vue Slick doesn't work properly, Vue Slick Carousel is...broken

import { Hooper, Slide, Navigation as HooperNavigation, Progress as HooperProgress, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

  export default {
    name: 'Runchart',
    components: {
      Hooper,
      Slide,
      HooperProgress,
      HooperPagination,
      HooperNavigation
    },
     data: function () {
       return {
         hooperSettings: {
            itemsToShow: 4,
            centerMode: false
          },
          hooperSettings2: {
             itemsToShow: 1,
             centerMode: true
           },
           runchartData: [
             { title: "<h3>Drawn By</h3>", value: "<span>Sam Nelson</span>"},
             { title: "Date", value: "09/24/2020"},
             { title: "W/CTR", value: "1234"},
             { title: "Alt Route", value: "2"},
             { title: "Dept #", value: "4"},
             { title: "Oper #", value: "5"},
             { title: "Part #", value: "123456789 - Floor Cover Plate"},
           ],
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

/*
  settings: [
    {
      "dots": false,
      // "dotsClass": "slick-dots custom-dot-class",
      // "edgeFriction": 0.35,
      "infinite": true,
      "speed": 500,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      // "touchThreshold": 5,
      // "adaptiveHeight": true
    }
  ],
  settings2: [
    {
      "dots": true,
      "dotsClass": "slick-dots custom-dot-class",
      "infinite": true,
      "speed": 500,
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "touchThreshold": 5,
      "adaptiveHeight": true
    }
  ],
  */
</script>
