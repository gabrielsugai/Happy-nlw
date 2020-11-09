const Database = require('./db');

Database.then(async (db) => {
  //inserir dados na tabela
  /*await db.run(`
    INSERT INTO orphanages (
      lat,
      lng,
      name,
      about,
      whatsapp,
      images,
      instructions,
      opening_hours,
      open_on_weekends
    ) VALUES (
      "-23.6705526",
      "-46.4625083",
      "Lar de cuidados",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "123456789",
      "https://images.unsplash.com/photo-1601564267524-75b772c1aa7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Horários de visitas das 18h até as 8h",
      "1"
    );
  `)*/
  //consultar dados
  // const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  // console.log(selectedOrphanages);

  const orphanage = await db.all('SELECT * FROM orphanages WHERE id="1"')
  console.log(orphanage)
})