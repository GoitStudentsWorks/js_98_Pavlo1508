import { getCategories } from './api';
import { renderSb } from './render-sb';


export async function initializeSb() {
    const categories = await getCategories();
    renderSb(categories);
};

// ПЕРЕНЕСТИ В МЕЙН
// import { initializeSb } from './side-bar/sidebar'
// initializeSb();