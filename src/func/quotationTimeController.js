let quotationTime = () => {
    fetch('https://koczkabased.lol/quotation?d=1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Hiba a válaszban: ' + response.status);
        }
        return response.json(); // Itt a .json() metódus már feldolgozza a JSON adatot
      })
      .then(data => {
        document.getElementsByClassName("popUp_quot")[0].innerHTML = data.today
      })
      .catch(error => {
        console.error('Hiba a kérés során:', error);
      });
  }

export default quotationTime;