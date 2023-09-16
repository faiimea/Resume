/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            //给toggle元素添加了一个点击事件，当用户点击toggle元素时，就执行后面的箭头函数
            nav.classList.toggle('show-menu') //给nav的classList添加或消除一个类
        })
    }
}
// 点击toggle时调出侧边栏
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== SHOW SCROLL TOP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 


/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 


/*==================== GENERATE PDF ====================*/ 
// PDF generated area


// Html2pdf options


// Function to call areaCv and Html2Pdf options 


// When the button is clicked, it executes the three functions

    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements


    // 2. The PDF is generated


    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.