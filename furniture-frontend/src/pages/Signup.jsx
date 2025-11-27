import React,{ useState } from "react";

function Signup() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("Signup Data:",name,email,password);
        alert("Signup Submitted (backend connection next step");

    };
    return(
        <div style={{display:"flex", justifyContent:"center",marginTop:"50px"}}>
            <form
                onSubmit={handleSubmit}
                style={{
                    width:"350px",
                    padding:"20px",
                    border:"1px solid #ccc",
                    borderRadius:"10px",
                    boxShadow:"0 0 10px rgba(0,0,0,0.1)"

                }}
            >
                <h2 Style={{ textAlign:"center"}}>Create Account</h2>
                <lable>Name:</lable>
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{width:"90%",padding:"10px",marginBottom:"10px" }}
                />
                <lable>Email:</lable>
                <input 
                    type='email'
                    value={email}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{width:"90%",padding:"10px",marginBottom:"10px" }}
                />
                <lable>Password:</lable>
                <input 
                    type='password'
                    value={password}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{width:"90%",padding:"10px",marginBottom:"10px" }}
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
                        cursor:"pointer",
                        justifyContent:"center",
                    }}
                >
                    Signup
                </button>
                
            </form>
        </div>
    )
}

export default Signup;