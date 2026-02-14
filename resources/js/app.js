import './bootstrap';
import { Livewire, LivewireRouter } from '../../vendor/livewire/livewire/dist/livewire.esm';
import { createApp } from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    const app = createApp({});
    
    Livewire.start();
    LivewireRouter.init({ mainElement: '#app', navigate: (url) => window.location.href = url });
});

