import React from 'react';
import { Users, Award, Truck, Shield } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Curation',
      description: 'Our team of fashion experts carefully selects each piece to ensure quality and style.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We partner with the finest manufacturers to bring you clothing that lasts.'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to get your favorites to you as soon as possible.'
    },
    {
      icon: Shield,
      title: 'Secure Shopping',
      description: 'Shop with confidence knowing your personal information is protected.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
          About DA CLOTHING MANUFACTURER
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe that quality men's t-shirts are the foundation of every great wardrobe. 
          Founded with a passion for premium fabrics and perfect fit, we craft t-shirts that combine comfort with style.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              DA CLOTHING MANUFACTURER was born in the heart of Tiruppur, India's textile capital, 
              through the vision and determination of one man - Arun. What started as a dream in a small 
              workshop has grown into a testament to hard work, dedication, and unwavering commitment to quality.
            </p>
            <p>
              Arun began his journey with nothing but a passion for creating premium clothing and a 
              determination to make quality accessible to everyone. Working tirelessly by himself, he 
              learned every aspect of the manufacturing process - from fabric selection to final stitching. 
              To keep costs low and ensure affordable prices, he took on every role personally, working 
              long hours to perfect each piece.
            </p>
            <p>
              His philosophy was simple yet powerful: "Quality should never be compromised, and neither 
              should affordability." By handling everything himself - from sourcing the finest materials 
              to overseeing production - Arun was able to eliminate middlemen costs and pass the savings 
              directly to customers while maintaining premium quality standards.
            </p>
            <p>
              Today, DA CLOTHING MANUFACTURER stands as a testament to Arun's vision. While we've grown 
              from that small workshop, we still maintain the same hands-on approach and commitment to 
              quality that Arun established. Every t-shirt we produce carries his legacy of hard work, 
              attention to detail, and dedication to providing premium quality at affordable prices.
            </p>
          </div>
        </div>
        
        <div className="aspect-square rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3965209/pexels-photo-3965209.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Fashion atelier"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose DA CLOTHING MANUFACTURER?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          To provide every man with access to premium quality t-shirts that combine comfort, style, and durability. 
          We manufacture with care, ensuring each piece meets our high standards while maintaining affordable prices 
          for our customers.
        </p>
      </div>
    </div>
  );
};

export default About;