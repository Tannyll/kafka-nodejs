import { Kafka } from "kafkajs";


 const kafka = new Kafka({
    clientId:'bizimapp',  
    brokers: ['rested-dragon-14027-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username: 'cmVzdGVkLWRyYWdvbi0xNDAyNyTIzwuJPrjH_3Pfkb4ZoxCezJyISWXSFkdQbUY',
      password: 'NTVkZTViY2YtYzY3My00NDVkLThkM2YtM2EzMTAzYjE4MTBj',
    },
    ssl: true,
 })


 const producer = kafka.producer()


 export const run = async (res)=> {
    await producer.connect()
    
    await producer.send({
        topic:'KafkaTopigimBemin',
        messages: [{ value: JSON.stringify(res) }],
    });



    console.log('Message send successFully');
 }