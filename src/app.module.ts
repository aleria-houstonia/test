import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

@Module({
  controllers:[],
  providers:[],
  imports:[
    SequelizeModule.forRoot({ 
      dialect: 'postgres', 
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nest-project',
      models: [],
      autoLoadModels:true 
    }),
    UsersModule,]
})


// @Module({
//     controllers:[AppController],///чтобы контроллеры заработали, мы регистрируем в модули. Создаемм поле контроллерс (массив)
//     providers:[AppService],//все что содержит логику и может исп-ся в др компонентах
//     imports:[ ///когда нужно импортировать др молули
//       SequelizeModule.forRoot({ // секвалайс модуль, в к-ом указ-ся конфиг для бд 
//         dialect: 'postgres', // бд
//         host: 'localhost',
//         port: 5432,
//         username: 'postgres',
//         password: 'root',
//         database: 'nest-project',
//         models: [],
//         autoLoadModels:true //чтобы секвалайс создавал таблицы в бд на основании тех моделей,к-ые будем создавать
//       }),]
// })

export class AppModule{}