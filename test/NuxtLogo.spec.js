import Vue from 'vue'; // Add this line to import Vue
import { mount } from '@vue/test-utils';
import NuxtLogo from '@/components/NuxtLogo.vue';

describe('NuxtLogo', () => {
    it('is a Vue instance', () => {
        const wrapper = mount(NuxtLogo);
        expect(wrapper.isVueInstance()).toBeTruthy(); // Adjust your test as needed
    });
});
