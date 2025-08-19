const { useState } = React;

// 导入组件
// 假设组件和样式已通过全局变量提供
const Home = window.Home;
const ImageCompareTool = window.ImageCompareTool;
const Navbar = window.Navbar;
const Footer = window.Footer;
const globalStyles = window.globalStyles;

// 主应用组件
function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return React.createElement(Home, { onNavigate: setActivePage });
      case 'compare':
        return React.createElement(ImageCompareTool);
      default:
        return React.createElement(Home, { onNavigate: setActivePage });
    }
  };

  return React.createElement(
    'div',
    { className: 'app' },
    React.createElement(Navbar, { activePage: activePage, onPageChange: setActivePage }),
    React.createElement('main', null, renderPage()),
    React.createElement(Footer)
  );
}

// 添加全局样式
const styleSheet = document.createElement("style");
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

// 检查是否已经存在root，如果不存在则创建
if (!window.reactRoot) {
  window.reactRoot = ReactDOM.createRoot(document.getElementById('root'));
}
window.reactRoot.render(React.createElement(App));