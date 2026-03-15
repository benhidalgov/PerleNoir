import './LaceDivider.css';

/**
 * Lace scallop SVG pattern — creates a decorative lace-like edge
 * between sections. Purely CSS/SVG, no images needed.
 */

export function LaceDivider({ variant = 'dark', flip = false, className = '' }) {
    return (
        <div
            className={`lace-divider lace-divider--${variant} ${flip ? 'lace-divider--flip' : ''} ${className}`}
        >
            <svg
                viewBox="0 0 1200 40"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Scalloped lace edge */}
                <path d={generateScallopPath(1200, 40, 24)} />
                {/* Inner detail dots */}
                {Array.from({ length: 25 }, (_, i) => (
                    <circle
                        key={i}
                        cx={24 + i * 48}
                        cy={14}
                        r={2}
                        opacity={0.5}
                    />
                ))}
            </svg>
        </div>
    );
}

export function LacePattern({ variant = 'dark', className = '' }) {
    return (
        <div
            className={`lace-divider lace-divider--${variant} ${className}`}
        >
            <svg
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Top scallop row */}
                <path d={generateScallopPath(1200, 30, 20)} opacity={0.6} />
                {/* Middle diamond lace row */}
                {Array.from({ length: 30 }, (_, i) => (
                    <g key={i} transform={`translate(${20 + i * 40}, 28)`}>
                        <path
                            d="M0,-6 L6,0 L0,6 L-6,0 Z"
                            opacity={0.35}
                        />
                        <circle cx={0} cy={0} r={1.5} opacity={0.5} />
                    </g>
                ))}
                {/* Bottom scallop row */}
                <path
                    d={generateScallopPath(1200, 30, 20)}
                    transform="translate(0, 30) scale(1, -1) translate(0, -30)"
                    opacity={0.4}
                />
            </svg>
        </div>
    );
}

export function LaceCorners({ color = 'var(--color-burgundy)' }) {
    const cornerSvg = (
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" fill={color}>
            {/* Corner ornament — floral lace pattern */}
            <path d="M0,0 Q20,0 20,20 Q20,10 30,10 Q20,10 20,0" opacity={0.6} />
            <path d="M0,0 Q0,20 20,20 Q10,20 10,30 Q10,20 0,20" opacity={0.6} />
            <circle cx={20} cy={20} r={3} opacity={0.8} />
            <circle cx={10} cy={10} r={1.5} opacity={0.4} />
            <circle cx={30} cy={6} r={1} opacity={0.3} />
            <circle cx={6} cy={30} r={1} opacity={0.3} />
            <path d="M20,20 Q35,20 40,5" fill="none" stroke={color} strokeWidth={0.8} opacity={0.3} />
            <path d="M20,20 Q20,35 5,40" fill="none" stroke={color} strokeWidth={0.8} opacity={0.3} />
        </svg>
    );

    return (
        <>
            <div className="lace-corner lace-corner--top-left">{cornerSvg}</div>
            <div className="lace-corner lace-corner--top-right">{cornerSvg}</div>
            <div className="lace-corner lace-corner--bottom-left">{cornerSvg}</div>
            <div className="lace-corner lace-corner--bottom-right">{cornerSvg}</div>
        </>
    );
}

export function OrnamentDivider() {
    return (
        <div className="ornament-divider">
            <div className="ornament-divider__line" />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--color-red)">
                <path d="M8,0 L10,6 L16,8 L10,10 L8,16 L6,10 L0,8 L6,6 Z" opacity={0.7} />
            </svg>
            <div className="ornament-divider__line" />
        </div>
    );
}

export function RedStripe() {
    return <div className="red-stripe" />;
}

function generateScallopPath(width, height, count) {
    const segW = width / count;
    let d = `M0,${height}`;

    for (let i = 0; i < count; i++) {
        const x1 = i * segW;
        const x2 = x1 + segW;
        const midX = (x1 + x2) / 2;
        d += ` Q${midX},0 ${x2},${height}`;
    }

    d += ` L${width},${height} L0,${height} Z`;
    return d;
}

export default LaceDivider;
