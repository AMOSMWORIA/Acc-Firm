import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Briefcase, Newspaper } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resources = [
    {
      title: "About Us",
      desc: "Learn about our mission, values, and the team behind Acc Firm.",
      icon: <Users size={32} />,
      link: "/about",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Careers",
      desc: "Join our team and help us empower small business owners.",
      icon: <Briefcase size={32} />,
      link: "/careers",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Become an Affiliate",
      desc: "Partner with us and earn rewards for referring new customers.",
      icon: <Users size={32} />, // Reusing users or finding a better match
      link: "/affiliate",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Press & Media",
      desc: "Latest news, press releases, and media resources.",
      icon: <Newspaper size={32} />,
      link: "/press",
      color: "bg-orange-100 text-orange-600"
    },
    {
        title: "Blog",
        desc: "Tips, tricks, and guides for small business owners.",
        icon: <BookOpen size={32} />,
        link: "/blog",
        color: "bg-yellow-100 text-yellow-600"
      }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-acc-dark text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Resources</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Everything you need to know about Acc Firm and how we can help your business grow.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((res, idx) => (
            <Link key={idx} to={res.link} className="block group">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all hover:border-acc-blue h-full">
                <div className={`w-14 h-14 ${res.color} rounded-xl flex items-center justify-center mb-6`}>
                  {res.icon}
                </div>
                <h3 className="text-xl font-bold text-acc-dark mb-3 group-hover:text-acc-blue">{res.title}</h3>
                <p className="text-gray-600 leading-relaxed">{res.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;