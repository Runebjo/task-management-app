import { initRouter } from "./router"
import './components/app-header';
import './views/home-view';
import './views/tasks-view';
import './views/about-view';

const outlet = document.getElementById('outlet')
if (outlet) {
    initRouter(outlet)
}