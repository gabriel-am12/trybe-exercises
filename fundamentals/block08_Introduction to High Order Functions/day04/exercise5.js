  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, word) =>
    acc + word.split('').reduce((ac, wo) => {
        if(wo === 'a' || wo === 'A') return ac + 1;
        return ac;
    },0),0);// escreva seu código aqui
  }