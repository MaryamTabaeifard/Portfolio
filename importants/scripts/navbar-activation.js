

const nav_links = document.getElementsByClassName('nav-link');
nav_links_list = Array.from(nav_links);

nav_links_list.forEach(nav_link => {
		nav_link.addEventListener("click",function(){
				nav_links_list.forEach(other_nav => {
					other_nav.classList.remove('active-bar');
				})
				nav_link.classList.add('active-bar');
		})
})


