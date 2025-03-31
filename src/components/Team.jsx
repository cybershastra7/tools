import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const team = [
  {
    name: "Hrushikesh Kshirsagar",
    role: "Chief Technology Officer",
    image: "https://media.licdn.com/dms/image/v2/D5603AQFRCdNbEnaaww/profile-displayphoto-shrink_200_200/B56ZRUnob6G8AY-/0/1736586464358?e=1747267200&v=beta&t=HF_I74Wo_qCd3CNydlCHRXyzQuG8YEPeHpu1ACEZ-w4",
    linkedin: "https://www.linkedin.com/in/08hakr"
  },
  {
    name: "Gaurish Bahurupi",
    role: "Chief Executive Officer",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQH6a4RapQxVyA/profile-displayphoto-shrink_200_200/B4DZSfAAC9HIAY-/0/1737834366103?e=1747267200&v=beta&t=7O-3SCSyMDOYXNGB9eoQJf2-R5d_o3lG-dk3moKU9a4",
    linkedin: "https://www.linkedin.com/in/gaurish-bahurupi/"
  },
  {
    name: "Prajwal Chitwar",
    role: "Chief Security Consultant",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFuxBnNuFUSIQ/profile-displayphoto-shrink_200_200/B4DZWDbBAsHAAc-/0/1741666653294?e=1747267200&v=beta&t=nDZt7LOTHILg2kIbYG12TdbM1CVsV0HOZByewrjjLX0",
    linkedin: "https://www.linkedin.com/in/prajwalchitwar/"
  }
];

function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} id="team" className="py-20 bg-gradient-to-b from-[#1976D2]/20 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#2196F3] to-[#64B5F6]">
            Our Team
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#1976D2]/20 to-[#2196F3]/20 p-8 rounded-2xl text-center backdrop-blur-lg"
            >
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover border-2 border-[#2196F3]/30"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-300 mb-4">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2196F3] hover:text-[#64B5F6] transition-colors"
              >
                LinkedIn Profile
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;