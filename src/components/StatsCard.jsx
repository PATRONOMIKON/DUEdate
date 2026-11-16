
function StatsCard({ title, value, icon, color, subtitle }) {
  return (
    <div className="stats-card">
      <div
        className="stats-icon"
        style={{ backgroundColor: color }}
      >
        {icon}
      </div>

      <div>
        <p className="stats-title">{title}</p>
        <h2>{value}</h2>
        <p className="stats-subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default StatsCard;
