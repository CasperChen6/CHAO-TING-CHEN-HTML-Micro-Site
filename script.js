function addNote() {
    var noteText = document.getElementById('noteText').value;
    var notesContainer = document.getElementById('notesContainer');
    var timestamp = new Date().toLocaleString();

    if (noteText.trim() !== '') {
        var noteDiv = document.createElement('div');
        noteDiv.classList.add('note');

        var noteContent = document.createElement('span');
        noteContent.textContent = timestamp + ': ' + noteText;
        noteDiv.appendChild(noteContent);

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            notesContainer.removeChild(noteDiv);
        };
        noteDiv.appendChild(deleteBtn);

        notesContainer.appendChild(noteDiv);

        document.getElementById('noteText').value = ''; // Clear the textarea
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    function addNote() {
        // ... existing addNote function ...
    }

    var feedbackForm = document.getElementById('feedbackForm');
    
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the default form submit action

            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;

            // Show a popup message to the user
            alert('Thank you ' + name + '! We will send the full edition of our groundbreaking note-taking app to ' + email);

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
        });
    } else {
        console.log('Feedback form not found');
    }
});

