import React from 'react'
import { GraduationCap, Book, Layout, Video, HelpCircle } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom';

const AcademyNavbar = () => {

    const navigate = useNavigate()

    const navItems = [
        { icon: <Book className="w-5 h-5" />, text: 'Courses', navigate: 'courses' },
        { icon: <Layout className="w-5 h-5" />, text: 'Lessons', navigate: '' },
        { icon: <Video className="w-5 h-5" />, text: 'Video Lessons', navigate: '' },
        { icon: <HelpCircle className="w-5 h-5" />, text: 'Help', navigate: '' },
      ];

  return (
    <nav className="bg-white shadow-xl rounded-lg p-4 mt-2">
    <div className="flex gap-6 items-center justify-center text-2xl relative">
      <div className='absolute left-0 hover:bg-gray-200 p-3 rounded-full cursor-pointer' onClick={()=> navigate('/academy') }>
    <GraduationCap className="w-8 h-8" />
      </div>
      {navItems.map((item, index) => (
        <div
          key={index}
          onClick={() => item.navigate && navigate(item.navigate)}
          className="group relative flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 
                   hover:bg-blue-50 hover:shadow-md hover:-translate-y-1
                   active:translate-y-0 active:shadow-sm"
                   >

          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-blue-400/0 to-blue-400/0 
                        group-hover:from-blue-50 group-hover:via-blue-100 group-hover:to-blue-50 
                        transition-all duration-500" />
          

          <span className="relative transform transition-all duration-300 
                       group-hover:scale-110 group-hover:rotate-6 group-hover:text-blue-600">
            {item.icon}
          </span>
          

          <span className="relative font-medium transition-all duration-300 
                       group-hover:text-blue-600 group-hover:font-semibold">
            {item.text}
          </span>
          

          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 
                        transition-all duration-300 group-hover:w-full" />
        </div>
      ))}
    </div>
  </nav>
  )
}

export default AcademyNavbar