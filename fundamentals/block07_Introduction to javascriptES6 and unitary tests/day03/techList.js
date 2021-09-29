const techList = (array, name) => {
    if (array.length === 0) return 'Vazio!';

    const tecnhList = array.sort().map((techItem) => ({
        tech: techItem,
        name
    }));
    return tecnhList;
}

module.exports = techList;


// techList.js
/*const techList = (arrayTechnologies, name) => {
    if (arrayTechnologies.length === 0) return 'Vazio!';
  
    const technologyList = arrayTechnologies
      .sort()
      .map((technology) => ({
      tech: technology,
      name,
      }));
    return technologyList;
  };
  
  
  module.exports = techList;
  */