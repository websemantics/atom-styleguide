import './index.less';
import './index.html';

/**
 * Main function    
 *  
 * @return {void} 
 */
function main() {
    /* Hide loader */
    var loader = document.getElementsByClassName("loader");
    loader.length > 0 && (loader[0].style.display = 'none');
}

window.onload = main;
