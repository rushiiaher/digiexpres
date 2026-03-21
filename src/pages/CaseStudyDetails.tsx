import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, TrendingUp, CheckCircle, Target, Lightbulb, BarChart3 } from 'lucide-react';
import { caseStudies } from '../data/mockData';
import SEO from '../components/common/SEO';

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = caseStudies.find(study => study.id === id);

  if (!caseStudy) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-blue-600 hover:text-blue-700">
            ← Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <SEO
        title={caseStudy.title}
        description={caseStudy.description}
        keywords={`case study, ${caseStudy.client}, ${caseStudy.technologies.join(', ')}`}
        image={caseStudy.image}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
          
          <div className="space-y-6">
            <div className="text-blue-300 font-medium">{caseStudy.client}</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{caseStudy.title}</h1>
            <p className="text-xl text-blue-100">{caseStudy.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center text-blue-200">
                <Clock className="h-4 w-4 mr-2" />
                {caseStudy.timeline}
              </div>
              <div className="flex items-center text-blue-200">
                <Users className="h-4 w-4 mr-2" />
                {caseStudy.technologies.length} Technologies Used
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Image */}
          <div className="mb-12">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-96 object-cover rounded-lg shadow-xl"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-3 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-red-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{caseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Lightbulb className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">{caseStudy.solution}</p>
                
                {/* Implementation Details */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-4">Implementation Approach:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Comprehensive analysis of existing systems and processes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Custom solution design tailored to specific business needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Phased implementation with minimal business disruption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Comprehensive testing and quality assurance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Staff training and change management support</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <BarChart3 className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Results & Impact</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-green-50 p-6 rounded-lg">
                      <div className="flex items-start">
                        <TrendingUp className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{result}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Benefits */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-4">Additional Benefits Achieved:</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>• Improved employee productivity and job satisfaction</li>
                    <li>• Enhanced data security and compliance</li>
                    <li>• Better decision-making through real-time analytics</li>
                    <li>• Increased scalability for future growth</li>
                    <li>• Reduced operational risks and errors</li>
                  </ul>
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="bg-gray-50 p-8 rounded-lg">
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "Working with Digiexpres Tech Solution was a game-changer for our business. Their team's expertise and dedication to our success was evident throughout the entire project. The results exceeded our expectations."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/3184336/pexels-photo-3184336.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                    alt="Client"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-gray-600">CEO, {caseStudy.client}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-medium text-gray-900">{caseStudy.client}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Timeline</div>
                    <div className="font-medium text-gray-900">{caseStudy.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Industry</div>
                    <div className="font-medium text-gray-900">Technology & Healthcare</div>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold text-gray-900 mb-4">Services Provided</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• System Analysis & Design</li>
                  <li>• Custom Software Development</li>
                  <li>• AI/ML Integration</li>
                  <li>• Database Migration</li>
                  <li>• UI/UX Design</li>
                  <li>• Quality Assurance</li>
                  <li>• Training & Support</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 text-white p-6 rounded-lg">
                <h3 className="font-semibold mb-3">Start Your Project</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Ready to transform your business like {caseStudy.client}?
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors block text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">More Success Stories</h2>
            <p className="text-gray-600">Explore other projects and their results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.filter(study => study.id !== id).slice(0, 2).map(study => (
              <Link key={study.id} to={`/case-studies/${study.id}`} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="text-blue-600 font-medium mb-2">{study.client}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;