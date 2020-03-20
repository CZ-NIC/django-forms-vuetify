import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import Vuetify from '@/plugins/vuetify'
import Form from '@/components/Form.vue'
import FormItem from '@/components/FormItem.vue'

Vue.use(AsyncComputed)
Vue.use(Vuetify)


Vue.component('Form', Form)
Vue.component('FormItem', FormItem)


export default {Form, FormItem}
