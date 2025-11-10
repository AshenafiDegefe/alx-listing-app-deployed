import { FiGlobe } from 'react-icons/fi';

const Footer: React.FC = () => {
  const footerSections = [
    {
      title: 'Support',
      links: ['Help Center', 'Safety Information', 'Cancellation Options', 'Our COVID-19 Response'],
    },
    {
      title: 'Community',
      links: ['Accessibility', 'Diversity & Belonging', 'Frontline Stays', 'Referral Rewards'],
    },
    {
      title: 'Hosting',
      links: ['Try Hosting', 'AirCover for Hosts', 'Hosting Resources', 'Community Forum'],
    },
    {
      title: 'About',
      links: ['Newsroom', 'Learn about new features', 'Letter from founders', 'Careers'],
    },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b pb-8 mb-6">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-900 mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-600 text-sm hover:text-blue-600 transition duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar - Copyright and Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-2 sm:mb-0">
            © {new Date().getFullYear()} StayWell, Inc. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <div className="flex items-center space-x-1">
              <FiGlobe size={16} />
              <span className="font-medium">English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;