import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Company Overview */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            关于我们
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            金源实验器材是一家专业从事化学试剂、玻璃仪器、橡胶塞等实验器材销售的企业，秉承"顾客至上，锐意进取"的经营理念，为广大客户提供优质服务。
          </p>
        </div>
      </div>

      {/* Company History */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              企业信息
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              专业、诚信、优质服务
            </p>
          </div>

          <div className="mt-16">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                {
                  title: '企业类型',
                  description: '私营企业',
                },
                {
                  title: '主营行业',
                  description: '教育装备网',
                },
                {
                  title: '经营模式',
                  description: '经销批发',
                },
                {
                  title: '主营产品',
                  description: '橡胶塞、橡皮塞、瓶塞、管塞、玻璃仪器、化学试剂、化工',
                },
              ].map((info) => (
                <div key={info.title} className="relative">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-medium text-gray-900">
                      {info.title}
                    </h3>
                    <p className="mt-2 text-gray-500">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Company Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              联系方式
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              随时为您提供专业服务
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: '联系电话',
                description: '137052344438',
              },
              {
                title: '公司地址',
                description: '江苏省淮安市盱眙县',
              },
              {
                title: '邮政编码',
                description: '211700',
              },
            ].map((contact) => (
              <div
                key={contact.title}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {contact.title}
                </h3>
                <p className="text-gray-500">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 