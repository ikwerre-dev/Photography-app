export default function BackgroundPattern() {
  return (
    <div className="absolute right-0 top-0 w-1/3 h-1/3 opacity-20">
      <div className="grid grid-cols-12 gap-2">
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-beige transform transition-opacity duration-1000"
            style={{
              opacity: Math.random() * 0.5 + 0.25
            }}
          />
        ))}
      </div>
    </div>
  )
}

