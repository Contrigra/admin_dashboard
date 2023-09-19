const clamp = require('clamp-js')

const announcementCards = document.querySelectorAll('.announcement-card');


for (let announcement of announcementCards) {
    console.log(announcement)
    clamp(announcement, {clamp: 4, truncationHTML: '<br>'})
}