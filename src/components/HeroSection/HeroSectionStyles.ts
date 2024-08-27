export const heroSectionStyles: React.CSSProperties = {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  };
  
  export const heroTextStyles: React.CSSProperties = {
    animation: 'fadeIn 2s ease-in-out',
    zIndex: 2,
  };
  
  export const heroButtonStyles: React.CSSProperties = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '18px',
    color: '#002244',
    backgroundColor: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
    zIndex: 2,
  };
  
  heroButtonStyles[':hover'] = {
    backgroundColor: '#00aaff',
    transform: 'scale(1.05)',
  };
  