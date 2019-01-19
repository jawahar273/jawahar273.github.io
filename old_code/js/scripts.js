

 var aside = VueStrap.aside;
 new Vue({
    el: '#leftMenu', // id of the containing div
    components: {
      "aside":aside,
      "accordion":VueStrap.accordion,
      "panel":VueStrap.panel,
      "modal":VueStrap.modal,
      "popover":VueStrap.popover,
      "tooltip":VueStrap.tooltip,
    },
    data: {
        showLeft: false,
         Modal_1: false,
         Modal_2: false,
         Modal_3: false,
    }
    
});

Vue.component('modal-one', {
   template:"#modal-1"
});

