const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 flex flex-col items-center justify-center py-8 px-4 mt-16">
            <div className="max-w-3xl text-center bg-white p-8 rounded-lg shadow-xl mt-8">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-6 text-[#FF6600]">Big Bite: Your Food, Your Way</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Big Bite is your go-to food ordering app, delivering your favorite meals straight to your door. Powered by
                    React and styled with Tailwind CSS, we offer a seamless and modern experience to order food from local
                    restaurants with ease.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                    Thanks to real-time menu updates pulled from the Swiggy API, Big Bite keeps you up-to-date with the latest
                    dishes, ensuring you always have fresh and exciting options available.
                </p>
                <div className="bg-[#FF6600] shadow-lg p-6 rounded-lg mt-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Big Bite?</h2>
                    <ul className="list-disc list-inside text-lg text-white">
                        <li>Explore a diverse menu of delicious food items, ranging from quick bites to full meals.</li>
                        <li>Get real-time updates on available menu items from local restaurants.</li>
                        <li>Enjoy a user-friendly interface that makes food ordering fast and fun!</li>
                        <li>Benefit from our responsive design, optimized for both mobile and desktop views.</li>
                    </ul>
                </div>
                <p className="text-lg text-gray-700 mt-6">
                    Whether you're ordering lunch at work or dinner with family, Big Bite makes it easy to discover new flavors,
                    place your order, and satisfy your hunger in no time!
                </p>
            </div>
        </div>
    );
};

export default About;
