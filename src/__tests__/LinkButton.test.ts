import { mount } from '@vue/test-utils';
import LinkButton from '../components/LinkButton.vue';

describe('LinkButton', () => {
  it('renders correctly with props', () => {
    const wrapper = mount(LinkButton, {
      props: {
        websiteLink: 'https://example.com/',
        imageFile: 'example-icon.svg',
        text: 'Example',
      },
    });
    expect(wrapper.text()).toContain('Example');
    expect(wrapper.html()).toContain('href="https://example.com/curtistarr"');
    expect(wrapper.html()).toContain('src="');
    expect(wrapper.html()).toContain('example-icon.svg');
  });
});
