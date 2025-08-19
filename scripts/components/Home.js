// 主页组件
function Home({ onNavigate }) {
  return React.createElement(
    'div',
    { className: 'page-content' },
    React.createElement(
      'section',
      { className: 'hero' },
      React.createElement(
        'div',
        { className: 'hero-content' },
        React.createElement('h1', { className: 'hero-title' }, '欢迎来到O酱的网站'),
        React.createElement('p', { className: 'hero-subtitle' }, '在这里分享猫猫'),
        React.createElement(
          'div',
          { className: 'hero-image' },
          React.createElement('img', { src: './images/cat.jpg', alt: '个人展示' })
        )
      )
    ),
    React.createElement(
      'section',
      { className: 'about-section' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'section-title' }, '关于O酱'),
        React.createElement(
          'div',
          { className: 'about-content' },
          React.createElement('p', null, '就是这只胆小的猫猫。')
        )
      )
    ),
    React.createElement(
      'section',
      { className: 'tools-section' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h2', { className: 'section-title' }, '我的工具'),
        React.createElement(
          'div',
          { className: 'tools-grid' },
          React.createElement(
            'div',
            { 
              className: 'tool-card',
              onClick: () => onNavigate && onNavigate('compare'),
              style: { cursor: 'pointer' }
            },
            React.createElement('div', { className: 'tool-icon' }, '🔍'),
            React.createElement('h3', null, '图片对比工具'),
            React.createElement('p', null, '可视化对比两张图片的差异')
          ),
          React.createElement(
            'div',
            { className: 'tool-card' },
            React.createElement('div', { className: 'tool-icon' }, '📊'),
            React.createElement('h3', null, '更多工具'),
            React.createElement('p', null, '正在开发中...')
          )
        )
      )
    )
  );
}