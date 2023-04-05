import { mount } from '@vue/test-utils'
import ProductList from '../ProductList.vue'
import { createTestingPinia } from '@pinia/testing'
import { describe, test, vitest, expect, beforeEach } from 'vitest'

describe('ProductList', () => {
  let wrapper = null
  const products = [
    { name: 'Milk', quantity: 1, dueDate: '2023-04-05', completed: false },
    { name: 'Eggs', quantity: 12, dueDate: '2023-04-06', completed: false },
    { name: 'Bread', quantity: 1, dueDate: '2023-04-07', completed: false },
  ]
  beforeEach(() => {
    wrapper = mount(ProductList, {
      global: {
        plugins: [createTestingPinia({ createSpy: vitest.fn })],
        stubs: ['ProductEdit'],
        mocks: {
          store: {
            products,
            addProduct: vitest.fn(),
            editProduct: vitest.fn(),
          },
        },
      },
    })
  })
  test('renders list of products', async () => {

    expect(wrapper.findAll('li')).toHaveLength(products.length)
    expect(wrapper.find('li:first-child').text()).toContain('Product Name: Milk');
    expect(wrapper.find('li:first-child').text()).toContain('Quantity: 1');
    expect(wrapper.find('li:first-child').text()).toContain('Due Date: 2023-04-05');

    // simulate clicking on Edit button

    await wrapper.find('li:first-child button:first-of-type').trigger('click')
    expect(wrapper.vm.editing).toBeTruthy()
    expect(wrapper.find('product-edit-stub').exists()).toBeTruthy()
    expect(wrapper.getComponent('product-edit-stub').vm.product).toEqual(products[0])

    // simulate clicking on Cancel button in ProductEdit component
    await wrapper.getComponent('product-edit-stub').vm.$emit('cancel')
    expect(wrapper.vm.editing).toBeTruthy()
    expect(wrapper.find('product-edit-stub').exists()).toBeTruthy()

  })
})
