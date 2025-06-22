import React from 'react';
import { Mail, Phone } from 'lucide-react';

const VacancyPage = () => {
  const vacancies = [
    {
      title: 'Casino Dealer',
      department: 'Gaming',
      type: 'Full-Time',
      description: 'Join our professional dealing team to provide exceptional gaming experiences to our guests. Requires excellent customer service skills and knowledge of casino games.',
      requirements: [
        '21+ years of age',
        'High school diploma or equivalent',
        'Completion of dealer training program',
        'Strong mathematical skills',
        'Ability to work flexible hours'
      ]
    },
    {
      title: 'Security Officer',
      department: 'Security',
      type: 'Full-Time/Part-Time',
      description: 'Ensure the safety and security of guests and staff. Maintain a visible presence and respond to incidents professionally.',
      requirements: [
        '21+ years of age',
        'Valid security license',
        'Previous security experience preferred',
        'Strong communication skills',
        'Physical fitness'
      ]
    },
    {
      title: 'Food & Beverage Server',
      department: 'Dining',
      type: 'Part-Time',
      description: 'Provide excellent service in our dining venues, including The Jackpot Buffet and Tiger Palace Casino Bar.',
      requirements: [
        '18+ years of age',
        'Previous serving experience preferred',
        'Excellent customer service skills',
        'Ability to work in a fast-paced environment',
        'Food handler certification'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gradient-to-r from-yellow-600 to-yellow-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-black">Career Opportunities at Tiger Palace Casino</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Join Our Team</h2>
          <p className="text-gray-300 leading-relaxed">
            Tiger Palace Casino is seeking passionate individuals to join our world-class team in Bhairahawa, Nepal. 
            We offer competitive salaries, comprehensive benefits, and opportunities for career growth in a dynamic environment.
          </p>
        </section>

        <section className="grid gap-8">
          {vacancies.map((vacancy, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg border border-yellow-500/20">
              <h3 className="text-xl font-bold text-yellow-400">{vacancy.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {vacancy.department} • {vacancy.type}
              </p>
              <p className="text-gray-300 mb-4">{vacancy.description}</p>
              <h4 className="text-gray-200 font-semibold mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {vacancy.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
              <button 
                className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition-colors duration-200"
                onClick={() => window.location.href = 'mailto:hr@royaltigercasino.com?subject=Application for ' + vacancy.title}
              >
                Apply Now
              </button>
            </div>
          ))}
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Contact HR</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:hr@royaltigercasino.com" className="flex items-center text-gray-300 hover:text-yellow-400">
              <Mail className="h-5 w-5 mr-2" />
              hr@royaltigercasino.com
            </a>
            <a href="tel:+977-9820386761" className="flex items-center text-gray-300 hover:text-yellow-400">
              <Phone className="h-5 w-5 mr-2" />
              +977-9820386761
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
        © 2025 Tiger Palace Casino. All rights reserved.
      </footer>
    </div>
  );
};

export default VacancyPage;