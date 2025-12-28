FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY index.js ./
COPY controllers ./controllers
COPY models ./models

# Expose port
EXPOSE 3001

# Start the application
CMD ["node", "index.js"]
