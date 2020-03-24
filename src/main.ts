import Vue from 'vue'
import Vuetify from '@/plugins/vuetify'
import Form from '@/components/Form.vue'
import FormItem from '@/components/FormItem.vue'

Vue.use(Vuetify)


Vue.component('Form', Form)
Vue.component('FormItem', FormItem)


export {Form, FormItem}
