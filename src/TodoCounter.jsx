const TodoCounter = ({ completedTodos, totalTodos, children }) => { 
  const progress = (completedTodos / totalTodos)*100;
  const size = 250;
  const strokeWidth = 20;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = ((100 - progress) / 100) * circumference;
  return (
    <div className="TodoCounter">
      <div className="graphic">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
          <circle
            className="bg"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#ddd"
            strokeWidth={strokeWidth}
          />
          <circle
            className="fg"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#5394fd"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <h1>
          {completedTodos} of {totalTodos} TODOS Completed
        </h1>
      </div>
      {children}
    </div>
  )
}

export { TodoCounter };