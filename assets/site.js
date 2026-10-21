(()=>{
  'use strict';

  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const progress=document.querySelector('#progress');
  const paintProgress=()=>{
    const max=document.documentElement.scrollHeight-innerHeight;
    progress.style.width=`${max>0?(scrollY/max)*100:0}%`;
  };
  addEventListener('scroll',paintProgress,{passive:true});
  addEventListener('resize',paintProgress,{passive:true});
  paintProgress();
  if(reduced||!window.gsap||!window.ScrollTrigger)return;

  gsap.registerPlugin(ScrollTrigger);
  const mm=gsap.matchMedia();

  // The chair and its foreground cords share the same slow, pendulum-like arc.
  gsap.fromTo('#swingMotion',{rotation:-2.5},{rotation:2.5,duration:2.8,ease:'sine.inOut',repeat:-1,yoyo:true});
  gsap.fromTo('#swingRope',{rotation:-2.5},{rotation:2.5,duration:2.8,ease:'sine.inOut',repeat:-1,yoyo:true});

  mm.add('(min-width: 861px)',()=>{
    gsap.fromTo('#heroPhoto',{scale:1.04,yPercent:0},{scale:1.14,yPercent:4,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1}});
    gsap.fromTo('#swingParallax',{y:0},{y:-16,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1.2}});
    gsap.fromTo('#heroCopy',{y:0,autoAlpha:1},{y:-22,autoAlpha:.86,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1}});
    gsap.fromTo('#drinkPhoto',{scale:1.08},{scale:1.16,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1}});
    gsap.fromTo('#drinkShift',{y:0},{y:-12,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1.4}});
    gsap.fromTo('#drinkCopy',{x:0,autoAlpha:1},{x:-20,autoAlpha:.78,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1}});
  });

  mm.add('(max-width: 860px)',()=>{
    gsap.fromTo('#heroPhoto',{scale:1.03,yPercent:0},{scale:1.11,yPercent:3,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1}});
    gsap.fromTo('#swingParallax',{y:0},{y:-8,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1.2}});
    gsap.fromTo('#drinkPhoto',{scale:1.08},{scale:1.14,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1}});
    gsap.fromTo('#drinkShift',{y:0},{y:-7,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1.2}});
  });

  gsap.from('.reservation-inner > *',{y:28,autoAlpha:0,duration:.9,ease:'power2.out',stagger:.14,scrollTrigger:{trigger:'.reservation',start:'top 76%',once:true}});
  ScrollTrigger.refresh();
})();
