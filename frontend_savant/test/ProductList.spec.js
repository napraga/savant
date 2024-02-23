import { mount, createLocalVue } from '@vue/test-utils';
import ProductList from '@/components/ProductList.vue';

const localVue = createLocalVue();

describe('ProductList.vue', () => {
  it('renders product list correctly', () => {
    const wrapper = mount(ProductList, {
      localVue,
      data() {
        return {
          products: [
            { _id: '1', name: 'Product 1', price: 19.99 },
            { _id: '2', name: 'Product 2', price: 29.99 },
          ],
        };
      },
    });

    // Verifica que los elementos de la tabla se rendericen correctamente
    expect(wrapper.findAll('tbody tr')).toHaveLength(2);
    expect(wrapper.text()).toContain('Product 1');
    expect(wrapper.text()).toContain('Product 2');
  });

});
