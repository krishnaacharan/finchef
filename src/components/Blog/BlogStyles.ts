export const blogStyles: React.CSSProperties = {
    padding: '60px 20px',
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
    animation: 'fadeInUp 1.5s ease-in-out',
  };
  
  export const blogPostStyles: React.CSSProperties = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };
  
  blogPostStyles[':hover'] = {
    transform: 'translateY(-5px)',
  };
  