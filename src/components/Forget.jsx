import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate if you're using React Router  
import { AppContext } from "../App";

export default function Forget() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState()
  const navigate = useNavigate();
  const { setUsernameLogin } = useContext(AppContext)


  const checkCorrentUsername = async (username) => {
    const url = `http://127.0.0.1:8000/forget?username=${username}`;

    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        console.log(data);

        if (data.success === true)
          setUsername(username);
        else
          setUsername();

      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

  }

  let errorLengthPassword;
  if (password.length < 8 && password.length != 0)
    errorLengthPassword = (<p className="text-red-600 text-right my-2">رمز عبور حداقل باید 8 کاراکتر باشد</p>)
  else errorLengthPassword = null;


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!errorLengthPassword && username && password) {
      const urlForChangePassword = `http://127.0.0.1:8000/forget/change?username=${username}&password=${password}`;

      try {
        const response = await fetch(urlForChangePassword)
        setUsernameLogin(username)
        navigate('/')
      } catch (error) {

      }
    }
  };

  return (
    <div className="flex items-center justify-center py-4 bg-purple-400">
      <form onSubmit={handleSubmit} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-full max-w-sm justify-center rtl m-3 hover:shadow-xl transition-all">
        <h2 className="text-lg font-semibold mb-4">فراموشی رمز عبور</h2>
        <input
          type="text"
          onChange={(e) => checkCorrentUsername(e.target.value)}
          placeholder="یوزرنیم قبلی"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {username ? (
          <>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمزعبور جدید خود را وارد کنید"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errorLengthPassword}
            <button
              type="submit"
              onClick={handleSubmit}
              className={`${errorLengthPassword ? '' : 'mt-3'} w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 hover:scale-105`}
            >
              تغییر رمز عبور
            </button>
          </>
        ) : null}
      </form>
    </div>
  );
}