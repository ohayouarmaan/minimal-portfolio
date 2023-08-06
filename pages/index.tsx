import Head from 'next/head'
import Navbar from '../components/navbar'
import { useEffect, useState, useRef } from 'react'
import Card from '../components/Card';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export default function Home() {
  const [navActive, setNavActive] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if(Math.floor(scrollY) > 50 && !navActive){
        setNavActive(true);
      } else if(Math.floor(scrollY) == 0) {
        setNavActive(false);
      }
    });
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main 
        style={{
          backgroundImage: `url('/background.svg')`,
          backgroundAttachment: 'fixed'
        }}
        className="bg-[#272829] relative flex flex-col items-center justify-center min-h-[100vh] min-w-[100%] bg-no-repeat bg-cover bg-center ">
          <Navbar isActive={navActive} />
          <div className='h-[100vh] flex flex-col relative justify-center w-1/2 rounded-xl'>
            <div className="text-container">
              <h1 className='text-5xl text-[#D8D9DA] inline-block'>Hi, I'm </h1>
              <h1 className='inline-block text-5xl font-bold'>&nbsp;</h1>
              <span className='inline-block text-5xl font-bold hue-rotate-15 text-transparent bg-clip-text animate-gradient bg-gradient-to-r from-red-500 to-amber-500 bg-300%'>Armaan</span>
              <h1 className='text-5xl text-[#D8D9DA] inline-block'>.</h1>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 absolute bottom-10 left-1/2 md:left-10 text-8xl -translate-x-[50%] animate-gradient bg-300%'>&#8675;</h1>
            </div>
          </div>
          <div className='min-h-[100vh] flex flex-col items-center justify-center min-w-[100%]'>
            <div className="text-white backdrop-invert rounded-xl p-7 max-w-[80%] md:max-w-[50%]">
              <h1 className='invert'>About Me</h1>
              <hr className='invert mb-3' />
              <p className='invert'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum reiciendis ducimus obcaecati repellendus eaque. Praesentium voluptatem nam amet quis consequatur neque modi qui incidunt at explicabo officiis reiciendis, iste corporis, consectetur cumque fugiat sint, magni inventore alias maxime. Quod, sapiente! Nihil dolores praesentium ex iusto nostrum eum consectetur, aliquid soluta nobis perferendis nemo reprehenderit voluptates molestiae recusandae accusamus excepturi velit minima dolor similique facere quasi voluptatem! Aut temporibus sint illum sed consequuntur quo itaque atque eaque doloribus!</p>
            </div>
          </div>
          <div className='min-h-[100vh] flex relative md:flex-row pt-5 flex-col items-center overflow-x-scroll justify-center min-w-[100%]'>
            <h1 className='text-white uppercase top-20 md:top-1/2 text-vertical md:-rotate-90 absolute left-40 font-extrabold text-4xl'>Projects</h1>
            
            <div className='flex project-container flex-col overflow-y-scroll items-center justify-start h-[80vh] overflow-x-hidden w-[100%] md:w-[80vw] mt-24 md:flex-row md:overflow-x-scroll md:items-start md:justify-start md:max-w-[50%]'>
              <Card x={0} content={
                <div className='text-xl p-9 flex flex-col items-center justify-center h-full w-full'>
                  <div>
                    <h1 className='underline mb-9 font-bold'>Ramen.js</h1>
                    <p className='text-lg mb-9'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni pariatur nam vel quo at amet obcaecati dolorem dolorum facilis, ea sint minus! Maiores distinctio quibusdam quae nostrum quasi itaque aperiam alias iste earum accusamus!</p>
                    <div className="button-container flex items-center justify-between">
                      <Link href={'https://github.com/ohayouarmaan/ramen'} target='_blank'>

                        <button className='bg-black text-white flex items-center justify-center mr-5 px-4 py-2 rounded-lg'><FaGithub />&nbsp;Github</button>
                      </Link>
                      <button className='bg-black py-2 text-white flex items-center justify-center px-4 rounded-lg'>
                        <div className="invert">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="dev-to"><path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"></path></svg> 
                        </div>
                        &nbsp;Blog
                      </button>
                    </div>
                  </div>
                </div>
              }/>
              <Card x={1} content={
                <div className='text-xl p-9 flex flex-col items-center justify-center h-full w-full'>
                  <div>
                    <h1 className='underline mb-9 font-bold'>Digital Circuit Sim</h1>
                    <p className='text-lg mb-9'>A simple digital circuit library, You can simulate the working of a digital circuit which uses logic gates through code, You can even export the circuits as json and import them. Create gates, Create busses connect them and watch them work.</p>
                    <div className="button-container flex items-center justify-between">
                      <Link href={'https://github.com/ohayouarmaan/digital-circuit-simulator'} target='_blank'>

                        <button className='bg-black text-white flex items-center justify-center mr-5 px-4 py-2 rounded-lg'><FaGithub />&nbsp;Github</button>
                      </Link>
                      <button className='bg-black py-2 text-white flex items-center justify-center px-4 rounded-lg'>
                        <div className="invert">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="dev-to"><path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"></path></svg> 
                        </div>
                        &nbsp;Blog
                      </button>
                    </div>
                  </div>
                </div>
              }/>

              <Card x={2} content={
                <div className='text-xl p-9 flex flex-col items-center justify-center h-full w-full'>
                  <div>
                    <h1 className='underline mb-9 font-bold'>FSociety</h1>
                    <p className='text-lg mb-9'>It is a ethical hacking tool written in python from scratch it has a lot of features such as Reverse Shell generator, One line revshells, Port Scanner, Data Encryptor and a lot more. Check it out :D</p>
                    <div className="button-container flex items-center justify-between">
                      <Link href={'https://github.com/ohayouarmaan/FSociety'} target='_blank'>

                        <button className='bg-black text-white flex items-center justify-center mr-5 px-4 py-2 rounded-lg'><FaGithub />&nbsp;Github</button>
                      </Link>
                      <button className='bg-black py-2 text-white flex items-center justify-center px-4 rounded-lg'>
                        <div className="invert">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="dev-to"><path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"></path></svg> 
                        </div>
                        &nbsp;Blog
                      </button>
                    </div>
                  </div>
                </div>
              }/>

              <Card x={3} content={
                <div className='text-xl p-9 flex flex-col items-center justify-center h-full w-full'>
                  <div>
                    <h1 className='underline mb-9 font-bold'>Prologue</h1>
                    <p className='text-lg mb-9'>A code based video editor written in python3 which uses FFmpeg internally, It has a lot of features which a common video editor has for example a timeline, different filters and a lot more.</p>
                    <div className="button-container flex items-center justify-between">

                      <Link href={'https://github.com/ohayouarmaan/prologue'} target='_blank'>

                        <button className='bg-black text-white flex items-center justify-center mr-5 px-4 py-2 rounded-lg'><FaGithub />&nbsp;Github</button>
                      </Link>
                      <button className='bg-black py-2 text-white flex items-center justify-center px-4 rounded-lg'>
                        <div className="invert">
                          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="dev-to"><path d="M7.826 10.083a.784.784 0 0 0-.468-.175h-.701v4.198h.701a.786.786 0 0 0 .469-.175c.155-.117.233-.292.233-.525v-2.798c.001-.233-.079-.408-.234-.525zM19.236 3H4.764C3.791 3 3.002 3.787 3 4.76v14.48c.002.973.791 1.76 1.764 1.76h14.473c.973 0 1.762-.787 1.764-1.76V4.76A1.765 1.765 0 0 0 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .792-.832h2.539l-.002 1.187zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z"></path></svg> 
                        </div>
                        &nbsp;Blog
                      </button>
                    </div>
                  </div>
                </div>
              }/>
            </div>
          </div>
      </main>
    </>
  )
}
