module.exports = (sequelize, Datatype) => {
    const Reserve = sequelize.define('reserve', {
        date: {
            type: Datatype.DATE,
            validate: {
                isAfter: "2019-11-13",
                isDate: true
            }
        }
    })
    return Reserve
}