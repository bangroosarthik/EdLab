'use client';
import Link from "next/link"
import Image from "next/image"
import {useState} from "react"; 
import { signIn } from "next-auth/react";
export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress]=useState(false);
        async function handleFormSubmit(ev){
            ev.preventDefault();
            setLoginInProgress(true);
            await signIn('credentials',{email,password,callbackUrl:'/'})
            setLoginInProgress(false);
        }   
    return (
        <section className="mt-8">
            <h1 className="text-center text-blue-600 text-4xl mb-4 my-20">
                Login
            </h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit} >
                    <input type="email" placeholder="email" value={email}
                    
                    onChange={ev => setEmail(ev.target.value)} disabled={loginInProgress}/>
                <input type="password" placeholder="password" value={password}
                    
                        onChange={ev => setPassword(ev.target.value)} disabled={loginInProgress}/>
                <button type="submit" disabled={loginInProgress}>
                Login
                </button>
                
                <button type="button" onClick={async () => await signIn('google',{callbackUrl:'/'})} className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={''} width={24} height={24} />
                    Login with Google
                </button>

                <div className="text-center my-4 text-gray-500 border-t pt-4">
                Dont Have an account?{' '}
                <Link className="underline" href={'/register'}>Register here &raquo;</Link>
                </div>
            </form>
        </section>
    )
}