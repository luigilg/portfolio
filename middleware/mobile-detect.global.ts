export default defineNuxtRouteMiddleware((to, from) => {
  // Logic for Server Side (Initial Load)
  if (import.meta.server) {
    const headers = useRequestHeaders(['user-agent']);
    const userAgent = headers['user-agent'] || '';
    // Simple regex for mobile devices
    const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);

    if (isMobileUA && to.path === '/') {
      return navigateTo('/mobile');
    }
  }

  // Logic for Client Side (Navigation)
  if (import.meta.client) {
    const isMobileSize = window.innerWidth <= 1400;
    const isVertical = window.innerHeight > window.innerWidth;
    const shouldBeMobile = isMobileSize || isVertical;

    if (to.path === '/' && shouldBeMobile) {
      return navigateTo('/mobile');
    }

    if (to.path === '/mobile' && !shouldBeMobile) {
      return navigateTo('/');
    }
  }
});
