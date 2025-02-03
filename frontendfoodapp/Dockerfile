# Stage 1: Build the Angular application
FROM node:18 as build
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project and build it in production mode
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine
# Remove default nginx config and replace with our custom configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy built Angular files from the build stage to Nginx's html folder
COPY --from=build /app/dist/frontendfoodapp /usr/share/nginx/html

# Expose port 4200 so that the container listens on this port
EXPOSE 4200

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]