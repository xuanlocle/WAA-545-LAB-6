import axios from "axios"
import { useRef } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router"


const Login = (props) => {

    const navigate = useNavigate()
    const formRef = useRef()

    const handleLogin = (event) => {
        event.preventDefault();

        const form = formRef.current;
        const formData = {
            email: form['email'],
            password: form['password']
        }
        onLogin(formData);
    }

    const onLogin = (formData) => {
        axios.post(
            'http://localhost:8080/api/v1/authentication',
            {
                headers: { "Access-Control-Allow-Origin": "*" },
                ...formData
            }
        ).then(res => {
            console.log(`login successfully`)
            navigate('/')
        }).catch(err => {
            console.error(err)
            navigate('/')
        })

    }

    return (
        <>
            <Form ref={formRef} className="m-5" onSubmit={handleLogin}>
                <Form.Label>Sign In</Form.Label>
                <Form.Control required type="email" id='email' className="mt-2" placeholder="Email" />
                <Form.Control required type="password" id='password' className="mt-2" placeholder="Password" />
                <Button className="mt-3" variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>
    )
}

export default Login