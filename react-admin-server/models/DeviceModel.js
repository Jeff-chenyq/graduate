/*
能操作device集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字义Schema(描述文档结构)
const deviceSchema = new mongoose.Schema({
  sequenceNumber: {type: Number,required: true},
  distance: {type: Number,required: true},
  status: {type: Number, default: 1}, // 设备状态: 1:离线, 2: 在线(没用。。。)
  amplitude: {type: Number,required: true},//振幅强度
  dataTime:{type: Number,required: true},//时间戳
})


// 3. 定义Model(与集合对应, 可以操作集合)
const DeviceModel = mongoose.model('devicedatas', deviceSchema)

// 4. 向外暴露Model
module.exports = DeviceModel