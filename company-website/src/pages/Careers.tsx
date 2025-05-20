import React from 'react';

const Careers = () => {
  const positions = [
    {
      id: 1,
      title: '高级前端开发工程师',
      department: '技术部',
      location: '北京',
      type: '全职',
      description: '负责公司核心产品的前端开发工作，参与产品需求分析和技术方案设计。',
      requirements: [
        '5年以上前端开发经验',
        '精通 React、Vue 等主流框架',
        '熟悉 TypeScript、Webpack 等工具',
        '良好的团队协作能力和沟通能力',
      ],
    },
    {
      id: 2,
      title: '后端开发工程师',
      department: '技术部',
      location: '上海',
      type: '全职',
      description: '负责公司后端系统的设计和开发，确保系统的稳定性和可扩展性。',
      requirements: [
        '3年以上后端开发经验',
        '精通 Java/Python/Go 等语言',
        '熟悉微服务架构和分布式系统',
        '有大型项目开发经验优先',
      ],
    },
    {
      id: 3,
      title: '产品经理',
      department: '产品部',
      location: '深圳',
      type: '全职',
      description: '负责产品的规划和设计，协调各部门资源，推动产品落地。',
      requirements: [
        '3年以上产品经理经验',
        '熟悉产品开发流程',
        '良好的数据分析能力',
        '优秀的沟通和协调能力',
      ],
    },
    {
      id: 4,
      title: 'UI/UX 设计师',
      department: '设计部',
      location: '广州',
      type: '全职',
      description: '负责产品的视觉设计和用户体验优化，创造优秀的用户界面。',
      requirements: [
        '3年以上 UI/UX 设计经验',
        '精通设计工具（Figma、Sketch等）',
        '熟悉设计规范和交互设计',
        '有互联网产品设计经验优先',
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            招贤纳士
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            加入我们，与优秀的人一起创造未来
          </p>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              为什么选择我们？
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '有竞争力的薪资',
                description: '提供具有市场竞争力的薪资待遇和福利',
              },
              {
                title: '完善的培训体系',
                description: '提供专业的培训和发展机会',
              },
              {
                title: '良好的工作环境',
                description: '舒适的工作环境和开放的企业文化',
              },
              {
                title: '广阔的发展空间',
                description: '提供清晰的职业发展路径',
              },
              {
                title: '丰富的团队活动',
                description: '定期组织团队建设活动',
              },
              {
                title: '灵活的工作制度',
                description: '弹性工作时间和远程办公机会',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-500">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            在招职位
          </h2>
        </div>

        <div className="space-y-8">
          {positions.map((position) => (
            <div
              key={position.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {position.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {position.type}
                  </span>
                </div>
                <div className="mt-2 flex items-center text-gray-500">
                  <span className="mr-4">{position.department}</span>
                  <span className="mr-4">{position.location}</span>
                </div>
                <p className="mt-4 text-gray-500">{position.description}</p>
                <div className="mt-6">
                  <h4 className="text-lg font-medium text-gray-900">
                    任职要求：
                  </h4>
                  <ul className="mt-2 space-y-2">
                    {position.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
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
                        <p className="ml-3 text-gray-500">{requirement}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    立即申请
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">没有找到合适的职位？</span>
            <span className="block text-blue-200">
              欢迎投递简历，我们将为您推荐合适的岗位
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                投递简历
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers; 