// 全局样式
const globalStyles = `
  /* 全局样式 */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .page-content {
    min-height: calc(100vh - 140px);
  }
  
  /* 导航栏样式 */
  .navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
  }
  
  .logo h2 {
    color: #4361ee;
    font-weight: 700;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
  }
  
  .nav-links li {
    margin-left: 20px;
  }
  
  .nav-links button {
    background: none;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 6px;
    transition: all 0.3s ease;
  }
  
  .nav-links button:hover {
    background-color: #f0f2f5;
  }
  
  .nav-links button.active {
    background-color: #4361ee;
    color: white;
  }
  
  /* 主页样式 */
  .hero {
    background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
    color: white;
    padding: 80px 0;
    text-align: center;
  }
  
  .hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.9;
  }
  
  .hero-image {
    max-width: 600px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .hero-image img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 50px;
    color: #333;
    position: relative;
  }
  
  .section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: #4361ee;
    margin: 15px auto;
    border-radius: 2px;
  }
  
  .about-section {
    padding: 100px 0;
    background-color: white;
  }
  
  .about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.8;
  }
  
  .about-content p {
    margin-bottom: 20px;
  }
  
  .tools-section {
    padding: 100px 0;
    background-color: #f8f9fa;
  }
  
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  .tool-card {
    background: white;
    border-radius: 10px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .tool-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  .tool-icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }
  
  .tool-card h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #333;
  }
  
  .tool-card p {
    color: #666;
  }
  
  /* 图片对比工具样式 */
  .tool-header {
    background: linear-gradient(135deg, #7209b7 0%, #3a0ca3 100%);
    color: white;
    padding: 60px 0;
    text-align: center;
  }
  
  .tool-header h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }
  
  .tool-section {
    padding: 50px 0;
  }
  
  .upload-section {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .upload-group {
    flex: 1;
    min-width: 250px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    text-align: center;
  }
  
  .upload-group label {
    display: block;
    margin-bottom: 15px;
    font-weight: 500;
    font-size: 1.1rem;
  }
  
  .upload-button {
    background-color: #4361ee;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-weight: 500;
  }
  
  .upload-button:hover {
    background-color: #3a0ca3;
  }
  
  .image-compare-wrapper {
    display: flex;
    justify-content: center;
    margin: 30px 0;
    overflow: auto;
    width: 100%;
  }
  
  /* TwentyTwenty容器样式 */
  .twentytwenty-container {
    margin: 0 auto;
    position: relative;
    box-sizing: content-box;
    overflow: hidden;
    max-width: 100%;
  }
  
  .twentytwenty-container img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    position: absolute;
    left: 0;
    top: 0;
  }
  
  /* 页脚样式 */
  .footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 30px 0;
  }
  
  .footer p {
    margin: 5px 0;
    opacity: 0.8;
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1rem;
    }
    
    .section-title {
      font-size: 1.5rem;
    }
    
    .navbar-container {
      flex-direction: column;
      gap: 15px;
    }
    
    .nav-links {
      margin-top: 10px;
    }
    
    .nav-links li {
      margin: 0 10px;
    }
    
    .upload-section {
      flex-direction: column;
    }
    
    .upload-group {
      min-width: 100%;
    }
    
    .tool-header h1 {
      font-size: 2rem;
    }
    
    .image-compare-wrapper {
      margin: 20px 0;
    }
    
    .tool-section {
      padding: 30px 0;
    }
    
    .tool-header {
      padding: 40px 0;
    }
  }
  
  /* 当在图片对比工具页面时，设置白色背景 */
  .image-compare-page {
    background-color: white;
  }
`;