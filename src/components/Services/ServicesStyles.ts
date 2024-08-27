export const servicesStyles: React.CSSProperties = {
    padding: '60px 20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    animation: 'fadeInUp 1.5s ease-in-out',
  };
  
  export const serviceItemStyles: React.CSSProperties = {
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#f7f7f7',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };
  
  export const serviceIconStyles: React.CSSProperties = {
    fontSize: '40px',
    marginBottom: '10px',
  };
  
  serviceItemStyles[':hover'] = {
    transform: 'translateY(-5px)',
  };
  