document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll("#Témoignages .testimonial");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = "block";
            } else {
                testimonial.style.display = "none";
            }
        });
    }

    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    prevButton.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});


