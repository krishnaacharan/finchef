export const resourcesStyles: React.CSSProperties = {
    padding: '60px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    animation: 'fadeInUp 1.5s ease-in-out',
  };
  
  export const resourceItemStyles: React.CSSProperties = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };
  
  resourceItemStyles[':hover'] = {
    transform: 'translateY(-5px)',
  };
  