class Router {
    constructor(routes) {
      this.routes = routes;
      this.loadInitialRoute();
    }
  
    loadInitialRoute() {
      const path = window.location.hash.slice(1) || '/';
      this.loadRoute(path);
      
      window.addEventListener('hashchange', () => {
        const path = window.location.hash.slice(1);
        this.loadRoute(path);
      });
    }
  
    loadRoute(path) {
      const route = this.routes[path] || this.routes['/'];
      fetch(route.view)
        .then(response => response.text())
        .then(html => {
          document.getElementById('app').innerHTML = html;
  
          // Executa o controlador, se definido para a rota
          if (route.controller) {
            route.controller();
          }
        });
    }
  }
  
  // Definição das rotas
  const routes = {
    '/': {
      view: 'views/home.html'
    },
    '/about': {
      view: 'views/about.html'
    },
    '/tasks': {
      view: 'views/tasks.html',
      controller: () => {
        const model = new TaskModel();
        const view = new TaskView();
        const controller = new TaskController(model, view);
        controller.init();  // Método para iniciar a página de tarefas
      }
    }
  };
  
  // Inicializa o roteador
  const router = new Router(routes);
  