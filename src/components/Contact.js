const Contact = () => {
    return (
        <div className="min-h-screen mt-8 bg-gradient-to-r from-teal-500 to-teal-700 flex items-center justify-center py-12 px-6">
            <div className="max-w-4xl w-full bg-white p-10 rounded-lg shadow-2xl flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 mt-16">  {/* Added mt-12 here for margin top */}
                
                {/* Left Side - Explanation */}
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-5xl font-extrabold text-[#FF6600] mb-6">Contact BigBite</h1>
                    <p className="text-lg text-gray-800 mb-6">
                        We're always happy to hear from our customers. Whether you have a question, feedback, or need assistance with an order, our team is here to help.
                    </p>
                    <div className="mb-6">
                        <p className="text-xl text-gray-700 font-semibold">Customer Support: <span className="text-[#FF6600]">9027280351</span></p>
                        <p className="text-xl text-gray-700 font-semibold mt-2">Email Us: <span className="text-[#FF6600]">bigbite@company.in</span></p>
                    </div>
                    <div className="bg-[#FF6600] p-6 rounded-lg shadow-lg mb-6">
                        <h2 className="text-2xl font-semibold text-white mb-4">Customer Support Hours</h2>
                        <p className="text-lg text-white">
                            Our team is available 7 days a week, ready to assist you with any issues or inquiries. We aim to make your food ordering experience seamless.
                        </p>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-teal-700 mb-4">Send Us a Message</h2>
                    <p className="text-lg text-gray-800 mb-6">
                        Fill out the form below, and we'll get back to you as soon as possible. Your feedback is important to us.
                    </p>
                    <form className="space-y-6">
                        <div className="flex flex-col">
                            <label className="text-gray-700" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="px-4 py-3 border border-[#FF6600] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition-all duration-300 hover:bg-gray-50"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700" htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                className="px-4 py-3 border border-[#FF6600] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition-all duration-300 hover:bg-gray-50"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-gray-700" htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                className="px-4 py-3 border border-[#FF6600] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6600] transition-all duration-300 hover:bg-gray-50"
                                placeholder="Write your message here"
                                rows="4"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#FF6600] text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
