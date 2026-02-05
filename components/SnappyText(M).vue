<template id="smooth-container">
    <div class="w-full flex flex-col items-center justify-center h-max">
        <div id="cont"
            class="flex flex-col w-max justify-center items-center hikasami font-bold text-[9vw] leading-none text-b-dark scale-[80%]">
            <div id="icons" class="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full gap-3 absolute top-0">
                <div class="arrows flex items-center justify-center">
                    <svg class="svgIcon" width="10vw" height="10vw" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M32.23 13.2686H21.4263L40.4565 32.2979L40.4995 32.2559L43.6499 35.4062L48.0923 30.9648L48.1343 31.0068L65.8745 13.2686H55.0708L55.0718 0.761719H87.2241V32.9141L74.7173 32.915V22.1113L52.5366 44.292L74.7173 66.4727V55.6689L87.2241 55.6699V87.8223H55.0718L55.0708 75.3164H65.8745L43.6499 53.0918L21.4263 75.3164H32.23V87.8223H0.0766602V55.6699L12.5835 55.6689V66.4727L34.7642 44.292L12.5835 22.1113V32.915L0.0766602 32.9141V0.761719H32.23V13.2686Z"
                            fill="#A23DD4" />
                    </svg>
                </div>
                <div class="eye flex items-center justify-center">
                    <svg class="svgIcon" width="13.3vw" height="10vw" viewBox="0 0 116 87" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M58.0469 23.2031C69.0492 23.2033 77.9688 32.1226 77.9688 43.125C77.9686 54.1273 69.0492 63.0467 58.0469 63.0469C47.0444 63.0469 38.1251 54.1274 38.125 43.125C38.125 32.1225 47.0444 23.2031 58.0469 23.2031ZM58.0469 35.2031C53.6718 35.2031 50.125 38.7499 50.125 43.125C50.1251 47.5 53.6718 51.0469 58.0469 51.0469C62.4218 51.0467 65.9686 47.4999 65.9688 43.125C65.9688 38.75 62.4218 35.2033 58.0469 35.2031Z"
                            fill="#32A1B8" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M58.0469 0C76.6859 9.58198e-05 90.9237 10.6401 100.129 20.459C104.786 25.4267 108.338 30.372 110.726 34.0693C111.923 35.9237 112.838 37.4792 113.462 38.5879C113.774 39.1425 114.013 39.5866 114.18 39.9014C114.263 40.0588 114.328 40.1847 114.375 40.2754C114.398 40.3206 114.418 40.357 114.432 40.3848C114.439 40.3987 114.444 40.4105 114.449 40.4199C114.452 40.4246 114.453 40.429 114.455 40.4326C114.456 40.4344 114.458 40.4375 114.458 40.4375C114.458 40.44 114.393 40.4749 109.093 43.125L114.458 45.8125L114.455 45.8174C114.453 45.8209 114.452 45.8255 114.449 45.8301C114.445 45.8394 114.439 45.8507 114.432 45.8643C114.418 45.8921 114.398 45.9292 114.375 45.9746C114.328 46.0653 114.263 46.1903 114.18 46.3477C114.013 46.6623 113.774 47.1066 113.462 47.6611C112.838 48.7698 111.923 50.3262 110.726 52.1807C108.338 55.8781 104.786 60.8232 100.129 65.791C90.9237 75.6099 76.6859 86.2499 58.0469 86.25C39.4079 86.25 25.1701 75.6099 15.9648 65.791C11.3076 60.8233 7.75608 55.8781 5.36816 52.1807C4.17048 50.3262 3.25549 48.7699 2.63184 47.6611C2.31985 47.1065 2.07963 46.6624 1.91309 46.3477C1.82986 46.1904 1.76439 46.0653 1.71777 45.9746C1.6945 45.9293 1.67621 45.8921 1.66211 45.8643C1.65523 45.8507 1.64921 45.8394 1.64453 45.8301C1.64217 45.8254 1.63949 45.821 1.6377 45.8174L1.63574 45.8125L7 43.125C1.63344 40.4417 1.63468 40.4396 1.63574 40.4375L1.6377 40.4326C1.6395 40.429 1.64215 40.4246 1.64453 40.4199C1.64927 40.4105 1.6551 40.3986 1.66211 40.3848C1.67617 40.357 1.69462 40.3204 1.71777 40.2754C1.76442 40.1847 1.82978 40.0588 1.91309 39.9014C2.07965 39.5866 2.31983 39.1426 2.63184 38.5879C3.25548 37.4792 4.17059 35.9237 5.36816 34.0693C7.75608 30.3719 11.3075 25.4268 15.9648 20.459C25.1701 10.6401 39.4078 0 58.0469 0ZM58.0469 12C44.2018 12 32.9158 19.9225 24.7188 28.666C20.675 32.9793 17.5559 37.3157 15.4482 40.5791C14.8317 41.5338 14.3058 42.3921 13.8711 43.124C14.3059 43.8563 14.8313 44.7157 15.4482 45.6709C17.5559 48.9343 20.6751 53.2708 24.7188 57.584C32.9158 66.3274 44.2019 74.25 58.0469 74.25C71.8916 74.2499 83.1771 66.3273 91.374 57.584C95.4178 53.2707 98.5378 48.9344 100.646 45.6709C101.262 44.7158 101.787 43.8562 102.222 43.124C101.787 42.3921 101.262 41.5337 100.646 40.5791C98.5378 37.3156 95.4178 32.9794 91.374 28.666C83.1771 19.9226 71.8917 12.0001 58.0469 12Z"
                            fill="#32A1B8" />
                        <path d="M7 43.125L1.63379 45.8076L0.291992 43.125L1.63379 40.4414L7 43.125Z" fill="#32A1B8" />
                        <path d="M115.802 43.125L114.46 45.8076L109.093 43.125L114.46 40.4414L115.802 43.125Z"
                            fill="#32A1B8" />
                    </svg>
                </div>
                <div class="star flex items-center justify-center">
                    <svg class="svgIcon" width="10vw" height="10vw" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50.5 28.3066L70.9688 7.83789L80.1611 17.0312L59.6924 37.5H88V50.5H59.6924L79.7041 70.5117L70.5117 79.7041L50.5 59.6924V88H37.5V59.6924L17.4883 79.7041L8.29492 70.5117L28.3066 50.5H0V37.5H28.3076L7.83789 17.0312L17.0312 7.83789L37.5 28.3066V0H50.5V28.3066Z"
                            fill="#4F52BE" />
                    </svg>
                </div>
                <div class="globe flex items-center justify-center">
                    <svg class="svgIcon" width="11.3vw" height="11.3vw" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50 0.5C77.3381 0.5 99.5 22.6619 99.5 50C99.5 77.3381 77.3381 99.5 50 99.5C22.6619 99.5 0.5 77.3381 0.5 50C0.5 22.6619 22.6619 0.5 50 0.5ZM11.8926 55.5C13.9581 69.9391 24.0332 81.7927 37.4746 86.415C31.7833 77.0494 28.2594 66.4834 27.2139 55.5H11.8926ZM72.7861 55.5C71.7406 66.4836 68.2158 77.0493 62.5244 86.415C75.9662 81.7929 86.0419 69.9395 88.1074 55.5H72.7861ZM38.2725 55.5C39.4871 66.3131 43.5354 76.6129 50 85.3545C56.4645 76.6129 60.5129 66.3131 61.7275 55.5H38.2725ZM62.5244 13.584C68.2161 22.9499 71.7406 33.5162 72.7861 44.5H88.1074C86.0419 30.0604 75.9664 18.2061 62.5244 13.584ZM50 14.6445C43.5351 23.3863 39.4872 33.6867 38.2725 44.5H61.7275C60.5129 33.6866 56.4648 23.3863 50 14.6445ZM37.4746 13.584C24.0331 18.2063 13.9581 30.0608 11.8926 44.5H27.2139C28.2594 33.5163 31.783 22.9498 37.4746 13.584Z"
                            fill="#A23DD4" />
                    </svg>
                </div>
            </div>
            <div class="flex mb-6">
                <h1 class="text-nowrap font-black txt t1a">Eu crio </h1> <h1 class="text-nowrap ml-[3vw] font-black txt t1b"> experiências</h1>
            </div>
            <div class="flex mb-6">
                <h1 class="text-nowrap font-black txt t2a">digitais</h1><h1 class="text-nowrap font-black ml-[16vw] txt t2b opacity-0">excepcionais,</h1>
            </div>
            <div class="flex mb-6">
                <h1 class="text-nowrap font-black txt t3a">com foco </h1><h1 class="text-nowrap font-black ml-[16vw] txt t3b">em</h1>
            </div>
            <div class="flex mb-6">
                <h1 class="text-nowrap font-black txt t4a">entregar </h1><h1 class="text-nowrap font-black ml-[3vw] txt t4b"> muita</h1>
            </div>
            <div class="flex mb-6">
                <h1 class="text-nowrap font-black txt t5a">qualidade </h1><h1 class="text-nowrap font-black ml-[16vw] txt t5b">e</h1>
            </div>
            <div class="flex mb-6">
                <h1 class="text-nowrap font-black txt t6a mr-[16vw]">causar impacto.</h1>
            </div>
        </div>
        <div class="h-[3000px]"></div>
    </div>
