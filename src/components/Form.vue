<template>
    <form :action="send_url" :method="send_method">
        <slot name="form-errors">
            <ul v-if="form.form_errors">
                <li v-for="(error, index) in form.form_errors" :key="index">
                    {{ error }}
                </li>
            </ul>
        </slot>
        <slot name="autogenerated-items">
            <div v-if="form.fields">
                <div v-for="(field, key) in form.fields" :key="key">
                    <FormItem :ref="field.name" :field="field"/>
                </div>
            </div>
        </slot>
        <slot name="additional-items"/>
        <v-btn type="submit" primary color="primary">
            Send
        </v-btn>
    </form>
</template>

<script lang="ts">
import 'reflect-metadata'
import { Vue, Component, Prop } from 'vue-property-decorator'
import FormItem, { FieldInterface } from '@/components/FormItem.vue'

interface FormInterface {
    form_errors: string[];
    fields: FieldInterface[];
}

@Component({
    components: {
        FormItem,
    },
})
export default class Form extends Vue {
    @Prop({default: () => ({}) })
    readonly form!: FormInterface
    @Prop({required: true})
    readonly send_url!: string
    @Prop({default: 'post'})
    readonly send_method!: string
}
</script>
