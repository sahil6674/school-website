import Image from 'next/image'
import { Users, BookOpen, GraduationCap, Trophy, Quote, MoveRight, Award, Lightbulb, School } from 'lucide-react'

export default function Home() {

  const admissions = [
    {
      title: 'Admission Process for Academic Year 2026-27 Begins',
      date: 'Mar 25, 2026',
      status: 'Admissions'
    },
    {
      title: 'Annual Day Celebration - All Parents Invited',
      date: 'Mar 28, 2026',
      status: 'Event'
    },
    {
      title: 'Summer Camp Registration Opens',
      date: 'Apr 1, 2026',
      status: 'Activity'
    },
    {
      title: 'Parent-Teacher Meeting - Term 2 Results',
      date: 'Apr 10, 2026',
      status: 'Academic'
    },
  ]

  const upcoming = [
    {
      date: '28',
      month: 'MAR',
      title: 'Annual Day Celebration',
      timing: '5:00 PM - 8:00 PM',
      location: 'Main Auditorium',
    },
    {
      date: '5',
      month: 'MAR',
      title: 'Science Exhibition',
      timing: '10:00 AM - 4:00 PM',
      location: 'Science Block',
    },
    {
      date: '12',
      month: 'APR',
      title: 'Sports Day 2026',
      timing: '8:00 AM - 2:00 PM',
      location: 'Sports Ground',
    },
  ]

  return (
    <>
      <div>

        <div className="overflow-hidden whitespace-nowrap bg-green-200 p-2">
          <div className="flex gap-15 animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-15 text-sm text-gray-600">
                <p>🎓 Admissions Open 2026-27 | Limited Seats Available | Apply Now!</p>
                <p>📢 Annual Day Celebration - March 28, 2026</p>
                <p>🏆 Our students won District Science Fair 2026</p>
                <p>📚 Summer Camp Registration starts April 1st</p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative w-full h-screen'>
          <Image
            src="/images/smbg.jpeg"
            alt="bg"
            fill
            className='object-cover'
          />

          <div className='absolute inset-0 bg-black/40'></div>

          <div className='relative z-10 px-5 flex flex-col justify-center h-full'>
            <h1 className='text-5xl md:text-6xl font-bold text-white'>Welcome to</h1>
            <h1 className='text-4xl md:text-5xl font-bold text-white'>S M Public School</h1>
            <h6 className='text-xl my-3 font-bold text-green-200'>Excellence in Education Since 1976</h6>
            <p className='md:w-1/2 text-lg text-white'>Empowering students to reach their full potential through quality education, character development, and innovative learning experiences.</p>

            <div className='buttons my-5 flex gap-5'>
              <button className='bg-green-200 text-black cursor-pointer p-2 px-3 rounded-md'>Admission Open</button>
              <button className='bg-green-200 text-black cursor-pointer p-2 px-3 rounded-md'>Learn More</button>
            </div>
          </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-7 px-5'>
          <div className='bg-blue-100 dark:bg-transparent rounded-xl p-5 border-blue-400 dark:border-white border flex flex-col items-center gap-2'>
            <Users className='text-blue-900 dark:text-white w-10 h-10 stroke-3' />
            <h1 className='text-2xl text-blue-900 dark:text-white font-bold'>500+</h1>
            <h6 className='text-sm text-gray-500'>Students</h6>
          </div>

          <div className='bg-blue-100 dark:bg-transparent rounded-xl p-5 border-blue-400 dark:border-white border flex flex-col items-center gap-2'>
            <GraduationCap className='text-blue-900 dark:text-white w-10 h-10 stroke-3' />
            <h1 className='text-2xl text-blue-900 dark:text-white font-bold'>50+</h1>
            <h6 className='text-sm text-gray-500'>Qualified Teachers</h6>
          </div>

          <div className='bg-blue-100 dark:bg-transparent rounded-xl p-5 border-blue-400 dark:border-white border flex flex-col items-center gap-2'>
            <BookOpen className='text-blue-900 dark:text-white w-10 h-10 stroke-3' />
            <h1 className='text-2xl text-blue-900 dark:text-white font-bold'>20+</h1>
            <h6 className='text-sm text-gray-500'>Courses Offered</h6>
          </div>

          <div className='bg-blue-100 dark:bg-transparent rounded-xl p-5 border-blue-400 dark:border-white border flex flex-col items-center gap-2'>
            <Trophy className='text-blue-900 dark:text-white w-10 h-10 stroke-3' />
            <h1 className='text-2xl text-blue-900 dark:text-white font-bold'>100+</h1>
            <h6 className='text-sm text-gray-500'>Awards Won</h6>
          </div>
        </div>

        <div className='flex flex-col md:flex-row p-10 md:px-20 lg:px-40 gap-8'>
          <div className='flex flex-col gap-5'>
            <Quote className='text-blue-200 dark:text-white w-12 h-12 stroke-3' />
            <h2 className='text-3xl font-bold'>Principal&apos;s Message</h2>
            <Image
              src="/images/Volley2.jpeg"
              alt='Image Loading'
              width={500}
              height={700}
              className='md:hidden'
            />
            <p className='text-md pr-5'>&quot;Welcome to S.M. Family, where we believe every child has the potential to excel. Our mission is to provide a nurturing environment that fosters academic excellence, character development, and lifelong learning.&quot;</p>
            <p className='text-md pr-5'>&quot;We are committed to preparing our students not just for exams, but for life-equipping them with the skills, values, and confidence to thrive in an ever-changing world.&quot;</p>
            <div>
              <h3 className='text-md font-bold'>Smt. Eti Garg</h3>
              <p className='text-sm'>Principal, S.M. Public School</p>
            </div>
            <button className='text-blue-700 text-md font-bold flex gap-2 hover:cursor-pointer'>
              <p>Read Full Message</p>
              <MoveRight />
            </button>
          </div>

          <div className='hidden md:flex items-center p-10'>
            <Image
              src="/images/Volley2.jpeg"
              alt='Image Loading'
              width={500}
              height={700}
            />
          </div>
        </div>

        <div className='5 p-5'>
          <div className='flex flex-col items-center'>
            <h2 className='text-xl md:text-3xl font-bold'>Why Choose Our School ?</h2>
            <p className='text-sm md:text-md text-gray-500 py-3 md:px-30 text-center lg:px-70'>We provide a comprehensive educational experience that goes beyond textbooks, preparing students for success in all aspects of life.</p>
          </div>

          <div className='grid md:grid-cols-3 gap-10 p-5'>
            <div className='flex flex-col gap-3 bg-white shadow-lg hover:shadow-xl duration-200 p-8 rounded-xl border-t-8 border-t-blue-500'>
              <div className="tag">
                <Award className='text-white h-12 w-12 bg-blue-500 p-2 rounded-lg' />
              </div>
              <h3 className='text-2xl font-bold text-black'>Academic Excellence</h3>
              <p className='text-md text-gray-500'>98% pass rate with top scores in board examinations. Our students consistently rank among the best in the region.</p>
            </div>

            <div className='flex flex-col gap-3 bg-white shadow-lg hover:shadow-xl duration-200 p-8 rounded-xl border-t-8 border-t-green-500'>
              <div className="tag">
                <Lightbulb className='text-white h-12 w-12 bg-green-500 p-2 rounded-lg' />
              </div>
              <h3 className='text-2xl font-bold text-black'>Co-curricular Activities</h3>
              <p className='text-md text-gray-500'>20+ clubs, sports teams, and activity groups. We nurture talents beyond academics for holistic development.</p>
            </div>

            <div className='flex flex-col gap-3 bg-white shadow-lg hover:shadow-xl duration-200 p-8 rounded-xl border-t-8 border-t-violet-500'>
              <div className="tag">
                <School className='text-white h-12 w-12 bg-violet-500 p-2 rounded-lg' />
              </div>
              <h3 className='text-2xl font-bold text-black'>Modern Infrastructure</h3>
              <p className='text-md text-gray-500'>State-of-the-art facilities including smart classrooms, science labs, library, auditorium, and sports complex.</p>
            </div>
          </div>
        </div>

        <div className='py-10 grid md:p-10 lg:grid-cols-2 gap-10'>
          <div className='bg-white shadow-foreground shadow-lg hover:shadow-xl duration-300 rounded-lg p-5'>
            <div className='flex justify-between'>
              <h2 className='text-xl font-bold text-black'>Latest Announcements</h2>
              <button className='hover:underline cursor-pointer text-blue-900'>View All</button>
            </div>
            <div className='flex flex-col gap-5 xl:gap-6 mt-7'>
              {admissions.map((item, index) => (
                <div key={index} className='flex justify-between items-center p-2 border-l-4 border-l-blue-500 rounded-r-lg hover:bg-blue-50'>
                  <div>
                    <h4 className='font-bold text-black'>{item.title}</h4>
                    <p className='text-sm text-gray-500'>{item.date}</p>
                  </div>
                  <div>
                    <span className='text-sm bg-blue-200 p-2 rounded-2xl text-blue-700'>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white shadow-foreground shadow-lg hover:shadow-xl duration-300 rounded-lg p-5 flex flex-col gap-5'>
            <div className='flex justify-between'>
              <h2 className='text-xl font-bold text-black'>Upcoming Events</h2>
              <button className='hover:underline cursor-pointer text-blue-900'>View Calendar</button>
            </div>
            {upcoming.map((item, index) => (
              <div key={index} className='flex flex-col lg:gap-5 xl:gap-0'>
                <div className='flex gap-8 p-2 hover:bg-blue-50 rounded-xl'>
                  <div className='bg-blue-500 px-5 py-2 rounded-2xl text-white'>
                    <div className='font-bold text-xl'>{item.date}</div>
                    <div className='text-sm'>{item.month}</div>
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <h4 className='font-bold text-black'>{item.title}</h4>
                    <div className='text-sm text-gray-500 flex flex-col gap-0.1'>
                      <p>{item.timing}</p>
                      <p>{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className='7'>
        {/* What people say and feedback */}
      </div>

      <div className='8'>
        {/* campus life */}
      </div>

      <div className='9'>
        {/* Ready to join */}
      </div>

    </div >
    </>
  );
}
