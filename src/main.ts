import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

async function start() {
    const PORT=process.env.PORT||5000
    const app = await NestFactory.create(AppModule) ///создание экземпляра  нашего приложения

    await app.listen(PORT,()=>{console.log( `PORT is ${PORT}`)})
}
start()