import { useContext, useState } from 'react'
import Logo from '../image/img.png'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../App'
import { CiLogout } from 'react-icons/ci'
export default function Header() {
  const [hidden, sethidden] = useState(true)
  const { usernameLogin, setUsernameLogin } = useContext(AppContext)
  return (
    <header>
      <nav className='border-gray-200 py-1 bg-gray-100 bg-opacity-5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <NavLink to='https://flowbite.com' className='flex items-center'>
            <img
              src={Logo}
              className='rounded-full mr-3 h-6 sm:h-9'
              alt='Flowbite Logo'
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap text-gray-800'>

            </span>
          </NavLink>
          {usernameLogin ? (
            <button
              onClick={() => sethidden(pre => !pre)}
              className='bg-blue-700 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
            >
              {usernameLogin}
            </button>
          ) : (
            <div className='flex items-center lg:order-2'>
              <NavLink
                to='/login'
                onClick={() => sethidden(() => true)}
                className='border  focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-400 transition-all hover:text-black focus:outline-none dark:focus:ring-gray-800'
              >
                ورود
              </NavLink>
              <NavLink
                to='/signup'
                onClick={() => sethidden(() => true)}
                className='bg-blue-700 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
              >
                ثبت نام
              </NavLink>
              <button
                data-collapse-toggle='mobile-menu-2'
                type='button'
                className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-300 hover:text-gray-950 mr-2 transition-all focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400'
                aria-controls='mobile-menu-2'
                aria-expanded={!hidden}
                onClick={() => sethidden(prev => !prev)} // Moved here
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  />
                </svg>
              </button>
            </div>
          )}
          <div
            className={`${hidden ? 'hidden' : ''
              }  justify-between  items-center w-full lg:flex lg:w-auto lg:order-1`}
            id='mobile-menu-2'
          >
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-3'>
              <li>
                <NavLink
                  to='/'
                  className='p-2 block py-2 pr-4 pl-3  border-b border-gray-100  lg:hover:bg-transparent lg:border-0 lg:p-0 lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  <div className='p-2 flex justify-center items-center '>
                    خانه
                  </div>
                </NavLink>
              </li>
              {usernameLogin ? (
                <li>
                  <NavLink
                    to='#'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white   dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    <div
                      onClick={() => setUsernameLogin('')}
                      className='flex justify-center items-center gap-3 hover:bg-slate-500 p-2 rounded-md cursor-pointer'
                    >
                      <h3>خروج</h3>
                      <CiLogout className='mt-1' />
                    </div>
                  </NavLink>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
