import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{ts,tsx}'], theme: { extend: { colors: { agro: { dark:'#123D2A', green:'#2F7D32', gold:'#D9A441', beige:'#F7F2E8', graphite:'#1F2933' } }, boxShadow:{ soft:'0 18px 50px rgba(18,61,42,.12)' } } }, plugins: [] };
export default config;
