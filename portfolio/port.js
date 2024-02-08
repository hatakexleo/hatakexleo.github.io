function showDetails(projectId) {
    var projectDetails = document.getElementById(projectId + 'Details');
    projectDetails.style.display = 'block';
}

function hideDetails(projectId) {
    var projectDetails = document.getElementById(projectId + 'Details');
    projectDetails.style.display = 'none';

}

function toggleDescription(card) {
    card.classList.toggle("active");
}
