import React, { useState, useEffect } from "react";
import pic1 from "./assets/18_2_6.jpg";
import pic2 from "./assets/1.jpg";
import pic3 from "./assets/a.gif";
import pic4 from "./assets/4.jpg";
import pic5 from "./assets/i.gif";
import pic6 from "./assets/b.gif";
import pic7 from "./assets/pic7_6_3.gif";
import pic8 from "./assets/7.jpg";
import pic9 from "./assets/c.gif";
import pic10 from "./assets/f.gif";
import pic11 from "./assets/m.gif";
import pic12 from "./assets/pic7_6_4.gif";
import pic13 from "./assets/18_2_4.gif";
import pic14 from "./assets/2.jpg";
import pic15 from "./assets/n.gif";
import pic16 from "./assets/j.gif";
import pic17 from "./assets/g.gif";
import pic18 from "./assets/5.jpg";
import pic19 from "./assets/k.gif";
import pic20 from "./assets/letter-1.png";
import pic21 from "./assets/h.gif";
import pic22 from "./assets/pic7_6_2.gif";
import pic23 from "./assets/3.jpg";
import pic24 from "./assets/1735473963250.jpg";
import pic25 from "./assets/l.gif";
import pic26 from "./assets/d.gif";
import pic27 from "./assets/20_11_9.gif";
import pic28 from "./assets/e.gif";
import pic29 from "./assets/14.jpg";
import pic30 from "./assets/11.jpg";

const images = [
  pic1, pic2, pic3, pic4, pic5, pic6,
  pic7, pic8, pic9, pic10, pic11, pic12,
  pic13, pic14, pic15, pic16, pic17, pic18,
  pic19, pic20, pic21, pic22, pic23, pic24,
  pic25, pic26, pic27, pic28, pic29, pic30,
];

const NewYearCelebration = () => {
  const [showPoppers, setShowPoppers] = useState(true);
  const [animationStage, setAnimationStage] = useState('initial');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    // Check if it's New Year 2025
    const checkNewYear = () => {
      const now = new Date();
      const newYear = new Date('2025-01-01T00:00:00');
      const isAfterNewYear = now >= newYear;
      setIsNewYear(isAfterNewYear);
      return isAfterNewYear;
    };

    // Update countdown timer
    const updateTimer = () => {
      const now = new Date();
      const newYear = new Date('2025-01-01T00:00:00');
      const difference = newYear.getTime() - now.getTime();

      if (difference <= 0) {
        setIsNewYear(true);
        startNewYearAnimation();
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const startNewYearAnimation = () => {
      setTimeout(() => setAnimationStage('opening'), 1000);
      setTimeout(() => setAnimationStage('revealing'), 2000);
      setTimeout(() => setAnimationStage('complete'), 3000);
      setTimeout(() => setShowPoppers(false), 5000);
    };

    // Initial check
    if (checkNewYear()) {
      startNewYearAnimation();
    } else {
      const timerInterval = setInterval(updateTimer, 1000);
      updateTimer(); // Initial update
      return () => clearInterval(timerInterval);
    }
  }, []);

  const NewYearContent = () => (
    <>
      {showPoppers && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-popper"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                animationDuration: `${1.5 + Math.random()}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}
      <div className="fixed inset-0 bg-black/90 overflow-hidden">
        {[...Array(5)].map((_, rowIndex) => {
          const rowImages = images.slice(rowIndex * 6, rowIndex * 6 + 6);
          return (
            <div
              key={`row-${rowIndex}`}
              className="flex animate-scroll-x whitespace-nowrap"
              style={{
                animation: `scrollX ${20 + rowIndex * 5}s linear infinite${rowIndex % 2 === 0 ? "" : " reverse"}`,
              }}
            >
              {[...rowImages, ...rowImages].map((image, imgIndex) => (
                <div key={`row-img-${imgIndex}`} className="w-64 h-40 flex-shrink-0 p-2">
                  <img
                    src={image}
                    alt={`Row ${rowIndex} Image ${imgIndex}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          );
        })}

        {/* Message and Envelope Container */}
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Envelope */}
          <div 
            className={`absolute w-full max-w-2xl transition-all duration-1000 ${
              animationStage === 'initial' ? 'scale-0' : 'scale-100'
            } ${animationStage === 'complete' ? 'opacity-0' : 'opacity-100'}`}
          >
            {/* Envelope flap */}
            <div 
              className={`absolute inset-x-0 -top-16 h-16 bg-pink-600 origin-bottom transition-transform duration-1000 z-20 ${
                animationStage === 'opening' || animationStage === 'revealing' ? 'rotate-180' : 'rotate-0'
              }`}
              style={{
                clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
              }}
            />
            
            {/* Envelope body */}
            <div 
              className={`bg-pink-500 p-4 rounded-lg shadow-xl transition-transform duration-1000 ${
                animationStage === 'revealing' ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
              }`}
            >
              <div className="h-96 bg-pink-200 rounded-lg"></div>
            </div>
          </div>

          {/* Message */}
          <div 
            className={`w-full max-w-2xl transition-all duration-1000 ${
              animationStage === 'complete' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Happy New Year 2025! 🎉</h2>
              <p className="text-xl text-white/90 mb-4">
                Another year together and many more to come, another chapter of our beautiful story. 
                Thank you for being my everything. Cheers to many more memories together! ❤️
                The end of 2024 was not as exciting as we thought but we will make our 2025 more cheerful many more memories and growing together academically
                and as a person also aiming to be together this year finally if things go as planned. I love you my Love a lottt..
              </p>
              <p className="text-xl font-bold text-white/90">
                YOU ARE MY FIRST AND YOU'LL BE MY LAST 🩷✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const CountdownTimer = () => (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="bg-white/10 backdrop-blur-sm p-12 rounded-xl text-center max-w-3xl mx-4">
        <h2 className="text-5xl font-bold text-white mb-12">Waiting for 2025</h2>
        <div className="flex gap-8 justify-center mb-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">{String(timeLeft.days).padStart(2, '0')}</div>
            <div className="text-white/70 text-lg">Days</div>
          </div>
          <div className="text-5xl font-bold text-white/30 mb-2">:</div>
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">{String(timeLeft.hours).padStart(2, '0')}</div>
            <div className="text-white/70 text-lg">Hours</div>
          </div>
          <div className="text-5xl font-bold text-white/30 mb-2">:</div>
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">{String(timeLeft.minutes).padStart(2, '0')}</div>
            <div className="text-white/70 text-lg">Minutes</div>
          </div>
          <div className="text-5xl font-bold text-white/30 mb-2">:</div>
          <div className="text-center">
            <div className="text-6xl font-bold text-white mb-2">{String(timeLeft.seconds).padStart(2, '0')}</div>
            <div className="text-white/70 text-lg">Seconds</div>
          </div>
        </div>
        <p className="text-white/80 text-xl">Until your special message arrives... 💌</p>
      </div>
    </div>
  );

  return (
    <div className="h-screen">
      {isNewYear ? <NewYearContent /> : <CountdownTimer />}
      <style>{`
        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes popper {
          0% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          100% {
            transform: scale(0.8) translateY(300px);
            opacity: 0;
          }
        }
        .animate-popper {
          animation: popper ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NewYearCelebration;