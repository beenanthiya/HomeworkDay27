module.exports = (app, db) => {
    app.get('/sailors', async (req, res) => {
        let result = await db.sailor.findAll({
                include: [db.boat]
            })
            .then((result) => {
                res.status(200).json(result)
            }).catch((err) => {
                console.log(err)
                res.status(400).json()
            })
    })
    app.post('/addsailor', async (req, res) => {
        sailorName = req.body.name
        sailorRating = req.body.rating
        sailorAge = req.body.age

        const result = await db.sailor.create({
            name: sailorName,
            rating: sailorRating,
            age: sailorAge
        }).then((result) => {
            res.status(201).json(result)
        }).catch((err) => {
            console.log(err)
            res.status(400).json({
                ErrorMessage: err.message
            })
        })

    })

    // app.put('/updatesailor', (req, res) => {
    //     sailorId = req.body.id
    //     sailorName = req.body.name
    //     sailorRating = req.body.rating
    //     sailorAge = req.body.age
    //     db.sailor.update({
    //         name: sailorName,
    //         rating: sailorRating,
    //         age: sailorAge
    //     }, {
    //         where: {
    //             id: sailorId
    //         }
    //     }).then((result) => {
    //         res.status(201).json(result)
    //     }).catch((err) => {
    //         res.status(400).json()
    //     })
    // })

    app.put('/updatesailor/:id', async (req, res) => {
        sailorName = req.body.name
        sailorRating = req.body.rating
        sailorAge = req.body.age
        const result = await db.sailor.update({
            name: sailorName,
            rating: sailorRating,
            age: sailorAge
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

    // app.delete('/deletesailor', (req, res) => {
    //     sailorId = req.body.id
    //     db.sailor.destroy({
    //         where: {
    //             id: sailorId
    //         }
    //     }).then((result) => {
    //         res.status(201).json(result)
    //     }).catch((err) => {
    //         res.status(400).json()
    //     })
    // })

    app.delete('/deletesailor/:id', async (req, res) => {
        const result = await db.sailor.destroy({
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