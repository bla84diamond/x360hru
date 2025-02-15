document.addEventListener('DOMContentLoaded', function() {
    // Блокировка встраивания в iframe
    if (window !== window.top) {
      window.top.location = window.location;
    }
    
    // Дополнительные меры безопасности
    history.pushState(null, document.title, location.href);
    window.addEventListener('popstate', function(event) {
      history.pushState(null, document.title, location.href);
    });
  });