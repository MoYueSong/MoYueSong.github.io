// 图片对比工具组件
function ImageCompareTool() {
  const [beforeImage, setBeforeImage] = React.useState('./images/cat.jpg');
  const [afterImage, setAfterImage] = React.useState('./images/cat2.png');
  const [containerId] = React.useState('twentytwenty-container-' + Date.now());

  // 处理文件上传
  const handleFileUpload = (type, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === 'before') {
          setBeforeImage(e.target.result);
        } else {
          setAfterImage(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // 初始化twentytwenty组件
  React.useEffect(() => {
    // 确保jQuery和twentytwenty已加载
    if (typeof $ !== 'undefined' && typeof $.fn.twentytwenty !== 'undefined') {
      // 等待DOM更新后再初始化
      setTimeout(() => {
        const $container = $(`#${containerId}`);
        
        // 销毁已存在的实例
        if ($container.data('twentytwenty')) {
          $container.twentytwenty('destroy');
        }
        
        // 获取第一张图片的原始尺寸
        const img = new Image();
        img.onload = function() {
          const w = img.naturalWidth;
          const h = img.naturalHeight;
          const maxWidth = 600; // 最大宽度
          const scale = w > maxWidth ? maxWidth / w : 1;
          const displayW = w * scale;
          const displayH = h * scale;
          
          // 设置容器尺寸
          $container.css({ 
            width: displayW + 'px', 
            height: displayH + 'px' 
          });
          
          // 初始化新的实例
          $container.twentytwenty({
            default_offset_pct: 0.5, // 滑块初始位置
            orientation: 'horizontal', // 水平分割
            before_label: '处理前',
            after_label: '处理后'
          });
        };
        img.src = beforeImage;
      }, 100);
    }
  }, [beforeImage, afterImage, containerId]);

  return React.createElement(
    'div',
    { className: 'page-content' },
    React.createElement(
      'section',
      { className: 'tool-header' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement('h1', null, '图片对比工具'),
        React.createElement('p', null, '拖动滑块对比两张图片的差异')
      )
    ),
    React.createElement(
      'section',
      { className: 'tool-section' },
      React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'upload-section' },
          React.createElement(
            'div',
            { className: 'upload-group' },
            React.createElement('label', null, '处理前图片:'),
            React.createElement('input', {
              type: 'file',
              accept: 'image/*',
              onChange: (e) => handleFileUpload('before', e),
              style: { display: 'none' },
              id: 'before-upload'
            }),
            React.createElement('button', {
              className: 'upload-button',
              onClick: () => document.getElementById('before-upload').click()
            }, '选择图片')
          ),
          React.createElement(
            'div',
            { className: 'upload-group' },
            React.createElement('label', null, '处理后图片:'),
            React.createElement('input', {
              type: 'file',
              accept: 'image/*',
              onChange: (e) => handleFileUpload('after', e),
              style: { display: 'none' },
              id: 'after-upload'
            }),
            React.createElement('button', {
              className: 'upload-button',
              onClick: () => document.getElementById('after-upload').click()
            }, '选择图片')
          )
        ),
        React.createElement(
          'div',
          { className: 'image-compare-wrapper' },
          React.createElement(
            'div',
            { 
              id: containerId,
              className: 'twentytwenty-container'
            },
            React.createElement('img', {
              src: beforeImage,
              alt: '处理前'
            }),
            React.createElement('img', {
              src: afterImage,
              alt: '处理后'
            })
          )
        )
      )
    )
  );
}