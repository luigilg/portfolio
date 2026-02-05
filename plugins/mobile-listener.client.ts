export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const router = useRouter();
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

    const checkRedirect = () => {
      const isMobileSize = window.innerWidth <= 1024;
      const isVertical = window.innerHeight > window.innerWidth;
      const shouldBeMobile = isMobileSize || isVertical;
      
      const currentPath = router.currentRoute.value.path;

      if (currentPath === '/' && shouldBeMobile) {
        return navigateTo('/mobile');
      } 
      
      if (currentPath === '/mobile' && !shouldBeMobile) {
        return navigateTo('/');
      }
    };

    window.addEventListener('resize', () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkRedirect, 200);
    });
    
    // Initial check on load/plugin init (in case middleware missed it or for SPA transitions)
    checkRedirect();
  }
});
