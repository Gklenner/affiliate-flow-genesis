import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'lp-navy': 'hsl(var(--lp-navy))',
				'lp-light': 'hsl(var(--lp-light))',
				'lp-orange': 'hsl(var(--lp-orange))',
				'lp-green': 'hsl(var(--lp-green))'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, hsl(var(--gradient-blue-start)), hsl(var(--gradient-blue-end)))',
				'gradient-secondary': 'linear-gradient(135deg, hsl(var(--gradient-pink-start)), hsl(var(--gradient-pink-end)))',
				'gradient-radial': 'radial-gradient(circle at center, hsl(var(--gradient-blue-start)) 0%, transparent 70%)'
			},
			fontSize: {
				'hero': 'clamp(2.5rem, 5vw, 4rem)',
				'display': 'clamp(1.5rem, 3vw, 2.5rem)',
				'body-lg': 'clamp(1rem, 2vw, 1.25rem)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(180deg)' }
				},
				'orb-movement': {
					'0%': { transform: 'translate(0, 0) scale(1)' },
					'25%': { transform: 'translate(100px, -100px) scale(1.2)' },
					'50%': { transform: 'translate(-50px, -200px) scale(0.8)' },
					'75%': { transform: 'translate(-150px, -50px) scale(1.1)' },
					'100%': { transform: 'translate(0, 0) scale(1)' }
				},
				'fade-in': {
					'from': { opacity: '0', transform: 'translateY(20px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-up': {
					'from': { opacity: '0', transform: 'translateY(40px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-delayed': 'float 6s ease-in-out infinite -2s',
				'orb': 'orb-movement 20s linear infinite',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;