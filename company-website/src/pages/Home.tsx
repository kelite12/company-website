import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <img
              src="/company-preview.jpg"
              alt="公司样貌预览"
              className="mb-8 md:mb-0 md:mr-10 rounded-lg shadow-lg w-full max-w-xs object-cover"
            />
            <div className="text-left w-full">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                欢迎来到金源实验器材
              </h1>
              <p className="mt-6 text-xl max-w-3xl">
                江苏省盱眙县金源实验器材销售服务部位于江苏盱眙县，主营化学试剂、玻璃仪器、橡胶塞、橡皮塞、瓶塞、管塞等。公司秉承"顾客至上，锐意进取"的经营理念，坚持"客户第一"的原则为广大客户提供优质服务。
              </p>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100"
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              我们的产品
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              专业提供各类实验器材，满足您的实验需求
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '化学试剂',
                description: '提供各类优质化学试剂，确保实验的准确性和可靠性',
              },
              {
                title: '玻璃仪器',
                description: '专业玻璃仪器，满足各类实验需求',
              },
              {
                title: '橡胶制品',
                description: '各类橡胶塞、橡皮塞、瓶塞、管塞等，品质保证',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">需要实验器材？</span>
            <span className="block text-blue-200">立即联系我们</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 