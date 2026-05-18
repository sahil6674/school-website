import Image from 'next/image'
import { Users, BookOpen, GraduationCap, Trophy, Quote, MoveRight, Award, Lightbulb, School } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div>

        <div className="1 overflow-hidden whitespace-nowrap bg-green-200 p-2">
          <div className="flex gap-15 animate-marquee">
            {[...Array(2)].map((_,i) => (
              <div key={i} className="flex gap-15 text-sm text-gray-600">
                <p>🎓 Admissions Open 2026-27 | Limited Seats Available | Apply Now!</p>
                <p>📢 Annual Day Celebration - March 28, 2026</p>
                <p>🏆 Our students won District Science Fair 2026</p>
                <p>📚 Summer Camp Registration starts April 1st</p>
              </div>
            ))}
          </div>
        </div>

        <div className='2 relative w-full h-screen'>
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
                <button className='bg-green-200 text-gray-600 cursor-pointer p-2 px-3 rounded-md'>Admission Open</button>
                <button className='bg-green-200 text-gray-600 cursor-pointer p-2 px-3 rounded-md'>Learn More</button>
              </div>
            </div>

        </div>

        <div className='3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-7 px-5'>
            <div className='bg-blue-100 rounded-xl p-5 border-blue-400 border flex flex-col items-center gap-2'>
              <Users className='text-blue-900 w-10 h-10 stroke-3'/>
              <h1 className='text-2xl text-blue-900 font-bold'>500+</h1>
              <h6 className='text-sm text-gray-500'>Students</h6>
            </div>     

            <div className='bg-blue-100 rounded-xl p-5 border-blue-400 border flex flex-col items-center gap-2'>
              <GraduationCap className='text-blue-900 w-10 h-10 stroke-3'/>
              <h1 className='text-2xl text-blue-900 font-bold'>50+</h1>
              <h6 className='text-sm text-gray-500'>Qualified Teachers</h6>
            </div>   

            <div className='bg-blue-100 rounded-xl p-5 border-blue-400 border flex flex-col items-center gap-2'>
              <BookOpen className='text-blue-900 w-10 h-10 stroke-3'/>
              <h1 className='text-2xl text-blue-900 font-bold'>20+</h1>
              <h6 className='text-sm text-gray-500'>Courses Offered</h6>
            </div>   

            <div className='bg-blue-100 rounded-xl p-5 border-blue-400 border flex flex-col items-center gap-2'>
              <Trophy className='text-blue-900 w-10 h-10 stroke-3'/>
              <h1 className='text-2xl text-blue-900 font-bold'>100+</h1>
              <h6 className='text-sm text-gray-500'>Awards Won</h6>
            </div>            
        </div>

        <div className='4 bg-gray-100 flex flex-col md:flex-row p-10 md:px-20 lg:px-40 gap-8'>
          <div className='flex flex-col gap-5'>
            <Quote className='text-blue-200 w-12 h-12 stroke-3'/>
            <h2 className='text-3xl font-bold'>Principal's Message</h2>
            <Image
              src="/images/Volley2.jpeg"
              alt='Image Loading'
              width={500}
              height={700}
              className='md:hidden'
            />
            <p className='text-md text-gray-700 pr-5'>"Welcome to S.M. Family, where we believe every child has the potential to excel. Our mission is to provide a nurturing environment that fosters academic excellence, character development, and lifelong learning."</p>
            <p className='text-md text-gray-700 pr-5'>"We are committed to preparing our students not just for exams, but for life-equipping them with the skills, values, and confidence to thrive in an ever-changing world."</p>
            <div>
              <h3 className='text-md font-bold text-gray-700'>Smt. Eti Garg</h3>
              <p className='text-sm text-gray-700'>Principal, S.M. Public School</p>
            </div>
            <button className='text-blue-900 text-md font-bold flex gap-2'>
              <p>Read Full Message</p>
              <MoveRight/>
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
            <div className='flex flex-col gap-3 bg-white shadow-lg p-8 rounded-xl border-t-8 border-t-blue-500'>
              <div className="tag">
                <Award className='text-white h-12 w-12 bg-blue-500 p-2 rounded-lg'/>
              </div>
              <h3 className='text-2xl font-bold'>Academic Excellence</h3>
              <p className='text-md text-gray-500'>98% pass rate with top scores in board examinations. Our students consistently rank among the best in the region.</p>
            </div>

            <div className='flex flex-col gap-3 bg-white shadow-lg p-8 rounded-xl border-t-8 border-t-green-500'>
              <div className="tag">
                <Lightbulb className='text-white h-12 w-12 bg-green-500 p-2 rounded-lg'/>
              </div>
              <h3 className='text-2xl font-bold'>Co-curricular Activities</h3>
              <p className='text-md text-gray-500'>20+ clubs, sports teams, and activity groups. We nurture talents beyond academics for holistic development.</p>
            </div>

            <div className='flex flex-col gap-3 bg-white shadow-lg p-8 rounded-xl border-t-8 border-t-violet-500'>
              <div className="tag">
                <School className='text-white h-12 w-12 bg-violet-500 p-2 rounded-lg'/>
              </div>
              <h3 className='text-2xl font-bold'>Modern Infrastructure</h3>
              <p className='text-md text-gray-500'>State-of-the-art facilities including smart classrooms, science labs, library, auditorium, and sports complex.</p>
            </div>
          </div>
        </div>

        <div className='6 bg-gray-100 py-10 grid md:p-10 lg:grid-cols-2 gap-10'>
            <div className='6of1 bg-white shadow-lg rounded-lg p-5 flex flex-col gap-5 xl:gap-6'>
              <div className='flex justify-between'>
                <h2 className='text-xl font-bold'>Latest Announcements</h2>
                <button className='hover:underline cursor-pointer text-blue-900'>View All</button>
              </div>
              <div>
                <div className='flex justify-between p-2 border-l-4 border-l-blue-500 rounded-r-lg hover:bg-blue-50'>
                  <div>
                    <h4 className='font-bold'>Admission Process for Academic Year 2026-27 Begins</h4>
                    <p className='text-sm text-gray-500'>Mar 25, 2026</p>
                  </div>
                  <div>
                    <span className='text-sm bg-blue-200 p-2 rounded-2xl'>Admissions</span>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex justify-between p-2 border-l-4 border-l-blue-500 rounded-r-lg hover:bg-blue-50'>
                  <div>
                    <h4 className='font-bold'>Admission Process for Academic Year 2026-27 Begins</h4>
                    <p className='text-sm text-gray-500'>Mar 25, 2026</p>
                  </div>
                  <div>
                    <span className='text-sm bg-blue-200 p-2 rounded-2xl'>Admissions</span>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex justify-between p-2 border-l-4 border-l-blue-500 rounded-r-lg hover:bg-blue-50'>
                  <div>
                    <h4 className='font-bold'>Admission Process for Academic Year 2026-27 Begins</h4>
                    <p className='text-sm text-gray-500'>Mar 25, 2026</p>
                  </div>
                  <div>
                    <span className='text-sm bg-blue-200 p-2 rounded-2xl'>Admissions</span>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex justify-between p-2 border-l-4 border-l-blue-500 rounded-r-lg hover:bg-blue-50'>
                  <div>
                    <h4 className='font-bold'>Admission Process for Academic Year 2026-27 Begins</h4>
                    <p className='text-sm text-gray-500'>Mar 25, 2026</p>
                  </div>
                  <div>
                    <span className='text-sm bg-blue-200 p-2 rounded-2xl'>Admissions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='6of2 bg-white shadow-lg rounded-lg p-5 flex flex-col gap-5'>
              <div className='flex justify-between'>
                <h2 className='text-xl font-bold'>Upcoming Events</h2>
                <button className='hover:underline cursor-pointer text-blue-900'>View Calendar</button>
              </div>
              <div className='flex flex-col lg:gap-5 xl:gap-0'>
                <div className='flex gap-8 p-2 hover:bg-blue-50 rounded-xl'>
                  <div className='bg-blue-500 px-5 py-2 rounded-2xl text-white'>
                    <div className='font-bold text-xl'>28</div>
                    <div className='text-sm'>Mar</div>
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <h4 className='font-bold'>Annual Day Celebration</h4>
                    <div className='text-sm text-gray-500 flex flex-col gap-0.1'>
                      <p>5:00 PM - 8:00 PM</p>
                      <p>Main Auditorium</p>
                    </div>
                  </div>
                </div>
                <div className='flex gap-8 p-2 hover:bg-blue-50 rounded-xl'>
                  <div className='bg-blue-500 px-5 py-2 rounded-2xl text-white'>
                    {/* date */}
                    <div className='font-bold text-xl'>28</div>
                    <div className='text-sm'>Mar</div>
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <h4 className='font-bold'>Annual Day Celebration</h4>
                    <div className='text-sm text-gray-500 flex flex-col gap-0.1'>
                      <p>5:00 PM - 8:00 PM</p>
                      <p>Main Auditorium</p>
                    </div>
                  </div>
                </div>
                <div className='flex gap-8 p-2 hover:bg-blue-50 rounded-xl'>
                  <div className='bg-blue-500 px-5 py-2 rounded-2xl text-white'>
                    {/* date */}
                    <div className='font-bold text-xl'>28</div>
                    <div className='text-sm'>Mar</div>
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <h4 className='font-bold'>Annual Day Celebration</h4>
                    <div className='text-sm text-gray-500 flex flex-col gap-0.1'>
                      <p>5:00 PM - 8:00 PM</p>
                      <p>Main Auditorium</p>
                    </div>
                  </div>
                </div>
                <div className='flex gap-8 p-2 hover:bg-blue-50 rounded-xl'>
                  <div className='bg-blue-500 px-5 py-2 rounded-2xl text-white'>
                    {/* date */}
                    <div className='font-bold text-xl'>28</div>
                    <div className='text-sm'>Mar</div>
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <h4 className='font-bold'>Annual Day Celebration</h4>
                    <div className='text-sm text-gray-500 flex flex-col gap-0.1'>
                      <p>5:00 PM - 8:00 PM</p>
                      <p>Main Auditorium</p>
                    </div>
                  </div>
                </div>
              </div>
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

      </div>
    </>
  );
}
