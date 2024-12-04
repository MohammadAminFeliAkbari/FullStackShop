import { useState } from "react";  
import { useNavigate } from "react-router-dom"; // Import useNavigate if you're using React Router  

export default function Forget({ preName }) {  
  const [password, setPassword] = useState('');  
  const navigate = useNavigate(); // Initialize useNavigate  

  const handleSubmit = async (e) => {  
    e.preventDefault();  

    const url = `http://127.0.0.1:8000/login?username=${preName}`;  
    const urlForChangePassword = `http://127.0.0.1:8000/login?username=${preName}&password=${password}`;  

    try {  
      const response = await fetch(url);  

      if (response.ok) {  
        const data = await response.json();  
        console.log(data);  

        if (data.success === true) {  
          console.log('ok');   
          // Here you would typically change the password  
          const changePasswordResponse = await fetch(urlForChangePassword, {  
            method: "POST" // Assuming you might need to POST the password  
          });  
          if (changePasswordResponse.ok) {  
            navigate("/"); // Navigate after successful change  
          }  
        } else {  
          // Handle case when success is false  
          console.log('Login failed');  
        }  
      } else {  
        console.error('Failed to fetch data');  
      }  
    } catch (error) {  
      console.error('An error occurred:', error);  
    }  
  };  

  return (  
    <form onSubmit={handleSubmit}>  
      <h1>Hello</h1>  
      <input  
        type="password"  
        value={password}  
        onChange={(e) => setPassword(e.target.value)}  
        placeholder="Enter new password"  
      />  
      <button type="submit">Submit</button>  
    </form>  
  );  
}