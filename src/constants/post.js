import Button from "../components/core/button/Button";

let getPost = (oncFunc) => {
  const posts = [
    { 
      title: "A Koczka", 
      body: "Üdv az oldalon, itt mindent meg találsz az üveg betonttól a teknősökön keresztül a kacsákig! Engedd meg hogy gyorsan bemutatkozzak, a Petrik legszögletesebb tanára vagyok a klánháború 14-es világa óta, gyakran tanítom lelkes diákjaimat az életre és a klánháborúba, elektronika helyett jobban szeretek a teknösők lélegzéséről magyarázni!" 
    },
    {
      title: "A Szögletes",
      body: 
        <div className="pic_holder">
          <img className="memes" src="https://petrik.hu/wp-content/uploads/2020/09/koczka_istvan.jpg" alt="koczka"></img>
          <img className="rendes" src="https://cdn.discordapp.com/attachments/1110164952590856243/1111040037287641129/deepfried_1684962944017.jpg" alt="XD"></img>
        </div> 
    },
    { 
      title: "Olimpikon",
      body: "Gyere ki a medencébe és nézzük meg ki tudd gyorsabban úszni, jó magam éveken át az olimpia úszó csapattal edzettem és még az olimpiára is kijutottam, te meg hova, a PETRIK-be? :-)"
    },
    { 
      title: "A Klán Háború királya", 
      body: <div><div>Mivel szerény és szögletes személy vagyok nem szoktam bevallani de én maga a Klán Háború királya vagyok, ki mindig nyer és jó tanácsaival csapatait is győzelemre vezeti!</div><Button children={"Kérj tanácsot!"} onClick={oncFunc}></Button></div>
    },
  ];

  return posts;
}

export default getPost;