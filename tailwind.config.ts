import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1440px',
  		'3xl': '1536px'
  	},
  	extend: {
  		colors: {
  			gradientDark: '#552DDA',
  			gradientLight: '#1D3E80',
  			bg: '#050919',
  			cards: '#050919',
  			footer: '#0D0D1D',
  			borderCustom: 'rgba(45, 160, 184, 0.15)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'size-1': [
  				'84px',
  				'110px'
  			],
  			'size-2': [
  				'50px',
  				'64px'
  			],
  			'size-3': [
  				'20px',
  				'28px'
  			],
  			'size-4': [
  				'18px',
  				'26px'
  			],
  			'size-5': [
  				'16px',
  				'24px'
  			],
  			'size-6': [
  				'14px',
  				'20px'
  			],
  			'size-7': [
  				'12px',
  				'24px'
  			]
  		},
  		fontFamily: {
  			lato: 'var(--font-lato)',
  			roboto: 'var(--font-roboto)'
  		},
  		spacing: {
  			null: '0px',
  			xs: '4px',
  			sm: '8px',
  			md: '12px',
  			lg: '16px',
  			xl: '20px',
  			'2xl': '24px',
  			'3xl': '32px',
  			'4xl': '40px'
  		},
  		boxShadow: {
  			shadowCustom: '0px 0px 30px rgba(26, 54, 163, 0.8)'
  		},
  		maxWidth: {
  			container: '1440px'
  		},
  		gridTemplateColumns: {
  			custom: 'repeat(4, 1fr)'
  		},
  		margin: {
  			custom: '70px'
  		},
  		gap: {
  			custom: '24px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontFamily: {
  		sans: [
  			'Manrope',
                ...defaultTheme.fontFamily.sans
            ]
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
