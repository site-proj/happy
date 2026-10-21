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
  mm.add('(min-width: 861px)',()=>{
    gsap.fromTo('#heroPhoto',{scale:1.04,yPercent:0},{scale:1.14,yPercent:4,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1}});
    gsap.fromTo('#swingBack',{y:0,rotation:-1.5},{y:-16,rotation:1.5,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1.2}});
    gsap.fromTo('#swingFront',{y:0,rotation:-1.5},{y:-16,rotation:1.5,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1.2}});
    gsap.fromTo('#heroCopy',{y:0,autoAlpha:1},{y:-28,autoAlpha:.72,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1}});
    gsap.fromTo('#drinkPhoto',{scale:1.08},{scale:1.16,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1}});
    gsap.fromTo('#drinkArt',{y:0,rotation:-1},{y:-20,rotation:1,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1.4}});
    gsap.fromTo('#drinkCopy',{x:0,autoAlpha:1},{x:-28,autoAlpha:.55,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1}});
  });
  mm.add('(max-width: 860px)',()=>{
    gsap.fromTo('#heroPhoto',{scale:1.03,yPercent:0},{scale:1.11,yPercent:3,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1}});
    gsap.fromTo(['#swingBack','#swingFront'],{y:0,rotation:-1},{y:-10,rotation:1,ease:'none',scrollTrigger:{trigger:'#inicio',start:'top top',end:'bottom bottom',scrub:1.2}});
    gsap.fromTo('#drinkPhoto',{scale:1.08},{scale:1.14,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1}});
    gsap.fromTo('#drinkArt',{y:0,rotation:-.7},{y:-8,rotation:.7,ease:'none',scrollTrigger:{trigger:'#experiencia',start:'top bottom',end:'bottom top',scrub:1.2}});
  });
  gsap.from('.reservation-inner > *',{y:28,autoAlpha:0,duration:.9,ease:'power2.out',stagger:.14,scrollTrigger:{trigger:'.reservation',start:'top 76%',once:true}});
  ScrollTrigger.refresh();
})();
