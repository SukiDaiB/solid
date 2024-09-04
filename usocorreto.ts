// Classe base Roupa
class Roupa {
    // Método para descrever a roupa
    descricao(): string {
      return "Essa é uma roupa.";
    }
  }
  
  // Classe Calca que estende Roupa
  class Calca extends Roupa {
    descricao(): string {
      return "Essa é uma calça.";
    }
  }
  
  // Classe Camisa que estende Roupa
  class Camisa extends Roupa {
    descricao(): string {
      return "Essa é uma camisa.";
    }
  }
  
  // Classe Casaco que estende Roupa
  class Casaco extends Roupa {
    descricao(): string {
      return "Esse é um casaco.";
    }
  }
  
  // Função que recebe um objeto do tipo Roupa
  function mostrarDescricao(roupa: Roupa) {
    console.log(roupa.descricao());
  }
  
  // Exemplos de uso
  const minhaCalca = new Calca();
  const minhaCamisa = new Camisa();
  const meuCasaco = new Casaco();
  
  mostrarDescricao(minhaCalca);  // Essa é uma calça.
  mostrarDescricao(minhaCamisa); // Essa é uma camisa.
  mostrarDescricao(meuCasaco);   // Esse é um casaco.