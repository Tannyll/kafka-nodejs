import { Kafka } from "kafkajs";
 const kafka = new Kafka({
    clientId:'bizimapp',
    brokers:['localhost:9092','localhost:9092']
 })


 const producer = kafka.producer()


 export const run = async ()=> {
    await producer.connect()


    await producer.send({
        topic:'KafkaTopigimBemin',
        messages:[
            {
                value:'Hello Consumer I hope you are fine !'
            },
        ],
    })

    console.log('Message send successFully');
 }