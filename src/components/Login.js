import Image from "next/image"
import {signIn} from "next-auth/client"

function Login() {
    return (
        <div className="grid place-items-center">
            <Image
                src="https://links.papareact.com/t4i"
                width={400}
                height={400}
                objectFit="contain"
                alt=""
            />
            <h1 onClick={signIn} className="bg-blue-500 text-white cursor-pointer rounded-full p-5 text-center">Login with Facebook</h1>
        </div>
    )
}

export default Login
Login