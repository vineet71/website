// DEBUG SCRIPT
console.log('Debug script loaded');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    const container = document.getElementById('projects-grid');
    console.log('Container found:', container);
    
    if (container) {
        console.log('Container classes:', container.className);
        console.log('Is Timeline Mode:', container.classList.contains('timeline-view'));
    }

    if (typeof PROJECTS !== 'undefined') {
        console.log('PROJECTS loaded:', PROJECTS);
        console.log('PROJECTS length:', PROJECTS.length);
    } else {
        console.error('PROJECTS is NOT defined');
    }
    
    setTimeout(() => {
        if (container && container.children.length === 0) {
            console.warn('Container is still empty after delay!');
            // Force render
            if (typeof loadProjects === 'function') {
                console.log('Forcing loadProjects()...');
                loadProjects();
            }
        } else {
            console.log('Container has children:', container.children.length);
        }
    }, 1000);
});
