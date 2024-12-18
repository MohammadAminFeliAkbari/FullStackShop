import { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../App';
import { CiLogout } from 'react-icons/ci';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faXmark } from '@fortawesome/free-solid-svg-icons';
import './css.css'

export default function Header() {
  const [hidden, setHidden] = useState(true);
  const [total, setTotal] = useState(0)
  const { usernameLogin, setUsernameLogin } = useContext(AppContext);

  useEffect(() => {
    if (usernameLogin.shoppingCard && usernameLogin.shoppingCard.length > 0) {
      const sum = usernameLogin.shoppingCard.reduce((acc, item) => acc + item.price, 0);
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [usernameLogin.shoppingCard]);

  return (
    <header>
      <nav className='border-gray-200 py-1 bg-gray-100 bg-opacity-5'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <div to='https://flowbite.com' className='flex items-center gap-1'>
            <img
              src={'http://127.0.0.1:8000/LOGO'}
              className='rounded-full mr-3 h-6 sm:h-9'
              alt='Flowbite Logo'
            />
            {usernameLogin.username !== undefined && (
              <>
                <div className='btn-top extend-btn cursor-pointer btn group flex items-center relative justify-center hover:w-32 h-10 w-10 text-gray-800 bg-green-600 rounded-full transition-all duration-300'>
                  <FontAwesomeIcon icon={faShoppingCart} className='text-gray-200' />
                  <span className='hidden group-hover:inline ml-2 text-gray-200'>سبد خرید</span>
                  {usernameLogin.shoppingCard?.length > 0 && (
                    <div className='bg-red-600 rounded-full w-5 h-5 text-gray-300 absolute flex justify-center items-center' style={{ fontSize: '10px', top: '-5px', right: '-5px' }}>
                      <span className='translate-y-0.5'>{usernameLogin.shoppingCard.length}</span>
                    </div>
                  )}
                  {usernameLogin.shoppingCard.length != 0 &&
                    <table id='' className='b absolute left-0 top-10 min-w-[350px] z-30 bg-white p-4 rounded-sm shadow-lg'>
                      <tbody>
                        {usernameLogin.shoppingCard.map((item) => (
                          <div className='flex items-center gap-3 justify-center border-b-[1px] w-full'>
                            <div className='flex flex-col'>
                              <span>{item.price}</span>
                              <span className='text-[12px]'>هزارتومان</span>
                            </div>
                            <span className='text-[15px]'>{item.information}</span>
                            <img src={`http://127.0.0.1:8000/image?id=${item.img}`} className='w-12 my-2' alt="" />
                            <FontAwesomeIcon icon={faXmark} className=' p-1 hover:bg-gray-400 rounded-md transition-all' />
                          </div>
                        ))}
                        <div className='mt-3 flex justify-around items-center'>
                          <div className='flex flex-row gap-1'>
                            <span className='text-[12px]'>هزارتومان</span>
                            <span>{total}</span>
                          </div>
                          <div className='flex gap-2 items-center'>
                            <span>:مجموع</span>
                            <button className='px-1 rounded-md py-1 btn bg-orange-500 text-white'>تصفیه حساب</button>
                          </div>
                        </div>
                      </tbody>
                    </table>
                  }
                </div>


                <div className='relative btn-top group cursor-pointer flex items-center justify-center hover:w-32 h-10 w-10 text-gray-800 bg-green-600 rounded-full transition-all duration-300'>
                  <FontAwesomeIcon icon={faHeart} className='text-gray-200' />
                  <span className='hidden group-hover:inline ml-2 text-gray-200'>علاقه مندی</span>
                  {usernameLogin.interest?.length > 0 && (
                    <div className='bg-red-600 rounded-full w-5 h-5 text-gray-300 absolute flex justify-center items-center' style={{ fontSize: '10px', top: '-5px', right: '-5px' }}>
                      <span className='translate-y-0.5'>{usernameLogin.interest.length}</span>
                    </div>
                  )}
                  {usernameLogin.interest != undefined &&
                    <table id='' className='b absolute left-0 top-10 min-w-[300px] z-30 bg-white p-4 rounded-sm shadow-lg'>
                      <tbody>
                        {usernameLogin.interest.map((item) => (
                          <div className='flex items-center justify-center gap-3 border-b-[1px] w-full'>
                            <span className='text-[15px]'>{item.information}</span>
                            <img src={`http://127.0.0.1:8000/image?id=${item.img}`} className='w-12 h-12 my-2' alt="" />
                            <FontAwesomeIcon icon={faXmark} className='p-1 hover:bg-gray-400 rounded-md transition-all' />
                          </div>
                        ))}
                      </tbody>
                    </table>
                  }
                </div>
              </>
            )}
          </div>

          {/* User Login Button or Login/Signup Links */}
          {usernameLogin.username !== undefined ? (
            <button
              onClick={() => setHidden(prev => !prev)}
              className='bg-blue-700 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'
            >
              {usernameLogin.username}
            </button>
          ) : (
            <div className='flex items-center lg:order-2'>
              <NavLink
                to='/login'
                onClick={() => setHidden(true)}
                className='border focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-400 transition-all hover:text-black focus:outline-none dark:focus:ring-gray-800'
              >
                ورود
              </NavLink>
              <NavLink
                to='/signup'
                onClick={() => setHidden(true)}
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
                onClick={() => setHidden(prev => !prev)}
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

          {/* Mobile menu */}
          <div className={`${hidden ? 'hidden' : ''} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`} id='mobile-menu-2'>
            <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 gap-3'>
              <li>
                <NavLink
                  to='/'
                  className='p-2 block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 lg:dark:hover:bg-transparent dark:border-gray-700'
                >
                  <div className='p-2 flex justify-center items-center'>خانه</div>
                </NavLink>
              </li>
              {usernameLogin.username !== undefined && (
                <li>
                  <NavLink
                    to='#'
                    className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'
                  >
                    <div
                      onClick={() => setUsernameLogin({})} // Logout functionality  
                      className='flex justify-center items-center gap-3 hover:bg-slate-500 p-2 rounded-md cursor-pointer'
                    >
                      <h3>خروج</h3>
                      <CiLogout className='mt-1' />
                    </div>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
