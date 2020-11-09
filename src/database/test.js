const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async (db) => {
  const exOrphanage =
  {
    lat: "-23.6705526",
    lng: "-46.4425083",
    name: "Lar de amor",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whatsapp: "123456789",
    images: ["https://images.unsplash.com/photo-1601564267524-75b772c1aa7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9", "https://images.unsplash.com/photo-1597095540293-b184e2b0d044?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"].toString(),
    instructions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    opening_hours: "Horários de visitas das 18h até as 8h",
    open_on_weekends: "0"
  }
  //inserir dados na tabela
  //await saveOrphanage(db, exOrphanage)

  //consultar dados
  const selectedOrphanages = await db.all("SELECT * FROM orphanages");
  console.log(selectedOrphanages);

  //const orphanage = await db.all('SELECT * FROM orphanages WHERE id="1"')
  //console.log(orphanage)

  //deletar dado da tabela

  await db.run('DELETE FROM orphanages WHERE id="4"')
})