import React , { useState } from 'react';


 function Login() {

  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const handleSubmmit = (e) => {
    e.preventDefault();
    console.log("Login Data:",email,password);
    alert("Login Submited (backend connection next step");
  };

  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"50px"}}>
      <form 
        onSubmit={handleSubmmit}
        style={{
          width:"350px",
          padding:"20px",
          border:"1px solid #ccc",
          borderRadius:"10px",
          boxShadow:"0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{textAlign:"center"}}>Login</h2>
        <lable>Email</lable>
        <input 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{width:"90%",padding:"10px",marginBottom:"10px"}}
        />
        <input 
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{width:"90%",padding:"10px",marginBottom:"10px"}}
        />
        <button 
          type="submit"
          style={{
            width:"90%",
            padding:"10px",
            background:"black",
            color:"white",
            border:"none",
            borderRadius:"5px",
            cursor:"pointer"
          }}
        >
          Login
        </button>
        <p style={{marginTop:"10px",textAlign:"center"}}>
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
}
export default Login;
