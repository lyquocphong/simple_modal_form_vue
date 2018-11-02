// This exports the plugin object.
export default {
  // The install method will be called with the Vue constructor as         
  // the first argument, along with possible options
  install (Vue, options) {
     // Add or modify global methods or properties.
     Vue.doubleValue = (value) => value * 2

     // Add `Vue.mixin()` to inject options to all components.
     Vue.mixin({
         // Add component lifecycle hooks or properties.
         beforeCreated() {
            console.log('Hello from created hook!')
         }
     })
     // Add Vue instance methods by attaching them to Vue.prototype.
     Vue.property.$phong = 'Phong plugin'

     Object.defineProperty(Vue.prototype, '$fsite', {
		get:function () { return '123' }
	});
  }
}

