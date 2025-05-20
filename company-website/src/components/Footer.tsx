import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">关于我们</h3>
            <p className="text-gray-300">
              金源实验器材是一家专业从事化学试剂、玻璃仪器、橡胶塞等实验器材销售的企业，秉承"顾客至上，锐意进取"的经营理念，为广大客户提供优质服务。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  关于我们
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">
                  产品服务
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-white">
                  招贤纳士
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">联系方式</h3>
            <ul className="space-y-2 text-gray-300">
              <li>电话：137052344438</li>
              <li>地址：江苏省淮安市盱眙县</li>
              <li>邮编：211700</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">主营产品</h3>
            <ul className="space-y-2 text-gray-300">
              <li>化学试剂</li>
              <li>玻璃仪器</li>
              <li>橡胶塞</li>
              <li>橡皮塞</li>
              <li>瓶塞</li>
              <li>管塞</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 金源实验器材. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 