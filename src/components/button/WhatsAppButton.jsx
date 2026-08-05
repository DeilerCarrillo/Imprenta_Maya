const WhatsAppButton = ({
  message,
  children,
  className = "",
  disabled = false,
}) => {
  const handleClick = () => {
    if (disabled) return;

    const url = `https://wa.me/50498265424?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      className={`button-primary ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default WhatsAppButton;
