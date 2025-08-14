# Imagen base de Node.js
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json primero
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de archivos
COPY . .

# Construir la app para producción
RUN npm run build

# Variables de entorno para vite preview
ENV HOST=0.0.0.0
ENV PORT=4173

# Exponer el puerto que usa vite preview
EXPOSE 4173

# Comando para servir la app construida
CMD ["npm", "run", "preview"]