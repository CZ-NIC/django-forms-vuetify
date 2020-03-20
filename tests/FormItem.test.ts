import { Wrapper, shallowMount } from '@vue/test-utils'
import FormItem from '@/components/FormItem.vue'

describe('FormItem snapshot', () => {

    function createWrapperForField(field: object): Wrapper<FormItem> {
        return shallowMount(FormItem, {
            propsData: {
                field
            },
        })
    }

    test('matches snapshot - text input', () => {
        const wrapper: Wrapper<FormItem> = createWrapperForField({
            name: 'test_input',
            label: 'Test label',
            help_text: 'Help for test input',
            value: 'test value',
            required: true,
            errors: ['Error'],
            widget: {name: 'input', type: 'text'},
        })
        expect(wrapper).toMatchSnapshot()
    })

    test('matches snapshot - checkbox', () => {
        const wrapper: Wrapper<FormItem> = createWrapperForField({
            name: 'test_checkbox',
            label: 'Test label',
            help_text: 'Help for test checkbox',
            value: 'test value',
            required: true,
            errors: ['Error'],
            widget: {name: 'input', type: 'checkbox'},
        })
        expect(wrapper).toMatchSnapshot()
    })

    test('matches snapshot - textarea', () => {
        const wrapper: Wrapper<FormItem> = createWrapperForField({
            name: 'test_textarea',
            label: 'Test label',
            help_text: 'Help for test textarea',
            value: 'test value',
            required: true,
            errors: ['Error'],
            widget: {name: 'textarea'},
        })
        expect(wrapper).toMatchSnapshot()
    })
})
