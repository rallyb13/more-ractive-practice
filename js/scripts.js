var ractive = new Ractive({
  el: '#container',
  // append: true,
  template: '#template',
  data: {
          title: 'Jokester',
          joke: { setup: "Yo mama so old",
                  punch: "she still votes Republican!"}
        }
});




















  // ractive.on('add', function(event) {
  //   event.original.preventDefault();
  //   this.push('jokes', joke);
  // });
// jokes.push('joke');

// $(document).ready(function() {
//   $('form#newJoke').submit(function(event) {
//     event.preventDefault();
//     var setup = $("textarea#setup").val();
//     var punch = $("textarea#punch").val();
//   });
// });









// var Jokes = Ractive.extend({
//   addJoke: function(setup, punch) {
//     this.push('jokes', {
//       setup: setup,
//       punch: punch
//     });
//   },
//   oninit: function(options) {
//     this.on({
//       newJoke: function(event) {
//         this.addJoke(event.)
//       }
//     });
//   }
// });
