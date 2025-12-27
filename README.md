# JSA Climate Website - Refactored Version

## Overview
This is a complete refactoring of your climate website with modern, responsive design principles. The new structure is clean, maintainable, and works seamlessly across all device sizes.

## Key Improvements

### 1. **Responsive Design**
- Mobile-first approach with proper breakpoints
- Works perfectly on phones, tablets, laptops, and large displays
- Fluid typography and spacing that scales naturally
- Proper touch targets for mobile users

### 2. **Modern CSS Architecture**
- Single unified CSS file (`css/main.css`) eliminates duplication
- CSS variables for consistent colors, spacing, and typography
- Modular, reusable component classes
- Clean, semantic class naming

### 3. **Better Code Organization**
- Semantic HTML5 elements
- Consistent structure across all pages
- Single JavaScript file for all interactions
- Clear separation of concerns

### 4. **Fixed Issues**
- ✅ All elements properly centered and aligned
- ✅ Consistent spacing throughout
- ✅ Fixed image paths (relative instead of absolute)
- ✅ Proper navigation with working dropdowns
- ✅ Mobile menu that actually works
- ✅ Professional, clean appearance

## File Structure

```
website-refactor/
├── css/
│   └── main.css          # Single unified stylesheet
├── js/
│   └── main.js           # All JavaScript functionality
├── images/               # Your images go here
├── figures/              # Your data visualization images
├── pdfs/                 # Your PDF files
├── index.html            # Homepage
├── research.html         # Research page
├── about_me.html         # About page
├── monitoring1.html      # Global Fields
├── monitoring2.html      # ENSO Monitoring
├── monitoring3.html      # Climate Change
└── README.md             # This file
```

## Implementation Steps

### Step 1: Copy Files
1. Copy all HTML files to your web server root directory
2. Copy the `css` folder with `main.css`
3. Copy the `js` folder with `main.js`

### Step 2: Update Image Paths
Your images should be organized as:
```
images/
├── swift.logo.1.png      # Your logo
├── enso.gif
├── bc.gif
├── pv.wave.gif
├── pixel.jsa.png
├── global.temp.anomaly.gif
└── global.temp.ts.gif

figures/
├── sst.mean.png
├── sst.anom.png
├── ohc.mean.png
├── atm500.png
├── prec.anom.png
├── rhum.anom.png
├── ivt.png
├── nino34.png
├── 002.enso-hov.1.png
├── 002.enso-hov.2.png
└── 002.enso-hov.3.png

pdfs/
└── CV.jsa.jan.2024.pdf
```

### Step 3: Font Loading (Optional but Recommended)
The site uses IBM Plex Sans and IBM Plex Mono fonts (free, professional, clean).
These are loaded from Google Fonts - no action needed, they'll load automatically.

### Step 4: Test Responsiveness
Open the site and test at different screen sizes:
- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

## Design System

### Colors
The site uses a minimalist, professional color palette:
- **Primary**: Sage green (`#6b705c`) - headers, navigation
- **Accent Ocean**: Teal (`#648381`) - oceanic data buttons
- **Accent Warm**: Terra cotta (`#b57469`) - atmospheric data buttons
- **Background**: Light gray (`#f5f5f5`)
- **Text**: Dark gray (`#2c2c2c`)

### Typography
- **Headings**: 600 weight, clear hierarchy
- **Body**: 400 weight, 1.6 line height for readability
- **Sizes**: Responsive, scales from mobile to desktop

### Spacing
Consistent spacing system:
- XS: 0.5rem
- SM: 1rem
- MD: 1.5rem
- LG: 2rem
- XL: 3rem

## Key Features

### Navigation
- Sticky header that stays at top when scrolling
- Dropdown menu for Monitoring section
- Mobile hamburger menu for small screens
- Smooth hover effects

### Image Viewer System
All monitoring pages use a unified image viewer:
- Click buttons to switch between visualizations
- Smooth transitions
- Properly sized and centered
- Works on all devices

### Buttons
Three button styles:
- **Primary**: For main actions (blue-green)
- **Oceanic**: For ocean data (teal)
- **Atmospheric**: For atmospheric data (terra cotta)

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Customization

### Changing Colors
Edit the CSS variables in `css/main.css`:
```css
:root {
    --color-primary: #6b705c;    /* Change this */
    --color-accent: #648381;     /* And this */
    /* etc. */
}
```

### Adjusting Spacing
Modify the spacing variables:
```css
:root {
    --space-md: 1.5rem;    /* Increase for more space */
}
```

### Adding New Pages
Copy an existing HTML file and update:
1. The `<title>` tag
2. The main content
3. Keep the header and footer identical

## Accessibility Features
- Semantic HTML for screen readers
- Proper heading hierarchy
- Alt text on all images
- Keyboard navigation support
- ARIA labels where appropriate
- Good color contrast ratios

## Performance
- Single CSS file (reduces HTTP requests)
- Single JavaScript file
- Optimized images (use compressed formats)
- Minimal external dependencies

## Notes on Your Original Code

### What Was Fixed:
1. **5 separate CSS files** → 1 unified file
2. **Inconsistent spacing/centering** → Design system with variables
3. **No mobile support** → Full responsive design
4. **Absolute image paths** → Relative paths
5. **Duplicated code** → Reusable components
6. **Poor alignment** → Flexbox and Grid
7. **No mobile menu** → Working hamburger menu
8. **Inconsistent button styles** → Unified button system

### What Was Preserved:
- Your color scheme (adapted for consistency)
- All content and structure
- Image viewer functionality
- Navigation organization
- Footer information

## Future Enhancements (Optional)
Consider adding:
- Loading indicators for images
- Print stylesheet for research pages
- Dark mode toggle
- Animation effects on scroll
- More interactive data visualizations

## Support
If you encounter issues:
1. Check browser console for errors
2. Verify all file paths are correct
3. Ensure images are in correct folders
4. Test on different devices/browsers

---

**Questions?** Feel free to ask for clarifications or additional features!
