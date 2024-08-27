export const caseStudiesStyles: React.CSSProperties = {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    animation: 'fadeInUp 1.5s ease-in-out',
  };
  
  export const caseStudyItemStyles: React.CSSProperties = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f4f4f4',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };
  
  caseStudyItemStyles[':hover'] = {
    transform: 'translateY(-5px)',
  };
  