;(function($D){
    var $button    = $D.querySelector('.div1'),
        $container = $D.querySelector('.dropdown-menu-list');
        $icon = $D.querySelector('.close-icon');

  
    $button.addEventListener('click', function(e){
          isVisible = $container.style.visibility == 'visible';
          isVisible = $icon.style.visibility == 'visible';
      
      $container.style.visibility = isVisible ? 'hidden' : 'visible';
      $icon.style.visibility = isVisible ? 'hidden' : 'visible';

    });
})(document);