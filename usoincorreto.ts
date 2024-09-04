// Classe base Roupa
class Roupa {
    descricao(): string {
      return "Essa é uma roupa.";
    }
  }
  
  // Classe Calca que estende Roupa, mas adiciona um método específico
  class Calca extends Roupa {
    ajustarCintura(): string {
      return "Ajustando a cintura da calça.";
    }
  }
  
  // Classe Camisa que estende Roupa, mas adiciona um método específico
  class Camisa extends Roupa {
    dobrarMangas(): string {
      return "Dobrando as mangas da camisa.";
    }
  }
  
  // Classe Casaco que estende Roupa, mas adiciona um método específico
  class Casaco extends Roupa {
    fecharZiper(): string {
      return "Fechando o zíper do casaco.";
    }
  }
  
  // Tentativa de usar diferentes tipos de Roupa
  const minhaRoupa = new Roupa();
  console.log(minhaRoupa.descricao());  // Essa é uma roupa.
  
  const minhaCalca = new Calca();
  console.log(minhaCalca.descricao());  // Essa é uma roupa.
  console.log(minhaCalca.ajustarCintura()); // Ajustando a cintura da calça.
  
  const minhaCamisa = new Camisa();
  console.log(minhaCamisa.descricao()); // Essa é uma roupa.
  console.log(minhaCamisa.dobrarMangas()); // Dobrando as mangas da camisa.
  
  const meuCasaco = new Casaco();
  console.log(meuCasaco.descricao()); // Essa é uma roupa.
  console.log(meuCasaco.fecharZiper()); // Fechando o zíper do casaco.