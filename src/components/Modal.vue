<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Modal title</p>
        <button v-on:click="modalClosed" class="modal-close is-large" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <input class="input" v-model="obj.id" type="hidden">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" v-model="obj.name" type="text" placeholder="Text input">
          </div>
        </div>
        
      </section>
      <footer class="modal-card-foot">
        <button v-on:click="modalSaved" class="button is-success">Save changes</button>
        <button v-on:click="modalClosed" class="button is-warning">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    'obj': Object,
  },
  data() {
    return {
      bind_obj: null  
    }
  },
  beforeUpdate(){
    this.bind_obj = Object.assign({}, this.obj);
  },
  methods:{
    modalClosed(){
      this.$emit('formClosed',this.bind_obj)
    },
    modalSaved(){
      this.$emit('formSaved',this.bind_obj)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
