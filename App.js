
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






