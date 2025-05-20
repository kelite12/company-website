import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: '企业解决方案',
      description: '为企业提供全方位的解决方案，包括技术咨询、系统集成、运维服务等。',
      features: [
        '定制化解决方案',
        '专业技术支持',
        '7x24小时服务',
        '安全可靠保障',
      ],
    },
    {
      id: 2,
      name: '软件开发服务',
      description: '提供专业的软件开发服务，包括Web应用、移动应用、企业系统等。',
      features: [
        '敏捷开发流程',
        '高质量代码',
        '完善的测试',
        '持续集成部署',
      ],
    },
    {
      id: 3,
      name: '云服务解决方案',
      description: '提供云计算、云存储、云安全等全方位的云服务解决方案。',
      features: [
        '弹性伸缩',
        '高可用性',
        '数据安全',
        '成本优化',
      ],
    },
    {
      id: 4,
      name: '数据分析服务',
      description: '提供大数据分析、商业智能、数据可视化等专业服务。',
      features: [
        '实时分析',
        '智能决策',
        '可视化展示',
        '预测分析',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            产品与服务
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            我们提供全方位的产品和服务，满足您的各种需求
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-6">{product.description}</p>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  了解更多
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">需要定制化解决方案？</span>
            <span className="block text-blue-200">
              我们的专业团队随时为您服务
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 