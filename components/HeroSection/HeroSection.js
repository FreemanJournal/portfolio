export default function HeroSection() {
  
    return (
        <section className="bg-gray-50">
            <div className=" px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <div className=" mx-auto px-10 md:px-32">
                    <p className='text-slate-600 font-bold'>Hi, my name is</p>
                    <h1 className="text-3xl text-emerald-400 font-extrabold sm:text-5xl">
                        Md Ishaq
                    </h1>
                    <h1 className="text-2xl text-slate-400 mt-5 font-extrabold">
                        I  can assist you to develop a website that deliver value to your customer
                    </h1>

                    <p className="mt-4 sm:leading-relaxed sm:text-xl">
                        I am a front-end web developer. I work on MERN stack based applications. My major focus is building secure, sustainable, simple and optimized applications for my respective client. Using the smallest amount of data and giving the best user experience is one of the key challenges of my job. I am very passionate about exploring different tools and technology to improve my development quality.
                    </p>

                    <div className="flex flex-wrap  gap-4 mt-8">
                        <a className="relative inline-block text-sm font-medium text-emerald-600 group active:text-emerald-500 focus:outline-none focus:ring" href="/download">
                            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-emerald-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                            <span className="relative block px-8 py-3 bg-white border border-current">
                                Contact me
                            </span>
                        </a>
                        <a className="relative inline-block text-sm font-medium text-emerald-600 group active:text-emerald-500 focus:outline-none focus:ring" href="https://drive.google.com/file/d/1-aEzJUoMj7LruZbY-wH9l0WUYfjyqIvp" target="_blank" rel="noreferrer">
                            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-emerald-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                            <span className="relative block px-8 py-3 bg-white border border-current">
                            My Resume
                            </span>
                        </a>
                      

                    </div>
                </div>
            </div>
        </section>
    )
}
