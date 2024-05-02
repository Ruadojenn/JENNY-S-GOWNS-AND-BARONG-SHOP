document.addEventListener("DOMContentLoaded", function() {
            var sidebar = document.getElementById("sidebar");
            var menuIcons = document.getElementsByClassName("menu-icon");

            function toggleSidebar() {
                sidebar.classList.toggle("open-sidebar");
            }

            function hideSidebar() {
                sidebar.classList.hide("open-sidebar");
            }

            for (var i = 0; i < menuIcons.length; i++) {
                menuIcons[i].addEventListener("mouseenter", toggleSidebar);
                menuIcons[i].addEventListener("mouseleave", hideSidebar);
				
            }
        });
function openNav() {
				  document.getElementById("sidebar").style.width = "300px";
				}

				function closeNav() {
					document.getElementById("sidebar").style.width = "0";
				}
					document.addEventListener('DOMContentLoaded', function() {
				var scrollToTopBtn = document.getElementById('scrollToTopBtn');

				window.addEventListener('scroll', function() {
				  if (window.scrollY > 400) {
					scrollToTopBtn.style.display = 'block';
				} else {
					scrollToTopBtn.style.display = 'none';
				  }
				});
				scrollToTopBtn.addEventListener('click', function() {
				  window.scrollTo({
					top: 0,
				
				  });
				});
			  });