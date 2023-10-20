import { gsap } from "gsap"
import { useState, useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)

export function titleDiscover() {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  const circle = useRef();

  useLayoutEffect(() => {
    
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      
      // Our animations can use selector text like " .box" 
      // this will only select '.box' elements that are children of the component
      gsap.to(".box", {...});
      // or we can use refs
      gsap.to(circle.current, { rotation: 360 });
      
    }, comp); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
    
  }, []); // <- empty dependency Array so it doesn't re-run on every render
  
}
