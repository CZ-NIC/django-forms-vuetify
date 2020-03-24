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

            <v-text-field
                v-else-if="field.widget.type === 'password'"
                :type="show_password ? 'text' : 'password'"
                :append-icon="show_password ? 'visibility' : 'visibility_off'"
                v-bind="getCommonProperties()"
                @click:append="show_password = !show_password"
            />

            <v-checkbox
                v-else-if="field.widget.type === 'checkbox'"
                v-bind="getCommonProperties()"
            />
            <div v-else>
                Input item of {{ field.widget.type }} type is not supported yet.
                {{ printError(field.widget) }}
            </div>
        </template>

        <div v-else>
            Item with widget: {{ `name=${field.widget.name}, type=${field.widget.type}` }} is not supported yet.
            {{ printError(field.widget) }}
        </div>
    </div>
</template>

<script lang="ts">
import 'reflect-metadata'
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
    @Prop({default: {widget: {}} })
    readonly field!: FieldInterface

    private show_password = false

    private getCommonProperties() {
        return {
            name: this.field.name,
            label: this.field.label,
            'error-messages': this.field.errors || [],
            hint: this.field.help_text,
            rules: [(val: string) => this.field.required && val !== ''],
            value: this.field.value,
        }
    }

    private printError(widget: WidgetInterface): void {
        console.error(`Item with widget: { name=${widget.name}, type=${widget.type} } is not supported yet.`)
    }
}
</script>
