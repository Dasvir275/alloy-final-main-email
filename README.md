# Alloy Craft Manufacturing Website

A modern, responsive website for Alloy Craft - a precision aluminum manufacturing company based in Ambala, Haryana, India.

## Windows Setup Instructions

### Prerequisites
- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
- **VS Code** - Download from [code.visualstudio.com](https://code.visualstudio.com/)
- **Git** (optional) - Download from [git-scm.com](https://git-scm.com/)

### Quick Start for Windows (Fixed Version)

**This version has been fixed to work with Windows without any Node.js module errors.**

1. **Extract the project files** to your desired location
2. **Open Command Prompt or PowerShell** as Administrator
3. **Navigate to the project directory**:
   ```cmd
   cd path\to\alloy-craft-windows-source
   ```
4. **Install dependencies**:
   ```cmd
   npm install
   ```
5. **Start the development server**:
   ```cmd
   npm run dev
   ```
6. **Open your browser** and visit: `http://localhost:5000`

### Alternative: Using VS Code Terminal

1. **Open the project folder in VS Code**
2. **Open Terminal** (Ctrl + ` or View → Terminal)
3. **Run the commands**:
   ```bash
   npm install
   npm run dev
   ```

## Project Features

### Complete Website Functionality
- ✅ **5 Main Pages**: Home, About Us, Facilities, Products, Contact
- ✅ **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- ✅ **Contact Form**: Fully functional with backend validation
- ✅ **Product Gallery**: 18 aluminum products with pagination
- ✅ **PDF Generator**: Creates professional documentation
- ✅ **Screenshot Tool**: Captures individual pages
- ✅ **SEO Optimized**: Meta tags and structured data

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: Shadcn/ui with Radix UI primitives  
- **Styling**: Tailwind CSS with custom design system
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (memory storage for development)
- **Form Handling**: React Hook Form with Zod validation

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 5000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run preview` | Build and preview production |
| `npm run check` | Type check TypeScript |

## Project Structure

```
alloy-craft-windows-source/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components (navigation, hero, galleries)
│   │   ├── pages/         # Page components (home, about, facilities, products, contact)
│   │   ├── lib/           # Utilities and configurations
│   │   ├── hooks/         # Custom React hooks
│   │   ├── App.tsx        # Main application component
│   │   ├── main.tsx       # Application entry point
│   │   └── index.css      # Global styles and Tailwind
│   └── index.html         # HTML template with SEO meta tags
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point (Windows compatible)
│   ├── routes.ts         # API routes for contact form
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite development server integration
├── shared/               # Shared types and schemas
│   └── schema.ts         # Database schemas and TypeScript types
├── package.json          # Windows-compatible dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── README.md            # This file
```

## Troubleshooting Windows Issues

### Common Problems and Solutions

1. **"NODE_ENV is not recognized" Error**
   - **Fixed**: This package uses a Windows-compatible setup
   - The server automatically sets NODE_ENV=development

2. **Permission Denied Errors**
   - Run Command Prompt or PowerShell as Administrator
   - Or use: `npm config set prefix %USERPROFILE%\npm-global`

3. **Port Already in Use**
   - Kill the process: `netstat -ano | findstr :5000`
   - Or change port in `server/index.ts`

4. **TypeScript Errors**
   - Run: `npm run check` to see all type errors
   - Install VS Code TypeScript extension

### Recommended VS Code Extensions

Install these extensions for the best development experience:
- **TypeScript Importer** - Auto import management
- **Tailwind CSS IntelliSense** - CSS class suggestions
- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Prettier** - Code formatting
- **Auto Rename Tag** - HTML/JSX tag renaming

## Company Information

**Alloy Craft Manufacturing**
- **Established**: 2007
- **Specialization**: Aluminum die casting and CNC machining
- **Location**: #404-01, IGC Saha, Ambala 133104, Haryana, India
- **Contact**: Mr. Amrit Pal - +91-9896032299
- **Email**: info@alloycraft.in
- **Facility**: 44,000 sq ft manufacturing facility

## Production Deployment

The website is ready for deployment on platforms like:
- **Vercel** (Recommended for easy deployment)
- **Netlify**
- **Railway**
- **DigitalOcean**

To deploy:
1. Run `npm run build`
2. Upload the `dist` folder to your hosting platform
3. Configure environment variables if using a database

## Support

For technical questions about the source code or Windows setup:
- Check the troubleshooting section above
- Ensure Node.js 18+ is installed
- Use Administrator privileges when needed

For business inquiries:
- **Contact**: info@alloycraft.in
- **Phone**: +91-9896032299

---

**Built for Windows compatibility and professional manufacturing excellence.**
