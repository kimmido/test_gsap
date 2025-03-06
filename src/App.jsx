import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {
  const title = useRef(null);


  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: ".section", // 대상 요소
        start: "center 20%", // 시작 위치 (요소의 상단이 뷰포트 상단과 만날 때)
        end: "+=1500", // 500px 스크롤 후 sticky 해제
        pin: true, // 요소를 고정
        markers: true, // 테스트용 마커 표시 (실제 적용시 제거 가능)
        scrub: 1, // 스크롤과 애니메이션 싱크 (부드러운 전환)
        ease: "linear"
      }
    })
      .to(".circle", {
        top: "76%",
      })
      .to(".circle--l", {
        left: "-90%"
      })
      .to(".circle--r", {
        left: "90%"
      })
      .to(".text", {
        opacity: 1
      })
    // gsap.to(".circle", {
    //   scrollTrigger: {
    //     trigger: ".section", // 대상 요소
    //     start: "top 250", // 시작 위치 (요소의 상단이 뷰포트 상단과 만날 때)
    //     end: "+=1000", // 500px 스크롤 후 sticky 해제
    //     // pin: true, // 요소를 고정
    //     markers: true, // 테스트용 마커 표시 (실제 적용시 제거 가능)
    //     scrub: 1 // 스크롤과 애니메이션 싱크 (부드러운 전환)
    //   }
    // })
  })

  return (
    <>
    <section className='section'>
      <h1 ref={title}>델타봇의 핵심가치</h1>
      {/* <div className='circle'>
      </div> */}
      <div className='circle circle--l'>
        <div className="text">
          <h2>제목</h2>
          <p>본문이 들어갈 것이다. 한두줄 정도?</p>
        </div>
      </div>
      <div className='circle'>
        <div className="text">
          <h2>제목</h2>
          <p>본문이 들어갈 것이다. 한두줄 정도?</p>
        </div>
      </div>
      <div className='circle circle--r'>
        <div className="text">
          <h2>제목</h2>
          <p>본문이 들어갈 것이다. 한두줄 정도?</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default App
