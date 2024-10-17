jest.mock('@/components/NuxtLogo.vue', () => ({
    template: '<div></div>', 
  }));
  
  describe('NuxtLogo', () => {
    test('should be a mock component', () => {
     
      const NuxtLogo = require('@/components/NuxtLogo.vue');
      expect(NuxtLogo).toBeTruthy(); 
    });
  });
  