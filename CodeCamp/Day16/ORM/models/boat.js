module.exports = (sequelize, Datatype) => {

    const Boat = sequelize.define('boat', {
        name: {
            type: Datatype.STRING(45),
            validate: {
                notContains: 'boat',
                not: ["[0-9]", 'i'],
                len: [3, 15]
            }
        },
        color: {
            type: Datatype.STRING(45),
            validate: {
                isColor(value) {
                    if (!((value == 'Green') || (value == 'Blue') || (value == 'Orange') || (value == 'Red') || (value == 'Yellow')))
                        throw new Error('มีแค่สี Green,Blue,Red,Yellow,Orangeเท่านั้น');
                }
                // contains: ['Green', 'Blue', 'Orange', 'Red', 'Yellow']
            }
        }
    })
    Boat.associate = (models) => {
        Boat.belongsToMany(models.sailor, {
            through: models.reserve
        })
    }

    return Boat
}