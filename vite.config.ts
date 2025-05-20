import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import generouted from '@generouted/react-router/plugin';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), generouted()],
    resolve: {
        alias: [
            {
                find: '@', 
                replacement: path.resolve(__dirname, 'src') 
            }
        ]
    }
});