import { ComponentLoader } from 'adminjs';

const componentLoader = new ComponentLoader();

// Override the built-in Login page with our dark-theme version
componentLoader.override('Login', './components/login');

// Additional custom pages/components can be registered from options.ts

export default componentLoader;
