'use client'
import { useState, useRef, useLayoutEffect } from 'react'

interface TabCardProps {
  title: string
  color?: string
  gradient?: { from: string; to: string }
  tabPosition: 'left' | 'right'
  children: React.ReactNode
}

export default function TabCard({ title, color, gradient, tabPosition, children }: TabCardProps) {
  const [tabWidth, setTabWidth] = useState(200)
  const [cardHeight, setCardHeight] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<SVGTextElement>(null)
  
  const r = 16 
  const tabHeight = 48 
  const width = 800 // Largeur de référence interne au SVG

  // 1. Mesurer la largeur du texte pour l'onglet
  useLayoutEffect(() => {
    if (textRef.current) {
      const textMetrics = textRef.current.getBBox()
      setTabWidth(Math.max(140, textMetrics.width + 48))
    }
  }, [title])

  // 2. Mesurer la hauteur réelle de la carte pour éviter la déformation
  useLayoutEffect(() => {
    if (!containerRef.current) return
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // On récupère la hauteur en pixels et on l'adapte au ratio du SVG
        const observedHeight = entry.contentRect.height
        const observedWidth = entry.contentRect.width
        // On calcule la hauteur relative pour le viewBox du SVG
        setCardHeight((observedHeight / observedWidth) * width)
      }
    })

    resizeObserver.observe(containerRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const createPath = () => {
    if (cardHeight === 0) return ""
    
    if (tabPosition === 'left') {
      return `
        M 0,${r}
        Q 0,0 ${r},0
        L ${tabWidth - r},0
        Q ${tabWidth},0 ${tabWidth},${r}
        L ${tabWidth},${tabHeight - r}
        Q ${tabWidth},${tabHeight} ${tabWidth + r},${tabHeight}
        L ${width - r},${tabHeight}
        Q ${width},${tabHeight} ${width},${tabHeight + r}
        L ${width},${cardHeight - r}
        Q ${width},${cardHeight} ${width - r},${cardHeight}
        L ${r},${cardHeight}
        Q 0,${cardHeight} 0,${cardHeight - r}
        Z
      `
    } else {
      return `
        M ${width},${r}
        Q ${width},0 ${width - r},0
        L ${width - tabWidth + r},0
        Q ${width - tabWidth},0 ${width - tabWidth},${r}
        L ${width - tabWidth},${tabHeight - r}
        Q ${width - tabWidth},${tabHeight} ${width - tabWidth - r},${tabHeight}
        L ${r},${tabHeight}
        Q 0,${tabHeight} 0,${tabHeight + r}
        L 0,${cardHeight - r}
        Q 0,${cardHeight} ${r},${cardHeight}
        L ${width - r},${cardHeight}
        Q ${width},${cardHeight} ${width},${cardHeight - r}
        Z
      `
    }
  }

  const gradientId = `gradient-${title.replace(/\s+/g, '-').toLowerCase()}`
  const fillColor = gradient ? `url(#${gradientId})` : color

  return (
    <div ref={containerRef} className="relative w-full h-full drop-shadow-xl overflow-visible">
      <svg
        viewBox={`0 0 ${width} ${cardHeight}`}
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {gradient && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradient.from} />
              <stop offset="100%" stopColor={gradient.to} />
            </linearGradient>
          </defs>
        )}
        <path d={createPath()} fill={fillColor} />
        <text
          ref={textRef}
          x={tabPosition === 'left' ? tabWidth / 2 : width - tabWidth / 2}
          y={tabHeight / 2}
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="22"
          fontWeight="bold"
          style={{ fontFamily: 'system-ui, sans-serif' }}
        >
          {title}
        </text>
      </svg>

      <div 
        className="relative w-full h-full p-8 flex flex-col"
        style={{ paddingTop: `${(tabHeight / 800) * 100 + 3}%` }} 
      >
        <div className="flex-grow overflow-hidden">
           {children}
        </div>
      </div>
    </div>
  )
}