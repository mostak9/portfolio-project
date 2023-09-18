import {IoMdDocument} from 'react-icons/io'
import {MdEmail} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16 flex flex-col lg:flex-row gap-10">
            <div className='w-1/3 flex flex-col gap-9'>
                <div className='p-6 shadow-lg shadow-black hover:shadow-none'>
                    <h1 className="text-4xl font-bold">Hi, I'm <span className="text-sky-600">Mostak Ahmed</span></h1>
                    <p className="mt-4 font-medium text-xl">Front-end Web developer from Bangladesh</p>
                    <div className='mt-9 space-y-3'>
                        <p className='flex items-center gap-2 text-xl'><IoMdDocument className='text-3xl text-sky-600'></IoMdDocument> Front-end Web Developer</p>
                        <p className='flex items-center gap-2 text-xl'><MdEmail className='text-3xl text-sky-600'></MdEmail>mostak.ahm263@gamil.com</p>
                        <p className='flex items-center gap-2 text-xl'><ImLocation className='text-3xl text-sky-600'></ImLocation>Saidpur, Nilphamari,Bangladesh</p>
                    </div>
                </div>
                <div className='flex-grow shadow-lg shadow-black hover:shadow-none p-6'>
                    <p className='text-xl'>Download My Resume:</p>
                    <p className='mt-8 flex gap-4'>
                        <button className='uppercase font-semibold border-sky-600 border-2 text-sky-600 px-5 py-4 hover:border-none hover:bg-sky-600 hover:text-white'>Download Resume</button>
                        <button className='uppercase font-semibold border-sky-600 border-2 text-sky-600 px-5 py-4 hover:border-none hover:bg-sky-600 hover:text-white'>Contact</button>
                    </p>
                </div>
            </div>
            <div className='flex-1 flex justify-end items-center p-9 shadow-lg shadow-black hover:shadow-none'>
                <img src="https://i.ibb.co/svBZ1Xp/short.png" alt="Banner img" className='w-full' />
            </div>
        </div>
    );
};

export default Banner;