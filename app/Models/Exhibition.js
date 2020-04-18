'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Exhibition extends Model {
    film(){
        return this.belongsTo('App/Models/Film', 'FilmId', 'id')
    }

    room(){
        return this.belongsTo('App/Models/Room', 'RoomId', 'id')
    }

    roomtype(){
        return this.manyThrough('App/Models/Room', 'roomtype', 'id', 'id')
    }

    screen(){
        return this.manyThrough('App/Models/Room', 'screen', 'id', 'id')
    }

    schedule(){
        return this.belongsTo('App/Models/Schedule', 'ScheduleId', 'id')
    }
}

module.exports = Exhibition
