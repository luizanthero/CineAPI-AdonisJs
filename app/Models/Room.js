'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {
    roomtype(){
        return this.belongsTo('App/Models/RoomType', 'RoomTypeId', 'id')
    }

    screen(){
        return this.belongsTo('App/Models/Screen', 'ScreenId', 'id')
    }
}

module.exports = Room
