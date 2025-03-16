(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });


    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function () {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
                function () {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function () {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });






    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

})(jQuery);

//popup section

/*


const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}*/
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}








// hfhgfjhgj?
// Add event listeners to all buttons with IDs starting with "openFormButton"
// for (let i = 1; i <= 14; i++) {
//     const button = document.getElementById("openFormButton" + i);
//     if (button) {
//       button.addEventListener("click", openPopup);
//     }
//   }
  
//   function openPopup() {
//     document.getElementById("popupContainer").style.display = "flex";
//   }
  
//   // Add event listener to close button
//   document.getElementById("closeform").addEventListener("click", function() {
//     document.getElementById("popupContainer").style.display = "flex";
//   });
  
//   // Add event listener to close popup when clicking outside the form
//   document.getElementById("popupContainer").addEventListener("click", function(event) {
//     if (event.target === this) {
//       document.getElementById("popupContainer").style.display = "none";
//     }
//   });








  // Automatically open the popup after 5 seconds of page load
// setTimeout(openPopup, 8000); // 5000 milliseconds = 5 seconds

// for (let i = 1; i <= 14; i++) {
//     const button = document.getElementById("openFormButton" + i);
//     if (button) {
//       button.addEventListener("click", openPopup);
//     }
// }

// function openPopup() {
//     document.getElementById("popupContainer").style.display = "flex";
// }

// // Add event listener to close button
// document.getElementById("closeform").addEventListener("click", function() {
//     document.getElementById("popupContainer").style.display = "flex";
// });

// // Add event listener to close popup when clicking outside the form
// document.getElementById("popupContainer").addEventListener("click", function(event) {
//     if (event.target === this) {
//         document.getElementById("popupContainer").style.display = "none";
//     }
// });
 
// Automatically open the popup after 5 seconds of page load
setTimeout(openPopup, 9000); // 5000 milliseconds = 5 seconds


for (let i = 1; i <= 200; i++) {
    const button = document.getElementById("openFormButton" + i);
    if (button) {
      button.addEventListener("click", openPopup);
    }
}






function openPopup() {
    document.getElementById("popupContainer").style.display = "flex";
}

// Add event listener to close button
document.getElementById("closeform").addEventListener("click", function() {
    document.getElementById("popupContainer").style.display = "flex";
});

// Add event listener to close popup when clicking outside the form
document.getElementById("popupContainer").addEventListener("click", function(event) {
    if (event.target === this) {
        document.getElementById("popupContainer").style.display = "none";
    }
});

// Add event listener to form submission
document.getElementById("custom-contact-form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    this.submit(); // Submit the form
    this.reset();
    
    // Hide the popup after form submission
    // document.getElementById("popupContainer").style.display = "none";
    
    // Optionally, you can add code to handle form submission here
    // For example, sending form data to a server
    // This depends on your specific requirements
    // Example:
    // this.submit(); // Submit the form
});

  


  