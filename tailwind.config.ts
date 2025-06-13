
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
			fontFamily: {
				'montserrat': ['Montserrat', 'sans-serif'],
				'lato': ['Lato', 'sans-serif'],
				'europa': ['Europa Grotesk', 'sans-serif'],
				'helvetica': ['Helvetica Neue', 'Arial', 'sans-serif'],
			},
			colors: {
				// Original colors
				'purple-gradient-start': '#8E54E9',
				'purple-gradient-end': '#E964FF',
				'purple-light': '#F3ECFF',
				'text-secondary': '#4A4A4A',
				'text-muted': '#6B6B6B',
				'border-light': '#E5E5E5',
				'border-medium': '#D1D1D1',
				
				// New tech-forward colors
				'tech-indigo': '#6A5ACD',
				'tech-purple': '#9370DB',
				'tech-pink': '#FFB6C1',
				'tech-hot-pink': '#FF69B4',
				'tech-teal': '#8FBC8F',
				'tech-lavender': '#E6E6FA',
				'tech-cyan': '#48D1CC',
				
				// shadcn colors
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
			},
			backgroundImage: {
				'purple-gradient': 'linear-gradient(135deg, #8E54E9 0%, #E964FF 100%)',
				'purple-gradient-soft': 'linear-gradient(135deg, rgba(142, 84, 233, 0.1) 0%, rgba(233, 100, 255, 0.1) 100%)',
				'tech-gradient': 'linear-gradient(135deg, #6A5ACD 0%, #9370DB 100%)',
				'hero-gradient': 'linear-gradient(135deg, #9370DB 0%, #FF69B4 100%)',
				'card-gradient': 'radial-gradient(circle, #E6E6FA 0%, #FFFFFF 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
				'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
				'purple': '0 4px 20px rgba(142, 84, 233, 0.2)',
				'tech-glow': '0 0 20px rgba(255, 105, 180, 0.3)',
				'card-float': '0 10px 25px rgba(0, 0, 0, 0.15)',
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
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'pulse-glow': {
					'0%, 100%': { opacity: '0.6' },
					'50%': { opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'float': 'float 3s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
