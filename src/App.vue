<template>
  <div id="app container">

    <div class="notification">
        Hello {{$phong}} Hello {{$fsite}}
        <img alt="Vue logo" src="./assets/logo.png">
        <ul>
          <li v-for="(brand,index) in brands" :key="index">
            <a v-on:click.prevent="showModal(index)" href="#">{{ brand.name }}</a>
          </li>
        </ul>
    </div>
    
    <Modal v-show="show_modal" v-bind:obj="show_obj" v-on:formClosed="formClosed" v-on:formSaved="formSaved"/>
  </div>
</template>

<script>

import Modal from './components/Modal.vue'
import config from './config.js'

export default {
  name: 'app',
  components: {
    Modal
  },
  data() {
    return {
      author: '',
      brands: [],
      show_obj: {
          id: '4',
          name: 'asa'
      },
      show_modal: false,
      translations: []
    }
  },
  methods:{
    showModal(index){
      this._beforeModalShow = Object.assign({}, this.brands[index]);
      this.show_obj = this.brands[index];
      this.show_obj.index = index;
      this.show_modal = true;
    },
    formClosed(obj){
      this.brands[obj.index] = this._beforeModalShow
      this.show_modal = false
    },
    formSaved(){
      alert('Save ok!');
      this.show_modal = false
    }
  },
  async created(){
    var vm = this;

    var res = await this.axios.get('https://phongsrv4.frontside.fi/Ledsuihku.fi/dashboard?action=get_translation_list', {
        responseType: 'json',
        headers: {
          'Access-Control-Allow-Origin': '*',
        }
    });

    vm.translations = res.data;

    vm.author = config.config_name;
    vm.brands = {
      1: {
        name: 'olight'
      },
      2: {
        name: 'lumonite'
      }
      
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
