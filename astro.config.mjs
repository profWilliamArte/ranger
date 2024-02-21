import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://profwilliamarte.github.io',/* aqui colocarias el nombre de tu cuenta*/
    base: '/ranger',/* aqui colocarias el nombre de tu repositorio*/
    build: {
       assets: 'astro' /// muy importante
    }
 });
