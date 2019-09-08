const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity")

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities/index", (req, res. next) => {
  Celebrity.find()
  .then(celebrity => {
    res.render("celebrities/index", { celebrity })
  })
  .catch(error => {
    console.log("You better go back to school punk", error)
  })
})

router.get("/celebrities/new", (req, res, next) => {
  res.render("celebrities/new")
})

router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById({ _id: req.params.id})
  .then(celebrity => {
    res.render("celebrities/show", { celebrity })
  })
  .catch(error => {
    console.log("You better go back to school punk", error)
  })
})

router.post("/celebrities", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body
  const celebrity = new Celebrity({ name, occupation, catchPhrase})
  celebrity.save()
  .then()
  .catch(error => {
    console.log("Error event" , error)
    res.redirect("/celebrities/index")
  })

  router.post("/celebrities/:id/delete", (req, res, next) => {
    Celebrity.findByIdAndRemove({_id: req.params.id})
    .then()
    .catch(error => {
      console.log("Error event", error)
      res.redirect("/celebrities/index")
    })
    res.redirect("/celebrities/index")
  })

  router.get("/celebrities/:id/edit", (req, res, next) => {
    Celebrity.findById({_id: req.params.id })
    .then(celebrity => {
      res.render("celebrities/edit", { celebrity })
    })
    .catch(error => {
      console.log("You better go back to school punk", error)
    })
  })
  
  router.post('/celebrities/:id', (req, res, next) => {
    const { name, occupation, catchPhrase } = req.body
    const { id } = req.params.id
    Celebrity.update(id, { name, occupation, catchPhrase })
      .then()
      .catch(error => {
        console.log('Error event:', error)
        res.redirect('/celebrities/index')
      })
    res.redirect('/celebrities/index')
  })

  router.get('/movies/index', (req, res, next) => {
    Movie.find()
      .then(movies => {
        res.render('movies/index', { movies })
      })
      .catch(error => {
        console.log("You better go back to school punk", error);
      })
  });
  
  router.get('/movies/new', (req, res, next) => {
    res.render('movies/new');
  });
  
  router.get('/movies/:id', (req, res, next) => {
    Movie.findById({ _id: req.params.id })
      .then(movie => {
        res.render('movies/show', { movie })
      })
      .catch(error => {
        console.log("You better go back to school punk", error);
      })
  });
  
  router.post('/movies', (req, res, next) => {
    const { title, genre, plot } = req.body
    const movie = new Movie({ title, genre, plot })
    movie.save()
      .then()
      .catch(error => {
        console.log('Error event:', error)
        res.redirect('/movies/new')
      })
  
    res.redirect('/movies/index')
  
  });
  
  
  router.post('/movies/:id/delete', (req, res, next) => {
    console.log(req.params.id)
    Movie.findByIdAndRemove({ _id: req.params.id })
      .then()
      .catch(error => {
        console.log('Error event:', error)
        res.redirect('/movies/index')
      })
  
    res.redirect('/movies/index')
  });
  
  
  
  router.get('/movies/:id/edit', (req, res, next) => {
    Movie.findById({ _id: req.params.id })
      .then(movie => {
        res.render('movies/edit', { movie })
      })
      .catch(error => {
        console.log("", error);
      })
  });
  
  router.post('/movies/:id', (req, res, next) => {
    const { title, genre, plot } = req.body
    const { id } = req.params.id
    Movie.update(id, { title, genre, plot })
      .then()
      .catch(error => {
        console.log('Error event:', error)
        res.redirect('/movies/index')
      })
    res.redirect('/movies/index')
  


})
module.exports = router;
