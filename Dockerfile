# Base image
FROM node:16-alpine 

# Set working directory  
WORKDIR /app

# Use sh shell
RUN apk add --update bash
SHELL ["/bin/bash", "-c"] 

# Copy and install frontend dependencies
COPY ./frontend/todo_docker/package.json /app/frontend/todo_docker/package.json  
RUN cd frontend && npm install

# Copy and install backend dependencies
COPY ./backend/package.json /app/backend/package.json
RUN cd backend && npm install

# Copy source code
COPY . /app

# Expose ports
EXPOSE 3000 4200  

# Start backend
CMD ["npm", "run", "server"]   

# Start frontend 
CMD ["npm", "run", "client"]