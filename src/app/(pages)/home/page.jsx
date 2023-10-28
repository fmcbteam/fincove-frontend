import React from 'react';
import Link from 'next/link';
import FieldInput from '../../../components/atoms/passwordField'

const Home = () => {
    return (
        <div className='flex min-h-screen flex-col items-center justify-between p-24'>
            <Link href="/" className='border border-slate-400 hover:border-slate-500 hover:bg-white p-4 rounded-md'>
                <p>This is the FinCove Home Page</p>
                <h3 className='font-semibold pt-2'>Go back</h3>
            </Link>
            <FieldInput />
        </div>
    )
}

export default Home;