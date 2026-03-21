interface HeroBackgroundProps {
    spotlightX?: number; // 0-100 percent
    spotlightY?: number; // 0-100 percent
}

export default function HeroBackground({ spotlightX = 30, spotlightY = 40 }: HeroBackgroundProps) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Base dark background */}
            <div style={{ background: '#0b1f3a', position: 'absolute', inset: 0 }} />

            {/* Static top-left blue glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '-100px',
                    left: '-100px',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)',
                }}
            />

            {/* Static top-right accent glow */}
            <div
                style={{
                    position: 'absolute',
                    top: '-60px',
                    right: '-60px',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(232,28,37,0.1) 0%, transparent 70%)',
                }}
            />

            {/* Static bottom-center glow */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '900px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
                }}
            />

            {/* ── Dynamic cursor spotlight ── */}
            <div
                style={{
                    position: 'absolute',
                    width: '700px',
                    height: '700px',
                    borderRadius: '50%',
                    left: `calc(${spotlightX}% - 350px)`,
                    top: `calc(${spotlightY}% - 350px)`,
                    background: 'radial-gradient(circle, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0.04) 40%, transparent 70%)',
                    transition: 'left 0.12s ease-out, top 0.12s ease-out',
                    pointerEvents: 'none',
                }}
            />

            {/* Very faint grid */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
        </div>
    );
}
