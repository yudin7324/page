import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(MorphSVGPlugin, Draggable);

const ToggleAnimation: React.FC = () => {
  const cordsRef = useRef<SVGPathElement[] | null>(null);
  const hitRef = useRef<SVGCircleElement>(null);
  const dummyRef = useRef<SVGGElement>(null);
  const dummyCordRef = useRef<SVGLineElement | null>(null);
  const proxyRef = useRef<HTMLDivElement>(document.createElement('div'));

  const AUDIO = {
    CLICK: new Audio('https://assets.codepen.io/605876/click.mp3'),
  };
  const STATE = { ON: false };
  const CORD_DURATION = 0.1;
  let startX: number, startY: number;
  let ENDX = '0', ENDY = '0';

  useEffect(() => {
    cordsRef.current = Array.from(document.querySelectorAll('.toggle-scene__cord'));
    const hit = hitRef.current;
    const dummy = dummyRef.current;
    dummyCordRef.current = document.querySelector('.toggle-scene__dummy-cord line');

    if (!cordsRef.current || !hit || !dummy || !dummyCordRef.current) return;

    ENDX = dummyCordRef.current.getAttribute('x2') || '0';
    ENDY = dummyCordRef.current.getAttribute('y2') || '0';

    const reset = () => {
      gsap.set(proxyRef.current, {
        x: ENDX,
        y: ENDY,
      });
    };

    reset();

    const CORD_TL = gsap.timeline({
      paused: true,
      onStart: () => {
        STATE.ON = !STATE.ON;
        gsap.set(document.documentElement, { '--on': STATE.ON ? 1 : 0 });
        gsap.set([dummy, hit], { display: 'none' });
        gsap.set(cordsRef.current![0], { display: 'block' });
        AUDIO.CLICK.play();
      },
      onComplete: () => {
        gsap.set([dummy, hit], { display: 'block' });
        gsap.set(cordsRef.current![0], { display: 'none' });
        reset();
      },
    });

    for (let i = 1; i < cordsRef.current.length; i++) {
      CORD_TL.add(
        gsap.to(cordsRef.current[0], {
          morphSVG: cordsRef.current[i],
          duration: CORD_DURATION,
          repeat: 1,
          yoyo: true,
        })
      );
    }

    Draggable.create(proxyRef.current, {
      trigger: hit,
      type: 'x,y',
      onPress: (e) => {
        startX = e.x;
        startY = e.y;
      },
      onDrag() {
        if (dummyCordRef.current) {
          gsap.set(dummyCordRef.current, {
            attr: {
              x2: this.x,
              y2: this.y,
            },
          });
        }
      },
      onRelease: (e) => {
        const DISTX = Math.abs(e.x - startX);
        const DISTY = Math.abs(e.y - startY);
        const TRAVELLED = Math.sqrt(DISTX * DISTX + DISTY * DISTY);

        if (dummyCordRef.current) {
          gsap.to(dummyCordRef.current, {
            attr: { x2: ENDX, y2: ENDY },
            duration: CORD_DURATION,
            onComplete: () => {
              if (TRAVELLED > 50) {
                CORD_TL.restart();
              } else {
                reset();
              }
            },
          });
        }
      },
    });

    return () => {
      Draggable.get(proxyRef.current)?.kill();
    };
  }, []);

  return (
    <svg
      className="toggle-scene"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
      viewBox="0 0 197.451 481.081"
    >
      <defs></defs>
      <g className="toggle-scene__cords">
        <path
          className="toggle-scene__cord"
          markerEnd="url(#a)"
          fill="none"
          strokeLinecap="square"
          strokeWidth="6"
          d="M123.228-28.56v150.493"
          transform="translate(-24.503 256.106)"
        />
        <g className="line toggle-scene__dummy-cord">
          <line
            ref={dummyCordRef}
            markerEnd="url(#a)"
            x1="98.7255"
            x2="98.7255"
            y1="240.5405"
            y2="380.5405"
          />
        </g>
        <circle
          ref={hitRef}
          className="toggle-scene__hit-spot"
          cx="98.7255"
          cy="380.5405"
          r="60"
          fill="transparent"
        />
      </g>
      <g className="toggle-scene__bulb bulb" transform="translate(844.069 -645.213)"></g>
      <g ref={dummyRef} className="toggle-scene__dummy-cord"></g>
    </svg>
  );
};

export default ToggleAnimation;
