<style scoped lang="scss">
  @import '../scss/runchart.scss';
</style>

<template>
  <main class="runchart-main-view">
    <article class="runchart-details">
      <button role="button" class="toggle-me-btn" @click="toggleMe()">
        <svg v-if="toggle" class="icon open"><use href="#close"></use></svg>
        <svg class="icon closed" v-else><use href="#open"></use></svg>
      </button>
      <div class="details-top flex-container">
        <div class="flex"><h1>Run Chart #:</h1> <span>R163830</span></div>
        <div class="flex"><h2>Run Chart Revision:</h2> <span>1</span></div>
      </div>
      <div v-if="toggle">
        <div class="details-middle border open">
          <ul class="flex-container value-list">
            <li class="flex" v-for="value in runchartData" :key="value">
              <h3>{{ value.title }} :</h3> <span>{{ value.value }}</span>
            </li>
          </ul>
        </div>
        <div class="details-bottom flex-container border open">
          <div class="flex"><h3>Job #:</h3> <span>12345</span></div>
          <div class="flex"><h3>Date :</h3> <span>00/00/0000</span></div>
          <div class="flex"><h3>Clock #:</h3> <span>123456</span></div>
        </div>
      </div>
      <div v-else>

      </div>
    </article>

    <section class="runchart-buttons">
      <section class="button-list">
        <hooper group="group1" :settings="hooperSettings">
          <hooper-navigation slot="hooper-addons"></hooper-navigation>

          <slide class="runchart-button"><div>1</div></slide>
          <slide class="runchart-button"><div>2</div></slide>
          <slide class="runchart-button"><div>3</div></slide>
          <slide class="runchart-button"><div>4</div></slide>
          <slide class="runchart-button"><div>5</div></slide>
          <slide class="runchart-button"><div>6</div></slide>
          <slide class="runchart-button"><div>7</div></slide>
          <slide class="runchart-button"><div>8</div></slide>

          <!-- <hooper-progress slot="hooper-addons"></hooper-progress> -->
        </hooper>
      </section>
    </section>

    <section class="carousel-container">
      <hooper group="group1" :settings="hooperSettings2">
        <slide class="slide">
          <div class="left feature-details">
            <h2>Feature 1. Attribute 3</h2>
            <div class="feature-detail border">
              <h3>Location :</h3> <span>--</span>
            </div>
            <div class="feature-detail border">
              <h3>Frequency :</h3> <span>100% - Log 1x per Shift</span>
            </div>
            <div class="feature-detail border">
              <h3>Insp. Tool :</h3> <span>Visual</span>
            </div>
          </div>
          <div class="right attr-info">
            <div class="">
              <h2>Pass/Fail</h2>
              <input placeholder="Pass"><button>Add to Chart</button>
            </div>
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 2
          </div>
          <div class="right attr-info">
            right 2
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 3
          </div>
          <div class="right attr-info">
            right 3
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 4
          </div>
          <div class="right attr-info">
            right 4
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 5
          </div>
          <div class="right attr-info">
            right 5
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 6
          </div>
          <div class="right attr-info">
            right 6
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 7
          </div>
          <div class="right attr-info">
            right 7
          </div>
        </slide>
        <slide class="slide">
          <div class="left attr-details">
            left 8
          </div>
          <div class="right attr-info">
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
import 'hooper/dist/hooper.css';

import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  // Progress as HooperProgress,
  Pagination as HooperPagination } from 'hooper';

  export default {
    name: 'Runchart',
    components: {
      Hooper,
      Slide,
      // HooperProgress,
      HooperPagination,
      HooperNavigation,
    },
     data: function () {
       return {
         toggle: false,

         hooperSettings: {
            itemsToShow: 4,
            centerMode: false
          },
          hooperSettings2: {
             itemsToShow: 1,
             centerMode: true
           },
           runchartData: [
             { title: "Drawn By", value: "Sam Nelson"},
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
    },
    methods: {
      toggleMe: function() {
        //alert("toggled");
        this.toggle = !this.toggle;
        console.log(this.toggle)
      }
    }
  }
</script>
