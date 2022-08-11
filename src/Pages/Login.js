import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

export const Login = () => {

    const elEmail = useRef()
    const elPassword = useRef()
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault()

        fetch('https://reqres.in/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                email: elEmail.current.value,
                password: elPassword.current.value
            })
        })
            .then(res => res.json())
            .then((data) => {
                if (data) {
                    window.localStorage.setItem("token", data.token)
                    navigate("/")
                }
            })
            .catch((err) => console.log(err));
    }


    return (
        <>
            <div className="login">
                <h1>Kino Portal</h1>
                <form onClick={handleForm}>
                    <input ref={elEmail} type="email" autoComplete="off" placeholder="Email..." /><br /><br />
                    <input ref={elPassword} type="password" placeholder="Password" /><br /><br />
                    <button type="submit">Send</button>
                </form>
            </div>
        </>
    )
}