
function downloadResume() {
    // Create an anchor element
    var anchor = document.createElement('a');
    anchor.style.display = 'none';

    // Set the href attribute to the URL of your resume file
    anchor.href = 'Resume.pdf'; // Replace 'path_to_resume.pdf' with the actual file path

    // Set the download attribute to specify the default file name
    anchor.download = 'shantanu_chavhan_resume.pdf'; // Replace with your desired file name

    // Trigger a click event on the anchor to start the download
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up the anchor element
    document.body.removeChild(anchor);
}


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');
    
    const sg = new SendGrid('YOUR_SENDGRID_API_KEY');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const emailData = {
            to: 'recipient@example.com',
            from: formData.get('email'), // Use the form email as the sender
            subject: 'Contact Form Submission',
            text: `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nMessage: ${formData.get('message')}`,
        };

        sg.send(emailData)
            .then(() => {
                contactForm.style.display = 'none';
                confirmationMessage.style.display = 'block';
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});


function contactMe(){
    // Select all elements with the class "hero-section-img"
    const elements = document.querySelectorAll('.hero-section-img');

    // Add a class to hide the elements
    elements.forEach(element => {
        element.classList.add('hidden');
});

}



function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
