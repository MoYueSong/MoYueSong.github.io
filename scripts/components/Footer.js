// 页脚组件
function Footer() {
  return React.createElement(
    'footer',
    { className: 'footer' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement('p', null, '© 2025 MoYueSong. 保留所有权利.'),
      React.createElement('p', null, '基于React构建，托管于GitHub Pages')
    )
  );
}