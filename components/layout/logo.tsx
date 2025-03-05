import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className = '', width = 40, height = 40 }: LogoProps) {
  return (
    <Link href="/" className={className}>
      <Image
        src="/logo.svg"
        alt="Gradify AI Logo"
        width={width}
        height={height}
        priority
        className="h-auto w-auto"
      />
    </Link>
  )
} 