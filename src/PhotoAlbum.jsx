import React, { useState } from 'react';
import { Heart, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react';
import pic22_1 from "./assets/1735473963242.jpg";
import pic22_2 from "./assets/1735473963272.jpg";
import pic22_3 from "./assets/1735473963280.jpg";
import pic22_4 from "./assets/1735473963250.jpg";
import pic22_5 from "./assets/1735473963257.jpg";
import pic22_6 from "./assets/1735473963287.jpg";
import pic22_7 from "./assets/Snapchat-355946404.gif";
import pic18_2_1 from "./assets/18_2_1.jpg"
import pic18_2_2 from "./assets/18_2_2.jpg"
import pic18_2_3 from "./assets/18_2_3.png"
import pic18_2_4 from "./assets/18_2_4.gif"
import pic18_2_5 from "./assets/18_2_5.gif"
import pic18_2_6 from "./assets/18_2_6.jpg"
import pic18_2_7 from "./assets/18_2_7.jpg"
import pic18_2_8 from "./assets/18_2_8.jpg"
import pic18_2_9 from "./assets/18_2_9.jpg"
import pic7_6_1 from "./assets/pic7_6_1.jpg"
import pic7_6_2 from "./assets/pic7_6_2.gif"
import pic7_6_3 from "./assets/pic7_6_3.gif"
import pic7_6_4 from "./assets/pic7_6_4.gif"
import pic7_6_5 from "./assets/pic7_6_5.gif"
import pic7_6_6 from "./assets/pic7_6_6.gif"
import pic7_6_7 from "./assets/pic7_6_7.jpg"
import pic7_6_8 from "./assets/pic7_6_8.jpg"
import pic7_6_9 from "./assets/pic7_6_9.jpg"
import pic7_6_10 from "./assets/pic7_6_10.gif"
import pic7_6_11 from "./assets/pic7_6_11.gif"
import pic7_6_12 from "./assets/pic7_6_12.jpg"
import pic7_6_13 from "./assets/pic7_6_13.gif"
import pic7_6_14 from "./assets/pic7_6_14.gif"
import pic20_11_1 from "./assets/20_11_1.jpg"
import pic20_11_2 from "./assets/20_11_2.gif"
import pic20_11_3 from "./assets/20_11_3.png"
import pic20_11_4 from "./assets/20_11_4.gif"
import pic20_11_5 from "./assets/20_11_5.gif"
import pic20_11_6 from "./assets/20_11_6.gif"
import pic20_11_7 from "./assets/20_11_7.gif"
import pic20_11_8 from "./assets/20_11_8.png"
import pic20_11_9 from "./assets/20_11_9.gif"
import pic20_11_10 from "./assets/20_11_10.gif"
import pic20_11_11 from "./assets/20_11_11.png"
import pic20_11_12 from "./assets/20_11_12.jpg"
import pic20_11_13 from "./assets/20_11_13.jpg"
import pic20_11_14 from "./assets/20_11_14.jpg"
import pic20_11_15 from "./assets/20_11_15.jpg"
import b from "./assets/b.gif"
import c from "./assets/c.gif"
import d from "./assets/d.gif"
import f from "./assets/f.gif"
import i from "./assets/i.gif"
import letter from "./assets/letter.png"

// import NewYear from "./NewYearCelebration.jsx"
import { useNavigate } from 'react-router-dom';

const PhotoAlbum = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const memories = [
    { 
      date: "22nd December 2023", 
      description: "Our first Date together ❤️", 
      moments: [
        {
          imageUrl: pic22_7,
          message: "Remeber you clicked this hand holding snao to send it to your friends hehe.. or iss walk ke time hum bas chale jaare random kuch bhi baat kar rahe the and i was trying to hug you kiss you but log aaye jaare the fattri thi kyuki first time tha alott of thoughts were going on inside our head but i love this part awkwardness dur hogayi thi apni."
        },
        {
          imageUrl: pic22_1,
          message: "We exchanged flowers and you gave me your favourite book my mark manson `THE SUBTLE ART OF NOT GIVING A BOOK` but after this I got to know i am not much of a reader i know you must have feel a bit disappointed i still have this flower with me probably not in a very good condition But it means a lot to me"
        },
        {
          imageUrl: pic22_2,
          message: "Ahh yess!! the flower i gave you umm this was not daisy but same same hehe isiliye I gifted you this. I love you so much and i know you still have this safe with you."
        },
        {
          imageUrl: pic22_3,
          message: "This memorable pic of us holding hands finally in infinite cafe this place is really close to both us we have memories atached to this place I love the vibe chill and good food they have Here or humne order kiya jo humse har baar ki tarah khaaya nahi jaa rha tha kese se hai hum ek meal bhi dhang se khatam nahi kar paate upar se tu subah se bhooki thi sharam nahi aati tereko? I Love this PIC and YOU so much"
        },
        {
          imageUrl: pic22_4,
          message: "AHHHHHHHHHHHHHHHHHHHHHHHH THISSSSSSSSSS BEAUTIFULLLLLLLL BITCH !!!!!!!!!!!!!!!!!! i clicked this pic in bina tereko pta lage and turns out in the end this is only pic we have of us i mean individual or togther hum dono nalle saath click karna hi bhool gaye huhuhh... But bhyi kitni sundar hai tu i wish ye phone na aaa hota beech me then it would have been the best"
        },
        {
          imageUrl: b,
          message:"Remember this stage tod dance? 🤣 tune mujhe dikhayi thi infinite me bethe bethe and we laughed alott hehe.. ye dekh ke stage tod rahi ho 🤣"
        },
        {
          imageUrl: pic22_5,
          message: "This pic shows the game of life and death WHO WILL INITIATE THE KISS??? and bete mei jaan bhooj ke haara tha isme kyuki I have to kiss to proove that I love you"
        },
        {
          imageUrl: pic22_6,
          message: "or ye chota sa screenshot jo mila mujhe jo btata hai ki meri mummy bhi shaamil thi humme milane me 🤣"
        }
        
      ],
      story: "Our First Date how can I forget this. Every moment spent with you made me fall deeper in love. The level of nervousness we both have or milne ke baad or bhi jyada but i kind of relaxed milke pta nahi kyu tereko dekhte hi sukoon sa aa gaya tha but anyways tere saath lamba walk karna even though we were both shy samjh nahi aara tha kya bole bas chale jaare and then we had the best time in the cafe also the first time or meri fati padi thi ki jaane se pehle kiss karni hai varna sab khatam maan legi ye pagli huhhh.. but still i am so happy we had that kiss and finally officially I made you believe ki I love you and You love me or or best part infinite was pasta fuck 🤣. Best date can't even forget this day ever in my Life."
    },
    { 
      date: "18th February 2024", 
      description: "2nd Date 🌼",
      moments: [
        {
          imageUrl: pic18_2_1,
          message: "yakeen nahi hota uss din feb me itni dhundh thi thrill toh a bete terese milne aane ka travel ka travel or tum toh ho hi meri jaan hehe..."
        },
        {
          imageUrl: pic18_2_2,
          message: "ek aur tasveer jo bta rahi hai meri mata ji supports USSSS"
        },
        {
          imageUrl: pic18_2_3,
          message: "This collage shows tum apni outfit pick karva rahi thi mere but daalke aani tumne apni marzi ki hai huhhhh.."
        },
        {
          imageUrl: i,
          message:"Iss baar driving ka theka mene uthaya tha or tum dekho peeche bethke kya maze leri driver duty se chutti paake"
        },
        {
          imageUrl: d,
          message:"Hum nalle park pe ghumte hue try kar rahe hai ki koi privacy wala spot mile hum hug kare lekin koi tha hi nahi bc upar se itne chuhee the na bhaisahab iss jagah tumhari hi fatri thi chuho se hue hue.."
        },
        {
          imageUrl: c,
          message:"2 Beautiful Soul in one frame expect my hairstyle i hate this hair style to the core huhhhh.. kya impression pda hoga tumpe saari personality kharab kardete hai ye chdo isko tum jara cuties ko dekho oye hoye kotne sone lagre aahhaaaa maza hi aa gaya 🧿"
        },
        {
          imageUrl: pic18_2_4,
          message: "ye jab hum pizza ka wait kar rahe the tab click kari thi aapne kitni pyaari lagri ho kiss karte hue oye hoye nazar na lage aapko 🧿"
        },
        {
          imageUrl: pic18_2_5,
          message: "or ye mei noobda kiss bhi dhang se karni nahi aati chomu sa hu mei thoda sa public fear hai baaki toh tum kuch bhi karalo meri jaan hehe.."
        },
        {
          imageUrl: pic18_2_6,
          message: "This is our ICONIC Pic bhai kitni hi jyada pyaariiii hai yeeeeee golu kitni pyaari aari hai tuuuuuuuuu my signature SUCTION KISS sab kuch acha hai iss pic me except my hairs 😢 I LOVEEEE YOUUUU BITCHDIIIII"
        },
        {
          imageUrl: f,
          message:"Kuch nahi jisne bhi kha hai bf apni gf ka nokar hota hai uska live proof hai ye 🤣"
        },
        {
          imageUrl: letter,
          message:"This letter is so so so so so so so close to my heart tum isko chupke se sneak karna chahti thi mere bag but bohot jyada hi nakaam rahe tum bechaari labbu but I LOVE YOUUUUUUUUUUUUUUUUUUU SOOOOOOOOOOOOO MUCHHHHHHHHHHHHH for this letter baby it means a lotttttttttto me. I still remember i had tears in my eyes reading this in the train literally 😢"
        },
        {
          imageUrl: pic18_2_7,
          message: "This is my valentine gift to you my love haan i should have given it to you khud se trust ring ache se dunga dw safely rakhi hui mene apne paas"
        },
        {
          imageUrl: pic18_2_8,
          message: ""
        },
        {
          imageUrl: pic18_2_9,
          message: "This locket and sexy me hehe.. this locket means alott to me thank you for this special valentine gift"
        },
      ],
      story: "Here comes or Second Date or Valentine's Date 14 ko aana tha but meri mumy was like bajrang dal active hota hai dusri city me jaara kuch hogaya toh dhyaan kon rakhega ye vo as usual meri puraane khyaalo or overthinking karne waali maa but chalo she allowed me to come after 14 which i am so much thankful to her kyuki abhi hume mile hue mahina hi hua tha technically and she allowed itna jaldi jo uske baad unhone kiya nahi huhhhh.... but this date was so special kyuki ab ek baar milne ke baad humara pyaar or bhad chuka tha so we were kinda happy and not that nervous unlike you tum toh bete har baar hi nervous hote ho but we went to that garden mera hi decision tha ab now i know garden me vo level ki privacy kabhi nahi mil sakti jo mei sochta tha still we spent some quality time tere together and then we went to movie together for the first time jisme koi random punjabi movie me ghus gaye the gulu gulu karne the hehe or karke half time me bahar kyuki as always time issue huhhh then we went to cafteria ate pizza clicked pictures finally TOGETHER we ate kuch toh alag sa pizza and then hum nikal gaye thoda idhar udhar mall me ghumne or fir kya chupke se private spot pe kuch toh nahi bohot kuch kiya hehe record bhi kiya tha mast tha kissing session hehe and also you gave me my pendant necklace or mera gift late tha sadly huhh.."
    },
    { 
      date: "7th June 2024 ✨", 
      description: "3rd Date",
      moments: [
        {
          imageUrl: pic7_6_1,
          message: "Our picture at miniso meri thodi fatri thi but it was fine this time i was not nervous"
        },
        {
          imageUrl: pic7_6_2,
          message: "This is the proof ki meri daring badh gayi pehle se kiss kar rha hu miniso me 😎"
        },
        {
          imageUrl: pic7_6_3,
          message: "Here is our try out of outfit at max which ofcourse you my darlo picked up it was good but thode bade sizes the"
        },
        {
          imageUrl: pic7_6_4,
          message: "Or ye wala toh bhaisahab can't forget this XXL tha shayad ye itna bada aara tha but this was looking good hehe"
        },
        {
          imageUrl: pic7_6_5,
          message: "After the movie here is me getting to try a swatch of lip gloss on my hand for the very first time hehe.."
        },
        {
          imageUrl: pic7_6_6,
          message: ""
        },
        {
          imageUrl: pic7_6_7,
          message: "Here is the swatch i get but vapas aake pta lga it's not the one you like 😢"
        },
        {
          imageUrl: pic7_6_8,
          message: "AHEM!!"
        },
        {
          imageUrl: pic7_6_9,
          message: "ye vapas jaate hue chitkara university ka board amrotsar me click kiya tha mene "
        },
        {
          imageUrl: pic7_6_10,
          message: "our cute little memories at the station before saying bye"
        },
        {
          imageUrl: pic7_6_11,
          message: ""
        },
        {
          imageUrl: pic7_6_12,
          message: "This cutesy notebook that i gave you hehe.."
        },
        {
          imageUrl: pic7_6_13,
          message: "Ahem !! my nishani"
        },
        {
          imageUrl: pic7_6_14,
          message: "my nishani getting fade 😢"
        }
      ],
      story: "Here Comes our 3rd Date jisme we had plenty of time kyuki first time mei cab karke jaldi waali train se aa rha tha and we had comparatively more time than before and you came picked me up and we went to trillium roam around clicking pictures and you remember you made me try clothes at max store crazy memory it was and then we watched our full length movie together for the first time finally but yes i remember you were not fine kyuki tere periods just start hue the or tu kaafi jyada pain me thi still you didn't show any of that or mostly chupaake bethi thi and we kissed a lot  poori movie ki duration me and it was a good movie though mr ans mrs maahi and after the movie we wnt to our private spot kissed a bit more and thoda risky tha udhar so we went out to nykaa store where you made me to try swatch on my hand a bit daring task for me but now i look back toh lagta hai yaar acha hai chala gya tha maza aaya and it created a unforgettable memory and with this our time was getting over, we quickly grabbed the ice cream jo humne activa par hi share karte hue khaa rha or last bite pe mene hi khaa li thi 🤣 uske station pe we clicked few pictures talked a bit and bid good bye which is the hardest part of our meeting yaar i wish i could never leave your side I LOVE YOU THAT MUCH"
    },
    {
      date: "20th November 2024 (bestest day ever in my life) 💖", 
      description: "Very Special Ocassion with my special person",
      moments:[
        {
          imageUrl: pic20_11_1,
          message: "This is my permanent driver hue hue ..."
        },
        {
          imageUrl: pic20_11_2,
          message: "Trying to proove ki mereko nail paint lagani aati hai 🤣"
        },
        {
          imageUrl: pic20_11_3,
          message: "our beautiful infinite cafe and tasty food with chill vibe"
        },
        {
          imageUrl: pic20_11_4,
          message: "ye meri golu randomly kuch bhi record karte hue mujhe khaate hue"
        },
        {
          imageUrl: pic20_11_5,
          message: "🤣 ek pastry nahi handle hui mere se aisi taisi kardi thi iski fir cover up karne ke liye bolra hu theek hi hai jyada kharab nhi hui 🤣"
        },
        {
          imageUrl: pic20_11_6,
          message: "Achi toh hai meri choice"
        },
        {
          imageUrl: pic20_11_7,
          message: "And finally cake cutting of our birthday together YAYY !!"
        },
        {
          imageUrl: pic20_11_8,
          message: "Oye Hoye Cuties in one frames 🧿"
        },
        {
          imageUrl: pic20_11_9,
          message: "bestestttttttt collage that i made mann karta hai dekhta hi rahu dekhta hi rahu I LOVE YOUUUUUUUUUUUUUUUU yaar kitna mast hai ye"
        },
        {
          imageUrl: pic20_11_10,
          message: ""
        },
        {
          imageUrl: pic20_11_11,
          message: "Your Beautiful Bouquet just like you my love 🌸"
        },
        {
          imageUrl: pic20_11_12,
          message: "Your birthday gift from me"
        },
        {
          imageUrl: pic20_11_13,
          message: "Ahem Ahem hankeyyyyyyy"
        },
        {
          imageUrl: pic20_11_14,
          message: "Meri nishaani tumhari jism par 😜🩷"
        },
        {
          imageUrl: pic20_11_15,
          message: "Your beautiful ring is safe with me bs thoda sa sabar karlo then ache se bohot ache se dunga tumko ye"
        },
      ],
      story: "Finally the day we were waiting for kabse the day of your birthday meri baby meri golu ka birthday technically our birthday yayyyyy!! so i came you pick me up tum vhi meri sharmeeli chamak challo tumne pick kiya or kasam se kya hi khoobsurat dikh rahi thi na tu bohot hi hawwwtttt or fir aap leke gaye chole kulche ya naam nahi yaad aara mujhe uska but tasty the kaafi maza aaya and then we went to trillium kyuki humko half movie dekhni thi we roam a bit in trillium and went to the movie or bhyi iss movie me bhi har baar ki tarah koi bhadwa uncle aake beth gaya vo toh acha hai tune seats change karva di thi vha par mene aapko as promised nail paint lagayi thi ache the jo thodi si kharab ho gayi thi but koi nahi itna chalta hai huhhh.. fir toh uske baad kya hi hua movie toh lund nahi yaad kya tha movie me kya nahi humme toh aapke saath spent kiya har ek moment yaad hai and I always wanna relive that moment mast tha yaar vo... movie ke baad humne jaana tha infinite our signature place we picked up a cute beautiful chotu si pastry and infinite ka har ek pal bohot bohot khaas tha babe i can't forget this day every celebrating our birthday together all mad in love ek dusre ke liye hehe... or iss baar bhi khana itna manga liya khaya gaya nhi hum chutiyo se 🤣 bss jese taise humne khatam kiya had our some time of together thodi baatein kari then we had to leave tereko bhi ghar jaana tha or mujhe bhi we went for the final destination of the day railway station jaane dene ka mann toh nhi tha bilkul bhi but kya kare majboori thi but dekhiyo bete tu ek baar saath aa kahi nahi jaane dera tereko mei then i gave you your guft you gave me chocolate we hug and then we left hoping to meet soon 💖✨"
    }
  ];

  const DaisyAnimation = () => (
    <div className="relative w-full max-w-[200px] mx-auto">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle 
          cx="50" 
          cy="50" 
          r="8" 
          fill="#FFD700"
          className="animate-[scale-in_1s_ease-out]"
        />
        
        {[...Array(12)].map((_, i) => (
          <g key={i} transform={`rotate(${i * 30} 50 50)`}>
            <path
              d="M50 25C54 25 57 28 57 32C57 36 54 39 50 39C46 39 43 36 43 32C43 28 46 25 50 25Z"
              fill="white"
              stroke="#FFC0CB"
              strokeWidth="0.5"
              className="origin-center"
              style={{
                animation: `
                  petal-bloom 1.5s ease-out ${i * 0.1}s forwards,
                  petal-wave 3s ease-in-out ${1.5 + i * 0.1}s infinite
                `,
                opacity: 0,
                transform: 'scale(0) translateY(15px)'
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );

  const MemoryModal = ({ memory, onClose }) => {
    const hasMultipleImages = memory.moments.length > 1;
    
    const nextImage = () => {
      setImageLoaded(false);
      setCurrentImageIndex((prev) => 
        prev === memory.moments.length - 1 ? 0 : prev + 1
      );
    };

    const prevImage = () => {
      setImageLoaded(false);
      setCurrentImageIndex((prev) => 
        prev === 0 ? memory.moments.length - 1 : prev - 1
      );
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-[fadeIn_0.3s_ease-out]">
        <div className={`bg-white rounded-xl w-auto max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl transform animate-[slideUp_0.3s_ease-out] transition-all duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Image Section - Fixed Height */}
          <div className="relative h-[50vh] min-h-[300px] bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={memory.moments[currentImageIndex].imageUrl}
                alt={`${memory.date} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-contain"
                onLoad={handleImageLoad}
              />
              {hasMultipleImages && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 bg-white/80 p-1 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Content Section - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pb-4">
                <h3 className="text-2xl font-bold text-gray-800">{memory.date}</h3>
                {hasMultipleImages && (
                  <span className="text-gray-500">
                    {currentImageIndex + 1} / {memory.moments.length}
                  </span>
                )}
              </div>
              <p className="text-gray-700 text-lg mb-4">
                {memory.moments[currentImageIndex].message}
              </p>
              <div className="border-t pt-4">
                <p className="text-gray-700 italic border-l-4 border-pink-400 pl-4 py-2 bg-pink-50 rounded">
                  {memory.story}
                </p>
              </div>
              {hasMultipleImages && (
                <div className="mt-4 flex gap-2 overflow-x-auto py-2 sticky bottom-0 bg-white">
                  {memory.moments.map((moment, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === idx ? 'border-pink-500 scale-105' : 'border-transparent opacity-70'
                      }`}
                    >
                      <img
                        src={moment.imageUrl}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Gallery = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {memories.map((memory, index) => (
        <button
          key={index}
          onClick={() => setSelectedMemory(memory)}
          className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden text-left"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Calendar className="absolute top-4 left-4 w-8 h-8 text-pink-500 bg-white rounded-full p-1 shadow-lg" />
          <div className="h-48 bg-pink-100 flex items-center justify-center">
            <Heart className="w-12 h-12 text-pink-500 animate-pulse" />
          </div>
          <div className="p-4 relative">
            <h3 className="font-bold text-lg text-gray-800 group-hover:text-pink-600 transition-colors">
              {memory.date}
            </h3>
            <p className="text-gray-600 mt-2">{memory.description}</p>
            <span className="text-pink-500 text-sm mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">
              Click to reveal our memory ✨
            </span>
          </div>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {step === 0 && (
          <div className="flex items-center justify-center min-h-[80vh]">
            <button
              onClick={() => setStep(1)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center"
            >
              Click Me For a Surprise
              <Heart className="ml-2 w-6 h-6 animate-pulse" />
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="text-center animate-[fadeIn_1s_ease-out] mt-8">
            <DaisyAnimation />
            <div className="max-w-lg mx-auto p-6 mt-4 bg-white/90 backdrop-blur rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-pink-600 animate-[slideDown_0.5s_ease-out]">
                I'm Sorry ❤️
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed animate-[fadeIn_1s_ease-out_0.5s_both]">
                Golu! I know I haven't been putting in enough effort lately, and you deserve so much better. 
                You mean the world to me, and I promise to show you that more often. I know my words have no value now but you have to have faith in me.
                I deeply regret to always keep you in the same situation. This is a small thing to make up for it.
                I have prepared something for you hope you'll like it.
              </p>
              <button
                onClick={() => setStep(2)}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg animate-[fadeIn_1s_ease-out_1s_both]"
              >
                Click to See something Crazyy!!!!!!
              </button>
              <button
                onClick={() => navigate('/new-year')}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mt-4 animate-[fadeIn_1s_ease-out_1.5s_both]"
              >
                Open on New Year 2025 🎊
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-[fadeIn_1s_ease-out] py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-purple-800 animate-[slideDown_0.5s_ease-out]">
              Memories We've Created Together 💖
            </h1>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Click on each date to relive our special moments together. Each memory holds a piece of my heart, just like you do.
            </p>
            <Gallery />
          </div>
        )}

        {selectedMemory && (
          <MemoryModal 
            memory={selectedMemory} 
            onClose={() => setSelectedMemory(null)} 
          />
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes petal-bloom {
          0% {
            opacity: 0;
            transform: scale(0) translateY(15px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes petal-wave {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.05) rotate(3deg);
          }
        }
        
        @keyframes scale-in {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default PhotoAlbum;