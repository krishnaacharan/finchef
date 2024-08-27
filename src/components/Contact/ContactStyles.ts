export const contactStyles: React.CSSProperties = {
  padding: "60px 20px",
  backgroundColor: "#e0e0e0",
  textAlign: "center",
  animation: "fadeInUp 1.5s ease-in-out",
};

export const contactFormStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  maxWidth: "500px",
  margin: "0 auto",
};

export const contactButtonStyles: React.CSSProperties = {
  padding: "10px 20px",
  fontSize: "18px",
  color: "#ffffff",
  backgroundColor: "#002244",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
};

contactButtonStyles[":hover"] = {
  backgroundColor: "#00aaff",
  transform: "scale(1.05)",
};
