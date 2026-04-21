# Build Stage
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
# Install dependencies securely
RUN npm ci || npm install
COPY . .
# Build the Vite application
RUN npm run build

# Production Server Stage
FROM nginx:alpine
# Copy our custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the compiled static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose dynamic port for Cloud Run using string replacement at runtime
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
