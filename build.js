const fs = require('fs');
const path = require('path');

// Read the index.html file
const htmlPath = path.join(__dirname, 'index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Create environment variables script
const envVars = {
    VITE_MULTISYNQ_API_KEY: process.env.VITE_MULTISYNQ_API_KEY || '',
    VITE_MULTISYNQ_APP_ID: process.env.VITE_MULTISYNQ_APP_ID || '',
    VITE_SESSION_NAME: process.env.VITE_SESSION_NAME || '',
    VITE_SESSION_PASSWORD: process.env.VITE_SESSION_PASSWORD || ''
};

const envScript = `
<script>
${Object.entries(envVars).map(([key, value]) => 
    `window.${key} = '${value}';`
).join('\n')}
</script>
`;

// Insert the environment variables script before the closing head tag
htmlContent = htmlContent.replace('</head>', `${envScript}</head>`);

// Create dist directory if it doesn't exist
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
}

// Write the modified HTML to dist/index.html
fs.writeFileSync(path.join(distDir, 'index.html'), htmlContent);

console.log('Build completed successfully!');
