const SocialLink = ({ href, color="var(--color-bg-light)", bgColor="var(--color-blue-950)", icon, iconSize = "2rem", linkSize = "2rem" }) => {
  return (
    <a style={{fontSize: iconSize, border: "2px solid var(--color-blue-950)", borderRadius: "100%", padding: "0.5rem", boxShadow: "1.5px 2.5px 0 1px rgba(0, 0, 0, 0.25)", backgroundColor: color, width: linkSize, height: linkSize, display: "flex", justifyContent: "center", alignItems: "center"}} href={href} target="_blank" rel="noopener noreferrer">
      <i style={{ background: bgColor, backgroundClip: 'text', color: "transparent"}} className={`bxl bx-${icon}`}></i>
    </a>
  );
};

export default SocialLink;