import { shallowMount, Wrapper } from '@vue/test-utils'
import Form from '@/components/Form.vue'

describe('Form snapshot', () => {

    let wrapper: Wrapper<Form>

    beforeEach(() => {
        wrapper = shallowMount(Form, {
            propsData: {
                source_form: {
                    form_errors: ['Test error 1', 'Test error 2'],
                    fields: [{
                        name: 'test_input',
                        label: 'Test label',
                        help_text: 'Help for test input',
                        value: 'test value',
                        required: true,
                        errors: ['Error'],
                        widget: {name: 'input', type: 'text'}
                    }],
                },
                send_method: 'post',
                send_url: 'test.local/send',
            },
        })
    })

    test('matches snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })
})
