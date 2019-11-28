module.exports = (sequelize, Datatype) => {
    const Sailor = sequelize.define('sailor', {
            name: {
                type: Datatype.STRING(45)
            },
            rating: {
                type: Datatype.INTEGER
            },
            age: {
                type: Datatype.DOUBLE,
                validate: {
                    isAge(value) {
                        if (!((value >= 20 && value <=40) || (value >= 50 && value <=80) || (value >=85 && value <=90) ))
                            throw new Error('Age allow (20 to 40) or (50 to 80) or (85 to 90)');
                    }
                }
            }
        }
        //     , {
        //     freezeTableName: true,
        //     timestamps: false
        // }
    )
    Sailor.associate = (models) => {
        Sailor.belongsToMany(models.boat, {
            through: models.reserve
        })
    }

    return Sailor
}