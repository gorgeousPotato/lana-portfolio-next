import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import Image from 'next/image';
import lana from "../../public/img.jpeg"

export default function Home() {
  return (
    <main className='bg-white px-10'>
      <section className='min-h-screen'>
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl'>Lana Uzbekova</h1>
          <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className='cursor-pointer text-xl'/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href='#'>Resume</a></li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Lana Uzbekova</h2>
          <h3 className='text-2xl py-2'>Full Stack Developer</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>Software Engineer passionate about solving complex problems. I thrive on continuous learning and adapting to the ever-evolving landscape of software development. I am eager to apply my problem-solving and analytical thinking abilities to contribute to building responsive and adaptive web applications.</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillLinkedin />
          <AiFillGithub />
        </div>
      </section>
      <section>
        <div className='relative mt-20 mb-5 mx-auto w-80 h-80 rounded-full'>
          <Image src={lana} layout='fill' objectFit='cover' className='rounded-full'/>
        </div>
        <div>
          <h3 className='text-3xl py-1'>About me</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>I'm a fast learner with a passion for tackling complex challenges head-on. My problem-solving skills, coupled with a knack for critical thinking, enable me to navigate through various obstacles with confidence</p>
          <p className='text-md py-5 leading-8 text-gray-800'>As a graduate of General Assembly bootcamp, I've honed my ability to adapt and thrive in dynamic environments, making me a versatile asset in any professional setting</p>
        </div>
        <div>
        </div>
      </section>
      <section>
      <h3 className='text-3xl py-1'>Skills</h3>

      </section>
    </main>
  )
}