</template>

<script>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';

export default {
    mounted() {
        gsap.registerPlugin(
            ScrollTrigger,
            CustomEase
        );
        CustomEase.create("fast", "M0,0 C0.126,0.382 0.32,0.925 0.634,0.971 0.788,0.993 0.731,0.984 1,1 ");
        CustomEase.create("scroll", "M0,0 C0,0.598 0.248,0.757 0.347,0.828 0.442,0.9 0.703,1 1,1 ");

        gsap.set(['.t1b', '.t1a', '.t2a', '.t2b', '.t3a', '.t3b', '.t4a', '.t4b', '.t5a', '.t5b', '.t6a'], { opacity: 0 });
        gsap.set('.ball', { opacity: 0 });

        const entryTl = gsap.timeline({
            scrollTrigger: {
                trigger: '#cont',
                start: 'top 95%', 
                end: 'center center',
                toggleActions: 'play none none none', 
                scrub: true,
            }
        });
        entryTl.from('#icons', { scale: 5, opacity: 0, gap: '0px', duration: 1, ease: "power1.out" }, "<");

        // entryTl.from('.svgIcon', { scale: 4.5, duration: 0.8, ease: "power2.out" });
        // entryTl.from('#icons', { gap: '500px', duration: 0.8, ease: "power2.out" }, "<");

        const tl = gsap.timeline();

        tl
            .to('.globe', {
                y: '-18vw',
                ease: "sine.out",
                duration: 0.3,
            }, ">")
            .addLabel("globeY", ">")
            .to('.eye', {
                y: '-4vw',
                ease: "sine.out",
                duration: 0.3,
            }, ">-0.2")
            .addLabel("eyeY", ">")
            .to('.star, .arrows', {
                y: '22vw',
                ease: "sine.out",
                duration: 0.3,
            }, "<")
            .addLabel("starY", ">")
            .to('.arrows', {
                y: '35vw',
                ease: "sine.out",
                duration: 0.3,
            }, ">")
            .addLabel("arrowsY", ">")
            .to('.globe', {
                x: '-36vw',
                duration: 0.62,
                ease: "power1.out",
            }, 'globeY-=0.04')
            .to('.eye', {
                x: '21vw',
                duration: 0.5,
                ease: "power1.out",
            }, 'eyeY')
            .addLabel("icons", "<")
            .to('.star', {
                x: '12vw',
                duration: 0.5,
                ease: "power1.out",
            }, '<0.08')
            .to('.arrows', {
                x: '57vw',
                duration: 0.5,
                ease: "power1.out",
            }, '<0.2')

            .from('.t1a', {
                x: -70,
                duration: 0.5,
                ease: "power1.out",
            }, 'icons-=0.05')
            .set('.t1a', { opacity: 1 }, "<")
            .from('.t2b', {
                x: 100,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.1')
            .set('.t2b', { opacity: 1 }, "<")

            .from('.t1b', {
                x: 120,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.07')
            .set('.t1b', { opacity: 1 }, "<")
            .from('.t2a', {
                x: -30,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.05')
            .set('.t2a', { opacity: 1 }, "<")

            .from('.t3b', {
                x: 50,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.07')
            .set('.t3b', { opacity: 1 }, "<")
            .from('.t4a', {
                x: -50,
                duration: 0.4,
                ease: "power1.out",
            }, '<0.02')
            .set('.t4a', { opacity: 1 }, "<")

            .from('.t3a', {
                x: -50,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.07')
            .set('.t3a', { opacity: 1 }, "<")
            .from('.t4b', {
                x: 50,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.05')
            .set('.t4b', { opacity: 1 }, "<")

            .from('.t5b', {
                x: 60,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.03')
            .set('.t5b', { opacity: 1 }, "<")
            .from('.t5a', {
                x: -60,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.03')
            .set('.t5a', { opacity: 1 }, "<")
            .from('.t6a', {
                x: -60,
                duration: 0.5,
                ease: "power1.out",
            }, '<0.03')
            .set('.t6a', { opacity: 1 }, "<");

        tl.addLabel("endEntry");

        const pauseDuration = 1;
        tl.to({}, { duration: pauseDuration });

        const animScroll = 2200;

        const outPropsA = {
            // x: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
        }
        const outPropsB = {
            // x: -100,
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
        }
        const outPropsIcon = {
            // x: "-=100",
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
        }

        tl.to('.t1a', {
            ...outPropsA, x: '-=100'
        }, 'endEntry+=0.3')
        .to('.t1b', {
            ...outPropsB, x: '-=100'
        },'<0.05')
        .to('.t2b', {
            ...outPropsB, x: '+=100'
        },'<')
        .to('.globe', {
            ...outPropsIcon, x: '+=100'
        },'<0.05')
        .to('.t2a', {
            ...outPropsA, x: '+=100'
        },'<0.05')
        .to('.t3a', {
            ...outPropsA, x: '-=100'
        },'<')
        .to('.eye', {
            ...outPropsIcon, x: '-=100'
        },'<0.05')
        .to('.t3b', {
            ...outPropsB, x: '-=100'
        },'<0.05')
        .to('.t4b', {
            ...outPropsB, x: '+=100'
        },'<0.05')
        .to('.t4a', {
            ...outPropsA, x: '+=100'
        },'<0.05')
        .to('.t5a', {
            ...outPropsA, x: '-=100'
        },'<')
        .to('.star', {
            ...outPropsIcon, x: '-=100'
        },'<0.05')
        .to('.t5b', {
            ...outPropsB, x: '-=100'
        },'<0.05')
        .to('.t6b', {
            ...outPropsB, x: '+=100'
        },'<')
        .to('.arrows', {
            ...outPropsIcon, x: '+=100'
        },'<0.05')
        .to('.t6a', {
            ...outPropsA, x: '+=100'
        },'<0.05')
        .to({}, { duration: 0.8 });

        const readingScroll = 1000;
        const totalPinScroll = animScroll + readingScroll;

        ScrollTrigger.create({
            trigger: '#cont',
            start: 'center center',
            end: `+=${totalPinScroll}`,
            scrub: true,
            pin: true,
            animation: tl, 
        });
    }
}
</script>

<style></style>