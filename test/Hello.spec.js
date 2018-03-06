/* global expect describe it */
import { shallow } from '@vue/test-utils';
import Hello from '../src/components/HelloWorld';

describe('HelloWorld.vue', () => {
  it('testing hello world', () => {
    const wrapper = shallow(Hello);
    const message = wrapper.find('h1').text();
    expect(message).toBe('Welcome to Your Vue.js Apssp');
  });
});
