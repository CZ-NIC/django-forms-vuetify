<template>
    <div>
        <v-textarea
            v-if="field.widget.name === 'textarea'"
            v-bind="getCommonProperties()"
        />

        <template v-else-if="field.widget.name === 'input'">
            <v-text-field
                v-if="field.widget.type === 'text'"
                v-bind="getCommonProperties()"
            />

            <v-checkbox
                v-else-if="field.widget.type === 'checkbox'"
                v-bind="getCommonProperties()"
            />
            <div v-else>
                Input item of {{ field.widget.type }} type is not supported yet.
            </div>
        </template>

        <div v-else>
            Item with widget: {{ `name=${field.widget.name}, type=${field.widget.type}` }} is not supported yet.
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

export interface WidgetInterface {
    name: string;
    type?: string;
}

export type FieldValue = string | boolean | null | undefined

export interface FieldInterface {
    name: string;
    label: string;
    help_text?: string;
    value?: FieldValue;
    required?: boolean;
    errors?: string[];
    widget: WidgetInterface;
}

@Component
export default class FormItem extends Vue {
    @Prop({type: Object, default: {widget: {}} })
    readonly field!: FieldInterface

    private getCommonProperties() {
        return {
            name: this.field.name,
            label: this.field.label,
            ['error-messages']: (this.field.errors || []).join(', '),
            hint: this.field.help_text,
            rules: [(val: string) => this.field.required && val !== ''],
            value: this.field.value,
        }
    }
}
</script>
