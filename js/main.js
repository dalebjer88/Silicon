document.addEventListener('DOMContentLoaded', () => {

    const themeSwitch = document.getElementById('theme-switch');
    const rootElement = document.documentElement;
    const testimonialPic1 = document.getElementById('testimonial-pic1');
    const testimonialPic2 = document.getElementById('testimonial-pic2');
    const appleStorePic = document.getElementById('applestorepic');
    const siliconLogo = document.getElementById('silicon-logo');

    function applyTheme(isDark) {
        const theme = isDark ? 'dark' : 'light';

        rootElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        if (themeSwitch) {
            themeSwitch.checked = isDark;
        }

        if (testimonialPic1 && testimonialPic2 && appleStorePic && siliconLogo) {
            if (isDark) {
               
                testimonialPic1.src = '/Images/testimonialdark1.svg';
                testimonialPic2.src = '/Images/testimonialdark2.svg';
                appleStorePic.src = '/Images/Icons/Apple-logo-dark.svg';
                siliconLogo.src = '/Images/soliddark.svg';
            } else {
                
                testimonialPic1.src = '/Images/testimonial1.svg';
                testimonialPic2.src = '/Images/testimonial2.svg';
                appleStorePic.src = '/Images/Icons/Apple-logo-white.svg';
                siliconLogo.src = '/Images/Logotype.svg';
            }
        }
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('change', (event) => {
            applyTheme(event.target.checked);
        });
    }

    function initializeTheme() {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme) {
            applyTheme(savedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            applyTheme(prefersDark);
        }
    }

  
    initializeTheme();
});


const selectBoxes = document.querySelectorAll('.select-box');

selectBoxes.forEach(selectBox => {
        
    selectBox.addEventListener('click', () => {
            
        const parent = selectBox.closest('.custom-select');
            
        const allOpenBoxes = document.querySelectorAll('.custom-select.active');

          
           
        allOpenBoxes.forEach(openBox => {
           
               
            if (openBox !== parent) {
                 
                    
                openBox.classList.remove('active');
                
            }
            
        });

          
            
        parent.classList.toggle('active');
        
    });
    
});



