// 1.引入mongoose
const mongoose = require('mongoose')

// 2.字义Schema(描述文档结构)
const deviceNameSchema = new mongoose.Schema({
  sequenceNumber: {type: Number,required: true},
  latitude:{type: Number,required: true},//纬度
  longitude:{type: Number,required: true}//经度
})


// 3. 定义Model(与集合对应, 可以操作集合)
const DeviceNameModel = mongoose.model('devicenames', deviceNameSchema)

// 4. 向外暴露Model
module.exports = DeviceNameModel