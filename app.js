// new Vue({
//   el: "#vue-app",
//   //   data: {
//   //     name: "Eniola",
//   //     website: " https:eniola.com",
//   //     year: "2024",
//   //     websiteTag: "<a href='https:www.com'>The Website</a>",
//   //     age: 24,
//   //     x: 0,
//   //     Y: 0,
//   //     available: true,

//   //     characters: ["Jane", "Eniola", "Mummy", "Tope"],
//   //     ninjas: [
//   //       { name: "Eniola", age: 30 },
//   //       { name: "Jane", age: 35 },
//   //       { name: "Mummy", age: 400 },
//   //     ],
//   //   },

//   //   methods: {
//   //     greet: function () {
//   //       return "Good morning, " + this.name + ", it is " + new Date();
//   //     },
//   //     add: function () {
//   //       return this.age++;
//   //     },
//   //     subtract: function () {
//   //       return this.age--;
//   //     },

//   //     updateXY: function (event) {
//   //       this.x = event.offsetX;
//   //       this.Y = event.offsetY;
//   //     },
//   //   },

//   data: {
//     health: 100,
//     ended: false,
//   },
//   methods: {
//     restart: function () {
//       this.health = 100;
//       this.ended = false;
//     },

//     punch: function () {
//       this.health -= 10;
//       if(this.health <= 0){
//         this.ended = true
//       }
//     },
//   },
// });

var appOne = new Vue({
  el: "#app-one",
  data: {
    title: "App One",
    text: "Hollas ! from App One",
    output: "mmmmmmmmmm",
  },

  methods: {
    titleChange: function () {
      appTwo.title = "From App One: Changed";
    },
    changeRef: function () {
      console.log("one: ", this.$refs.entry.value);
      this.output = this.$refs.entry.value;
    },
  },
  computed: {},
});
var appTwo = new Vue({
  el: "#app-two",
  data: {
    title: "App Two",
    text: "Hollas ! from App Two",
  },

  methods: {},
  computed: {
    titleChange: function () {},
  },
});

// appOne.text = 'Changed from outside !'
// var dat = { name: "Test" };
// Vue.component("greeting", {
//   template:
//     " <div><p> Hello, {{ name }} </p><button v-on:click='changeName'>Change my name</button></div>",

//   data: function () {
//     return {
//       name: "Yola",
//       age: 435,
//     };
//   },
//   methods: {
//     changeName: function () {
//       this.name = "Onaso";
//     },
//   },
// });

// new Vue({
//   el: "#vue-app",
// });
