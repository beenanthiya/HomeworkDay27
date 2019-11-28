module.exports = (app, db) => {
    app.get('/boats', async (req, res) => {
        let result = await db.boat.findAll()
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                console.log(err)
                res.status(400).json()
            })
    })
    // app.get('/boats', (req, res) => {
    //     db.boat.findAll().then(
    //         (result) => res.status(201).json(result)
    //     )
    // })
    app.post('/addboat', async (req, res) => {
        boatName = req.body.name
        boatColor = req.body.color
        const result = await db.boat.create({
            name: boatName,
            color: boatColor
        }).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            console.log(err)
            res.status(400).json({
                ErrorMessage: err.message
            })
        })

    })

    // app.put('/updateboat', (req, res) => {
    //     boatId = req.body.id
    //     boatName = req.body.name
    //     boatColor = req.body.color
    //     db.boat.update({
    //         name: boatName,
    //         color: boatColor
    //     }, {
    //         where: {
    //             id: boatId
    //         }
    //     }).then((result) => {
    //         res.status(201).json(result)
    //     }).catch((err) => {
    //         res.status(400).json()
    //     })
    // })

    app.put('/updateboat/:id', async (req, res) => {
        boatName = req.body.name
        boatColor = req.body.color
        const result = await db.boat.update({
            name: boatName,
            color: boatColor
        }, {
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.status(200).json(result)

        }).catch((err) => {
            console.log(err)
            res.status(400).json()
        })
    })

    // app.delete('/deleteboat', (req, res) => {
    //     boatId = req.body.id
    //     db.boat.destroy({
    //         where: {
    //             id: boatId
    //         }
    //     }).then((result) => {
    //         res.status(201).json(result)
    //     }).catch((err) => {
    //         res.status(400).json()
    //     })
    // })

    app.delete('/deleteboat/:id', async (req, res) => {
        const result = await db.boat.destroy({
            where: {
                id: req.params.id
            }
        }).then((result) => {
            res.status(204).json()
        }).catch((err) => {
            console.log(err)
            res.status(400).json()
        })
    })

}