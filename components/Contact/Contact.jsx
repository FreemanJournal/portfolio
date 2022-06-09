import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
export default function Contact() {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = (value) => {
        toast.info('Please wait...', { toastId: 'wait' })
        const templateParams = {
            to_name: 'Md Ishaq',
            from_name: value.name,
            message: value.message
        };

        emailjs.send('service_r7bdgx8', 'template_2mcyrda', templateParams, '8yJiV6u2HRsiBI7FM')
            .then((response) => {
                toast.success('Your message sent successfully!')
                reset();
            }, (err) => {
                // console.log('FAILED...', err);
                toast.error('Please try again!', { toastId: "Fail" })
            });
    }
    return (
        <section className="text-slate-600 bg-gray-50" id='contact'>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-lg mx-auto text-center ">
                    <h2 className="text-3xl font-bold sm:text-4xl">Contact Me</h2>
                    <hr />
                    <p className="mt-4 text-slate-600 bold">
                   
                        Feel free to contact me with any inquiry
                    </p>
                </div>

                <section className="bg-gray-50">
                    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                            <div className="lg:py-12 lg:col-span-2">


                                <div className="mt-8">
                                    <a href="" className="text-xs font-bold text-emerald-400"> +8801985257752 </a>

                                    <address className="mt-2 not-italic">Netrokona,Bangladesh-2410</address>
                                </div>
                            </div>

                            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div>
                                        <label className="sr-only" for="name">Name</label>
                                        <input className="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Name" type="text" id="name" required {...register("name")} />
                                    </div>

                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label className="sr-only" for="email">Email</label>
                                            <input
                                                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                                placeholder="Email address"
                                                type="email"
                                                id="email"
                                                required
                                                {...register("email")}
                                            />
                                        </div>

                                        <div>
                                            <label className="sr-only" for="phone">Phone</label>
                                            <input
                                                className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                                placeholder="Phone Number (optional)"
                                                type="tel"
                                                id="phone"
                                                {...register("phone")}
                                            />
                                        </div>
                                    </div>



                                    <div>
                                        <label className="sr-only" for="message">Message</label>
                                        <textarea
                                            className="w-full p-3 text-sm border-gray-200 rounded-lg"
                                            placeholder="Message"
                                            rows="8"
                                            id="message"
                                            required
                                            {...register("message")}
                                        ></textarea>
                                    </div>

                                    <div className="mt-4">
                                        <button type="submit" className="relative float-right inline-block text-sm font-medium text-emerald-600 group active:text-emerald-500 focus:outline-none focus:ring" href="https://drive.google.com/file/d/1-aEzJUoMj7LruZbY-wH9l0WUYfjyqIvp" target="_blank" rel="noreferrer">
                                            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-emerald-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                                            <span className="relative block px-8 py-3 bg-white border border-current">
                                                Send
                                            </span>
                                        </button>
                                         {/* <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-slate-500 hover:bg-slate-600 rounded-lg sm:w-auto"
                                        >
                                            <span className="font-medium"> Send</span>


                                        </button> */}
                                    </div> 
                                </form>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </section>
    )
}
