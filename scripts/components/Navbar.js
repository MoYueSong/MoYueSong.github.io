// 导航栏组件
function Navbar({ activePage, onPageChange }) {
  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'compare', label: '图片对比工具' }
  ];

  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement(
      'div',
      { className: 'container navbar-container' },
      React.createElement(
        'div',
        { className: 'logo' },
        React.createElement('h2', null, 'MoYueSong')
      ),
      React.createElement(
        'ul',
        { className: 'nav-links' },
        ...navItems.map(item => 
          React.createElement(
            'li',
            null,
            React.createElement(
              'button',
              {
                className: activePage === item.id ? 'active' : '',
                onClick: () => onPageChange(item.id)
              },
              item.label
            )
          )
        )
      )
    )
  );
}