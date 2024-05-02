import { mount } from '@vue/test-utils';
import LinkPage from '../pages/LinkPage.vue';

describe('LinkPage', () => {
  it('renders correctly', () => {
    const wrapper = mount(LinkPage);
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.html()).toContain('id="content"');
  });
});
